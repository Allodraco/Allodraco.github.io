/*Variables*/
var player = {
    meat: 0
}

var click = {
    base: 1,
    multiplier: 1,
}

var tanemon = {
    count: 0,
    base: 1,
    multiplier: 1,
    cost: 10
}

var palmon ={
    count: 0,
    base: 10,
    multiplier: 1,
    cost: 150
}

function baseIncrease(number){
    player.meat += number
    document.getElementById("meat").innerHTML = "Meat: " + Math.round(player.meat*1000000)/1000000;
};

function clickMeat(){
    baseIncrease(click.base * click.multiplier);
};

/*Buildings*/
function buyTanemon(){
    if(player.meat >= tanemon.cost){
        tanemon.count += 1;
    	player.meat = player.meat - tanemon.cost;
        document.getElementById('tanemon').innerHTML = tanemon.count;
        document.getElementById('meat').innerHTML = "Meat: " + player.meat;
        tanemon.cost = Math.floor(tanemon.cost * Math.pow(1.25, 1));
        document.getElementById('tanemonCost').innerHTML = tanemon.cost; 
    };
    updateMPS()
};

function buyPalmon(){
    if(player.meat >= palmon.cost){
        palmon.count += 1;
    	player.meat = player.meat - palmon.cost;
        document.getElementById('palmon').innerHTML = palmon.count;
        document.getElementById('meat').innerHTML = "Meat: " + player.meat;
        palmon.cost = Math.floor(palmon.cost * Math.pow(1.25, 1));
        document.getElementById('palmonCost').innerHTML = palmon.cost; 
    };
    updateMPS();
};

/*Upgrades*/
function upgrades(id){
    if(id = 1){
        if(player.meat >= 10){
            player.meat -= 10;
            click.base += 1;
            document.getElementById('meat').innerHTML = "Meat: " + player.meat;
            document.getElementById("clickvalue").innerHTML = click.base * click.multiplier;
        }
    }
};

/*Logic*/
function updateMPS(){
    document.getElementById('mps').innerHTML = ((tanemon.base*tanemon.count)*tanemon.multiplier)
    +((palmon.base*palmon.count)*palmon.multiplier) + " mps";
};

window.setInterval(function(){
    baseIncrease(((tanemon.base*tanemon.count)*tanemon.multiplier))
    baseIncrease(((palmon.base*palmon.count)*palmon.multiplier))
}, 1000);