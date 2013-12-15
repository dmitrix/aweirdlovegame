LD28.GameOver = function(game){};
LD28.GameOver.prototype = {
        preload:function(){
            game.load.image('potato', 'res/images/guy.png');
            game.load.image('background', 'res/images/background.png');
			game.load.spritesheet('bride', 'res/images/bride.png', 32, 68);
			game.load.spritesheet('groom', 'res/images/groom.png', 32, 68);
			game.load.image('wedding', 'res/images/wedding.png');
			game.load.image('tears', 'res/images/tears.png');
        },
		
		background:'',
		wedding:'',
		
        create:function(){
			game.world.setBounds(0,0,1024,640);
            game.camera.setPosition(0,0);
			console.log(game.camera.x);
			
			
			background = game.add.sprite(0, 0, 'background');
			
			background.fixedToCamera = true;
            
			game.add.sprite(155,20,'wedding');
			
			//wedding.fixedToCamera = true;
			//game.add.text(game.world.centerX-160,game.world.centerY-20,'GameOver', { fontSize: '32px', fill: '#000'});
            //button = game.add.button(game.world.centerX-46, game.world.centerY+20, 'potato', function(){game.state.start('OverWorld');}, this);
			
			var emitter = game.add.emitter(game.camera.x+725,180,250);
			emitter.makeParticles('tears');
			
			emitter.minParticleSpeed.setTo(-400,-400);
			emitter.maxParticleSpeed.setTo(400,400);
			emitter.gravity = 15;
			
			emitter.start(false, 1000, 15);
			
			
			emitter = game.add.emitter(750,180,250);
			emitter.makeParticles('tears');
			
			emitter.minParticleSpeed.setTo(-400,-400);
			emitter.maxParticleSpeed.setTo(400,400);
			emitter.gravity = 10;
			emitter.start(false, 1000, 15);
			
			
        }
};