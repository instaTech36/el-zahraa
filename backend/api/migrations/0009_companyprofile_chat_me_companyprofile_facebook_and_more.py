# Generated by Django 4.2.6 on 2023-10-31 15:38

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0008_alter_teammember_title_alter_teammember_title_ar_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='companyprofile',
            name='chat_me',
            field=models.URLField(default=' ', verbose_name='رابط شات مي'),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='companyprofile',
            name='facebook',
            field=models.URLField(default=' ', verbose_name='رابط صفحة الفيسبوك'),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='companyprofile',
            name='gmail',
            field=models.URLField(default=' ', verbose_name='الإيميل'),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='companyprofile',
            name='linkedin',
            field=models.URLField(default=' ', verbose_name='رابط صفحة لينكد إن'),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='companyprofile',
            name='whatsapp',
            field=models.URLField(default=' ', verbose_name='رابط الواتساب'),
            preserve_default=False,
        ),
        migrations.AlterField(
            model_name='companyimage',
            name='company',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='images', to='api.companyprofile'),
        ),
        migrations.AlterField(
            model_name='teammember',
            name='company',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='team', to='api.companyprofile'),
        ),
    ]
