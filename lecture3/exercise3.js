const EventEmitter = require('events');

class Clock extends EventEmitter {
    constructor(message){
        super();
        this.message=message;
    }
    tick(){
        setInterval(() => {
            this.emit(this.message);
          },1000);
        
    }
}

const myClock = new Clock("tick");
myClock.on("tick", function(){
    console.log(this.message);
});
myClock.tick();

module.exports= Clock

