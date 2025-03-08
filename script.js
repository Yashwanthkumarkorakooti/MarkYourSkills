let skillsContainer = document.getElementById('skillsContainer');
let skillLastContainer = document.getElementById("skillLastContainer");
skillsContainer.classList.add("p-2",'m-3');

let skillList = [
  {
    skillName: "HTML",
    uniqueNo: 1,
  },
  {
    skillName: "CSS",
    uniqueNo: 2,
  },
  {
    skillName: "JavaScript",
    uniqueNo: 3,
  }
];



function onTodoStatusChange(checkboxId,labelId){
    let labelEleId = document.getElementById(labelId);
    labelEleId.classList.toggle("selected");
}

function createAndAppendSkills(skills){
    let checkboxId = "checkbox" + skills.uniqueNo;
    let labelId = "label" + skills.uniqueNo;
    
    let list = document.createElement("li");
    skillLastContainer.appendChild(list);
    
    let inputEle = document.createElement("input");
    inputEle.type = "checkbox";
    inputEle.id = checkboxId;
    inputEle.onclick = function(){
        onTodoStatusChange(checkboxId,labelId);
    };
    list.appendChild(inputEle);
    
    let labelEle = document.createElement("label");
    labelEle.setAttribute("for",checkboxId);
    labelEle.id = labelId;
    labelEle.classList.add("checkbox-label");
    labelEle.textContent = skills.skillName;
    list.appendChild(labelEle);
    
}
for(let skills of skillList){
    createAndAppendSkills(skills);
}













































































