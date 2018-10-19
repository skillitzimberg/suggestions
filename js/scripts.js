$(document).ready(function() {
  $("form#survey").submit(function(event) {

    var devField = $("#field").val();
    var langaugePopularity = $("#popularity").val();
    var targetPlatform = $("#platform").val();
    var bizSize = $("#business").val();
    var favFruit = $("#fruit").val();

    var cSharp = "C#/.NET";
    var java = "Java/Android";
    var php = "PHP/Drupal";
    var ruby = "Ruby/Rails";
    var css = "CSS/Design";

    var suggestion = "We suggest that you look further into these langauges:";
    var allOptions = "The world is your oyster! Do it all!";
    var fail = "Please fill out the form completely.";

    console.log(devField);
    console.log(langaugePopularity);
    console.log(targetPlatform);
    console.log(bizSize);
    console.log(favFruit);
    console.log(suggestion);
    console.log(allOptions);


    if (devField && langaugePopularity && targetPlatform && bizSize && favFruit) {
      debugger;
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
    $("form#survey").reset();

    event.preventDefault();
  });
});
