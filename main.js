/*Variables*/
var meat = 0;

var clickBase = 1;
var clickMod = 1;
var clickadd = clickBase * clickMod;

var farms = 0;
var farmMod = 1;

var farms2 = 0;
var farmMod2 = 10;

function baseIncrease(number){
    meat += number
    document.getElementById("meat").innerHTML = Math.round(meat*1000000)/1000000;
};

document.getElementById("clickvalue").innerHTML = clickadd;
function clickMeat(){
    baseIncrease(clickadd);
};

/*Buildings*/
function buyFarm(){
    var farmCost = Math.floor(10 * Math.pow(1.3,farms));
    if(meat >= farmCost){
        farms += 1;
    	meat = meat - farmCost;
        document.getElementById('farms').innerHTML = farms;
        document.getElementById('meat').innerHTML = meat;
    };
    var nextCost = Math.floor(10 * Math.pow(1.3,farms));
    document.getElementById('farmCost').innerHTML = nextCost; 
    updateMPS()
};

function buyFarm2(){
    var farm2Cost = Math.floor(150 * Math.pow(1.3,farms2));
    if(meat >= farm2Cost){
        farms2 += 1;
    	meat = meat - farm2Cost;
        document.getElementById('farms2').innerHTML = farms2;
        document.getElementById('meat').innerHTML = meat;
    };
    var nextCost = Math.floor(150 * Math.pow(1.3,farms2));
    document.getElementById('farm2Cost').innerHTML = nextCost; 
    updateMPS();
};

/*Upgrades*/


/*Logic*/
function updateMPS(){
    document.getElementById('mps').innerHTML = (farms*farmMod)+(farms2*farmMod2);
}

window.setInterval(function(){
    baseIncrease((farms*farmMod))
    baseIncrease((farms2*farmMod2))
}, 1000);