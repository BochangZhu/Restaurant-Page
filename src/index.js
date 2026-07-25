// activate css
import "./style.css";
// default import from hometUtil
import homeFunc from "./homeUtil.js";
import menuFunc from "./menuUtil.js";

const btns = document.querySelectorAll("button");

document.querySelector("#content").appendChild(menuFunc());