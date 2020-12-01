class Form{
    constructor(){}

    dispaly(){

        var Title=createElement('h2')
        Title.html("Car Racing Game")
        Title.position(500,0);

        var Input=createInput('')
        Input.position(500,150);

        var button=createButton('DONE')
        button.position(600,200);
        button.mousePressed(function(){

            Input.hide()
            button.hide()

            var name=Input.value()
            playerCount+= 1
            player.update(name)
            player.updateCount(playerCount)

            var Greeting=createElement('h3')
            Greeting.html('Welcome '+name)
            Greeting.position(520,250);

        })

    }
}