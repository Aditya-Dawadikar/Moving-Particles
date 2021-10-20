var boidMeta ={
    radius:3,
    color:"#00bfd4",
}
var boidlist=[]
var nboids = 100  
var hopSpeed=1
var respawn={
    x:{
        min:0,
        max:500
    },y:{
        min:0,
        max:500
    }
}
var sense=50

function changeRadius(e){
    boidMeta.radius=e.target.value
}

function changeCount(e){
    nboids=e.target.value
    init()
}

function changeSense(e){
    sense=e.target.value
}

function changeColor(e){
    boidMeta.color=e.target.value
}