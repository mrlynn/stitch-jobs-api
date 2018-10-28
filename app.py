from flask import Flask, request, render_template
import requests
import os
import json

app = Flask(__name__)
app.secret_key = os.urandom(24)

@app.route("/")
def start():
	return render_template("search_page.html")

@app.route("/greenhouse")
def greenhouse():
	title = request.args.get('title', '')
	location = request.args.get('location', '')
	
	params = {
		'title': title,
		'location': location
	}
	response = requests.get("https://webhooks.mongodb-stitch.com/api/client/v2.0/app/internjobs-gurbl/service/http/incoming_webhook/greenhouse", params=params)
	if response.status_code != 200:
		return("Stitch API Error", 500)

	return render_template("list_greenhouse.html", jobs=response.json()["jobs"])

@app.route("/lever")
def lever():
	title = request.args.get('title', '')
	location = request.args.get('location', '')
	
	params = {
		'title': title,
		'location': location
	}
	response = requests.get("https://webhooks.mongodb-stitch.com/api/client/v2.0/app/internjobs-gurbl/service/http/incoming_webhook/lever", params=params)
	if response.status_code != 200:
		return("Stitch API Error", 500)

	return render_template("list_lever.html", jobs=response.json()["jobs"])

if __name__ == '__main__':
  app.run(port=1234)
