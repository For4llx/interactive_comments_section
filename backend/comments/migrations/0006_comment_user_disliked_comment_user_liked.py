# Generated by Django 4.2 on 2023-04-19 16:44

from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ("comments", "0005_comment_parent_id"),
    ]

    operations = [
        migrations.AddField(
            model_name="comment",
            name="user_disliked",
            field=models.ManyToManyField(
                related_name="user_disliked", to=settings.AUTH_USER_MODEL
            ),
        ),
        migrations.AddField(
            model_name="comment",
            name="user_liked",
            field=models.ManyToManyField(
                related_name="user_liked", to=settings.AUTH_USER_MODEL
            ),
        ),
    ]