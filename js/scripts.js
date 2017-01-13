// decision tree logic

var ruby;
var java;
var php;
var css;
var enterprise;
var preferUser;
var preferData;
var preferDesign;


$(function(){
  $("div.panel-body").hide();
  $(".panel-body:first").show();
  $(".nextbtn").click(function() {
    $(this).parent().hide();
    $(this).parent().next(".panel-body").show();

  });




});
