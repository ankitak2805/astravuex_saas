# AstravueX SaaS Website

A fully functional Django-based SaaS website replicating the AstravueX platform for Energy and Marine operations.

## Features

### Core Functionality
- **Home Page**: Hero section, statistics, operational challenges, solutions overview, and FAQ
- **Features Section**: 
  - Asset Inspections
  - Project Tracking
  - Risk Management
  - AstravueX Routing (Quantum routing)
- **Pricing Page**: Three pricing tiers (Starter, Enterprise, Custom) with monthly/yearly toggle
- **Blog**: Blog listing and detail pages
- **Contact Form**: Functional contact form with email validation
- **Newsletter Subscription**: AJAX-powered newsletter signup

### Technical Features
- Responsive design
- Modern UI with smooth animations
- Interactive FAQ accordion
- Form validation
- Real-time newsletter subscription
- Admin panel for content management
- Database models for all features

## Installation & Setup

### Prerequisites
- Python 3.8 or higher
- pip

### Running the Development Server

The server is already running at: **http://127.0.0.1:8000/**

### Admin Access

- **URL**: http://127.0.0.1:8000/admin/
- **Username**: admin
- **Password**: admin123

### Site Structure

```
/                       - Home page
/features/              - Features overview
/features/asset-inspections/    - Asset Inspections detail
/features/project-tracking/     - Project Tracking detail
/features/risk-management/      - Risk Management detail
/features/routing/              - Routing detail
/pricing/               - Pricing plans
/blog/                  - Blog listing
/blog/<slug>/           - Blog detail
/contact/               - Contact form
/admin/                 - Admin panel
```

## Admin Panel Features

### Managing Content

1. **Blog Posts** (`/admin/blog/blogpost/`)
   - Create, edit, and publish blog posts
   - Add featured images
   - Auto-generate slugs from titles

2. **Pricing Plans** (`/admin/pricing/pricingplan/`)
   - Manage pricing tiers
   - Set monthly and yearly prices
   - Define features for each plan

3. **Contact Messages** (`/admin/contact/contact/`)
   - View contact form submissions
   - Mark messages as read
   - Search and filter messages

4. **Newsletter Subscribers** (`/admin/newsletter/subscriber/`)
   - View all subscribers
   - Manage active/inactive status
   - Export email lists

## Customization

### Adding Content

#### Add a Blog Post
1. Go to `/admin/blog/blogpost/add/`
2. Enter title, content, and excerpt
3. Upload an image (optional)
4. Check "Published" to make it live
5. Click "Save"

#### Update Pricing Plans
1. Go to `/admin/pricing/pricingplan/`
2. Click on a plan to edit
3. Update prices, features, or description
4. Click "Save"

### Styling

All CSS is in `static/css/style.css`. The design uses:
- CSS Grid and Flexbox for layouts
- CSS Variables for colors and spacing
- Responsive breakpoints for mobile devices

### JavaScript Functionality

All JavaScript is in `static/js/main.js`:
- FAQ accordion
- Pricing toggle (monthly/yearly)
- Newsletter subscription
- Form validation
- Smooth scrolling
- Alert auto-dismiss

## Database Models

### Newsletter Subscriber
- Email (unique)
- Subscribed date
- Active status

### Contact
- Name
- Email
- Subject
- Message
- Created date
- Read status

### Blog Post
- Title
- Slug (auto-generated)
- Excerpt
- Content
- Image
- Published status
- Created/Updated dates

### Pricing Plan
- Name (Starter/Enterprise/Custom)
- Monthly price
- Yearly price
- Description
- Features list
- Active status

## URLs Configuration

All URL patterns are configured in:
- `astravuex_saas/urls.py` - Main URL configuration
- `home/urls.py` - Home page
- `features/urls.py` - Features pages
- `pricing/urls.py` - Pricing page
- `blog/urls.py` - Blog pages
- `contact/urls.py` - Contact page
- `newsletter/urls.py` - Newsletter subscription

## Static Files

```
static/
├── css/
│   └── style.css       - All styling
├── js/
│   └── main.js         - All JavaScript
└── images/             - Placeholder for images
```

## Templates Structure

```
templates/
├── base.html           - Base template with header/footer
├── home/
│   └── index.html      - Home page
├── features/
│   ├── features.html   - Features listing
│   ├── asset_inspections.html
│   ├── project_tracking.html
│   ├── risk_management.html
│   └── routing.html
├── pricing/
│   └── pricing.html    - Pricing page
├── blog/
│   ├── blog_list.html  - Blog listing
│   └── blog_detail.html - Blog detail
└── contact/
    └── contact.html    - Contact form
```

## Development

### Making Changes

1. **Update Templates**: Edit files in `templates/`
2. **Update Styles**: Edit `static/css/style.css`
3. **Update JavaScript**: Edit `static/js/main.js`
4. **Update Models**: Edit `models.py` in respective apps, then:
   ```bash
   python manage.py makemigrations
   python manage.py migrate
   ```

### Creating New Apps

```bash
python manage.py startapp appname
```

Then add to `INSTALLED_APPS` in `settings.py`

## Production Deployment

Before deploying to production:

1. Update `settings.py`:
   - Set `DEBUG = False`
   - Update `ALLOWED_HOSTS`
   - Configure production database
   - Set up static files serving

2. Collect static files:
   ```bash
   python manage.py collectstatic
   ```

3. Set up environment variables for sensitive data
4. Use a production WSGI server (Gunicorn, uWSGI)
5. Set up a reverse proxy (Nginx, Apache)

## Support

For questions or issues, contact the development team.

## License

© 2026 protected by Astravue
