from PIL import Image
import numpy as np
from tensorflow.keras.models import load_model
import logging

model = load_model('model/model.h5')

label_map = {
    'Banana':1,
    'Orange':0,
    'Potato':2,
    'Tomato':3
}

price_map = {
    'Banana':[6,18],
    'Orange':[70,80],
    'Potato':[8,11],
    'Tomato':[7,8]
}

def load_image_from_file(file_path):
    img = Image.open(file_path)

    # Resize the image to 224x224
    img = img.resize((224, 224))
    # Convert the image to a numpy array and rescale it to 1/255
    x = np.array(img)
    x = x.reshape((1, 224, 224, 3))

    x = x / 255.0
    return x, img

def predict(file_path, label="Orange"):
    x,img = load_image_from_file(file_path)
    preds = model.predict(x)
    pred_index = np.argmax(preds)
    
    index = label_map[label]
    price = price_map[label]
    print(preds[0][index] )
    score = preds[0][index] * price[1]
    if score < price[0]:
      score = price[0] + (score*(25/100))
    return label, score 

if __name__ == "__main__":
    label, score = predict('/home/roverflow/dataPath/642fdcfe5d67df166504d495/1909664595.jpg')
    print(label, score)