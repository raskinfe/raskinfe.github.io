	function displayTab(evt, tabName) {
  
  var i, content, tabtags;

  
  content = document.getElementsByClassName("content");
  for (i = 0; i < content.length; i++) {
    content[i].style.display = "none";
  }

  
  tabtags = document.getElementsByClassName("tabtags");
  for (i = 0; i < tabtags.length; i++) {
    tabtags[i].className = tabtags[i].className.replace(" active", "");
  }

  
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " active";

  
  
}