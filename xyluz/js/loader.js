var myVar;

function myFunction() {
  myVar = setTimeout(showPage, 1800);
}

function showPage() {
  document.getElementById("loading-dots").style.display = "none";
  document.getElementById("myDiv").style.opacity = "1";
}
