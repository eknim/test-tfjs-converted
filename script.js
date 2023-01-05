async function loadModel() {
    //const model = await tf.loadLayersModel('file://converted/model.json');
    const model = await tf.loadLayersModel('./converted/model.json');
    console.log(model)
    return model
}

model = loadModel()