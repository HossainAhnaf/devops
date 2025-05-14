FROM python:3.8-slim AS build

ARG ENVIRONMENT=production
ARG SECRET_KEY=-05sgp9!deq=q1nltm@^^2cc+v29i(tyybv3v2t77qi66czazj
ARG STRIPE_SECRET_KEY=none
ARG STRIPE_PUBLIC_KEY=none
ARG SECURE_SSL_REDIRECT=False

ENV PYTHONDONTWRITEBYTECODE=1 \
    PYTHONUNBUFFERED=1 \
    ENVIRONMENT=${ENVIRONMENT} \
    SECRET_KEY=${SECRET_KEY} \
    STRIPE_SECRET_KEY=${STRIPE_SECRET_KEY} \
    STRIPE_PUBLIC_KEY=${STRIPE_PUBLIC_KEY} \
    SECURE_SSL_REDIRECT=${SECURE_SSL_REDIRECT}

WORKDIR /app

COPY requirements.txt .

RUN apt-get update && apt-get install -y --no-install-recommends \
    build-essential \
    gcc \
    libpq-dev \
    postgresql-client \
    libjpeg-dev \
    zlib1g-dev \
    libffi-dev \
    && pip install --upgrade pip \
    && pip install --no-cache-dir gunicorn -r requirements.txt \
    && apt-get purge -y --auto-remove build-essential gcc \
    && rm -rf /var/lib/apt/lists/*

COPY . .


# Collect static files
# RUN python manage.py collectstatic --noinput

# ---------------------------------------

FROM python:3.8-slim

ENV PYTHONDONTWRITEBYTECODE=1 \
    PYTHONUNBUFFERED=1

RUN adduser --disabled-password --gecos "" django_user

WORKDIR /app

# ✅ Correct: Copy built Python environment
COPY --from=build /usr/local /usr/local

# ✅ Then copy application code
COPY --from=build /app /app

RUN chown -R django_user:django_user /app

USER django_user


EXPOSE 8000

CMD ["gunicorn", "demo.wsgi:application", "--bind", "0.0.0.0:8000"]
