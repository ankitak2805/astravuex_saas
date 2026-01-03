from django.shortcuts import render
from .models import PricingPlan

def pricing(request):
    plans = PricingPlan.objects.filter(is_active=True)
    return render(request, 'pricing/pricing.html', {'plans': plans})
