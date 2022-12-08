
let h1 = document.getElementById("h1");
let nav = document.getElementById("nav");
let h3s = document.querySelectorAll("h3");
let me = document.getElementById("meSect");
let meTxts = document.querySelectorAll(".meTxt");

function slideAnim() {

    h1.classList.add("slideDown");
    nav.classList.add("slideSide");

}

slideAnim();

function incTitles() {

   h3s.forEach(h3 => {

    h3.classList.add("slideSide");
   })

}

function incPs() {

    meTxts.forEach(meTxt => {

        meTxt.classList.add("revSlideSide");
    })

}

me.addEventListener("mouseenter", incTitles);
me.addEventListener("mouseenter", incPs);






