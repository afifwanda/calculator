window.onload = function(){
    var num = document.getElementsByTagName("li");
    var screen = document.querySelectorAll("p")[0];
    var clear = document.getElementsByClassName("clear")[0];
    var del = document.getElementsByClassName("del")[0];
    var textWrapper = document.querySelector('h1 .letters');
  textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
  
    for(var i = 0; i < num.length; i++){
      if(num[i].innerHTML === "="){
        num[i].addEventListener("click",calculate(i));
      }
      else{
        num[i].addEventListener("click",addValue(i));
      }
    }
  
  
  function addValue(i){
    return function(){
      if (num[i].innerHTML === "x"){
        screen.innerHTML += "*";
      }
      else if(num[i].innerHTML === "÷"){
        screen.innerHTML += "/";
      }
      else{
        screen.innerHTML += num[i].innerHTML;
      }
    }
  }
  
  clear.onclick = function(){
    screen.innerHTML = "";
  }
  
  del.onclick = function(){
    screen.innerHTML = screen.innerHTML.substring(0,
    screen.innerHTML.length-1)
  }
  
  function calculate(i){
    return function(){
      screen.innerHTML = eval(screen.innerHTML);
    }
  }
  
  anime.timeline({loop: true})
    .add({
      targets: 'h1 .letter',
      rotateY: [-90, 0],
      duration: 1300,
      delay: (el, i) => 45 * i
    }).add({
      targets: 'h1',
      opacity: 0,
      duration: 1000,
      easing: "easeOutExpo",
      delay: 10000
    });
  
  }
  