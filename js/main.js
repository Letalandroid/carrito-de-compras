$(document).ready(function(){

    document.getElementById("pan").addEventListener("click", artBuy1, false);
    document.getElementById("leche").addEventListener("click", artBuy2, false);
    document.getElementById("huevos").addEventListener("click", artBuy3, false);

});

function artBuy1() {
    
    $("#pan").replaceWith("✔ Buy article");

}

function artBuy2() {

    $("#leche").replaceWith("✔ Buy article");

}

function artBuy3() {

    $("#huevos").replaceWith("✔ Buy article");

}