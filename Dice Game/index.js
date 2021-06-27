//generate random no
var n1=Math.random();
n1=n1*6;
n1=Math.floor(n1)+1;


//first-dice
var randomImage="dice"+ n1+ ".png";
var randomImageSource= "images/"+ randomImage ;

var image1= document.querySelectorAll("img")[0];
image1.setAttribute("src",randomImageSource);

//dice2
var n2=Math.random();
n2=n2*6;
n2=Math.floor(n2)+1;

var randomImage2="dice"+ n2+ ".png";
var randomImageSource2= "images/"+ randomImage2 ;

var image2= document.querySelectorAll("img")[1]
image2.setAttribute("src",randomImageSource2);

//winner
if(n1>n2){
  document.querySelector("h1").innerHTML="Player 1 Wins !!🎉"
}
else if (n2>n1) {
    document.querySelector("h1").innerHTML="Player 2 Wins !!🎉"

}
else{
  document.querySelector("h1").innerHTML="Draw !!🤦‍♀️"
}
