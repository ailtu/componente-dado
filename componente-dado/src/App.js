import { useState } from "react";

const body = document.body;
body.style.textAlign = "center";
body.style.fontFamily = "Arial, sans-serif";
body.style.marginTop = "50px";

const dado = document.createElement("div");
dado.textContent = "⬜"; // emoji de quadrado simulando o dado
dado.style.fontSize = "100px";
dado.style.margin = "20px";
body.appendChild(dado); 

const button = document.createElement("button");
button.textContent = "gerar valor";
button.style.fontSize = "20px";
button.style.padding = "10px 20px";
body.appendChild(button);

function rollDice() {
    const diceFaces = ["⚀", "⚁", "⚂", "⚃", "⚄", "⚅"];
    const randomIndex = Math.floor(Math.random() * 6);
    dado.textContent = diceFaces[randomIndex];
}

button.addEventListener("click", rollDice);