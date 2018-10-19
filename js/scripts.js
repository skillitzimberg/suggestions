$(document).ready(function() {
  $("form#survey").submit(function(event) {
    var devField = $("#field").val();
    var langaugePopularity = $("#popularity").val();
    var targetPlatform = $("#platform").val();
    var bizSize = $("#business").val();
    var favFruit = $("#fruit").val();

    console.log(devField);
    console.log(langaugePopularity);
    console.log(targetPlatform);
    console.log(bizSize);
    console.log(favFruit);

    if (devField && langaugePopularity && targetPlatform && bizSize && favFruit) {

      if (devField === "web" && targetPlatform === "ios" || bizSize === freelance && favFruit === golfball) {
        $("h2#suggest").removeClass("hide");
        $("h3#ruby").removeClass("hide");
        $("h3#css").removeClass("hide");
      } else if (bizSize === "large" && targetPlatform === "microsoft") {
        $("h2#suggest").removeClass("hide");
        $("h3#cSharp").removeClass("hide");
      } else if (favFruit === "goji" || langaugePopularity === "dontCareAboutPopularity") {
        $("h2#suggest").removeClass("hide");
        $("h3#php").removeClass("hide");
        $("h3#java").removeClass("hide");
      } else if (devField === android && bizSize === medium) {
        $("h2#suggest").removeClass("hide");
        $("h3#java").removeClass("hide");
      } else {
        $("h2#suggest").removeClass("hide");
        $("h3#ruby").removeClass("hide");
      }

    } else {
      $("h3#fail").removeClass("hide");
    }

    // $('form#survey').trigger("reset");

    event.preventDefault();
  });
});
