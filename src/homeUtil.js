// import
import displayURL from "./asset/display.png";
import customerURL from "./asset/customer.png";
import couponURL from "./asset/couponIcon.svg";

// string var
const text1 = "CHROMA KITCHEN";
const text2 = 'since 2088';
const text3 = "Beneath the flicker of holographic banners and the hum of terminal arrays, you are treated to lightning-fast service, an immersive synthwave atmosphere, and an absolute escape from the neon rain outside."
const text4 = "Bring your friends and redeem the new year coupon, with 3X returns!";
const text5 = "🏆 Ranked #3 Globally This Month";
const text6 = "⭐ 4.98 / 5.00 Network Rating (From 4.2M+ User)";

// string arr
const strArr = [text1, text2, displayURL, text3, text4, couponURL, customerURL, text5, text6];

// export function
export default () => {
    // create neccesary elements
    const homeWrap = document.createElement("div");
    homeWrap.id = "home";

    strArr.forEach((text, index) => {
        if (index == 2 || index == 5 || index == 6) {
            const temp = document.createElement("img");
            temp.src = text;
            homeWrap.appendChild(temp);
        }
        else if (index == 7) {
            const t6 = strArr[8];
            const temp = document.createElement("div");
            temp.className = "group";
            const p1 = document.createElement("p");
            p1.textContent = text;
            const p2 = document.createElement("p");
            p2.textContent = t6;
            temp.append(p1, p2);
            homeWrap.appendChild(temp);
        }
        else if (index == 8) {
            
        }
        else{
            const temp = document.createElement("p");
            if (index == 0) temp.className = "title";
            else if (index == 1) temp.className = "special";
            temp.textContent = text;
            homeWrap.appendChild(temp);
        }
    });

    return homeWrap;
};