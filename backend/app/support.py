from PIL import Image
import numpy as np
from tensorflow.keras.models import load_model
import logging

model = load_model('model/model.h5')

label_map = {
    1:'banana',
    0:'orange',
    2:'potato',
    3:'tomato'
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

def predict(file_path):
    x,img = load_image_from_file(file_path)
    logging.info("Predicting...")
    preds = model.predict(x)
    logging.info("dONE")
    pred_index = np.argmax(preds)
    score = preds[0][pred_index]
    label = label_map[pred_index]
    return label, float(score)

if __name__ == "__main__":
    label, score = predict('/home/roverflow/dataPath/642fdcfe5d67df166504d495/1909664595.jpg')
    print(label, score)