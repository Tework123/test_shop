import time
from datetime import datetime

from flask import Flask, render_template, jsonify

app = Flask(__name__)


@app.route('/time')
def get_current_time():
    time = datetime.now()

    return {'time': time}
