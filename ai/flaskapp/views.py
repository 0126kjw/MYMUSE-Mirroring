from flask import request
from flaskapp import app

@app.route('/api/predict', methods=["GET"])
def predict():
  data = request.args.get('feedback')
  print(data)
  return '성공(response)'