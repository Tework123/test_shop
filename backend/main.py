from flask import Flask, render_template, jsonify

app = Flask(__name__)


@app.route('/', methods=['GET'])
def index():
    a = []
    for i in range(100):
        a.append(str(i))

    response = jsonify({'data': a})
    response.status_code = 200
    return response


if __name__ == '__main__':
    app.run(debug=True)
