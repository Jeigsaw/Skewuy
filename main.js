let viewHeight = 200; // input height < 200px; defaults to 200px
let frameCount = 15; // input frameCount
let frameGutter = -86; // input frameGutter
let frameWidth = 427;   // default 427

viewHeight = putUnits(viewHeight);
frameGutter = putUnits(frameGutter);

// every frame -> 1920 x 1080 px

window.onload = function() {
    // the sprite image
    let spriteObj = $("#card-hero");
    spriteObj.css("height", viewHeight);
    
    // midpoint spriteObj -- use as origin
    const originNew = spriteObj[0].clientWidth;
    // console.log(spriteObj[0].clientWidth);
    const initialPos = parseInt(spriteObj.css("background-position-x"));

    spriteObj.on("mouseover", function(e){
        spriteObj.on("mousemove", function (event) {
            // divide the range of Mouse offsetX into number equal to frameCount 
            let mousePos = Math.trunc((event.offsetX/originNew)*frameCount);
            
            if (mousePos >= frameCount) {
                mousePos = 0;
            }

            let newPos = putUnits(initialPos - (mousePos * frameWidth));  
            spriteObj.css("background-position-x", newPos);
        
        })
    })



    

} // document load=======

function putUnits(value) {
    return value + "px"
}