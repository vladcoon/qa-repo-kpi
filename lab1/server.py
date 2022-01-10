from flask import Flask
from flask import Flask, flash, request, redirect, url_for, make_response
import codecs
import os

app = Flask(__name__)

data_path = './serverdata/'
data_file_name = 'text.txt'

if not os.path.exists(data_path):
    os.mkdir(data_path)

size = 1024


f = open(data_path + data_file_name, 'w+')
f.write('Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit ve')
f.close()

@app.route('/', methods=['GET', 'POST'])
def upload_file():
    filename = './data/text.txt'
    file_data = codecs.open(filename, 'rb').read()
    response = make_response()
    response.headers['my-custom-header'] = 'my-custom-status-0'
    response.data = file_data
    return response

if __name__== '__main__':
    app.run(debug=True, host='0.0.0.0')