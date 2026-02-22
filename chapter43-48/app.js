function bulbClicked(e){
    e.src = "https://media-cldnry.s-nbcnews.com/image/upload/t_fit-1500w,f_auto,q_auto:best/MSNBC/Components/Photo/_new/081209-light-bulb-03.jpg"
}
function bulbOff(e){
    e.src = "./images/2bulb.webp"
}
function onn(e){
    e.src = "https://cdn.dribbble.com/userupload/26856603/file/original-0c27e4285bfeda0f6dd410d09c982323.gif"
}
function off(e){
    e.src = "images/fan1.png"
}
function deleteRow(button) {
        // Find the row (tr) of the clicked button
        var row = button.parentNode.parentNode;
        // Remove the row
        row.remove();
    }
