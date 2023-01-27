
Webcam.attach( '#camera' );

camera = document.getElementById("camera");

webcam.set({
width:350,
height:300,
image_format : 'png',
png_quality:90
});
function take_snapshot()
{
    webcam.snap(function(data_uri) {
        document.getElementById("result").innerHTML=
        '<img id= "selfye_imaje" src="'+data_uri+'"/>';
    });
}

console.log('ml5 version:', m15.version);
classifier = imageClasslifer('https://teachablemachine.withgoogle.com/models/X_KQVmanw/model.json',modelLoaded);
 function modelLoaded() {
    console.log('modelo cargado')
 }