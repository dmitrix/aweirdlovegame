var game = new Phaser.Game(1024, 640, Phaser.AUTO, 'Game');

// Add the States
game.state.add('MainMenu', new LD28.MainMenu());
game.state.add('OverWorld', new LD28.OverWorld());
game.state.add('GameOver', new LD28.GameOver());  
game.state.add('Hearticle', new LD28.Hearticle());

//begin game
game.state.start('MainMenu');