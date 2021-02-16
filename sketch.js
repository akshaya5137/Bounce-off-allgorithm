function setup() {
  createCanvas(1200,800);
  
  fixedRect = createSprite(400,100,50,50);
  fixedRect.shapeColor = "yellow";
  fixedRect.debug=true;
  fixedRect.velocityY=2;

  movingRect= createSprite(400,700,50,50);
  movingRect.shapeColor="green";
  movingRect.debug=true;
  movingRect.velocityY=-2;
}

function draw() {
  background("black"); 

  console.log(fixedRect.x-movingRect.x);

 //multiply with negative velocity, once both object collides
  if(fixedRect.x-movingRect.x <= fixedRect.width/2+movingRect.width/2 &&
    movingRect.x-fixedRect.x <= fixedRect.width/2+movingRect.width/2){
      
    fixedRect.velocityX = fixedRect.velocityX*(-1);
    movingRect.velocityX = movingRect.velocityX*(-1);
    }
    
    if(fixedRect.y-movingRect.y <= fixedRect.height/2+movingRect.height/2 &&
      movingRect.y-fixedRect.y <= fixedRect.height/2+movingRect.height/2){
        
      fixedRect.velocityY = fixedRect.velocityY*(-1);
      movingRect.velocityY= movingRect.velocityY*(-1);
      }
  
 
  drawSprites();
}