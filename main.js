var config = {
    type: Phaser.AUTO,
    width: 1280,
    height: 720,
    scene: {
        preload: preload,
        create: create,
        update: update
    },
    pixelArt: true,
    roundPixels: false
};

let game = new Phaser.Game(config);
let map;

function preload() {
    console.log('Preloading...');
    this.load.image('tiles', 'assets/tiles.png');
}

function create() {
    console.log('Creating...');

    map = this.make.tilemap({
        tileWidth: 16,
        tileHeight: 16,
        width: 20,
        height: 11
    });

    var tileset = map.addTilesetImage('tiles', null, 16, 16, 1, 2);

    let layer = map.createBlankDynamicLayer('ground', tileset);

    layer.weightedRandomize(0, 0, 20, 11, [{
            index: 0,
            weight: 1
        },
        {
            index: 1,
            weight: 5
        }
    ]);

    layer = map.convertLayerToStatic(layer);
    layer.setScale(4);
}

function update() {

}