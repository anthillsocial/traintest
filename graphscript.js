//All the movable DIVs
dragElement(document.getElementById("title"));
dragElement(document.getElementById("warning"));
dragElement(document.getElementById("graph1"));
dragElement(document.getElementById("graph11"));
dragElement(document.getElementById("graph2"));
dragElement(document.getElementById("graph22"));
dragElement(document.getElementById("graph3"));
dragElement(document.getElementById("graph33"));
dragElement(document.getElementById("graph4"));
dragElement(document.getElementById("graph44"));

//making the element movable by clicking on it
function dragElement(elmnt) {
  var pos1 = 0,
    pos2 = 0,
    pos3 = 0,
    pos4 = 0;
  if (document.getElementById(elmnt.id + "header")) {
    //set the element to be movable by clicking on the header
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    //if there is no header, element can be moved by clicking on it
    elmnt.onmousedown = dragMouseDown;
  }

  //detecting the location of the cursor and aligning the element
  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    document.onmousemove = elementDrag;
  }

  //making the element move with the position of the mouse
  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    elmnt.style.top = elmnt.offsetTop - pos2 + "px";
    elmnt.style.left = elmnt.offsetLeft - pos1 + "px";
  }

  //once the mouse is released, the element stays in place
  function closeDragElement() {
    document.onmouseup = null;
    document.onmousemove = null;
  }
}
