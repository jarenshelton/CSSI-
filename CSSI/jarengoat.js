console.log("this works better now");

var cookies =[
  "chocolate chip",
  "the lemon ones",
  "thin mints",
  "oreos",
  "samoa",
  "oatmeal"
];

function eat(food) {
  console.log('i just ate the' + food);
}


function eatcookies(){
 for (var i = 0; i < cookies.length; i = i + 1){
  eat(cookies[i]);
}
}
var eatbutton= $(".devour");
eatbutton.on("click", eatcookies);

var text = $(".myClass");
