var mouseevent = "empty";
var last_position_x, last_position_y;
canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
colour = "black";
width_of_line = 1;
canvas.addEventListener("mousedown", my_mousedown);
function my_mousedown(e) {

    mouseevent = "mouseDown"

}
canvas.addEventListener("mouseup", my_mouseup); function my_mouseup(e) { mouseEvent = "mouseUP"; } canvas.addEventListener("mouseleave", my_mouseleave); function my_mouseleave(e) { mouseEvent = "mouseleave"; } canvas.addEventListener("mousemove", my_mousemove); function my_mousemove(e) {
    current_position_of_mouse_x = e.clientX - canvas.offsetLeft; current_position_of_mouse_y = e.clientY - canvas.offsetTop;
    if (mouseevent = "mouseDown"){
        ctx.beginPath()
        ctx.strokeStyle = colour;
        ctx.lineWidth = width_of_line;
        ctx.moveTo(last_position_x, last_position_y);
        ctx.lineTo(current_position_of_mouse_x, current_position_of_mouse_y)
        ctx.stroke()

    }
    last_position_x = current_position_of_mouse_x
    last_position_y = current_position_of_mouse_y
}