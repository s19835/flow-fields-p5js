import particle  from "./particle.js";

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const width = canvas.width = window.innerWidth;
const height = canvas.height = window.innerHeight;
const noParticles = 100;
const particles = [];

//setting draw style
ctx.fillStyle = 'white';
ctx.strokeStyle = 'white';

//create the grid,
//this should return resolution, noColms, flowField for gridUpdate function args
function grid(width, height) {
    let flowField = [];
    let resolution = width * 0.01; //you can change this thing org: width * 0.01
    let rows = Math.floor(width/resolution);
    let cols = Math.floor(height/resolution);
    for (let y = 0; y < rows; y++) {
        for (let x = 0; x < cols; x++) {
            let angle = Math.cos(x * 0.1) * Math.sin(y * 0.1) * 0.5; // buy changing this you can play around with the art work//Math.floor(x/rows * Math.PI);//<-- this has some simple minimal look to it :)
            flowField.push(angle);  
        }
    }
    //console.log(flowField);
    return [resolution, cols, flowField];
}
let gridVlaues = grid(width, height);

for (let index = 0; index < noParticles; index++) {
    let p = new particle(width, height, ctx, 1);
    particles.push(p);
}

particles.forEach(particle => {
    function animate() {
        //ctx.clearRect(0, 0, width, height);
        particle.init();
        // p.update(speedX, speedY);
        //p.line();
        particle.gridUpdate(gridVlaues[0], gridVlaues[1], gridVlaues[2]);
        //p.gridLine(gridVlaues[0], gridVlaues[1], gridVlaues[2]);
        requestAnimationFrame(animate);
    }
    animate();
})

/****Need to modify so that when line move the tail will follow like a motion like -----------* 
 * ---------* 
 * ---------* 
 * ------------*
 * -------* */


//old codes -----------------------------------------------
//create multiple particles in canvas
// for (let index = 0; index < noParticles; index++) {
    
//     let p = new particle(width, height, ctx, 1);
//     // let speedX = Math.random();
//     // let speedY = Math.random();
//     function animate() {
//         //ctx.clearRect(0, 0, width, height);
//         history = p.init();
//         // p.update(speedX, speedY);
//         //p.line();
//         p.gridUpdate(gridVlaues[0], gridVlaues[1], gridVlaues[2]);
//         //p.gridLine(gridVlaues[0], gridVlaues[1], gridVlaues[2]);
//         requestAnimationFrame(animate);
//     }
//     particles.push(p);
//     animate();
// }
//console.log(particles);
// function createParticle(particles) {
//     let p = new particle(width, height, ctx, 1);
//     // let speedX = Math.random();
//     // let speedY = Math.random();
//     function animate() {
//         //ctx.clearRect(0, 0, width, height);
//         p.init();
//         // p.update(speedX, speedY);
//         //p.line();
//         p.gridUpdate(gridVlaues[0], gridVlaues[1], gridVlaues[2]);
//         //p.gridLine(gridVlaues[0], gridVlaues[1], gridVlaues[2]);
//         requestAnimationFrame(animate);
//     }
//     particles.push(p);
//     animate();
// }
// for (let index = 0; index < noParticles; index++) {
//     createParticle(particles);
// }