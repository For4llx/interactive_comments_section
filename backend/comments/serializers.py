from .models import Comment
from authentification.serializers import UserSerializer
from rest_framework.serializers import ModelSerializer, PrimaryKeyRelatedField


class CommentSerializer(ModelSerializer):
    user = UserSerializer()

    class Meta:
        model = Comment
        exclude = ("replies",)

    def to_representation(self, instance):
        rep = super().to_representation(instance)
        rep["user_disliked"] = UserSerializer(
            instance.user_disliked.all(), many=True
        ).data
        rep["user_liked"] = UserSerializer(instance.user_liked.all(), many=True).data
        if not instance.reply:
            rep["replies"] = CommentSerializer(instance.replies.all(), many=True).data
        return rep
