   //First, find the empty div where we want to put the answers.
    var resultsDiv = document.getElementById('resultsBox');

    function writeResults (result){


    //Second, create a new paragraph
    var newParagraph = document.createElement('p');

    //Create a text node, a string of text, to put inside the paragraph.
    var paragraphText = document.createTextNode(result);

    //Now, we assemble our results. Put the new text in the new paragraph
    newParagraph.appendChild(paragraphText);

    //Then put it inside the div we found earlier
    resultsDiv.appendChild(newParagraph);
}

writeResults('Hi there!');

var submitButton = document.getElementById('simpleSubmit');

submitButton.onmouseover = function(){
    this.style.backgroundColor = 'red';
}
submitButton.onmouseout = function(){
    this.style.backgroundColor = 'white';
}

// adds the gdiLink to the variable gdiLink
    var gdiLink = document.getElementById('gdiLink');

    // adds onmouseover/onmouseout to the variable gdiLink
    gdiLink.onmouseover = function(){
        this.style.fontWeight = 'bold';
    }
    gdiLink.onmouseout = function(){
        this.style.fontWeight = 'normal';
    }

    gdiLink.onclick = function(event){
        event.preventDefault();
        alert ('Hey. For some reason, this link is not working. We have been notified and will fix it ASAP. Thanks for your interest in Girl Develop It!!!')
    }

var headerBox = document.getElementById('header');

var userInput = document.getElementById('simpleSubmit');

userInput.onclick = function(event){
    event.preventDefault();
    var userName = document.getElementById('inputValue').value;
    headerBox.innerHTML = 'Hi, ' + userName;
}

 var simpleClock = setInterval(myClock, 1000);
    function myClock() {
      var d = new Date(); // grabs today's data
      var t = d.toLocaleTimeString(); // grabs the local time
      document.getElementById('resultsBox').innerHTML = t;
      // because of the equals sign, it overrides all other HTML in the resultsBox and adds a clock
    }

      function myStopFunction() {
      clearInterval(simpleClock);
    }

    myStopFunction();

    var targetPic = document.getElementById('turtlePic');
targetPic.onclick = function() {
  var leftMarginValue = 0;
  function increaseMargin() {
    leftMarginValue++  // updates the parameter each time
    targetPic.style.marginLeft= leftMarginValue + 'px'//set left margin
    if (leftMarginValue === 750) {
        // check finished condition
        clearInterval(movePic);
    }
  }
  var movePic = setInterval(function(){ increaseMargin() }, 5)
  // update every 10ms
}











