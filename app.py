from flask import Flask, render_template, request, jsonify
import pickle

app = Flask(__name__)

# Load the pre-trained model
model = pickle.load(open('diabetes_prediction_randomforest.pkl', 'rb'))

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/predict', methods=['POST'])
def predict():
    data = request.get_json()
    pregnancies = float(data['pregnancies'])
    glucose = float(data['glucose'])
    bloodpressure = float(data['bloodpressure'])
    skinthickness = float(data['skinthickness'])
    insulin = float(data['insulin'])
    bmi = float(data['bmi'])
    dpf = float(data['dpf'])
    age = float(data['age'])

    # Make the prediction
    prediction = model.predict([[pregnancies, glucose, bloodpressure, skinthickness, insulin, bmi, dpf, age]])

    # Return the prediction
    return jsonify({'prediction': int(prediction[0])})

if __name__ == '__main__':
    app.run()
