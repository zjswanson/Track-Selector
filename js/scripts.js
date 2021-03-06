// decision tree logic
// question 1-3 are to determine if the user prefers to work for a large or small organization.
// Questions 4-5, respectively, refine which language to use in their preferred org size

var checkSize = function(q1,q2,q3) {
  if (q1+q2+q3 > 1) {
    return "big";
  } else {
    return "small";
  }
};
var preferLanguage;
var activeQuestion =1;
var nextQuestion = function() {
  activeQuestion += 1;
};
var prevQuestion = function() {
  activeQuestion -= 1;
};



// User interface

$(function() {
  $(".panel-body").hide();
  $(".question"+activeQuestion).show();
  $(".nextbtn").hide();
  $("input:radio").click(function() {
    $(this).parents().siblings(".nextbtn").show();
  });
  $(".nextbtn").click(function() {
    $(".question"+activeQuestion).hide();
    nextQuestion();
    $(".question"+activeQuestion).show();
  });
  $(".prevbtn").click(function() {
    $(".question"+activeQuestion).hide();
    prevQuestion();
    $(".question"+activeQuestion).show();
  });
  $(".overbtn").click(function() {
    location.reload();
  });

  $("form#quiz").submit(function(event) {
    event.preventDefault();
    $("#displaypane").find(".panel-body").hide();
    var q1 = parseInt($("input:radio[name=question1]:checked").val());
    var q2 = parseInt($("input:radio[name=question2]:checked").val());
    var q3 = parseInt($("input:radio[name=question3]:checked").val());
    if (checkSize(q1,q2,q3) === "big")  {
      var preferLanguage = $("input:radio[name=question4]:checked").val();
    } else {
      var preferLanguage = $("input:radio[name=question5]:checked").val();
    }
    $("."+preferLanguage).show();
    $(".overbtn").show(500);
  });
});
