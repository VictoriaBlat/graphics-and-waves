// import drawPg1 from "./pg.js";

let pg;
let pg2;
let corso;
let figure2;
let middleFig;
let nunito;

function preload() {
  corso = loadImage("../assets/corpsomin.png");
  nunito = loadFont("../assets/NunitoSans-Bold.ttf");
  figure2 = loadImage("../assets/figure2min.png");
}
function setup() {
  createCanvas(900, 900);
  pg = createGraphics(586, 810);
  pg2 = createGraphics(586, 810);
  middleFig = createGraphics(586, 810);

  corso.resize(300, 0);
  // fill(255, 255, 255).strokeWeight(0).textSize(10);
  // textFont(nunito);
  // textFont(nunito);
  // textAlign(CENTER, CENTER);
  // textSize(width / 2);
  // fill(255, 0, 0);
  // text("Font Style Normal", 0, 0);
}
//We are always at the crossing of paths.
function draw() {
  background(0);
  drawPg1();
  drawPg2();
  // middleFig.background(255);
  // middleFig.noStroke();
  // let pixImage = pg.get();
  // let pixImage2 = pg2.get();

  // for (let x = 0; x < pg.width; x++) {
  //   for (let y = 0; y < pg.height; y++) {
  //     let color1 = pixImage.get(x, y);
  //     let color2 = pixImage2.get(x, y);
  //     middleFig.fill(color1);
  //     middleFig.rect(x, y, 1, 1);
  //   }
  // }
  // pg.background(128, 128, 128);

  //DISPLAY IMAGE
  // pg.push();
  // pg.imageMode(CENTER);
  // pg.translate(pg.width / 2, pg.height / 2);
  // let wave2 = map(sin(radians(frameCount)), -1, 1, 1.6, 2);
  // pg.scale(wave2);
  // pg.image(corso, 0, 0);

  // pg.pop();
  // //DEFINE FONT STYLE
  // pg.push();
  // pg.textFont(nunito);
  // pg.textAlign(CENTER, CENTER);
  // pg.textSize(800);
  // let text = "TRIBUTE TO";
  // let textSize = textWidth(text); // calculating the width of teh string
  // let wave = map(tan(radians(frameCount)), -1, 1, -textSize / 2, textSize / 2);
  // pg.fill(255, 0, 0);
  // pg.translate(pg.width / 2 + wave, pg.height / 2 - 120);
  // pg.text("TRIBUTE TO", 0, 0);
  // pg.pop();

  imageMode(CENTER);
  image(pg2, width / 2, height / 2);
}
