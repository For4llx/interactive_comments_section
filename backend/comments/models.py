from django.db import models
from django.utils.timesince import timesince
from authentification.models import User


class Comment(models.Model):
    parent_id = models.IntegerField(blank=True, null=True)
    content = models.TextField()
    createdAt = models.DateTimeField(auto_now_add=True)
    score = models.IntegerField(default=0)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    reply = models.BooleanField(blank=True, null=True, default=False)
    replies = models.ManyToManyField("self", symmetrical=False, default=[], blank=True)

    def __str__(self):
        return f"{self.user.username} {self.id}"

    @property
    def timesince(self):
        return timesince(self.createdAt)
