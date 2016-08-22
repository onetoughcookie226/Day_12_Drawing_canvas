
//In this exersice I am following the teamtreehouse jquery basics course

// Add interactivity
var color = $(".selected").css("background-color");
var $canvas = $("canvas");
var context = $canvas[0].getContext("2d");
var lastEvent;

//When clicking on control list items
$(".controls").on ("click" , "li" , (function () {
    //Deselect sibling elements
    $(this).siblings().removeClass("selected");
    //Select clicked element
    $(this).addClass("selected");

   //cache current color
    color = $(this).css("background-color");
}));

//When new color is selected
$("#revealColorSelect").click(function() {
    //show or hide color select
    changeColor();
    $("#colorSelect").toggle();
});

//update the new color span
function changeColor() {
    var r = $("#red").val();
    var g = $("#green").val();
    var b = $("#blue").val();
    $("#newColor").css("background-color", "rgb(" + r + "," + g +", " + b + ")");

};

//when color sliders change
$("input[type=range]").change(changeColor);

//when "add color" is pressed
$("#addNewColor").click(function() {

    //Append the color to the controls ul
    var $newColor = $("<li></li>");
    $newColor.css("background-color",  $("#newColor").css("background-color"));
    $(".controls ul").append($newColor);

    //select the new color
    $newColor.click();

});

//on mouse events on the canvas
$canvas.mousedown(function(e) {
    lastEvent= e;
}).mouseove(function(e){
    context.beginPath();
    context.moveTo(lastEvent.offsetX, lastEvent.offsetY);
    context.lineTo(e.offsetX, e.offsetY);
    context.stroke();


});
    //Draw lines

//document.getElementsByTagName("canvas")[0]


