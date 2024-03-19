from django.db import models
from django.contrib.auth.models import User

# Create your models here.

class Pizza(models.Model):
    name    = models.CharField(max_length=120)
    priceM  = models.DecimalField(decimal_places=2, max_digits=4)
    priceL  = models.DecimalField(decimal_places=2, max_digits=4)
    pImage  = models.URLField()

    def __str__(self):
        model_name = self.__class__.__name__
        fields_str = ", ".join((f"{field.name}={getattr(self, field.name)}" for field in self._meta.fields))
        return f"{model_name}({fields_str})"

class Burger(models.Model):
    name    = models.CharField(max_length=120)
    priceM  = models.DecimalField(decimal_places=2, max_digits=4)
    priceL  = models.DecimalField(decimal_places=2, max_digits=4)
    bImage  = models.URLField()

    def __str__(self):
        model_name = self.__class__.__name__
        fields_str = ", ".join((f"{field.name}={getattr(self, field.name)}" for field in self._meta.fields))
        return f"{model_name}({fields_str})"


class Order(models.Model):
    customer    = models.ForeignKey(User, on_delete=models.CASCADE)
    number      = models.CharField(max_length=60)
    bill        = models.DecimalField(decimal_places=2, max_digits=4)
    date        = models.DateTimeField(auto_now_add=True, blank=True)
    note        = models.TextField(blank=True, null=True)

    def __str__(self):
        model_name = self.__class__.__name__
        fields_str = ", ".join((f"{field.name}={getattr(self, field.name)}" for field in self._meta.fields))
        return f"{model_name}({fields_str})"

class Item(models.Model):
    order   = models.ForeignKey(Order, on_delete=models.CASCADE)
    name    = models.CharField(max_length=120)
    price   = models.DecimalField(max_digits=4, decimal_places=2)
    size    = models.CharField(max_length=60)

    def __str__(self):
        model_name = self.__class__.__name__
        fields_str = ", ".join((f"{field.name}={getattr(self, field.name)}" for field in self._meta.fields))
        return f"{model_name}({fields_str})"
