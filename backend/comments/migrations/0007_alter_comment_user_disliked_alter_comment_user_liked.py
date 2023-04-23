# Generated by Django 4.2 on 2023-04-21 12:29

from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ("comments", "0006_comment_user_disliked_comment_user_liked"),
    ]

    operations = [
        migrations.AlterField(
            model_name="comment",
            name="user_disliked",
            field=models.ManyToManyField(
                blank=True, related_name="users_disliked", to=settings.AUTH_USER_MODEL
            ),
        ),
        migrations.AlterField(
            model_name="comment",
            name="user_liked",
            field=models.ManyToManyField(
                blank=True, related_name="users_liked", to=settings.AUTH_USER_MODEL
            ),
        ),
    ]