$(document).ready(function () {
    const keys = Object.keys(localStorage);
    for (let i = 0; i < keys.length; i++) {
        const value = localStorage.getItem(keys[i]);
        const temp = $("#" + keys[i]).find("textarea")
        temp.val(value);
    }
    $(".saveBtn").on("click", function (event) {
        event.preventDefault();
        console.log(this);
        const value = $(this).siblings(".description").val();
        const time = $(this).parent().attr("id");

        localStorage.setItem(time, value);
    });
    $("#currentDay").text(moment().format("LLL"));
    function timeFrame() {
        var currentHours = moment().hours();

        $(".time-block").each(function () {
        var hourEl = $(this).attr("id");
             const hourDay = hourEl.substring(5, hourEl.length);
             const intHourDay = parseInt(hourDay)
            const intCurrentHours = parseInt(currentHours);
            if (parseInt(intHourDay) < parseInt(intCurrentHours)) {
                $(this).addClass("past");
                $(this).removeClass("future");
                $(this).removeClass("present");
            }
            else if (parseInt(intHourDay) > parseInt(intCurrentHours)) {
                $(this).addClass("future");
                $(this).removeClass("present");
                $(this).removeClass("past");
            }
            else if (parseInt(intHourDay) === parseInt(intCurrentHours)) {
                $(this).addClass("present");
                $(this).removeClass("future");
                $(this).removeClass("past");
            }
        })
    };
    timeFrame();
});
