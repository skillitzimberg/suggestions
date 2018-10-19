$(document).ready(function() {
  $("form#survey").submit(function(event) {
    var devField = $("#field").val();
    var langaugePopularity = $("#popularity").val();
    var targetPlatform = $("#platform").val();
    var bizSize = $("#business").val();
    var favFruit = $("#fruit").val();

    // console.log(devField);
    // console.log(langaugePopularity);
    // console.log(targetPlatform);
    // console.log(bizSize);
    // console.log(favFruit);

    if (devField && langaugePopularity && targetPlatform && bizSize && favFruit) {
      if () {
      } else if (true) {

      } else if (true) {

      } else if (true) {

      }

    } else {
      $("h3#fail").removeClass("hide");
    }

    event.preventDefault();
  });
});
