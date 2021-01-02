function bounce(object1, object2){
  /*if (object1.x - object2.x < object2.width/2 + object1.width/2
  && object2.x - object1.x < object2.width/2 + object1.width/2) {
    object1.velocityX = object1.velocityX * (-1);
    object2.velocityX = object2.velocityX * (-1);
  }*/
  if (object1.y - object2.y < object2.height/2 + object1.height/2
  && object2.y - object1.y < object2.height/2 + object1.height/2){
    object1.velocityY = object1.velocityY * (-1);
    object2.velocityY = object2.velocityY * (-1);
  }
}

function isTouching(object1, object2){
  if (object1.x - object2.x < object2.width/2 + object1.width/2
  && object2.x - object1.x < object2.width/2 + object1.width/2 
  && object1.y - object2.y < object2.height/2 + object1.height/2
  && object2.y - object1.y < object2.height/2 + object1.height/2){
    return true;
  }else {
    return false;
  }
}

function bounceOffEdges(object){
  if (object.x > width - object.width/2 || object.x < object.width/2){
    object.velocityX = object.velocityX * (-1);
    /*console.log(object.velocityX);
    console.log(object.velocityY);*/
  }
  if(object.y > height - object.height/2 || object.y < object.height/2){
    object.velocityY = object.velocityY * (-1);
    /*console.log(object.velocityX);
    console.log(object.velocityY);*/ 
 }
}