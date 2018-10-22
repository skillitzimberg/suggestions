$(document).ready(function() {
  $("form#survey").submit(function(event) {
    event.preventDefault();

    $("h3#suggest").addClass("hide");
    $("h3#listAll").addClass("hide");
    $("h4#cSharp").addClass("hide");
    $("h4#java").addClass("hide");
    $("h4#php").addClass("hide");
    $("h4#ruby").addClass("hide");
    $("h4#css").addClass("hide");
    $("h4#fail").addClass("hide");

    var devField = $("#field").val();
    var langaugePopularity = $("#popularity").val();
    var targetPlatform = $("#platform").val();
    var bizSize = $("#business").val();
    var favFruit = $("#fruit").val();

    if (devField && langaugePopularity && targetPlatform && bizSize && favFruit) {
      if (devField === "web" && targetPlatform === "ios" || bizSize === "freelance" && favFruit === "golfball") {
        $("h3#suggest").removeClass("hide");
        $("h4#ruby").removeClass("hide");
        $("h4#css").removeClass("hide");
      } else if (bizSize === "large" && targetPlatform === "microsoft") {
        $("h3#suggest").removeClass("hide");
        $("h4#cSharp").removeClass("hide");
      } else if (favFruit === "goji" || langaugePopularity === "dontCareAboutPopularity") {
        $("h3#suggest").removeClass("hide");
        $("h4#java").removeClass("hide");
        $("h4#php").removeClass("hide");
      } else if (devField === "android" && bizSize === "medium") {
        $("h3#suggest").removeClass("hide");
        $("h4#java").removeClass("hide");
      } else {
        $("h3#listAll").removeClass("hide");
        $("h4#cSharp").removeClass("hide");
        $("h4#java").removeClass("hide");
        $("h4#php").removeClass("hide");
        $("h4#ruby").removeClass("hide");
        $("h4#css").removeClass("hide");
      }

    } else {
      $("h4#fail").removeClass("hide");
    }

  });
});
