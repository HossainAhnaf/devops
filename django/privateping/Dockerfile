FROM python:3.10-slim AS build

ENV PYTHONUNBUFFERED=1 \
    PYTHONDONTWRITEBYTECODE=1 

WORKDIR /app

COPY requirements.txt . 

# Install system dep + dependencies
RUN apt-get update && apt-get install -y --no-install-recommends \
    libpq-dev \
    build-essential \
    && rm -rf /var/lib/apt/lists/* \  
    && pip install --upgrade pip \
    && pip install --no-cache-dir -r requirements.txt
    
COPY . .

RUN adduser --disabled-password --gecos "" django_user 

RUN chown -R django_user:django_user /app

USER django_user

EXPOSE 8000

ENTRYPOINT ["/bin/bash","/app/entrypoint.sh"]