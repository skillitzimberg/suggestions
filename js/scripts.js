$(document).ready(function() {
  $("form#survey").submit(function(event) {
    var favTopic = $("#topic").val();
    var myHabits = $("#habits").val();
    var bizSize = $("#business").val();
    console.log(favTopic);
    console.log(myHabits);
    console.log(bizSize);

    event.preventDefault();
  });
});
