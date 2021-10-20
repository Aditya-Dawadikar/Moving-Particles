function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function getRandomFromRange(min, max) {
    return Math.random() * (max - min) + min;
  }

function getSlope(){
    let slope = getRandomFromRange(0.001,0.2)
    let sign = Math.random()
    if(sign<0.5){
        sign=-1
    }else{sign=1}
    return slope*10*sign
}

function getNextLocation(boiddirective){
    let m=boiddirective.m
    let initX=boiddirective.initX+boiddirective.hop*boiddirective.direction
    let initY=Math.floor(m*initX+boiddirective.c)
    if((initX<respawn.x.min || initX>respawn.x.max) || (initY<respawn.y.min || initY>respawn.y.max)){
        return initBoid()//respawn
    }
    newboiddirective = {
        m:m,
        initX:initX,
        initY:initY,
        c:boiddirective.c,
        hop:hopSpeed,
        direction:boiddirective.direction
    }
    return newboiddirective
}

function boidGenerator(){
    for(var i=0;i<nboids;i++){
        boidObject = initBoid()
        boidlist.push(boidObject)
    }
}