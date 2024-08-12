from flask import Flask, request, jsonify
import pandas as pd
from flask_cors import CORS # CORS for handling Cross-Origin Resource Sharing
import pickle 

app = Flask(__name__)  

CORS(app,resources={r"/*":{"origins":"*"}})

model = pickle.load(open('D:/Application Devlopment/Git/Food-Delivery-App/Mlreact/FoodRecommenderSystem/recommendmodels.pkl', 'rb'))

@app.route('/', methods=['GET'])
def get_data():
    data = {
        "message":"API is Running"
    }
    return jsonify(data)

@app.route('/predict', methods=['POST'])
def predict():
    try:
        data = request.get_json()
        Max_Fat = data['Max_Fat']
        Max_Cholesterol = data['Max_Cholesterol']
        Max_Sugar = data['Max_Sugar']

        filtered_model = model[
            (model['FatContent'] <= Max_Fat) &
            (model['CholesterolContent'] <= Max_Cholesterol) &
            (model['SugarContent'] <= Max_Sugar)
        ]
        filtered_model = filtered_model.sort_values(by='Calories', ascending=False)
        filtered_model = filtered_model.sort_values(by='ProteinContent', ascending=False)
        result = filtered_model.head(54).to_dict(orient='records')
        return jsonify({'result': result})
    except Exception as e:
        return jsonify({'error': str(e)})

if __name__ == '__main__':
    app.run(debug=True, port=5000)