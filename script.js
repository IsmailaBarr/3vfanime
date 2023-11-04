var leftcolumn = document.getElementById("leftcolumn").getElementsByTagName("em")[0]
var rightcolumn = document.getElementById("rightcolumn").getElementsByTagName("em")[0]
var maincolumn = document.getElementById("contentcolumn").getElementsByTagName("em")[0]
 
var mqls = [
    window.matchMedia("(max-width: 840px)"),
    window.matchMedia("(max-width: 600px)")
]
 
function mediaqueryresponse(mql){
    if (mqls[0].matches){ // {max-width: 840px} query matched
        leftcolumn.innerHTML = "180px" //not redundant
        maincolumn.innerHTML = "Fluid (Responsive layout triggered)"
        rightcolumn.innerHTML = "Fluid (Responsive layout triggered)"
    }
    if (mqls[1].matches){ // {max-width: 600px} query matched
        leftcolumn.innerHTML = "Fluid (Responsive layout triggered)"
    }
    if (!mqls[0].matches && !mqls[1].matches){ // neither queries matched
        rightcolumn.innerHTML = "190px"
        leftcolumn.innerHTML = "180px"
        maincolumn.innerHTML = "Fixed"
    }
}
 
for (var i=0; i<mqls.length; i++){
    mediaqueryresponse(mqls[i]) // call listener function explicitly at run time
    mqls[i].addListener(mediaqueryresponse) // attach listener function to listen in on state changes
}