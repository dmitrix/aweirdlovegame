LD28.Hearticle = function(game){};
LD28.Hearticle.prototype = {
        preload:function(){
            game.load.image('potato', 'res/images/guy.png');
            game.load.image('background', 'res/images/background.png');
			game.load.spritesheet('bride', 'res/images/bride.png', 32, 68);
			game.load.spritesheet('groom', 'res/images/groom.png', 32, 68);
			game.load.image('wedding', 'res/images/wedding.png');
			game.load.image('hearticles', 'res/images/hearticles.png');
        },
		
		
        create:function(){
            game.add.sprite(0, 0, 'background');
            
			//game.camera.x = 0;
			//game.camera.y = 0;
			//game.camera.setPosition(0,0);
			//game.add.sprite(155,20,'wedding');
			//game.add.text(game.world.centerX-160,game.world.centerY-20,'GameOver', { fontSize: '32px', fill: '#000'});
            //button = game.add.button(game.world.centerX-46, game.world.centerY+20, 'potato', function(){game.state.start('OverWorld');}, this);
			
			var emitter = game.add.emitter(725,180,250);
			emitter.makeParticles('hearticles');
			
			emitter.minParticleSpeed.setTo(-100,-100);
			emitter.maxParticleSpeed.setTo(100,0);
			emitter.gravity = -2;
			emitter.maxRotation = 15;
			emitter.minRotation = -15;
			emitter.start(false, 1000, 500);
			
			
        }
};