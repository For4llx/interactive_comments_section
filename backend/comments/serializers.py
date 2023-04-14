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
        if not instance.reply:
            rep["replies"] = CommentSerializer(instance.replies.all(), many=True).data
        return rep
