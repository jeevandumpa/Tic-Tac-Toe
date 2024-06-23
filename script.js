let options = document.querySelectorAll(".box")
let reset = document.getElementById("resetBnt")
let turn = true
let winningPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]
options.forEach(element => {
    element.addEventListener("click", () => {
        console.log("button is clicked")
        if (turn == true) {
            element.innerHTML = "X"
            turn = false
        }
        else {
            element.innerHTML = "O"
            turn = true
        }
        element.disabled=true
        checkWinner()
    })
});
function checkWinner(){
    winningPatterns.forEach(item => {
        let position1=options[item[0]].innerHTML
        let position2=options[item[1]].innerHTML
        let position3=options[item[2]].innerHTML
        if(position1!="" && position2!="" && position3!=""){
            if(position1===position2 && position2===position3){
console.log("winner"+position1)
disableBtn()
showWinner(position1)
            }
        }
    })
}
function showWinner(winner){
document.getElementById("msv").innerHTML="The Winner Is "+winner
disableBtn()
}
function resetBtn(){
    turn==true
}
function disableBtn(){
    options.forEach(item => {
        console.log(item)
item.disabled==true
    })
}