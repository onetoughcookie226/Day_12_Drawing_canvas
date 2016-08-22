
//In this exersice I am following the teamtreehouse jquery basics course

// Add interactivity
var color = $(".selected").css("background-color");

//When clicking on control list items
$(".controls li").click(function () {
    //Deselect sibling elements
    $(this).siblings().removeClass("selected");
    //Select clicked element
    $(this).addClass("selected");

   //cache current color
    color = $(this).css("background-color");
});

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

//when add color is pressed
    //Append the color to the controls ul
    //select the new color

//on mouse events on the canvas
    //Draw lines
