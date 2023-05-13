$(document).ready(function () {
  $("#btn1").click(function () {
    $("#paraOne").fadeIn();
  });

  $("#btn2").click(function () {
    $("#paraOne").fadeOut();
  });

  $("#btn3").click(function () {
    $("#paraTwo").hide();
  });

  $("#btn4").click(function () {
    $("#paraTwo").show();
  });

  $("#btn5").click(function () {
    $(".orangeDiv").append("<h1>This got appended!</h1>");
  });

  $("#btn6").click(function () {
    $(".orangeDiv").prepend("<h1>This got prepended!</h1>");
  });

  $("#btn7").click(function () {
    $("#classColor").addClass("addedClass");
  });

  $("#btn8").click(function () {
    $("#classColor").css("color", "blue");
  });

  $("#btn9").click(function () {
    $("#exampleDiv").text("What's up! Text got added here!");
  });

  $("#btn10").click(function () {
    $("#exampleDiv").html(
      "<h3>What's up! Text in h3 style got added here!</h3>"
    );
  });

  $("#btn11").click(function () {
    $("#input").val("Added text with .val");
  });

  $("#btn13").click(function () {
    $("#input").slideDown(1000);
  });

  $("#btn12").click(function () {
    $("#input").slideUp(1000);
  });
});
