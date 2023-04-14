from django.shortcuts import render
from rest_framework.viewsets import ModelViewSet
from rest_framework.response import Response
from .models import Comment
from authentification.models import User
from .serializers import CommentSerializer


class CommentViewset(ModelViewSet):
    queryset = Comment.objects.filter(reply=False)
    serializer_class = CommentSerializer

    def create(self, request):
        current_user = User.objects.get(id=request.data["user"]["id"])
        comment_data = {
            "user": current_user,
            "content": request.data["content"],
            "reply": request.data["reply"],
        }
        new_comment = Comment(**comment_data)
        new_comment.save()
        if request.data["reply"]:
            comment_repleid_to = Comment.objects.get(id=request.data["repliedTo"])
            comment_repleid_to.replies.add(new_comment)
            comment_repleid_to.save()
        return Response({"status": "Custom action completed"})

    def update(self, request, pk=None):
        instance = self.get_object()
        serializer = self.get_serializer(instance, data=request.data, partial=True)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response({"status": "current_comment"})

    def partial_update(self, request, pk=None):
        comment_instance = self.get_object()
        comment_instance.replies.add(1)
        return Response({"status": "200"})

    def delete(self, request, pk=None):
        instance = self.get_object()
        instance.delete()
        return Response({"status": "current_comment"})
