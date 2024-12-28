const BlockType = require('../../extension-support/block-type');
const ArgumentType = require('../../extension-support/argument-type');
const TargetType = require('../../extension-support/target-type');

class Scratch3YourExtension {

    constructor (runtime) {
        this.ws = new WebSocket("ws://127.0.0.1:10000/ws");
        this.command_counter = 0
    }

    /**
     * Returns the metadata about your extension.
     */
    getInfo () {
        return {
            // unique ID for your extension
            id: 'yourScratchExtension',

            // name that will be displayed in the Scratch UI
            name: 'Robo-Yolka',

            // colours to use for your extension blocks
            color1: '#000099',
            color2: '#660066',

            // icons to display
            menuIconURI: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAAFCAAAAACyOJm3AAAAFklEQVQYV2P4DwMMEMgAI/+DEUIMBgAEWB7i7uidhAAAAABJRU5ErkJggg==',

            // your Scratch blocks
            blocks: [
                {
                    // name of the function where your block code lives
                    opcode: 'connect_to',

                    // type of block - choose from:
                    //   BlockType.REPORTER - returns a value, like "direction"
                    //   BlockType.BOOLEAN - same as REPORTER but returns a true/false value
                    //   BlockType.COMMAND - a normal command block, like "move {} steps"
                    //   BlockType.HAT - starts a stack if its value changes from false to true ("edge triggered")
                    blockType: BlockType.COMMAND,

                    // label to display on the block
                    text: 'Подключиться к ёлочке',

                    // true if this block should end a stack
                    terminal: false,

                    // where this block should be available for code - choose from:
                    //   TargetType.SPRITE - for code in sprites
                    //   TargetType.STAGE  - for code on the stage / backdrop
                    // remove one of these if this block doesn't apply to both
                    filter: [ TargetType.SPRITE, TargetType.STAGE ],

                    // arguments used in the block
                    arguments: {
                        
                    }
                },
                {
                    // name of the function where your block code lives
                    opcode: 'write_end',

                    // type of block - choose from:
                    //   BlockType.REPORTER - returns a value, like "direction"
                    //   BlockType.BOOLEAN - same as REPORTER but returns a true/false value
                    //   BlockType.COMMAND - a normal command block, like "move {} steps"
                    //   BlockType.HAT - starts a stack if its value changes from false to true ("edge triggered")
                    blockType: BlockType.COMMAND,

                    // label to display on the block
                    text: 'Записать программу',

                    // true if this block should end a stack
                    terminal: true,

                    // where this block should be available for code - choose from:
                    //   TargetType.SPRITE - for code in sprites
                    //   TargetType.STAGE  - for code on the stage / backdrop
                    // remove one of these if this block doesn't apply to both
                    filter: [ TargetType.SPRITE, TargetType.STAGE ],

                    // arguments used in the block
                    arguments: {
                        
                    }
                },
                {
                    // name of the function where your block code lives
                    opcode: 'myFirstBlock',

                    // type of block - choose from:
                    //   BlockType.REPORTER - returns a value, like "direction"
                    //   BlockType.BOOLEAN - same as REPORTER but returns a true/false value
                    //   BlockType.COMMAND - a normal command block, like "move {} steps"
                    //   BlockType.HAT - starts a stack if its value changes from false to true ("edge triggered")
                    blockType: BlockType.COMMAND,

                    // label to display on the block
                    text: 'Залить всю ёлку [FILL_COLOR]',

                    // true if this block should end a stack
                    terminal: false,

                    // where this block should be available for code - choose from:
                    //   TargetType.SPRITE - for code in sprites
                    //   TargetType.STAGE  - for code on the stage / backdrop
                    // remove one of these if this block doesn't apply to both
                    filter: [ TargetType.SPRITE, TargetType.STAGE ],

                    // arguments used in the block
                    arguments: {
                        FILL_COLOR: {
                            // default value before the user sets something
                            defaultValue: '#ff0000',

                            // type/shape of the parameter - choose from:
                            //     ArgumentType.ANGLE - numeric value with an angle picker
                            //     ArgumentType.BOOLEAN - true/false value
                            //     ArgumentType.COLOR - numeric value with a colour picker
                            //     ArgumentType.NUMBER - numeric value
                            //     ArgumentType.STRING - text value
                            //     ArgumentType.NOTE - midi music value with a piano picker
                            type: ArgumentType.COLOR
                        }
                    }
                },
                    {
                        opcode: 'do_pause',
                        blockType: BlockType.COMMAND,
                        text: 'Подождать [TIME_DELAY] секунд',
                        terminal: false,
                        filter: [ TargetType.SPRITE, TargetType.STAGE ],
                        arguments: {
                            TIME_DELAY: {
                                defaultValue: 1,
                                type: ArgumentType.NUMBER
                            }
                        }
                    },
                    {
                        opcode: 'do_fill_bottom',
                        blockType: BlockType.COMMAND,
                        text: 'Залить нижнюю площадку [FILL_COLOR] цветом',
                        terminal: false,
                        filter: [ TargetType.SPRITE, TargetType.STAGE ],
                        arguments: {
                            FILL_COLOR: {
                                defaultValue: "#ff0000",
                                type: ArgumentType.COLOR
                            }
                        }
                    },
                    {
                        opcode: 'do_fill_side',
                        blockType: BlockType.COMMAND,
                        text: 'Залить по бокам [FILL_COLOR] цветом',
                        terminal: false,
                        filter: [ TargetType.SPRITE, TargetType.STAGE ],
                        arguments: {
                            FILL_COLOR: {
                                defaultValue: "#ff0000",
                                type: ArgumentType.COLOR
                            }
                        }
                    },
                    {
                        opcode: 'do_double_color',
                        blockType: BlockType.COMMAND,
                        text: 'Залить попеременно светодиоды [COLOR_1] и [COLOR_2] цветами',
                        terminal: false,
                        filter: [ TargetType.SPRITE, TargetType.STAGE ],
                        arguments: {
                            COLOR_1: {
                                defaultValue: "#ff0000",
                                type: ArgumentType.COLOR
                            },
                            COLOR_2: {
                                defaultValue: "#ff0000",
                                type: ArgumentType.COLOR
                            }
                        }
                    },
                    {
                        opcode: 'do_set_led',
                        blockType: BlockType.COMMAND,
                        text: 'Напрямую установить у светодиода [LED_N] цвет [COLOR]',
                        terminal: false,
                        filter: [ TargetType.SPRITE, TargetType.STAGE ],
                        arguments: {
                            LED_N: {
                                defaultValue: 1,
                                type: ArgumentType.NUMBER
                            },
                            COLOR: {
                                defaultValue: "#ff0000",
                                type: ArgumentType.COLOR
                            }
                        }
                    },
                    {
                        opcode: 'do_set_brightness',
                        blockType: BlockType.COMMAND,
                        text: 'Установить яркость [BRI]',
                        terminal: false,
                        filter: [ TargetType.SPRITE, TargetType.STAGE ],
                        arguments: {
                            BRI: {
                                defaultValue: 1,
                                type: ArgumentType.NUMBER
                            },
                        }
                    }
            ]
        };
    }


    /**
     * implementation of the block with the opcode that matches this name
     *  this will be called when the block is used
     */
    myFirstBlock ({ FILL_COLOR }) {
        // example implementation to return a string
        cur_n = this.command_counter
        this.command_counter += 1
        this.ws.send("fill " + FILL_COLOR)
        return;
    }

    connect_to() {
        cur_n = this.command_counter
        this.command_counter += 1
        this.ws.send("start")
    }

    write_end() {
        cur_n = this.command_counter
        this.command_counter += 1
        this.ws.send("end")
    }

    do_pause({TIME_DELAY}) {
        this.ws.send("sleep " + TIME_DELAY)
    }

    do_fill_bottom({FILL_COLOR}) {
        this.ws.send("fill_bottom " + FILL_COLOR)
    }

    do_fill_side({FILL_COLOR}) {
        this.ws.send("fill_side " + FILL_COLOR)
    }

    do_double_color({COLOR_1, COLOR_2}) {
        this.ws.send("double " + COLOR_1 + " " + COLOR_2)
    }

    do_set_led({LED_N, COLOR}) {
        this.ws.send("set_led " + LED_N + " " + COLOR)
    }

    do_set_brightness({BRI}) {
        this.ws.send("brightness " + BRI)
    }
}

module.exports = Scratch3YourExtension;
