from flask import Flask, render_template, request, jsonify
from flask_cors import CORS, cross_origin
from pymongo.mongo_client import MongoClient
from pymongo.server_api import ServerApi


app = Flask(__name__)
cors = CORS(app)

uri = "mongodb+srv://shivam234agarwal:shivam102@cluster0.11nxsq1.mongodb.net/?retryWrites=true&w=majority"
# Create a new client and connect to the server
client = MongoClient(uri, server_api=ServerApi('1'))
# Send a ping to confirm a successful connection
try:
    client.admin.command('ping')
    print("Pinged your deployment. You successfully connected to MongoDB!")
except Exception as e:
    print(e)


@app.route('/')
def index():
    return "Hello"

@app.route('/sendData',  methods=['POST'])
def sendData():
    data = request.json
    print(data)
    return {"valid":True}

if __name__ == '__main__':
    try:
        app.run(debug=True)
    except Exception as e:
        print("Error occured:", e)