class BulletController{
  constructor(position, direction, spriteName){
    this.sprite = Nakama.game.add.sprite(position.x, position.y, 'assets', spriteName);
    Nakama.game.physics.arcade.enable(this.sprite);
    this.sprite.body.checkWorldBounds = true;
    this.sprite.body.outOfBoundsKill = true;
    this.sprite.body.velocity = direction.setMagnitude(BulletController.BULLET_SPEED);
  }
}

BulletController.BULLET_SPEED = 1500;
