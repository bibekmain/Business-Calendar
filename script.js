var dayData;
var now = dayjs();

function setColors(){//initiates colors for each time block using dayjs
    for(let i = 9; i<18; i++){
        if(i < now.hour()){
            $("#hour-" + i + " textarea").addClass("past");
        }else if(i == now.hour()){
            $("#hour-" + i + " textarea").addClass("present");
        }else{
             $("#hour-" + i + " textarea").addClass("future");
        }
    }
}

function loadSavedWorkflow(){//loads local storage date to webpage
    dayData = JSON.parse(window.localStorage.getItem("events"));//get data from local storage
    if(!dayData){//if data has not been established
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

    //load from local storage into browser
    for(let i=9; i<18; i++){
        $("#hour-" + i + " textarea").html(dayData[i]);
    }
}

function saveClicked(event){//saveBtn click event
    //grabs the data from html
    var timeBlock = $(event.target).parent();//this gets the row of the clicked save btn
    var eventValue = timeBlock.children("textarea").val();
    var clickedHour = timeBlock.attr("id").split("-")[1];

    //modifies the data and stores it to local storage
    dayData[clickedHour] = eventValue;
    window.localStorage.setItem("events", JSON.stringify(dayData));
    event.preventDefault();
}

function showCurrDay(){
    //grabs currentDay element and changes its html to today's date using dayjs
    var currentDayEl = $("#currentDay");
    currentDayEl.html(now.format('dddd, MMMM D, YYYY'));
}

//on click of saveBtn will call saveClicked
$(".saveBtn").on("click", saveClicked);

$(function() {//main function to run program
    loadSavedWorkflow();
    showCurrDay();
    setColors();
});