import * as tf from '@tensorflow/tfjs';

// For Keras use tf.loadLayersModel().
const model = await tf.loadLayersModel('./converted/model.json');
const dog = document.getElementById('dog');
model.predict(tf.browser.fromPixels(dog));