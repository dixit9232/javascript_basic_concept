const leftButton = document.getElementById("left-button");
const rightButton = document.getElementById("right-button");
const copyText = document.querySelector(".copy-code-section");
let hexColor = "";
let leftButtonColor = "rgb(0,0,0)";
let rightButtonColor = "rgb(255,255,255)";

const generateRGBColor = () => {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  hexColor = convertRGBToHex(r, g, b);
  return `rgb(${r}, ${g}, ${b})`;
};

const convertRGBToHex = (r, g, b) => {
  return (
    "#" +
    [r, g, b]
      .map((x) => {
        const hex = x.toString(16);
        return hex.length === 1 ? "0" + hex : hex;
      })
      .join("")
  );
};

leftButton.addEventListener("click", () => {
  leftButton.classList.add("addTransition");

  leftButtonColor = generateRGBColor();
  document.body.style = `background-image: linear-gradient(to right, ${leftButtonColor}, ${rightButtonColor});`;
  copyText.innerHTML = `background-image: linear-gradient(to right, ${leftButtonColor}, ${rightButtonColor});`;
  leftButton.innerText = hexColor;
  setTimeout(() => {
    leftButton.classList.remove("addTransition");
  }, 300);
});

rightButton.addEventListener("click", () => {
  rightButton.classList.add("addTransition");

  rightButtonColor = generateRGBColor();
  document.body.style = `background-image: linear-gradient(to right, ${leftButtonColor}, ${rightButtonColor});`;
  copyText.innerHTML = `background-image: linear-gradient(to right, ${leftButtonColor}, ${rightButtonColor});`;
  rightButton.innerText = hexColor;
  setTimeout(() => {
    rightButton.classList.remove("addTransition");
  }, 300);
});

copyText.addEventListener("click", () => {
  navigator.clipboard.writeText(
    `background-image: linear-gradient(to right, ${leftButtonColor}, ${rightButtonColor});`
  );
  alert("Text Copied!");
});
