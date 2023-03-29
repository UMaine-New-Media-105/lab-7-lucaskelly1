let X;
let nameOfArray = ["red", "green", "blue"];
function setup() {
  createCanvas(400, 400);
  noLoop();
}

function draw() {
  background("black");

  for (let someVar = 0; someVar < 16; someVar++){
    for(let someVar = 0; someVar < 16; someVar++)
                                                  
    fill(random(nameOfArray));
    rect(someVar * 25, someVar, 25);
  //  rect(someVar, someVar*25, 25);
  }
}
