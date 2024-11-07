console.log("start")
//start
let textSprite = textsprite.create("untitled undertale mod")
let textSprite2 = textsprite.create("Press A to start")
textSprite.setPosition(80, 30)
textSprite2.setPosition(80, 70)
controller.A.onEvent(ControllerButtonEvent.Pressed, function() {
    sprites.destroy(textSprite2)
    sprites.destroy(textSprite)
    doSomething()
})

//the game itself
function doSomething() {
    
    scene.setBackgroundImage(assets.image`fight`)
}