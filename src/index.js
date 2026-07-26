// activate css
import "./style.css";
// default import from hometUtil
import homeFunc from "./homeUtil.js";
import menuFunc from "./menuUtil.js";
import aboutFunc from "./aboutUtil.js";

const contentDIV = document.querySelector("#content");
const funcArr = [homeFunc, menuFunc, aboutFunc];
const btns = [...document.querySelectorAll("button.btn")];

function clear(){
    for (const btnNode of btns){
        btnNode.classList.remove("selected");
    }
    const old = contentDIV.querySelector(".temp");
    if (old) {
        old.remove();
    }
}
btns.forEach((btn, index) => {
    btn.addEventListener("click", ()=>{
        if (btn.classList.contains("selected")){
            return;
        }
        clear();
        btn.classList.add("selected");
        contentDIV.appendChild(funcArr[index]());
    })
});