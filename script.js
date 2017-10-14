//credits to w3schools
// Create a "close" button and append it to each list item
window.onload = function(){
    added();
	init()
    closed();
    checked();
};

function init(){
$('input').focus(function(){$('.block').show();})
$('button').click(function(){$('.block').hide();})
}

function added(){
var myNodelist = document.getElementsByTagName("LI");
for (i = 0; i < myNodelist.length; i++) {
  var txt = document.createTextNode("\u00D7");
  var span = document.createElement("SPAN");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].insertBefore(span, myNodelist[i].childNodes[0]);
}
}

// Click on a "x" button to delete the current list item
function closed(){
var close = document.getElementsByClassName("close");
for (var i = 0; i < close.length; i++){
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}
}


// Add a "checked" symbol when clicking on a list item
function checked(){
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
   if (ev.target.tagName === 'DIV' && !(ev.target.getAttribute('class') === 'type')) {
	ev.target.parentElement.classList.toggle('checked');
  }
}, false);
}

function addnew() {
    
  var close = document.getElementsByClassName("close");
    for (var i = 0; i < close.length; i++){
        close[i].onclick = function() {
         var div = this.parentElement;
         div.style.display = "none";
  }
}

  var li = document.createElement("li");
  
  
  var span = document.createElement("SPAN");
  var type = document.createElement("DIV");
  type.className = "type";
  li.appendChild(type);
  
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);
  
  var inputs = document.getElementById("new").value;
  var t = document.createTextNode(inputs);
  var title = document.createElement("DIV");
  title.appendChild(t);
  title.className = "title";
  li.appendChild(title);
	if (inputs === '') {
    alert("Добавьте описание задачи!");
  } 
	else {  document.getElementById("list").appendChild(li);
  }
  document.getElementById("new").value = "";
  
  var description = document.createElement("DIV");
  inputs = document.getElementById("description").value;
  t = document.createTextNode(inputs);
  description.appendChild(t);
  description.className = "description";
  li.appendChild(description);
  document.getElementById("description").value = "";
  
  var time = document.createElement("DIV");
  time.className = "time";
  var now = new Date();
  var data = now.getDate() + '/' + now.getMonth() + '/' + now.getFullYear() + ' ' + now.getUTCHours()+":"+now.getUTCMinutes();
  time.append(data);
  li.appendChild(time);
  
  for (var i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
     div.style.display = "none";
    }
  }
}


//active class for button animation
$(function (){
$('.add_new').click(function() {

  $(this).toggleClass('active');
  setTimeout(function(){     
      $('.add_new').removeClass('active');
}, 1100);
});

});


