const newClock= require('./exercise3.js');

const clockInstance= new newClock("wooooo");
clockInstance.on("wooooo",function(){
    console.log(this.message)
});
clockInstance.tick();