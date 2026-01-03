from django.contrib import admin
from .models import PricingPlan

@admin.register(PricingPlan)
class PricingPlanAdmin(admin.ModelAdmin):
    list_display = ['name', 'monthly_price', 'yearly_price', 'is_active', 'order']
    list_filter = ['is_active', 'name']
    search_fields = ['description', 'features']
    ordering = ['order']
