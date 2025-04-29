FROM python:3.10-slim AS build

ENV PYTHONUNBUFFERED=1 \
    PYTHONDONTWRITEBYTECODE=1 
    
WORKDIR /app

# Install system dependencies
RUN apt-get update && apt-get install -y --no-install-recommends \
    build-essential \
    libpq-dev \
    libssl-dev \
    libffi-dev \
    curl \
    && apt-get clean && rm -rf /var/lib/apt/lists/*


# Install  dependencies
COPY requirement.txt . 

RUN pip install --upgrade pip --no-cache-dir && \
    pip install --no-cache-dir -r requirement.txt


FROM python:3.10-slim

ENV PYTHONUNBUFFERED=1 \
    PYTHONDONTWRITEBYTECODE=1 

WORKDIR /app
  
COPY --from=build /usr/local/lib/python3.10/site-packages /usr/local/lib/python3.10/site-packages

COPY --from=build /app /app

RUN adduser --disabled-password --gecos "" django_user 

RUN chown -R django_user:django_user /app

USER django_user

EXPOSE 8000

CMD ["daphne","-b","0.0.0.0","-p","8000","PrivatePing.asgi:application"]