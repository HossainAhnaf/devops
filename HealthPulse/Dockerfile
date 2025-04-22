FROM python:2.7-alpine

ENV PYTHONDONTWRITEBYTECODE=1 \
    PYTHONUNBUFFERED=1

RUN adduser -D flaskuser

WORKDIR /app

COPY requirements.txt .

RUN pip install --upgrade pip && \
    pip install --no-cache-dir -r requirements.txt

COPY . .

RUN chown -R flaskuser:flaskuser /app

USER flaskuser

EXPOSE 3000

CMD ["gunicorn","-w","2","-b","0.0.0.0:3000","api/index:app"]