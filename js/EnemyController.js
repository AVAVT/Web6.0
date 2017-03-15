class EnemyController{
  constructor(x, y, spriteName, configs){
    this.sprite = Nakama.game.add.sprite(x, y, 'assets', spriteName);
    Nakama.game.physics.arcade.enable(this.sprite);
    this.sprite.body.collideWorldBounds = true;
    this.configs = configs;
    this.sprite.body.velocity.x = this.configs.speed;
  }

  update(){
    if(this.sprite.body.blocked.left){
      this.sprite.body.velocity.x = this.configs.speed;
    }
    else if(this.sprite.body.blocked.right){
      this.sprite.body.velocity.x = -this.configs.speed;
    }
  }
}
