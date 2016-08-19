
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
    //show or hide color select

//when color sliders change
    //update the new color span

//when add color is pressed
    //Append the color to the controls ul
    //select the new color

//on mouse events on the canvas
    //Draw lines
