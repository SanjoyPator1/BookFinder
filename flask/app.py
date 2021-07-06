
from flask import Flask,jsonify 
  
app = Flask(__name__) #creating the Flask class object   
 
@app.route("/", methods = ['GET', 'POST'])
def hello():
    return jsonify({"key" : "home page value"})

def findBook(name):
    
    return name
    

#function to replace '+' character with ' ' spaces
def decrypt(msg):
    
    string = msg
    
    #converting back '+' character back into ' ' spaces
    #new_string is the normal message with spaces that was sent by the user
    new_string = string.replace("+", " ")
    
    return new_string


#creating a url dynamically
@app.route('/home/<name>') 
def hello_name(name):
    
    #dec_msg is the real question asked by the user
    dec_msg = decrypt(name)
    
    response = findBook(dec_msg)
    
    #creating a json object
    json_obj = jsonify({"top" : {"res" : response}})
    
    return json_obj
  
if __name__ =='__main__':  
    app.run(debug = True)
    
'''methods=['GET'],['POST']'''