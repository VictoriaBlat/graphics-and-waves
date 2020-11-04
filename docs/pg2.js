function drawPg2() {
  pg2.background(128, 128, 128);

  pg2.push();
  pg2.imageMode(CENTER);
  pg2.translate(pg2.width / 2, pg2.height / 2);
  let wave2 = map(sin(radians(frameCount)), -1, 1, 0.6, 1.2);
  pg2.scale(wave2);
  pg2.image(figure2, 0, 0);

  pg2.pop();
  //DEFINE FONT STYLE
  pg2.push();
  pg2.textFont(nunito);
  pg2.textAlign(CENTER, CENTER);
  pg2.textSize(600);
  let text = "AFX";
  let textSize = pg.textWidth(text); // calculating the width of teh string
  let wave = map(
    tan(radians(frameCount)),
    -1,
    1,

    -textSize / 2,
    textSize / 2
  );
  pg2.fill(255, 0, 0);
  pg2.translate(pg2.width / 2 - wave, pg2.height / 2 - 120);
  pg2.text(text, 0, 0);
  pg2.pop();
}
