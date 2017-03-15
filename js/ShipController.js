class ShipController {
  static get SHIP_SPEED(){ return 400; }

  constructor(x, y, spriteName, configs){
    this.sprite = Nakama.game.add.sprite(x, y, 'assets', spriteName);
    Nakama.game.physics.arcade.enable(this.sprite);
    this.sprite.body.collideWorldBounds = true;
    this.configs = configs;
  }

  update(){
    if(Nakama.keyboard.isDown(this.configs.up)){
      this.sprite.body.velocity.y = -ShipController.SHIP_SPEED;
    }
    else if(Nakama.keyboard.isDown(this.configs.down)){
      this.sprite.body.velocity.y = ShipController.SHIP_SPEED;
    }
    else{
      this.sprite.body.velocity.y = 0;
    }

    if(Nakama.keyboard.isDown(this.configs.left)){
      this.sprite.body.velocity.x = -ShipController.SHIP_SPEED;
    }
    else if(Nakama.keyboard.isDown(this.configs.right)){
      this.sprite.body.velocity.x = ShipController.SHIP_SPEED;
    }
    else{
      this.sprite.body.velocity.x = 0;
    }

    if(Nakama.keyboard.isDown(this.configs.fire)){
      this.tryFire();
    }
  }

  tryFire(){
    this.fire();
  }

  fire(){
    new BulletController(
      this.sprite.position,
      new Phaser.Point(0, -1),
      "BulletType1.png"
    )
  }
}
