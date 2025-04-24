class Monster extends Phaser.Scene {
    constructor() {
        super("monsterScene");
        this.my = {sprite: {}};  // Create an object to hold sprite bindings

        //Create constants for the monster location
        this.bodyX = 200;
        this.bodyY = 350; 
    }

    // Use preload to load art and sound assets before the scene starts running.
    preload() {
        // Assets from Kenny Assets pack "Monster Builder Pack"
        // https://kenney.nl/assets/monster-builder-pack
        this.load.setPath("./assets/");

        // Load sprite atlas
        this.load.atlasXML("monsterParts", "spritesheet_default.png", "spritesheet_default.xml");
        
        // update instruction text
        document.getElementById('description').innerHTML = '<h2>Monster.js<br>S - smile // F - show fangs<br>A - move left // D - move right</h2>'
    }

    create() {
        let my = this.my;   // create an alias to this.my for readability
       this.monsterParts = [];
        this.sKey= this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
        this.fKey= this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.F);
        this.aKey= this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        this.dKey= this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);

        // Create the main body sprite
        //
        // this.add.sprite(x,y, "{atlas key name}", "{name of sprite within atlas}")
        //
        // look in spritesheet_default.xml for the individual sprite names
        // You can also download the asset pack and look in the PNG/default folder.

        //Body
        my.sprite.body = this.add.sprite(this.bodyX, this.bodyY, "monsterParts", "body_greenD.png");
        this.monsterParts.push(my.sprite.body);
       
        my.sprite.fangs = this.add.sprite(200,400, "monsterParts", "mouth_closed_fangs.png");
        this.monsterParts.push(my.sprite.fangs);

        // Mouth
        my.sprite.smile = this.add.sprite(200, 380, "monsterParts", "mouthD.png")
        this.monsterParts.push(my.sprite.smile);

        // Arms
        my.sprite.rightArm = this.add.sprite(300, 380, "monsterParts", "arm_greenB.png");
        this.monsterParts.push(my.sprite.rightArm);
        my.sprite.rightArm.rotation = Phaser.Math.DegToRad(-25);

        my.sprite.leftArm = this.add.sprite(100, 380, "monsterParts", "arm_greenB.png");
        my.sprite.leftArm.flipX = true;
        my.sprite.leftArm.rotation = Phaser.Math.DegToRad(25);
        this.monsterParts.push(my.sprite.leftArm);

        // Right Ear
        my.sprite.rightEar = this.add.sprite(255, 270, "monsterParts", "detail_green_horn_small.png");
        this.monsterParts.push(my.sprite.rightEar);

        // Left Ear
        my.sprite.leftEar = this.add.sprite(155, 270, "monsterParts", "detail_green_horn_small.png");
        my.sprite.leftEar.flipX = true;
        this.monsterParts.push(my.sprite.leftEar);

        my.sprite.fangs.setVisible(true);
        my.sprite.smile.setVisible(false);

        // Right Leg
        my.sprite.rightLeg = this.add.sprite(250, 490, "monsterParts", "leg_greenA.png");
        this.monsterParts.push(my.sprite.rightLeg);

        // Left Leg
        my.sprite.leftLeg = this.add.sprite(150, 490, "monsterParts", "leg_greenA.png");
        my.sprite.leftLeg.flipX = true;
        this.monsterParts.push(my.sprite.leftLeg);

        // Eyes
        my.sprite.eye = this.add.sprite(190, 325, "monsterParts", "detail_white_ear_round.png");
        my.sprite.eye.rotation = Phaser.Math.DegToRad(90);
        this.monsterParts.push(my.sprite.eye);

        my.sprite.eye = this.add.sprite(170, 310, "monsterParts", "eye_human_green.png");
        this.monsterParts.push(my.sprite.eye);
        my.sprite.eye.rotation = Phaser.Math.DegToRad(90);



        my.sprite.eye = this.add.sprite(230, 310, "monsterParts", "eye_human_green.png");
        this.monsterParts.push(my.sprite.eye);
        my.sprite.eye.rotation = Phaser.Math.DegToRad(90);

        // Nose
        my.sprite.eye = this.add.sprite(200, 350, "monsterParts", "nose_brown.png");
        this.monsterParts.push(my.sprite.eye);

        // Smiling Action
        this.input.keyboard.on('keydown-S', () => {
            my.sprite.smile.setVisible(true);
            my.sprite.fangs.setVisible(false);
        })

        // Fang Action
        this.input.keyboard.on('keydown-F', () => {
            my.sprite.fangs.setVisible(true);
            my.sprite.smile.setVisible(false);
        })
    }   

    update() {
        let my = this.my;    // create an alias to this.my for readability
        let moveSpeed = 2;
        // when A is pressed
        if(this.aKey.isDown){
            for(let part of this.monsterParts){
                part.x -= moveSpeed;
            }
        }
        
        if(this.dKey.isDown){
            for(let part of this.monsterParts){
                part.x += moveSpeed;
            }
        }
       
    }

}