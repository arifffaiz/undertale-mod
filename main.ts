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
    let myBoss = sprites.create(assets.image`boss`, SpriteKind.Enemy)
    myBoss.setStayInScreen(true)
    scene.setBackgroundImage(assets.image`fight menu`)
    myBoss.setPosition(80, 37)
    let myButton = sprites.create(assets.image`fightbar`, SpriteKind.Player)
    let myButton1 =sprites.create(assets.image`actbar`, SpriteKind.Player)
    let myButton2 = sprites.create(assets.image`itembar`, SpriteKind.Player)
    let myButton3 = sprites.create(assets.image`mercybar`, SpriteKind.Player)
    //let mySprite = sprites.create(assets.image`player`, SpriteKind.Player)
}