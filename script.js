var dayData;

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

function loadSavedWorkflow(){
    dayData = JSON.parse(window.localStorage.getItem("events"));//get from local storage
    if(!dayData){//if dayData has not been established
        dayData = {
            9:"",
            10:"",
            11:"",
            12:"",
            13:"",
            14:"",
            15:"",
            16:"",
            17:"",
        };
        window.localStorage.setItem("events", JSON.stringify(dayData));
    }

    for(let i=9; i<18; i++){
        $("#hour-" + i + " textarea").html(dayData[i]);
    }
}

function saveClicked(event){
    //grabs the data from html
    var timeBlock = $(event.target).parent();//this gets the row of the clicked save btn
    var eventValue = timeBlock.children("textarea").val();
    var clickedHour = timeBlock.attr("id").split("-")[1];

    //modifies the data and stores it to local storage
    dayData[clickedHour] = eventValue;
    window.localStorage.setItem("events", JSON.stringify(dayData));
    event.preventDefault();
}

$(".saveBtn").on("click", saveClicked);

$(function() {
    loadSavedWorkflow();
    setColors();
});