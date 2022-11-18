
function show(){
    document.getElementById("panel-1").style.display = "none";
    document.getElementById("panel-2").style.display = "block";
 }
 
 function hide(){
    document.getElementById("panel-1").style.display = "block";
    document.getElementById("panel-2").style.display = "none";
 }
 
 var playing = false;

 function play() {
    if (playing == false){
        var audio = document.getElementById("audio");
        audio.play();
        playing = true;
    }else if(playing == true){
        var audio = document.getElementById("audio");
        audio.pause();
        playing = false;
    }

}