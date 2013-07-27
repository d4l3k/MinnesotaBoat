
function checkForNext(){
    nb = $(".next a[href]");
    if(nb.length>0){
        nb[0].click();
    }
}

console.log(window.kalkomey);

setInterval(checkForNext,500);
