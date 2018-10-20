$(document).ready(function() {
  $("form#survey").submit(function(event) {
    event.preventDefault();

    $("h2#suggest").addClass("hide");
    $("h2#listAll").addClass("hide");
    $("h3#cSharp").addClass("hide");
    $("h3#java").addClass("hide");
    $("h3#php").addClass("hide");
    $("h3#ruby").addClass("hide");
    $("h3#css").addClass("hide");
    $("h3#fail").addClass("hide");

    var devField = $("#field").val();
    var langaugePopularity = $("#popularity").val();
    var targetPlatform = $("#platform").val();
    var bizSize = $("#business").val();
    var favFruit = $("#fruit").val();

    if (devField && langaugePopularity && targetPlatform && bizSize && favFruit) {
      if (devField === "web" && targetPlatform === "ios" || bizSize === "freelance" && favFruit === "golfball") {
        $("h2#suggest").removeClass("hide");
        $("h3#ruby").removeClass("hide");
        $("h3#css").removeClass("hide");
      } else if (bizSize === "large" && targetPlatform === "microsoft") {
        $("h2#suggest").removeClass("hide");
        $("h3#cSharp").removeClass("hide");
      } else if (favFruit === "goji" || langaugePopularity === "dontCareAboutPopularity") {
        $("h2#suggest").removeClass("hide");
        $("h3#java").removeClass("hide");
        $("h3#php").removeClass("hide");
      } else if (devField === "android" && bizSize === "medium") {
        $("h2#suggest").removeClass("hide");
        $("h3#java").removeClass("hide");
      } else {
        $("#listAll").removeClass("hide");
        $("h3#cSharp").removeClass("hide");
        $("h3#java").removeClass("hide");
        $("h3#php").removeClass("hide");
        $("h3#ruby").removeClass("hide");
        $("h3#css").removeClass("hide");
      }

    } else {
      $("h3#fail").removeClass("hide");
    }

    $('#myModal').modal();

  });
});
