from django.db import models
from django.contrib.auth.models import AbstractUser


class Image(models.Model):
    name = models.CharField(max_length=50)
    png = models.CharField(max_length=100)
    webp = models.CharField(max_length=100)

    def __str__(self) -> str:
        return self.name


class User(AbstractUser):
    image = models.ForeignKey("Image", on_delete=models.CASCADE, blank=True, null=True)

    def __str__(self) -> str:
        return self.username
