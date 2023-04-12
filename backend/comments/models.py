from django.db import models
from django.utils.timesince import timesince
from authentification.models import User


class Comment(models.Model):
    content = models.TextField()
    createdAt = models.DateTimeField(auto_now_add=True)
    score = models.IntegerField(default=0)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    reply = models.BooleanField(blank=True, null=True)
    replies = models.ManyToManyField("self", symmetrical=False, default=[])

    def __str__(self):
        return self.user.username

    @property
    def timesince(self):
        return timesince(self.createdAt)
