from django.shortcuts import render

def asset_inspections(request):
    return render(request, 'features/asset_inspections.html')

def project_tracking(request):
    return render(request, 'features/project_tracking.html')

def risk_management(request):
    return render(request, 'features/risk_management.html')

def routing(request):
    return render(request, 'features/routing.html')

def features_list(request):
    return render(request, 'features/features.html')
