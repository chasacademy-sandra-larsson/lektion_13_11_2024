// DOM referenser
const input = document.getElementById("input");
const save = document.getElementById("save");
const clear = document.getElementById("clear");
const basket = document.getElementById("basket");

//Local Storaage har tre metoder setItem, getItem, clear, removeItem

// Kundkorgs-array som är tom från början
let shoppingBasket = [];

// Ladda aktuell kundkor från Local Storage
const saveBasket = localStorage.getItem("shoppingBasket");
if(saveBasket) {
    shoppingBasket = JSON.parse(saveBasket)
}

save.addEventListener("click", () => {
    // Sparar vår kundkorg i arbetsminnet
    shoppingBasket.push(input.value);
    // Använda LocalStorage för att spara en kundkorg i webbläsarminnet (Web API)
    localStorage.setItem("shoppingBasket", JSON.stringify(shoppingBasket));
    displayBasket();
});

function displayBasket() {
    basket.textContent = `Kundkorgen har ${shoppingBasket.join(", ")}`;
}

clear.addEventListener("click", () => {
    localStorage.removeItem("shoppingBasket");
    //localStorage.clear(); // Rensar hela localSTorage
    shoppingBasket = [];
    basket.textContent = "";
});

displayBasket();











