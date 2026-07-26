
const wrapper = document.createElement("div");
wrapper.id = "about";

const btn = document.createElement("button");
btn.textContent = "Schedule";

const textArr = [
    ["header", ""],
    ["", "About US"], 
    ["", "!OVERCLOCKING FLAVOR ON THE CYBER-GRID!"],
    ["story", ""],
    ["", "Our Story"],
    ["italic", "WE JUST LOVE THE FOOD."],
    ["para", "Chroma Kitchen started as an illegal server node. To survive 48-hour data runs, our crew rigged the cooling vents to flash-fry noodles and ribs. The smell ended up drawing in the whole block.When grid authorities finally raided the warehouse, they didn't find a hacker syndicate—just a massive line of hungry people waiting in the rain.We wiped the drives and kept cooking."],
    ["action", ""],
    ["para", "Ready for a visit?"],
];

let i = 0;

while (i < textArr.length){
    if (i == 0) {
        const temp = document.createElement("div");
        temp.textContent = textArr[i][1];
        temp.className = textArr[i][0];

        const temp1 = document.createElement("div");
        temp1.textContent = textArr[i+1][1];
        temp1.className = textArr[i+1][0];

        const temp2 = document.createElement("div");
        temp2.textContent = textArr[i+2][1];
        temp2.className = textArr[i+2][0];

        temp.append(temp1, temp2);
        wrapper.appendChild(temp);

        i += 3;
    }

    else if (i == 3) {
        const temp = document.createElement("div");
        temp.textContent = textArr[i][1];
        temp.className = textArr[i][0];

        const temp1 = document.createElement("div");
        temp1.textContent = textArr[i+1][1];
        temp1.className = textArr[i+1][0];

        const temp2 = document.createElement("div");
        temp2.textContent = textArr[i+2][1];
        temp2.className = textArr[i+2][0];

        const temp3 = document.createElement("div");
        temp3.textContent = textArr[i+3][1];
        temp3.className = textArr[i+3][0];

        temp.append(temp1, temp2, temp3);
        wrapper.appendChild(temp);
        i += 4;
    } 

    else if (i == 7) {
        const temp = document.createElement("div");
        temp.textContent = textArr[i][1];
        temp.className = textArr[i][0];

        const temp1 = document.createElement("div");
        temp1.textContent = textArr[i+1][1];
        temp1.className = textArr[i+1][0];

        temp.append(temp1, btn);
        wrapper.appendChild(temp);

        i += 2;
    }
}


export default () => wrapper;







