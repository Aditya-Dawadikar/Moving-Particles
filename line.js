function drawline(boid1,boid2){
    ctx.beginPath();
    ctx.moveTo(boid1.initX,boid1.initY);
    ctx.lineTo(boid2.initX,boid2.initY);
    ctx.strokeStyle = boidMeta.color
    ctx.lineWidth = 1
    ctx.stroke();
}

function drawNet(){
    for(let i=0;i<boidlist.length;i++){
        for(let j=0;j<boidlist.length;j++){
            if(i!==j){
                var d = distance(boidlist[i],boidlist[j])
                if(d<sense)
                drawline(boidlist[i],boidlist[j])
            }
        }
    }
}

function distance(boid1, boid2){
    return Math.sqrt(Math.pow(boid2.initY-boid1.initY,2)+Math.pow(boid2.initX-boid1.initX,2))
}