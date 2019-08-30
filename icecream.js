function Icecream(){
    var iceStored = 0;
   // var locStored = loc ||[];

    function stored(){
        return iceStored
    }

    function iceBought(iceAvailable){
        var iceCount = iceAvailable.split(",")
        for(var i=0; i < iceCount.length; i++){
            var ice = iceCount[i].trim()
            if (ice === "Vanilla"){ 
                iceStored += 5.00;
             }

             if (ice === "Chocolate"){
                 iceStored += 8.00;
             }

             if (ice === "Strawberry"){
                 iceStored += 6.00;
             }
        }
    }

    function conBought(conAvailable){
        var conCount = conAvailable.split(",")
        for(var i=0; i < conCount.length; i++){
            var cons = conCount[i].trim()
            if(cons ==="Cone"){
                iceStored += 1.50;
            }
            if(cons ==="sugar"){
                iceStored += 1.50;
            }
            if(cons ==="paper"){
                iceStored += 1.50;
            }

        }
    }
    function Topps(topsAvailable){
        var topCount = topsAvailable.split(",")
        for(var i=0; i<topCount.length; i++){
            var tops = topCount[i].trim()
            if(tops ==="Crumbed"){
                iceStored += 2.00;
            }
            if(tops === "Choco"){
                iceStored += 3.50;
            }
            if(tops === "Oreos"){
                iceStored += 5.00;
            }
        }
    }

    function displayIcecream(){
        return iceStored.toFixed(2);
    }
    return{
        iceBought,
        displayIcecream,
        stored,
        conBought,
        Topps
    }
}