/**
 * Created by sreey on 2/8/2017.
 */
function convertTextToSpeech(){
    var text=document.getElementById("text").value;
    var textToSpeechUrl='https://stream.watsonplatform.net/text-to-speech/api/v1/synthesize?username=e56cbad1-cf4e-47e4-a882-9b1732ffcaa5&password=sn76K1w3Smnl&text='+text;

    var audio="<video controls='' autoplay='' name='media'><source src='"+textToSpeechUrl+"' type='audio/ogg'></video>";
    document.getElementById("playAudio").innerHTML=audio;
}