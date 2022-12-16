from flask import Flask
from flask import request
from flask_cors import CORS
from flask_restx import Api, Resource
import jpype 
import re
import pickle
from konlpy.tag import Okt
from tensorflow.keras.preprocessing.sequence import pad_sequences
from tensorflow.keras.models import load_model


app = Flask(__name__)
api = Api(app)
CORS(app)


@api.route('/api/predict')
class BiLSTM_model(Resource):
    def get(self):
        feedback = request.args.get('feedback')
        loaded_model = load_model('total_bilstm_new.h5')

        with open('tokenizer.pickle', 'rb') as handle:
            tokenizer = pickle.load(handle)

        max_len = 55
        okt = Okt()

        if jpype.isJVMStarted():
            jpype.attachThreadToJVM()

        stopwords = ['의', '를', '듯', '게', '좀', '잘', '다', '은', '과', '한', '자', '들', '인', '을', '와', '지', '이', '에', '가', '하다', '고', '도', '는', '하', '으로', '임', '네', '걍']

        feedback = re.sub(r'[^ㄱ-ㅎㅏ-ㅣ가-힣 ]', '', feedback)
        feedback = okt.morphs(feedback, stem=True)
        feedback = [word for word in feedback if not word in stopwords]
        encoded = tokenizer.texts_to_sequences([feedback])
        padded_feedback = pad_sequences(encoded, maxlen=max_len)

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
