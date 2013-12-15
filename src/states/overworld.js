LD28.OverWorld = function(game){};

var c = 0;

LD28.OverWorld.prototype = {
	
	preload:function(){
		// Load Sprites
		game.load.image('background', 'res/images/background.png');
		game.load.spritesheet('girl', 'res/images/girl.png',32,68);
		game.load.spritesheet('guy', 'res/images/guy.png', 32, 68);
		
		// Load Tiles
		game.load.tilemap('map', 'res/maps/finalmap.json', null, Phaser.Tilemap.TILED_JSON);
		game.load.tileset('tiles', 'res/images/tiles.png', 32, 32);
		
		// Load Particles
		game.load.image('hearticles', 'res/images/hearticles.png');
	},
	
	// Define Variables:
	guy:'',
	cursors:'',
	background:'',
	map:'',
	tileset:'',
	layer:'',
	girl:'',
	facingRight:'',
	jumping:'',
	secondMap:'',
	secondTileSet:'',
	secondLayer:'',
	emitter:'',
	
	
	create:function(){
		// Facing Variable
		facingRight = false;
		
		game.stage.backgroundColor = '#88C1FF';
		
		// Background
			background = game.add.sprite(0, 0, 'background');
			background.fixedToCamera = true;
		
		// Tiles
			map = game.add.tilemap('map');
			tileset = game.add.tileset('tiles');
			tileset.setCollisionRange(1, 33, true, true, true, true);
			//tileset.setCollisionRange(34,36,true,true,true,true);
			tileset.setCollisionRange(40,79,true,true,true,true);
			
			layer = game.add.tilemapLayer(0,0,1024,640,tileset,map,0);
			layer.resizeWorld();
		
		// Hearts
			emitter = game.add.emitter(55, game.world.height-260,250);
			emitter.makeParticles('hearticles');
			
			emitter.minParticleSpeed.setTo(-100,-100);
			emitter.maxParticleSpeed.setTo(100,0);
			emitter.gravity = -2;
			emitter.maxRotation = 15;
			emitter.minRotation = -15;
			emitter.start(false, 1000, 500);
		
		// Girl
			girl = game.add.sprite(50, game.world.height - 260, 'girl');
			
			// Physics
			girl.body.bounce.y = 0.0;
			girl.body.gravity.y = 10;
			girl.body.collideWorldBounds = true;
			
			// Animations
			//girl.animations.add('girlIdleRight', [1,2], 1, true);
			//girl.animations.add('walkingRight', [1], 1, true);
		
		// Guy
			guy = game.add.sprite(256, game.world.height - 300, 'guy');
			
			// Physics
			guy.body.bounce.y = 0.0;
			guy.body.gravity.y = 10;
			guy.body.collideWorldBounds = true;
			guy.anchor.setTo(0.5, 0.5);
			
			// Animations
			guy.animations.add('idleRight', [1,2], 1, true);
			
		// Camera
			game.camera.setSize(1024,640);
			game.camera.follow(guy);
			
		// Keyboard
			cursors = game.input.keyboard.createCursorKeys();
	}
	,
	
	update:function(){
		// Collision
		game.physics.collide(guy,layer);
		game.physics.collide(girl,layer);
		
		// Overlap
		game.physics.overlap(guy, girl, this.gameOver, null, this);
		game.physics.collide(girl, layer);
		
		if (c < 200){
			c++;
		}
		
		//girl.animations.play('idleRight');
		
		emitter.x = girl.body.x+20;
		emitter.y = girl.body.y;
		emitter.y = girl.body.y;
	
		if(girl.body.velocity.x == 0 && girl.body.touching.down){
			girl.body.velocity.y = -250;
		}
		
		// Reset girl velocity
		guy.body.velocity.x = 0;
		if (guy.body.x > girl.body.x){
			
			//if (c > 60){
				girl.body.velocity.x = c;
			//}
			
			
			girl.frame = 1;
		}else{
			
			//if (c > 60){
				girl.body.velocity.x = -c;
			//}
			
			girl.frame = 0;
		}
			
		
		
		if (game.input.keyboard.isDown(Phaser.Keyboard.LEFT)
			|| game.input.keyboard.isDown(Phaser.Keyboard.A)){
			
			// Move Left
			guy.body.velocity.x = -250;
			facingRight = false;
			guy.frame = 0;
			
		} else if (game.input.keyboard.isDown(Phaser.Keyboard.RIGHT)
			|| game.input.keyboard.isDown(Phaser.Keyboard.D)){
			
			// Move Right
			guy.body.velocity.x = 250;
			facingRight = true;
			guy.frame = 1;
			
		}else{
			// Stand Still
			//guy.animations.stop();
			
			if(facingRight){
				guy.animations.play('idleRight');
				//guy.frame = 1;
			}else{
				guy.frame = 0;
			}
		}
		
		// Check to see if the guy is jumping
		if (guy.body.touching.down){
			jumping = false;
		}else{
			jumping = true;
		}
		
		// Press SPACEBAR to jump
		if (game.input.keyboard.isDown(Phaser.Keyboard.SPACEBAR) && !jumping){
			guy.body.velocity.y = -250;
		}
		
		
	},
	
	gameOver:function(){
		//game.camera.kill();
		game.state.start('GameOver');
	}
};