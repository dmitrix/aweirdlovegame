LD28.MainMenu = function(game){};
LD28.MainMenu.prototype = {
        preload:function(){
                game.load.image('potato', 'res/images/start.png');
                game.load.image('background', 'res/images/background.png');
        },
        create:function(){
                game.add.sprite(0, 0, 'background');
                game.add.text(game.world.centerX-160,game.world.centerY-20,'Weird Love Game', { fontSize: '32px', fill: '#000'});
                button = game.add.button(game.world.centerX-46, game.world.centerY+20, 'potato', function(){game.state.start('OverWorld');}, this);
        }
};