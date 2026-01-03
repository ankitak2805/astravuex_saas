from django.db import models

class PricingPlan(models.Model):
    PLAN_CHOICES = [
        ('starter', 'Starter'),
        ('enterprise', 'Enterprise'),
        ('custom', 'Custom'),
    ]
    
    name = models.CharField(max_length=100, choices=PLAN_CHOICES, unique=True)
    monthly_price = models.DecimalField(max_digits=10, decimal_places=2, null=True, blank=True)
    yearly_price = models.DecimalField(max_digits=10, decimal_places=2, null=True, blank=True)
    description = models.TextField()
    features = models.TextField(help_text="One feature per line")
    is_active = models.BooleanField(default=True)
    order = models.IntegerField(default=0)

    def __str__(self):
        return self.get_name_display()

    class Meta:
        ordering = ['order']
