from .models import Comment
from authentification.serializers import UserSerializer
from rest_framework.serializers import ModelSerializer, PrimaryKeyRelatedField


class CommentSerializer(ModelSerializer):
    user = UserSerializer()

    class Meta:
        model = Comment
        fields = "__all__"

    def to_representation(self, instance):
        rep = super().to_representation(instance)
        rep["replies"] = CommentSerializer(instance.replies.all(), many=True).data
        return rep
