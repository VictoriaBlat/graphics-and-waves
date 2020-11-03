function drawPg1() {
  pg.background(128, 128, 128);

  pg.push();
  pg.imageMode(CENTER);
  pg.translate(pg.width / 2, pg.height / 2);
  let wave2 = map(sin(radians(frameCount)), -1, 1, 1.6, 2);
  pg.scale(wave2);
  pg.image(corso, 0, 0);

  pg.pop();
  //DEFINE FONT STYLE
  pg.push();
  pg.textFont(nunito);
  pg.textAlign(CENTER, CENTER);
  pg.textSize(800);
  let text = "TRIBUTE TO";
  let textSize = textWidth(text); // calculating the width of teh string
  let wave = map(tan(radians(frameCount)), -1, 1, -textSize / 2, textSize / 2);
  pg.fill(255, 0, 0);
  pg.translate(pg.width / 2 + wave, pg.height / 2 - 120);
  pg.text(text, 0, 0);
  pg.pop();
}

// export default drawPg1;
