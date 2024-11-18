// the game itself
function doSomething () {
    myBoss = sprites.create(assets.image`boss`, SpriteKind.Enemy)
    myBoss.setStayInScreen(true)
    scene.setBackgroundImage(assets.image`fight menu`)
    myBoss.setPosition(80, 37)
    myButton = sprites.create(assets.image`fightbar`, SpriteKind.Player)
    myButton1 = sprites.create(assets.image`actbar`, SpriteKind.Player)
    myButton2 = sprites.create(assets.image`itembar`, SpriteKind.Player)
    myButton3 = sprites.create(assets.image`mercybar`, SpriteKind.Player)
    myButton.setPosition(22, 110)
    myButton1.setPosition(62, 110)
    myButton2.setPosition(102, 110)
    myButton3.setPosition(140, 110)
}
let myButton3: Sprite = null
let myButton2: Sprite = null
let myButton1: Sprite = null
let myButton: Sprite = null
let myBoss: Sprite = null
console.log("start")
// start
let textSprite = textsprite.create("untitled undertale mod")
textSprite.setPosition(80, 30)
game.splash("START")
sprites.destroy(textSprite)
doSomething()
