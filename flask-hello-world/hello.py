# Shamelessly copied from http://flask.pocoo.org/docs/quickstart/
from flask import Flask
import os, socket

app = Flask(__name__)

@app.route('/')
def hello_world():
    host_name = socket.gethostname()
    return 'Hello from instance: {} \n'.format(host_name)    

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=3000,debug=True)

