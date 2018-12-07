/*
    JS code by TIVOLI
    Copyright (c) 2018 TIVOLI. All rights reserved.
    "Fair use" applied.
*/

function totop() {
    document.getElementById("pagetop").scrollIntoView();
}

function totopcheck() {
    var pos = window.pageYOffset;
    var t = document.getElementById("totop");
    if (pos == 0) {
        t.style.animation = "fadeout 0.5s";
        t.style.opacity = 0;
    } else {
        t.style.animation = "fadein 0.5s";
        t.style.opacity = 1;
    }
    setTimeout("totopcheck()", 100);
}
