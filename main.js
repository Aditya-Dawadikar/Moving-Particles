var cnvs = document.getElementById('cnvs')
var ctx = cnvs.getContext('2d')

function drawBoid(boid){
    ctx.fillStyle = boidMeta.color;
    ctx.beginPath();
    ctx.arc(boid.initX,boid.initY, boidMeta.radius, 0, 2 * Math.PI);
    ctx.fill();
}

function initBoid(){
    let direction = Math.random()
    let m = getSlope()
    let x = getRandomFromRange(respawn.x.min,respawn.x.max)
    let c = getRandomFromRange(respawn.x.min,respawn.x.max)
    let y;

    if(m>0){y = respawn.min;}else{y = respawn.max}

    if(direction<0.5){direction=-1}else{direction=1}

    boiddirective={
        m:m,
        initX:x,
        initY:y,
        c:c,
        hop:hopSpeed,
        direction:direction
    }
    return boiddirective
}

function init(){
    boidlist=[]
    boidGenerator()
    window.requestAnimationFrame(drawBoids)
}

function drawBoids(){
    ctx.canvas.width = 500
    ctx.canvas.height = 500
    ctx.globalCompositeOperation = 'destination-over'
    ctx.save()

    let newboidlist=[]
    boidlist.forEach(boid => {
        let newBoid=getNextLocation(boid)
        newboidlist.push(newBoid)    
    });
    boidlist=newboidlist
    boidlist.forEach(boid=>{
        drawBoid(boid)
    })
    drawNet()

    ctx.restore()

    window.requestAnimationFrame(drawBoids)
}

init()