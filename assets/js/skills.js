let skills = [ "HTML", "CSS", "SASS", "JavaScript", "React", "BootStrap"];
let skillContainer = document.getElementById("skillContainer");
let comp = document.getElementById("compétences");
let skills1 = document.querySelectorAll(".skills1");
let skills2 = document.querySelectorAll(".skills2");

function displaySkills(){

    for(let i = 0 ; i < skills.length ; i++) {

        function displaySkill() {

            skillContainer.innerHTML = skills[i];

            if(i < skills.length - 1) {
                i++;
            } else {
                i = 0;
            }

        }
    
    }

    setInterval(displaySkill, 2000);
}



function slideAnim() {

    skills1.forEach(skill1 => {

        skill1.classList.add("slideRight");
       })
}

function revSlideAnim() {

    skills2.forEach(skill2 =>{

        skill2.classList.add("slideLeft");
    })
}

comp.addEventListener("mouseenter", slideAnim);
comp.addEventListener("mouseenter", revSlideAnim);

displaySkills();