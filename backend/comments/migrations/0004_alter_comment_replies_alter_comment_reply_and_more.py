# Generated by Django 4.2 on 2023-04-14 15:05

from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        ("comments", "0003_comment_reply"),
    ]

    operations = [
        migrations.AlterField(
            model_name="comment",
            name="replies",
            field=models.ManyToManyField(blank=True, default=[], to="comments.comment"),
        ),
        migrations.AlterField(
            model_name="comment",
            name="reply",
            field=models.BooleanField(blank=True, default=False, null=True),
        ),
        migrations.AlterField(
            model_name="comment",
            name="score",
            field=models.IntegerField(default=0),
        ),
    ]
