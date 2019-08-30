var total = 0;
var flavourTotal = 0;
var coneTotal = 0;
var topsTotal = 0;
var icecramElem = document.querySelector(".IceCream");
var showBtnElem = document.querySelector(".results");
var showALL = document.querySelector(".display");

if (localStorage["IceCream"]) {
    var availIce = JSON.parse(localStorage["IceCream"]);
   } else {
    availIce = [];    
   }
   var available = Icecream(availIce);
   var ice = available.stored();

   showBtnElem.addEventListener('click',function(){
    var flavourElem = document.querySelector('input[name="check"]:checked');
    var conesElem = document.querySelector('input[name="type"]:checked');
    var topElem = document.querySelectorAll('input[name="typeBox"]:checked');

    var IceCount = flavourElem.value
    available.iceBought(IceCount)
    console.log(available.stored())

    var coneCount = conesElem.value
    available.conBought(coneCount)
    console.log(available.stored())

   topElem.forEach(function(element){
    console.log(element.value)
    available.Topps(element.value)
   })

    available.Topps('Crumbed'); 
    available.conBought('Cone'); 
    available.iceBought('Chocolate');

    
    
    showALL.innerHTML =  "R" + available.stored();


   })







  


