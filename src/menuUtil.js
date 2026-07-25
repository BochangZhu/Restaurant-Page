// import asset;
import dish1 from "./asset/menu1.png";
import dish2 from "./asset/menu2.png";
import dish3 from "./asset/menu3.png";

const wrapper = document.createElement("div");
wrapper.id = "menu";

const textArr = [
    dish1,
    "System Ramen",
    "$16.00",
    "A rich, 24-hour pork bone tonkotsu broth served with charcoal-infused black noodles,soft-boiled soy egg, bamboo shoots, and flash-seared pork belly.",
    "Glazed Ribs",
    "$22.00",
    "Sticky, slow-cooked baby back ribs glazed in a dark sweet soy and unagi reduction, topped with crushed peanuts and toxic-green scallions.",
    dish2,
    dish3,
    "Crispy Chicken Buns",
    "$14.00",
    "Two fluffy, jet-black steamed bao buns filled with ultra-crispy sweet chili chicken, pickled purple cabbage, and a spicy sriracha mayo injection."
];

let i = 0;

export default () => {
    while (i < textArr.length) {
        if (i == 1 || i == 4 || i == 9) {
            const dish = document.createElement("div");
            dish.className = "dish";
            const top = document.createElement("div");
            top.className = "top";

            const name = document.createElement("div");
            name.className = "name";
            name.textContent = textArr[i];

            const price = document.createElement("div");
            price.className = "price";
            price.textContent = textArr[i+1];

            const des = document.createElement("div");
            des.className = "description";
            des.textContent = textArr[i+2];

            top.append(name, price);
            dish.append(top, des);

            wrapper.appendChild(dish);
            i += 3;
        }
        else {
            const img = document.createElement("img");
            img.src = textArr[i];
            wrapper.appendChild(img);
            i++;
        }
    }

    return wrapper;
};


