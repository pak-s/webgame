//calls mushroom and yeti 
const mushroom = document.getElementById("mushroom");
const yeti = document.getElementById("yeti");

//calls jump audio
let jumpSound = new Audio("jump.mp3");
jumpSound.volume = 0.2;


//stops jump function from being added multiple times during animation
function jump() {
  if (mushroom.classList != "jump") {
    mushroom.classList.add("jump");
    
    setTimeout(function () {
      mushroom.classList.remove("jump");
    }, 600);
    jumpSound.play();
  }
}

//find out how to change to spacebar
document.addEventListener("keydown", function (event) {
  jump();


//death check
let deadCheck = setInterval(function () {
  
  // records current mushroom Y position
  let mushroomTop = parseInt(window.getComputedStyle(mushroom).getPropertyValue("top"));

  // records current yeti X position
  let yetiLeft = parseInt(window.getComputedStyle(yeti).getPropertyValue("left"));

  // collision detection
    if (yetiLeft < 100 && yetiLeft > 0 && mushroomTop >= 425 ) {
    
      //stops yeti from animating again after dead
      yeti.style.animation = "none"
      yeti.style.display = "none"
    
      // game over message
      alert("Game Over");
    }
}, 10);


}
);