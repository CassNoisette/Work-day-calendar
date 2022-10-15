var saveBtn = $(".saveBtn");



// current day 
$("#currentDay").text(moment().format('dddd MMM Do YY'));

// time block for the past, present, or future
function timeBlock() {
    var hour = moment().hours();

    $(".time-block").each(function() {
        // var currentHour = parseInt($("#currentDay").format("h"));
        // var currentHour = parseInt(currentDateTime.format("h"));
        var currentHour = parseInt($(this).attr("id"));

        if (currentHour === hour) {
            $(this).addClass("present");
        }
        else if (currentHour < hour) {
            $(this).removeClass("present");
            $(this).addClass("past");
        }
        else if (currentHour > hour) {
            $(this).removeClass("past");
            $(this).addClass("future");
        }
    })
};

  // save event in local storage
saveBtn.on("click", function () {

    var time = $(this).siblings(".hour").text();
    var event = $(this).siblings(".event").val();

    localStorage.setItem(time, event);
});

// save all events after refreshing the page
function useCalendar() {

    $(".hour").each(function () {
        var currentHour = $(this).text();
        var currentEvent = localStorage.getItem(currentHour);

        if (currentEvent !== null) {
            $(this).siblings(".event").val(currentEvent);
        }
    });
}

timeBlock();
useCalendar();