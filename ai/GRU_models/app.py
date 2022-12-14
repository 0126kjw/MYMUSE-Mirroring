from flask import Flask
from flask import request
from flask_cors import CORS
from flask_restx import Api, Resource
import re
import numpy as np
import pickle
from collections import Counter
from konlpy.tag import Mecab
from tensorflow.keras.preprocessing.text import Tokenizer
from tensorflow.keras.preprocessing.sequence import pad_sequences
from tensorflow.keras.models import load_model


app = Flask(__name__)
api = Api(app)
CORS(app)


@api.route('/api/predict')
class GRU_model(Resource):
    def get(self):
        feedback = request.args.get('feedback')
        loaded_model = load_model('best_model_adam.h5')

        with open('tokenizer.pickle', 'rb') as handle:
            tokenizer = pickle.load(handle)

        max_len = 80
        mecab = Mecab()

        stop_words = ['도', '는', '다', '의', '가', '이', '은', '한', '에', '하',
                      '고', '을', '를', '인', '듯', '과', '와', '네', '들', '듯', '지', '임', '게']

        feedback = re.sub(r'[^ㄱ-ㅎㅏ-ㅣ가-힣 ]', '', feedback)
        feedback = mecab.morphs(feedback)
        feedback = [word for word in feedback if not word in stop_words]
        # print(f'feedback without stop_words: {feedback}')
        encoded = tokenizer.texts_to_sequences([feedback])
        # print(f'encoded: {encoded}')  
        padded_feedback = pad_sequences(encoded, maxlen=max_len)
        # print(f'pad_new:{pad_new}')

        score = float(loaded_model.predict(padded_feedback))
        print(f'score: {score}')

        if (score > 0.5):
            print("{:.2f}% 확률로 긍정 리뷰입니다.".format(score * 100))
            return 1
        else:
            print("{:.2f}% 확률로 부정 리뷰입니다.".format((1 - score) * 100))
            return 0


if __name__ == '__main__':
    # 기본 port 5000, port설정은
    # app.run(debug=True, port=3000) 이렇게 지정가능
    app.run(debug=True)
