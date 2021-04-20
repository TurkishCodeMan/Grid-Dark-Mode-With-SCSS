
const colorSwitch = document.getElementById("toggleCheck");
console.log(colorSwitch)
colorSwitch.addEventListener("click", checkMode);

function checkMode() {
    if(colorSwitch.checked){
        darkModeOn();
    }else{
        darkModeOff();
    }
}


function darkModeOn(){
    document.body.classList.add("dark-mode")
    console.log("----")
}

function darkModeOff(){
    document.body.classList.remove("dark-mode")
}



