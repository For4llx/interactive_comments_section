from .models import Comment
from authentification.serializers import UserSerializer
from rest_framework.serializers import ModelSerializer


class CommentSerializer(ModelSerializer):
    user = UserSerializer()

    class Meta:
        model = Comment
        fields = ("content", "score", "user", "replies", "timesince")
