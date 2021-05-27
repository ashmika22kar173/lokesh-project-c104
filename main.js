Webcam.set({
    width: 350,
    heigth: 300,
    image_format: 'png',
    png_quality: 90

});

var camera = document.getElementById("camara");
Webcam.attach(camera);

function takephoto() {
Webcam.snap(function (data_uri) {
    document.getElementById("result").innerHTML = '<img id="captured_image" src="' + data_uri + '"/>';

});


}

console.log("ml5 version", ml5.version);
classifier = mi5.imageClassifier('https://teachablemachine.withgoogle.com/models/YK8XT_5LO/model.json', modelLoaded);

function modelLoaded() {

console.log("modelLoaded");

}