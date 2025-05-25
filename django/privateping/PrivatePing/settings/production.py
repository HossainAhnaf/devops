from .base import *
import os
import sentry_sdk
import dj_database_url
import django_heroku

django_heroku.settings(locals())

DEBUG = True

SECRET_KEY = os.environ.get('SECRET_KEY')
SECURE_PROXY_SSL_HEADER = ('HTTP_X_FORWARDED_PROTO', 'https')
ALLOWED_HOSTS = ['*']
SECRET_ADMIN_URL = os.environ.get('SECRET_ADMIN_URL')

#hcaptcha config
HCAPTCHA_SITEKEY = os.environ.get('HCAPTCHA_SITEKEY')
HCAPTCHA_SECRET = os.environ.get('HCAPTCHA_SECRET')

#security config
SECURE_HSTS_SECONDS = 31536000
SECURE_HSTS_INCLUDE_SUBDOMAINS = True
SECURE_SSL_REDIRECT = False
SESSION_COOKIE_SECURE = True
CSRF_COOKIE_SECURE = False
SECURE_BROWSER_XSS_FILTER = False
SECURE_HSTS_PRELOAD = False

#sentry config
SENTRY_DSN = os.environ.get('SENTRY_DSN')
sentry_sdk.init(
    dsn=SENTRY_DSN,
    enable_tracing=True,
)

#channels config
CHANNEL_LAYERS = {
    "default": {
        "BACKEND": "channels_redis.core.RedisChannelLayer",
        "CONFIG": {
            "hosts": [os.environ.get('REDIS_URL')],
            "symmetric_encryption_keys": [SECRET_KEY],
        },
    }
}

#database config

DATABASES = {
    'default': dj_database_url.config(
        default=os.environ.get('DATABASE_URL'),
        conn_max_age=600
    )
}


STATICFILES_STORAGE = 'whitenoise.storage.CompressedStaticFilesStorage'

STATICFILES_DIRS = [
    BASE_DIR / '../../assets'
]
STATIC_ROOT = BASE_DIR / '../assets/'

DISABLE_SERVER_SIDE_CURSORS = True

DOMAIN = "http://localhost:8000"