function Hamburger(x) {
  x.classList.toggle("change");
}



/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "mobilenav") {
    x.className += "responsive";
  } else {
    x.className = "mobilenav";
  }
}
