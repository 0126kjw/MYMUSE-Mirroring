from flask import Flask, request
from flask_cors import CORS

app = Flask(__name__)
app.debug = True
CORS(app)

import flaskapp.views
