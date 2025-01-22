"use strict";

let skills = [
  { type: "Web Design", examples: "CSS, HTML, JavaScript" },
  {
    type: "Adobe Creative Suite",
    examples: "Photoshop, Illustrator, InDesign",
  },
  { type: "Creative Design", examples: "Logo & Branding" },
];

let keySkills = document.getElementById("key-skills");

function showSkills() {
  let tbody = document.createElement("tbody");
  tbody.innerHTML = "";
  let h2 = document.querySelector(".hide");
  h2.classList.remove("hide");
  keySkills.appendChild(tbody);
  console.log(keySkills);
  skills.forEach((skill) => {
    let tr = document.createElement("tr");
    let typeTD = document.createElement("td");
    let examplesTD = document.createElement("td");
    typeTD.innerText = skill.type;
    examplesTD.innerText = skill.examples;
    tr.appendChild(typeTD);
    tr.appendChild(examplesTD);
    tbody.appendChild(tr);
  });
}

let displaySkills = document.getElementById("show-Skills");
displaySkills.addEventListener("click", () => showSkills());
