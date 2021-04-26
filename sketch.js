let pageNum = 1; 
let numPages = 6; 
let dogTranslation = 210

function preload(){
  soundFormats('mp3','ogg');
  mySound = loadSound('bark.mp3');
}

function setup() {
  createCanvas(400, 400);
  console.log(pageNum); //during setup, print current page (zero)
}

function draw() {
  
  //display something different on the canvas depending on current page (current state)
    
  if (pageNum == 1){
    background(135,206,250);
    //text("page 1", 100,100);
    if (!mySound.isPlaying()){
      mySound.play();
    }
    //head
  fill(255,255,255);
  stroke(000);
  strokeWeight(1);
  beginShape();
  vertex(207,177);
  quadraticVertex(175,170,138,190);
  quadraticVertex(140,193,145,191);
  quadraticVertex(117,204,122,213);
  vertex(127,210);
  quadraticVertex(105,228,110,244);
  quadraticVertex(113,247,114,242);
  quadraticVertex(111,260,115,263);
  quadraticVertex(118,264,118,259);
  quadraticVertex(119,272,124,275);
  vertex(133,290);
  vertex(133,284);
  quadraticVertex(137,295,145,300);
  vertex(144,294);
  quadraticVertex(152,307,167,305);
  quadraticVertex(185,316,209,307);
  quadraticVertex(216,305,223,296);
  vertex(220,304);
  quadraticVertex(228,302,233,292);
  quadraticVertex(237,294,243,281);
  quadraticVertex(247,280,247,271);
  quadraticVertex(253,269,254,260);
  quadraticVertex(263,256,252,232);
  vertex(257,233);
  quadraticVertex(256,218,242,205);
  quadraticVertex(251,200,241,192);
  vertex(228,190);
  quadraticVertex(235,186,222,181);
  vertex(207,177);
  endShape();
  
//body
beginShape();
 vertex(143,299);
 quadraticVertex(135,310,140,320);
 quadraticVertex(135,335,145,334);
 quadraticVertex(140,346,149,349); 
  quadraticVertex(147,371,153,375);
  quadraticVertex(156,389,170,389);
  quadraticVertex(177,395,182,388);
  quadraticVertex(191,387,187,374);
  quadraticVertex(192,399,201,384);
  quadraticVertex(207,392,213,388);
  quadraticVertex(219,392,225,388);
  quadraticVertex(241,392,255,384);
  quadraticVertex(276,379,274,352);
  quadraticVertex(280,344,273,332);
  quadraticVertex(278,325,262,310);
  quadraticVertex(265,303,250,299);
  quadraticVertex(248,293,232,295);
endShape();
  //tail
  beginShape();
  vertex(241,295);
  quadraticVertex(245,285,252,283);
  quadraticVertex(256,278,265,281);
  quadraticVertex(272,282,271,289);
  quadraticVertex(273,299,263,307);
  endShape();
  
   //head details
  beginShape();
  vertex(168,250);
  quadraticVertex(138,253,140,275);
  quadraticVertex(146,289,162,299);
  quadraticVertex(167,298,164,289);
  quadraticVertex(174,300,174,286);
  endShape();
  
  beginShape();
  vertex(204,250);
  quadraticVertex(230,253,232,274);
  quadraticVertex(229,283,220,290);
  quadraticVertex(205,305,207,289);
  quadraticVertex(199,299,196,286);
  endShape();
  
  beginShape();
  vertex(162,265);
  quadraticVertex(160,290,186,274);
  quadraticVertex(209,286,207,265)
  endShape();
  
  //body details
  beginShape();
  vertex(226,388);
  quadraticVertex(232,385,230,380);
  quadraticVertex(240,375,237,367);
  quadraticVertex(246,363,241,355);
  quadraticVertex(245,350,240,343);
  endShape();
  
  //mouth
  beginShape();
  vertex(174,282);
  quadraticVertex(183,280,186,274);
  quadraticVertex(188,279,197,280);
  quadraticVertex(195,288,185,291);
  quadraticVertex(177,289,174,282);
  endShape();
  
  //tongue
  fill(255,192,203);
  beginShape();
  vertex(192,287);
  quadraticVertex(190,283,186,285);
  quadraticVertex(182,284,178,286);
  quadraticVertex(184,294,192,287);
  endShape();
  
  //nose
  fill(0,0,0);
  ellipse(186,260,20,15);
  
  //left eye
  fill(0,0,0);
  noStroke();
  ellipse(170,241,17,17);
  //right eye
  ellipse(199,241,17,17);
  //pupils
  fill(255,255,255);
  ellipse(168,238,5,5);
  ellipse(197,238,5,5);
  }
  
  
  else if (pageNum == 2){
    background(135,206,250);
    //text("page 2", 100,100);
    hands(mouseX,mouseY);
  
     //head
  function hands(x,y){
  push();
  translate(x-100,y-55);
  stroke(000);
  strokeWeight(1);
  //arms
  fill(0,0,0);
  beginShape();
  vertex(70,0);
  vertex(120,0);
  vertex(140,137);
  vertex(90,137)
  vertex(70,0);
  endShape();
  
  beginShape();
  vertex(240,0);
  vertex(290,0);
  vertex(270,137);
  vertex(220,137);
  vertex(240,0);
  endShape();
  
  //hands
  fill(235,204,171);
  beginShape();
  vertex(130,137);
  quadraticVertex(140,150,139,161);
  vertex(147,175);
  quadraticVertex(148,183,140,181);
  vertex(130,164);
  vertex(134,194);
  quadraticVertex(131,200,124,196);
  vertex(118,165);
  vertex(116,200);
  quadraticVertex(111,204,106,200);
  vertex(107,163);
  vertex(100,194);
  quadraticVertex(95,200,90,194);
  vertex(95,164);
  vertex(87,180);
  quadraticVertex(79,183,77,175);
  vertex(86,159);
  vertex(96,137);
  endShape();
  
  beginShape();
  vertex(264,137);
  vertex(273,159);
  vertex(280,183);
  quadraticVertex(278,192,270,186);
  vertex(263,165);
  vertex(264,198);
  quadraticVertex(260,203,254,198);
  vertex(252,166);
  vertex(246,204);
  quadraticVertex(242,208,236,203);
  vertex(239,168);
  vertex(228,196);
  quadraticVertex(224,201,218,196);
  vertex(227,165);
  vertex(215,182);
  quadraticVertex(206,184,205,176);
  vertex(217,159);
  quadraticVertex(218,147,226,137);
  endShape();
  
  //food bowl
  beginShape();
  fill(255,25,25);
  vertex(139,185);
  quadraticVertex(135,196,139,205);
  vertex(207,205);
  quadraticVertex(212,194,207,185);
  quadraticVertex(170,192,139,185);
  endShape();
  //food
  beginShape();
  fill(150,75,0);
  vertex(207,185);
  quadraticVertex(205,178,196,175);
  quadraticVertex(190,170,185,176);
  quadraticVertex(180,172,176,177);
  quadraticVertex(169,171,164,177);
  quadraticVertex(156,172,151,178);
  quadraticVertex(145,170,140,185);
  quadraticVertex(170,191,207,185);
  endShape();
  pop();
}
    
  }
  else if (pageNum == 3){
    background(135,206,250);
    //text("page 3", 100,100);
 
  fill(255,255,255);
  stroke(000);
  strokeWeight(1);
  beginShape();
  vertex(207,177);
  quadraticVertex(175,170,138,190);
  quadraticVertex(140,193,145,191);
  quadraticVertex(117,204,122,213);
  vertex(127,210);
  quadraticVertex(105,228,110,244);
  quadraticVertex(113,247,114,242);
  quadraticVertex(111,260,115,263);
  quadraticVertex(118,264,118,259);
  quadraticVertex(119,272,124,275);
  vertex(133,290);
  vertex(133,284);
  quadraticVertex(137,295,145,300);
  vertex(144,294);
  quadraticVertex(152,307,167,305);
  quadraticVertex(185,316,209,307);
  quadraticVertex(216,305,223,296);
  vertex(220,304);
  quadraticVertex(228,302,233,292);
  quadraticVertex(237,294,243,281);
  quadraticVertex(247,280,247,271);
  quadraticVertex(253,269,254,260);
  quadraticVertex(263,256,252,232);
  vertex(257,233);
  quadraticVertex(256,218,242,205);
  quadraticVertex(251,200,241,192);
  vertex(228,190);
  quadraticVertex(235,186,222,181);
  vertex(207,177);
  endShape();
  
//body
beginShape();
 vertex(143,299);
 quadraticVertex(135,310,140,320);
 quadraticVertex(135,335,145,334);
 quadraticVertex(140,346,149,349); 
  quadraticVertex(147,371,153,375);
  quadraticVertex(156,389,170,389);
  quadraticVertex(177,395,182,388);
  quadraticVertex(191,387,187,374);
  quadraticVertex(192,399,201,384);
  quadraticVertex(207,392,213,388);
  quadraticVertex(219,392,225,388);
  quadraticVertex(241,392,255,384);
  quadraticVertex(276,379,274,352);
  quadraticVertex(280,344,273,332);
  quadraticVertex(278,325,262,310);
  quadraticVertex(265,303,250,299);
  quadraticVertex(248,293,232,295);
endShape();
  //tail
  beginShape();
  vertex(241,295);
  quadraticVertex(245,285,252,283);
  quadraticVertex(256,278,265,281);
  quadraticVertex(272,282,271,289);
  quadraticVertex(273,299,263,307);
  endShape();
  
   //head details
  beginShape();
  vertex(168,250);
  quadraticVertex(138,253,140,275);
  quadraticVertex(146,289,162,299);
  quadraticVertex(167,298,164,289);
  quadraticVertex(174,300,174,286);
  endShape();
  
  beginShape();
  vertex(204,250);
  quadraticVertex(230,253,232,274);
  quadraticVertex(229,283,220,290);
  quadraticVertex(205,305,207,289);
  quadraticVertex(199,299,196,286);
  endShape();
  
  beginShape();
  vertex(162,265);
  quadraticVertex(160,290,186,274);
  quadraticVertex(209,286,207,265)
  endShape();
  
  //body details
  beginShape();
  vertex(226,388);
  quadraticVertex(232,385,230,380);
  quadraticVertex(240,375,237,367);
  quadraticVertex(246,363,241,355);
  quadraticVertex(245,350,240,343);
  endShape();
  
  //mouth
  beginShape();
  vertex(174,282);
  quadraticVertex(183,280,186,274);
  quadraticVertex(188,279,197,280);
  quadraticVertex(195,288,185,291);
  quadraticVertex(177,289,174,282);
  endShape();
  
  //tongue
  fill(255,192,203);
  beginShape();
  vertex(192,287);
  quadraticVertex(190,283,186,285);
  quadraticVertex(182,284,178,286);
  quadraticVertex(184,294,192,287);
  endShape();
  
  //nose
  fill(0,0,0);
  ellipse(186,260,20,15);
  
  //left eye
  fill(0,0,0);
  noStroke();
  ellipse(170,241,17,17);
  //right eye
  ellipse(199,241,17,17);
  //pupils
  fill(255,255,255);
  ellipse(168,238,5,5);
  ellipse(197,238,5,5);
    
    //food bowl
  beginShape();
  fill(255,25,25);
  vertex(72,381);
  quadraticVertex(96,388,118,381);
  quadraticVertex(122,374,119,368);
  quadraticVertex(95,372,75,368);
  vertex(78,376,72,381);
  endShape();
  
  fill(150,75,0);
  beginShape();
  vertex(119,369);
  quadraticVertex(117,363,112,361);
  quadraticVertex(107,357,103,361);
  quadraticVertex(97,356,94,361);
  quadraticVertex(89,358,86,363);
  quadraticVertex(78,361,76,368);
  quadraticVertex(96,372,119,369);
  endShape();
  }
  else if (pageNum == 4){
    background(135,206,250);
    //text("page 4", 100,100);
    
  translate(dogTranslation,0);
  dogTranslation -= 10;
  if(dogTranslation < -370){
    dogTranslation =210;
  }
    
  beginShape();
  fill(255,255,255);
  vertex(230,315);
  quadraticVertex(208,320,196,302);
  quadraticVertex(192,289,207,286);
  quadraticVertex(193,247,227,241);
  quadraticVertex(270,240,267,270);
  quadraticVertex(274,278,277,290);
  quadraticVertex(289,284,311,288);
  quadraticVertex(318,279,328,280);
  quadraticVertex(336,282,335,290);
  quadraticVertex(332,296,324,296);
  quadraticVertex(331,304,331,315);
  quadraticVertex(369,320,359,349);
  quadraticVertex(335,351,309,345);
  quadraticVertex(279,349,255,347);
  quadraticVertex(233,361,213,362);
  quadraticVertex(191,358,200,342);
  quadraticVertex(213,329,229,325);
  quadraticVertex(227,321,230,315);
  endShape();
  
  //eye
  fill(0,0,0);
  ellipse(216,285,10,10);
  fill(255,255,255);
  ellipse(217,283,5,5);
  fill(0,0,0);
  ellipse(199,294,6,7);
  
//tennisball
  noStroke();
  fill(223,225,79);
  ellipse(197,313,12,12);
  
  }
  else if (pageNum == 5){
    background(135,206,250);
    //text("page 5", 100,100);
    
      //food bowl
  beginShape();
  noStroke();
  fill(255,25,25);
  vertex(72,381);
  quadraticVertex(96,388,118,381);
  quadraticVertex(122,374,119,368);
  quadraticVertex(95,372,75,368);
  vertex(78,376,72,381);
  endShape();
 
  fill(255,255,255);
  stroke(000);
  strokeWeight(1);
  beginShape();
  vertex(129,161);
  quadraticVertex(106,161,89,177);
  quadraticVertex(60,202,66,243);
  quadraticVertex(61,287,89,290);
  quadraticVertex(99,297,114,296);
  quadraticVertex(137,296,156,289);
  quadraticVertex(171,287,176,276);
  quadraticVertex(191,272,196,261);
  vertex(203,250);
  quadraticVertex(220,230,199,203);
  quadraticVertex(167,161,129,161);
  endShape();
  
  beginShape();
  vertex(151,165);
  quadraticVertex(170,156,186,158);
  quadraticVertex(239,151,297,161);
  quadraticVertex(325,166,337,182);
 quadraticVertex(363,198,372,234);
  quadraticVertex(377,277,336,290);
  quadraticVertex(301,294,269,292);
  quadraticVertex(214,297,178,289);
  quadraticVertex(175,284,178,277);
  endShape();
  //leg
  beginShape();
  vertex(271,199);
  quadraticVertex(237,210,228,262);
  quadraticVertex(213,258,198,259);
  quadraticVertex(182,262,178,277);
  endShape();
  //face details
  beginShape();
  vertex(101,277);
  quadraticVertex(92,253,113,235);
  quadraticVertex(106,239,102,237);
  endShape();
  
  beginShape();
  vertex(173,250);
  quadraticVertex(159,224,133,227);
  quadraticVertex(144,225,146,221);
  endShape();
  
  beginShape();
  vertex(115,258);
  quadraticVertex(121,260,127,254);
  quadraticVertex(143,253,144,246);
  endShape();
  
  beginShape();
  vertex(89,290);
  quadraticVertex(99,265,85,244);
  endShape();
  
  beginShape();
  vertex(152,165);
  quadraticVertex(165,180,162,203);
  quadraticVertex(152,220,146,201);
  quadraticVertex(139,183,140,163);
  endShape();
  
  //nose
  fill(0,0,0);
  beginShape();
  vertex(114,245);
  quadraticVertex(114,236,122,235);
  quadraticVertex(132,233,134,241);
  quadraticVertex(132,246,126,251);
  quadraticVertex(118,250,114,245);
  endShape();
  
  //press Z sleeping dog
  textSize(50);
  text(key, 138, 136);
  text(key, 164, 102);
  text(key, 193, 67);
    
  }
  else if (pageNum == 6){
    background(135,206,250);
    text("The End", 100,200);
  }
  
}

//mousePressed() function will run each time the mouse is clicked
function mousePressed(){
  //if the numerical value of the current page is less than the total number of pages, we can increment the pageNum variable's value and move to the next page
  if (pageNum < numPages){
    pageNum++;
  }
  
  //otherwise, reset to first page
  else{
    pageNum = 1;
  }
  
  //after each click, print the current page number to the console
  console.log(pageNum);
}