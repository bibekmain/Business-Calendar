
function loadSavedWorkflow(){
    
}

function setColors(){
    var currTime = dayjs();

    for(let i = 9; i<18; i++){
        if(i < currTime.hour()){
            $("#hour-" + i + " textarea").addClass("past");
        }else if(i == currTime.hour()){
            $("#hour-" + i + " textarea").addClass("present");
        }else{
             $("#hour-" + i + " textarea").addClass("future");
        }
    }
}

function saveClick(){

}

$(function() {
    setColors();
});