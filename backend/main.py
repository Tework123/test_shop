from flask import Flask, render_template

app = Flask(__name__)


@app.route('/')
def index():
    a = []
    for i in range(100):
        a.append(str(i))
    return render_template('index.html', a=''.join(a))


if __name__ == '__main__':
    app.run()
