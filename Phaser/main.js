var GameState = {
  init:function(){
    this.scale.scaleMode= Phaser.ScaleManager.SHOW_ALL;

  },
  preload:function(){
    this.load.image('ground','assets/image/ice-platform.png');
  },
  create:function(){
    this.ground = this.add.sprite(200, 200, 'ground');
    this.ground.anchor.setTo(0.5, 0.5);
    this.ground.x=300;
    this.ground.scale.setTo(0.5,0.5);
  },
  //always up to date
  update: function(){
    this.ground.angle +=1;
  },
};

//initiate Phaser Framework
var game = new Phaser.Game(800, 600, Phaser.AUTO);

game.state.add("GameState", GameState);
game.state.start("GameState");
