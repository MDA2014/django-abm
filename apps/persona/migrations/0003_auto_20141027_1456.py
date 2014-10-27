# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('persona', '0002_auto_20141027_1355'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='localidad',
            options={'verbose_name_plural': 'localidades'},
        ),
        migrations.AlterField(
            model_name='domicilio',
            name='numero',
            field=models.PositiveSmallIntegerField(verbose_name='número'),
            preserve_default=True,
        ),
        migrations.AlterField(
            model_name='persona',
            name='dni',
            field=models.IntegerField(serialize=False, primary_key=True, verbose_name='DNI'),
            preserve_default=True,
        ),
    ]
