$(document).ready(function () {
  $("#eventText9")[0].innerHTML = localStorage.getItem("hour-9");
  $("#eventText10")[0].innerHTML = localStorage.getItem("hour-10");
  $("#eventText11")[0].innerHTML = localStorage.getItem("hour-11");
  $("#eventText12")[0].innerHTML = localStorage.getItem("hour-12");
  $("#eventText13")[0].innerHTML = localStorage.getItem("hour-13");
  $("#eventText14")[0].innerHTML = localStorage.getItem("hour-14");
  $("#eventText15")[0].innerHTML = localStorage.getItem("hour-15");
  $("#eventText16")[0].innerHTML = localStorage.getItem("hour-16");
  $("#eventText17")[0].innerHTML = localStorage.getItem("hour-17");

  var currentDate = $("#currentDay");
  currentDate.text(moment().format("MMM Do YY"));

  var specificHour = moment().hours();

  var saveButton = $(".saveBtn");

  function timeCompare() {
    $(".time-block").each(function () {
      var thisHour = $(this).attr("data-value");

      if (thisHour < specificHour) {
        $(this).addClass("past");
      }
      if (thisHour == specificHour) {
        $(this).addClass("present");
      } else if (thisHour > specificHour) {
        $(this).addClass("future");
      }
    });
  }
  timeCompare();

  saveButton.on("click", function () {
    var eventText = $(this).siblings(".description").val();
    var div = this.parentElement.id;
    console.log(eventText);
    localStorage.setItem(div, eventText);
  });
});
