import colors from "./colors.json";
import createItems from "./js/createItems";
const bodyRef = document.querySelector("body")
const listRef = document.querySelector(".palette")
listRef.innerHTML = createItems(colors);

listRef.addEventListener("click",(e)=>{
    if (e.target.nodeName === "DIV") {
        bodyRef.style.backgroundColor = e.target.dataset.hex
    }
})

