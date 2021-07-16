var slideshow, slideShow2;
var startImage ,startImageSprite;
var Next;
var moster1standing ,moster1roaring;
var monster1;
var main_characterStanding;
var gameState;
var background1;


function preload(){
slideshow = loadAnimation("images/1.png", "images/2.png", "images/3.png", "images/4.png", "images/5.png", "images/6.png", "images/7.png", "images/8.png", "images/9.png",)
startImage = loadImage("images/11.jpg")
monster1standing = loadAnimation("\images\Monster images\Monster images\Monster1\m11.png", "\images\Monster images\Monster images\Monster1\m12.png")
main_characterStanding = loadAnimation("images/standing.gif")
background1 = loadImage("bg1.jpg")
}





function setup() {
  createCanvas(windowWidth,windowHeight);
  slideshow.frameDelay = 60;
  slideShow2 = createSprite(windowWidth/2, windowHeight/2, 10,10)
  slideShow2.addAnimation('slideshow', slideshow)
  slideShow2.scale = 0.75
  console.log(frameCount)

}

function draw() {
 
  console.log(frameCount)

  if(frameCount === 530){
    slideShow2.remove()
    image(startImage,0,0,1600,800)
    Next = createButton("Next")
     Next.position(windowWidth/2,windowHeight/2+50)
     Next.mousePressed(() => { 
      gameState = 'level1'
      console.log(gameState)
     });
  }

  if(gameState === 'level1'){
    image(background1,0,0,1600,800)
    Next.hide()
  }
  
  drawSprites();
}

