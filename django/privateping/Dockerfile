FROM python:3.10-slim AS build

ARG DJANGO_ENV=production
ARG SECRET_KEY=your-very-secret-key
ARG SECRET_ADMIN_URL=admin/secret/
ARG HCAPTCHA_SITEKEY=your-hcaptcha-sitekey
ARG HCAPTCHA_SECRET=your-hcaptcha-secret

ENV PYTHONUNBUFFERED=1 \
    PYTHONDONTWRITEBYTECODE=1 \
    DJANGO_ENV=${DJANGO_ENV} \
    SECRET_KEY=${SECRET_KEY} \
    SECRET_ADMIN_URL=${SECRET_ADMIN_URL} \
    HCAPTCHA_SITEKEY=${HCAPTCHA_SITEKEY} \
    HCAPTCHA_SECRET=${HCAPTCHA_SECRET}


WORKDIR /app

COPY requirements.txt . 

# Install system dep + dependencies
RUN apt-get update && apt-get install -y --no-install-recommends \
    libpq-dev \
    gcc \
    build-essential \
    && rm -rf /var/lib/apt/lists/* \  
    && pip install --upgrade pip \
    && pip install --no-cache-dir -r requirements.txt
    
COPY . .

# Collect static files
RUN python manage.py collectstatic --noinput

FROM python:3.10-slim 

ENV PYTHONUNBUFFERED=1 \
    PYTHONDONTWRITEBYTECODE=1 

WORKDIR /app

#  Copy built Python environment
COPY --from=build /usr/local /usr/local

#  Copy built Python libraries
COPY --from=build /usr/lib /usr/lib

#  copy application code
COPY --from=build /app /app

RUN adduser --disabled-password --gecos "" django_user 

RUN chown -R django_user:django_user /app

USER django_user

EXPOSE 8000

ENTRYPOINT ["/bin/bash","/app/entrypoint.sh"]