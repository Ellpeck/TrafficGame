var config = {
    type: Phaser.AUTO,
    width: 1280,
    height: 720,
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

let game = new Phaser.Game(config);

function preload() {
    console.log('Preloading...');
}

function create() {
    console.log('Creating...');
}

function update() {

}