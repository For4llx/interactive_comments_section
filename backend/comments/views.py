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
        user = User.objects.get(username=request.data["user.username"])
        comment_data = {
            "user": user,
            "content": request.data["content"],
            "score": request.data["score"],
            "reply": False,
        }
        new_comment = Comment(**comment_data)
        new_comment.save()
        return Response({"status": "Custom action completed"})
