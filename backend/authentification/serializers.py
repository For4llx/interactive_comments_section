from .models import User, Image
from rest_framework.serializers import ModelSerializer


class ImageSerializer(ModelSerializer):
    class Meta:
        model = Image
        fields = ("png", "webp")


class UserSerializer(ModelSerializer):
    image = ImageSerializer()

    class Meta:
        model = User
        fields = ("id", "image", "username")
