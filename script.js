const GRIDS = [[1,1],[1,2],[1,3],[2,3],[3,3],[3,2],[3,1],[2,1]]
let turns, time, counter;

const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1) ) + min; 

const checkGameStatus = () => {

    let boxStates = [];
    for (k=0; k<8; k++){ 
boxStates.push(document.getElementById(`box${k}`).getAttribute("name"))
    }
    if (boxStates.includes("inactive")){}
    else{
        clearInterval (counter);
        document.getElementById("finalTime").innerHTML = `${convertTime(parseInt(time / 60))}:${convertTime(time % 60)}`
        document.getElementById("finalTurns").innerHTML = turns;
        let a = document.getElementsByName(`box`);
        Array.from(a).forEach(element => {element.setAttribute("onclick", "")}); 
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
    if (document.getElementById(`box${boxList[j]}`).getAttribute("name").includes("inactive")){
        document.getElementById(`box${boxList[j]}`).setAttribute("name", "active")
        document.getElementById(`box${boxList[j]}`).classList.toggle("animate1");
        document.getElementById(`box${boxList[j]}`).classList.toggle("animate2");


    }
    else {document.getElementById(`box${boxList[j]}`).setAttribute("name", "inactive")
    document.getElementById(`box${boxList[j]}`).classList.toggle("animate1");
    document.getElementById(`box${boxList[j]}`).classList.toggle("animate2");


}   
}}

const countTurns = ()=>{
    turns++;
    document.getElementById("turns").innerHTML = turns;
}

const userMove = (buttonID)=>{
countTurns();
changeBoxStatus(buttonID);
checkGameStatus();

}



//+++++++++++++++++++++++
const convertTime = (value) => { return value > 9 ? value : "0" + value; }
const countTime = () => {
  time++;
  document.getElementById("seconds").innerHTML = convertTime(time % 60);
  document.getElementById("minutes").innerHTML = convertTime(parseInt(time / 60));
}




const createBoxes = () => {
    time = 0;
    counter = setInterval(countTime, 1000);
    turns = 0;
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
document.getElementById('main').innerHTML += `<div name="${boxStates[i]}" class="animate1" id="box${i}" onclick="userMove(this.id)" style="grid-row:${GRIDS[i][0]}; grid-column: ${GRIDS[i][1]}"></div>`;
}
document.getElementById('main').innerHTML += `<div class="stats" id="stats" style="grid-row:2; grid-column: 2"> <div>Turns: <span id="turns">0</span></div><br><div> Time: <span id="minutes">00</span>:<span id="seconds">00</span> </div></div>`;
}
createBoxes();