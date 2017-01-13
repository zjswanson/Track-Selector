// decision tree logic
// question 1-3 are to determine if the user prefers to work for a large or small organization.  if yes, they increment preferBig.
// Questions 4-5, respectively, refine which language to use in their preferred org size

var preferSize = 0;
var checkSize = function(q1,q2,q3) {
  if (q1+q2+q3 > 1) {
    return "big";
  } else {
    return "small";
  }
};


$(function() {
  $("div.panel-body").hide();
  $(".panel-body:first").show();
  $(".nextbtn").click(function() {
    $(this).parent().hide();
    $(this).parent().next(".panel-body").show();
  });
  $("form#quiz").submit(function(event) {
    event.preventDefault();
    var q1 = parseInt($("input:radio[name=question1]:checked").val());
    var q2 = parseInt($("input:radio[name=question2]:checked").val());
    var q3 = parseInt($("input:radio[name=question3]:checked").val());

  });




});
