from django.db import models
from authentification.models import User


class Comment(models.Model):
    content = models.CharField(max_length=255)
    createdAt = models.DateTimeField(auto_now_add=True)
    score = models.IntegerField()
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    replies = models.ManyToManyField("self", symmetrical=False)

    def __str__(self):
        return self.user.username
