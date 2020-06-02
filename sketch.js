var basket;
var fruitGroup,fruitGroup2,VegatableGroup,PowerUpsGroup;
var score=0;
var basket1Img,basket2Img,Enemy1Img,Enemy2Img,Enemy3Img,PowerUpsImg,GameOverImg;
var fruit1,fruit2,fruit3,fruit4,fruit5,fruit6;
var Veg1,Veg2,Veg3;
var Lifeline=100;
var bg,bgImg,bg2Img;
var redLine;
var gameState="play";

function preload() {
fruit1=loadImage("Images/Apple.png");
fruit2=loadImage("Images/Banana.png");
fruit3=loadImage("Images/Watermelon.png");
fruit4=loadImage("Images/Mango.png");
fruit5=loadImage("Images/Pineapple.png");
fruit6=loadImage("Images/Cherry.png");

basket1Img=loadImage("Images/Basket1.png");
basket2Img=loadImage("Images/Basket2.png");

Veg1=loadImage("Images/Onion.png");
Veg2=loadImage("Images/Carrot.png");
Veg3=loadImage("Images/Brinjal.png");

Enemy1Img=loadImage("Images/Cactus.png");
Enemy2Img=loadImage("Images/Bomb1.png");
Enemy3Img=loadImage("Images/Bomb2.png");

bgImg=loadImage("Images/bg3.jpg");
bg2Img=loadImage("Images/bg.jpg");

PowerUpsImg=loadImage("Images/powerups.png");
GameOverImg=loadImage("Images/download.jpg");
}

function setup() {
  createCanvas(1000,500);
  bg=createSprite(500,250);
  bg.scale=3.75;
  GameOver=createSprite(500,250,70,70);
  GameOver.addImage("GameOver",GameOverImg);
  GameOver.visible=false;
  basket = createSprite(500,450,50,50);
  basket.shapeColor="red";
  basket.addImage("basket",basket1Img);
  basket.scale=0.85;
  basket.setCollider("circle",0,0,80);
  basket.debug=true;

  fruitGroup = new Group();
  fruitGroup2 = new Group();
  VegetableGroup = new Group();
  EnemyGroup = new Group();
  PowerUpsGroup=new Group();
  redLine=createSprite(500,497,1000,5);
  redLine.shapeColor="red";
  edges=createEdgeSprites();


}

function draw() {

  
 
  if (gameState==="play") {
    bg.addImage("bg",bgImg);
    basket.x=mouseX;
  
  spawnFruits();
  spawnFruits2();
  spawnVegetables();
  spawnEnemy();
  spawnPowerUps();

  //if (score>=60) {
   // gameState="Automatic";
 // }

  if (basket.isTouching(fruitGroup)) {
      fruitGroup.destroyEach();
      score=score+20;
  }
  if (basket.isTouching(fruitGroup2)) {
    fruitGroup2.destroyEach();
    score=score+20;
  }
  if (basket.isTouching(EnemyGroup)) {
    EnemyGroup.destroyEach();
    Lifeline=Lifeline-10;
  }
  if (basket.isTouching(VegetableGroup)) {
    VegetableGroup.destroyEach();
    score=score+10;
  }

  if (redLine.isTouching(fruitGroup)) {
    Lifeline = Lifeline-5;
    fruitGroup.destroyEach();
  }
  if (redLine.isTouching(fruitGroup2)) {
    Lifeline = Lifeline-5;
    fruitGroup2.destroyEach();
  }
  if (redLine.isTouching(VegetableGroup)) {
    Lifeline = Lifeline-5;
    VegetableGroup.destroyEach();
  }

  if (basket.isTouching(PowerUpsGroup)) {
    PowerUpsGroup.destroyEach();
    Lifeline=Lifeline+5;
  }

  if (score>=100) {
    basket.scale=0.5;
    basket.setCollider("circle",0,0,60);

  }

  if (Lifeline===0) {
    gameState="end"
  }
}
if (gameState==="end") {
  bg.addImage("bgound",bg2Img);
  bg2Img.scale=5;
  fruitGroup.destroyEach();
  fruitGroup2.destroyEach();
  basket.velocityX=0;
  //basket.velocityY=0;
  EnemyGroup.destroyEach();
  PowerUpsGroup.destroyEach();
  GameOver.visible=true;
 
}

 //if (gameState==="Automatic") {
  //basket.x=fruit3.x;
  //basket.collide(bottomEdge);
 

  drawSprites();
  fill("black");
  textSize(20);
  text("Score:"+score,800,50);
  fill("red");
  text("Lifeline:"+Lifeline,100,50);
}
  
function spawnFruits() {
  if (frameCount%80===0) {
    
  
  var fruit = createSprite(random(50,900),0,35,35);
  fruit.scale=0.35;
  var Ran=Math.round(random(1,6));
  switch(Ran) {
    case 1 : fruit.addImage(fruit1);
    break;
    case 2 : fruit.addImage(fruit2);
    break;
    case 3 : fruit.addImage(fruit3);
    break;
    case 4 : fruit.addImage(fruit4);
    break;
    case 5 : fruit.addImage(fruit5);
    break;
    case 6 : fruit.addImage(fruit6);
    break;
    default:break;
  }
  fruit.velocityY = 8;
  fruit.shapeColor="yellow";
fruitGroup.add(fruit);
}
}

function spawnFruits2() {
  if (frameCount%70===0) {
    
  
  var fruitt = createSprite(random(50,900),0,35,35);
  fruitt.scale=0.35;
  var Ran=Math.round(random(1,6));
  switch(Ran) {
    case 1 : fruitt.addImage(fruit1);
    break;
    case 2 : fruitt.addImage(fruit2);
    break;
    case 3 : fruitt.addImage(fruit3);
    break;
    case 4 : fruitt.addImage(fruit4);
    break;
    case 5 : fruitt.addImage(fruit5);
    break;
    case 6 : fruitt.addImage(fruit6);
    break;
    default:break;
  }
  fruitt.velocityY = 8;
  fruitt.shapeColor="yellow";
fruitGroup2.add(fruitt);
}
}
function spawnVegetables() {
  if (frameCount%120===0) {
    
  
  var Vegetables = createSprite(random(50,900),0,35,35);
  Vegetables.scale=0.35;
  var Ran=Math.round(random(1,3));
  switch(Ran) {
    case 1 : Vegetables.addImage(Veg1);
    break;
    case 2 : Vegetables.addImage(Veg2);
    break;
    case 3 : Vegetables.addImage(Veg3);
    break;
    default:break;
  }
  Vegetables.velocityY = 8;
  Vegetables.shapeColor="yellow";
VegetableGroup.add(Vegetables);
}
}

function spawnEnemy() {
  if (frameCount%65===0) {
    
  
  var Enemy = createSprite(random(50,900),0,35,35);
  Enemy.scale=0.35;
  var Ran=Math.round(random(1,3));
  switch(Ran) {
    case 1 : Enemy.addImage(Enemy1Img);
    break;
    case 2 : Enemy.addImage(Enemy2Img);
    break;
    case 3 : Enemy.addImage(Enemy3Img);
    break;
    default:break;
  }
  Enemy.velocityY = 10;
  Enemy.shapeColor="yellow";
  EnemyGroup.add(Enemy);
}
}

function spawnPowerUps() {
  if (frameCount%200===0) {
    
  var PowerUps = createSprite(random(50,900),0,35,35);
  PowerUps.addImage("PowerUps",PowerUpsImg);
  PowerUps.scale=0.05;
  PowerUps.velocityY = 7;
  PowerUps.shapeColor="yellow";
PowerUpsGroup.add(PowerUps);
}

}