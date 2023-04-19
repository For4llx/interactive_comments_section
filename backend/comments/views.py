from django.shortcuts import render
from rest_framework.viewsets import ModelViewSet
from rest_framework.response import Response
from .models import Comment
from authentification.models import User
from .serializers import CommentSerializer


class CommentViewset(ModelViewSet):
    queryset = Comment.objects.all()
    serializer_class = CommentSerializer

    def create(self, request):
        comment_data = request.data
        if not comment_data["reply"]:
            current_user = User.objects.get(id=comment_data["user"]["id"])
            comment_data["user"] = current_user
            new_comment = Comment.objects.create(**comment_data)
            new_comment.save()
            serializer = CommentSerializer(new_comment)
            return Response(serializer.data)
        if comment_data["reply"]:
            current_user = User.objects.get(id=comment_data["user"]["id"])
            comment_data["user"] = current_user
            comment_instance = Comment.objects.get(id=comment_data["parent_id"])
            new_reply = Comment.objects.create(**comment_data)
            new_reply.save()
            comment_instance.replies.add(new_reply)
            serializer = CommentSerializer(new_reply)
            return Response(serializer.data)

    def partial_update(self, request, pk=None):
        comment_instance = self.get_object()
        serializer = self.get_serializer(
            comment_instance, data=request.data, partial=True
        )
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data)
