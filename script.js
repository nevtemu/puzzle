const GRIDS = [[1,1],[1,2],[1,3],[2,3],[3,3],[3,2],[3,1],[2,1]]
const createBoxes = () => {
    document.getElementById("winPopUp").classList.toggle("show");
    document.getElementById('main').innerHTML = "";
let boxStates = [];
for (k=0; k<8; k++){
if (k<2){if (getRandomNumber(1,2)==1){boxStates.push("active")}else{boxStates.push("inactive")}}
else{
            if (boxStates[k-2]==boxStates[k-1]){
                    if(boxStates[k-2]=="active"){boxStates.push("inactive")}
                    else{boxStates.push("active")}}
            else{if (getRandomNumber(1,2)==1){boxStates.push("active")}else{boxStates.push("inactive")}}}}

for (i=0; i<8; i++){
document.getElementById('main').innerHTML += `<div name="box" class="${boxStates[i]}" id="box${i}" onclick="userMove(this.id)" style="grid-row:${GRIDS[i][0]}; grid-column: ${GRIDS[i][1]}"></div>`;
}

}
const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1) ) + min; 

const checkGameStatus = () => {
    let boxStates = [];
    for (k=0; k<8; k++){ 
boxStates.push(document.getElementById(`box${k}`).getAttribute("class"))
    }
    if (boxStates.includes("inactive")){}
    else{
        document.getElementById("winPopUp").classList.toggle("show");
    }
}

const changeBoxStatus = (box) => {
    let boxList = [];
    let m = parseInt(box.split("").pop());
    if (m==0){boxList=[7,0,1]}
    else if(m==7){boxList=[0,6,7]}
    else{boxList=[m-1,m,m+1]}
    for (j=0; j<=2; j++){
    if (document.getElementById(`box${boxList[j]}`).getAttribute("class") =="active"){document.getElementById(`box${boxList[j]}`).setAttribute("class", "inactive")}
    else {document.getElementById(`box${boxList[j]}`).setAttribute("class", "active")}   
}}

const userMove = (buttonID)=>{
changeBoxStatus(buttonID);
checkGameStatus();
}

createBoxes();
