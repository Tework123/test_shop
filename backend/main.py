import time
from datetime import datetime

from flask import Flask, render_template, jsonify

app = Flask(__name__)


@app.route('/data')
def get_time():
    time = datetime.now()

    return {'Name': 'geek',
            'Time': time}


if __name__ == '__main__':
    app.run(debug=True)
