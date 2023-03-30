from flask import Flask
import pickle
from flask_cors import CORS


from AlumniRecommendationModel import AlumniRecommendationModel

app = Flask(__name__)
CORS(app)

alumniRecommendationModel = AlumniRecommendationModel(open("df.pkl","rb"),open("dataDict.pkl","rb"),open("similarity.pkl","rb"))


@app.route('/recommend/<id>', methods=['GET'])
def handle_get(id):
    # Do something with the ID
    return alumniRecommendationModel.recommendProfileById(id)

if __name__ == '__main__':
    app.run(debug=True)


