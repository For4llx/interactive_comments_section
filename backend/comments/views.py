from django.shortcuts import render
from rest_framework.viewsets import ModelViewSet
from rest_framework.response import Response
from .models import Comment
from authentification.models import User
from .serializers import CommentSerializer


class CommentViewset(ModelViewSet):
    queryset = Comment.objects.all()
    serializer_class = CommentSerializer

    """
    def create(self, request):
        current_user = User.objects.get(id=request.data["user"]["id"])
        if request.data["reply"]:
            comment_data = {
                "user": current_user,
                "content": request.data["content"],
                "reply": request.data["reply"],
            }
        comment_data = {
            "user": current_user,
            "content": request.data["content"],
        }
        new_comment = Comment(**comment_data)
        new_comment.save()
        if request.data["reply"]:
            comment_repleid_to = Comment.objects.get(id=request.data["repliedTo"])
            comment_repleid_to.replies.add(new_comment)
            comment_repleid_to.save()
        print("==============================")
        serializer = self.get_serializer(new_comment, data=comment_data, partial=True)
        serializer.is_valid(raise_exception=True)
        return Response(serializer.data)
    """

    def create(self, request):
        comment_data = request.data
        current_user = User.objects.get(id=comment_data["user"]["id"])
        comment_data["user"] = current_user
        new_comment = Comment.objects.create(**comment_data)
        new_comment.save()
        serializer = CommentSerializer(new_comment)
        return Response(serializer.data)

    def update(self, request, pk=None):
        instance = self.get_object()
        serializer = self.get_serializer(instance, data=request.data, partial=True)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data)

    def partial_update(self, request, pk=None):
        reply_data = request.data
        comment_instance = self.get_object()
        comment_instance.replies.add(reply_data["reply_id"])
        serializer = CommentSerializer(comment_instance)
        return Response(serializer.data)

    def destroy(self, request, pk=None):
        instance = self.get_object()
        instance_id = instance.id
        print(instance_id)
        self.perform_destroy(instance)

        return Response(instance_id)
