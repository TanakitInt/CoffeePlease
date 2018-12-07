/*
    JS code by TIVOLI
    Copyright (c) 2018 TIVOLI. All rights reserved.
    "Fair use" applied.
*/

function index() {
  var toptext = ["ตื่นๆ", "ตื่นได้แล้ว", "อรุณสวัสดิ์", "สวัสดียามเช้า"];
  var bottomtext = [
    "มีเรื่องแล้ว",
    "สายแล้วๆๆ",
    "กี่โมงกี่ยามแล้ว",
    "ไปทำงานได้แล้ว"
  ];
  var buttontext = [
    "ขอกาแฟหนึ่งแก้ว",
    "ขอกาแฟหน่อย",
    "หิวกาแฟจัง",
    "ฉันต้องการกาแฟ",
    "ฉันอยากดื่มดาแฟ",
    "กาแฟคือพลังงาน",
    "พวกเราเสพติดคาเฟอีน"
  ];
  var topindex = toptext[Math.floor(Math.random() * toptext.length)];
  var botindex = bottomtext[Math.floor(Math.random() * bottomtext.length)];
  var buttonindex = buttontext[Math.floor(Math.random() * buttontext.length)];
  document.getElementById("texthome1").innerHTML = topindex;
  document.getElementById("texthome2").innerHTML = botindex;
  document.getElementById("button").innerHTML = buttonindex;
}

function mainscroll() {
  document.getElementById("bg2-top").scrollIntoView();
}

function totop() {
  document.getElementById("pagetop").scrollIntoView();
}

function footerexpand() {
  var f = document.getElementById("dev-footer");
  if (f.style.display == "block") {
    document.getElementById("dev-footer").scrollIntoView();
    f.style.display = "none";
  } else {
    f.style.display = "block";
    document.getElementById("dev-footer").scrollIntoView();
  }
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
