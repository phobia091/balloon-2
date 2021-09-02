var scene = createSprite(200, 200,50,50);
scene.setAnimation("sunshine_showers_1");

var bow = createSprite(380, 200,50,20);
bow.setAnimation("bow");

function draw() {

 background("white");
 //creating red balloons with for loop
for (var i = 50; i < 400; i=i +70 ) {
var balloon1 = createSprite(50, i,50,30);
    balloon1.setAnimation("red");
    }
    
 //creating yellow balloons with for loop
for (var i = 120; i < 300; i=i +80) {
var balloon2 = createSprite(100, i,50,30);
    balloon2.setAnimation("yellow");
 }
 
 //creating blue balloons with for loop
for (var i = 170; i < 300; i=i +70) {
var balloon3 = createSprite(150, i,50,30);
     balloon3.setAnimation("blue") ;
 }
 
 //moving the bow with the mouse 
 bow.y = World.mouseY ;

if (keyDown("space")) {
   //arrow function
createArrow (); 
  }

  drawSprites();
}

function createArrow() {
  var arrow = createSprite(350, bow.y);
  arrow.setAnimation("arrow");
arrow.velocityX = -6 ;
    arrow.liftime = 100 ;
    arrow.depth = 5 ;

}