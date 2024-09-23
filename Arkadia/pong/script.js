let uto1 = document.getElementById("uto1");
let uto2 = document.getElementById("uto2");
let labda = document.getElementById("labda");
let uto1Y = 300;
let uto2Y = 300;
let labdaX = 0;
let labdaY = 0;
let labdaXSeb = 0;
let labdaYSeb = 0;

let uto1LeGomb = false;
let uto1FelGomb = false;
let uto2LeGomb = false;
let uto2FelGomb = false;
  
uto1.style.left = "40px";
uto2.style.left = "750px";

document.addEventListener('keydown', function(event) {
    if(event.keyCode==83) {uto1LeGomb = true};
    if(event.keyCode==87) {uto1FelGomb = true};
    if(event.keyCode==40) {uto2LeGomb = true};
    if(event.keyCode==38) {uto2FelGomb = true};
})

document.addEventListener('keyup', function(event) {
    if(event.keyCode==83) {uto1LeGomb = false};
    if(event.keyCode==87) {uto1FelGomb = false};
    if(event.keyCode==40) {uto2LeGomb = false};
    if(event.keyCode==38) {uto2FelGomb = false};
})


function loop() {
    if(uto1LeGomb) { uto1Y+= 5; };
    if(uto1FelGomb) { uto1Y-= 5; };
    if(uto2LeGomb) { uto2Y+= 5; };
    if(uto2FelGomb) { uto2Y-= 5; };
    labdaX += labdaXSeb;
    labdaY += labdaYSeb;

    //fal
    if(labdaY < 0 || labdaY > 600) {labdaYSeb = -labdaYSeb;}

    //baluto pattan
    if( labdaX < 0 && (labdaX > -5 || labdaX>=labdaXSeb-5) && Math.abs(labdaY-uto1Y)<=55 ) {
      labdaX=0;
      labdaXSeb=-labdaXSeb *1.1;
      labdaYSeb *= 1.1 ;
    }
    
    //bal kimegy
    if( labdaX < -50 ) {startLabda();}

    //jobbuto pattan
    if( labdaX > 700 && (labdaX < 705 || labdaX-700<=labdaXSeb+5) && Math.abs(labdaY-uto2Y)<=55 ) {
      labdaX=700;
      labdaXSeb=-labdaXSeb *1.1;
      labdaYSeb *= 1.1 ;
    }

    //jobb kimegy
    if( labdaX> 750) {startLabda();}

    uto1.style.top = uto1Y-50+"px";
    uto2.style.top = uto2Y-50+"px";
    labda.style.left = labdaX-5+50+"px";
    labda.style.top = labdaY-5+"px";
    window.requestAnimationFrame(loop);
}

function startLabda() {
    labdaX = 350;
    labdaY = 300;
    labdaXSeb = (Math.random()*3+2) * (Math.round(Math.random()) * 2 - 1);
    labdaYSeb = (Math.random()*3+2) * (Math.round(Math.random()) * 2 - 1);
}

startLabda();
loop();