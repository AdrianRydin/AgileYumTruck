// När sidan har laddats, hämta varor från kundvagnen och uppdatera sidan
document.addEventListener("DOMContentLoaded", () => {
    loadCartItems(); // Ladda in varorna i kundvagnen vid sidstart
});

// Funktion för att ladda in kundvagnens varor och uppdatera HTML-strukturen
function loadCartItems() {
    // Hämta kundvagnens innehåll från localStorage (eller en tom array om det inte finns något)
    const cart = JSON.parse(localStorage.getItem("cart")) || [];

    // Hitta containern där varorna i kundvagnen ska visas
    const orderSummaryContainer = document.getElementById("cart-items-container");

    // Hämta den dolda HTML-mallen för en kundvagnsvara
    const template = document.querySelector(".template");

    // Rensa dynamiskt tillagda varor men behåll mallen
    orderSummaryContainer.innerHTML = "";

    let totalPrice = 0; // Variabel för att hålla reda på totalpriset i kundvagnen

    // Om kundvagnen är tom, visa ett meddelande
    if (cart.length === 0) {
        orderSummaryContainer.innerHTML = "<p>Din kundvagn är tom.</p>";
    }

    // man loopa igenom varje vara i kundvagnen och visa den på sidan
    cart.forEach((item, index) => {
        // klona mallen och gör den synlig
        let orderSection = template.cloneNode(true);
        orderSection.style.display = "flex"; // Visa elementet
        orderSection.classList.remove("template"); // Ta bort "template"-klassen så att den blir aktiv

        // uppdatera den klonade mallen med information om varan
        orderSection.querySelector(".item-name").innerText = item.name;
        orderSection.querySelector(".item-quantity").innerText = item.quantity;
        orderSection.querySelector(".item-price").innerText = `${item.price * item.quantity} SEK`;

        // lägger till ett unikt index för "+" och "-" knapparna
        orderSection.querySelector(".add-item").dataset.index = index;
        orderSection.querySelector(".remove-item").dataset.index = index;

        // lägg till varans totalpris till det totala kundvagnspriset
        totalPrice += item.price * item.quantity;

        // Lägg till den uppdaterade sektionen i kundvagnscontainern
        orderSummaryContainer.appendChild(orderSection);
    });

    // Man uppdatera visningen av det totala priset
    document.getElementById("total-price").innerText = `${totalPrice} SEK`;

    // Lägg till event listeners på "+" och "-" knapparna för att ändra antal varor
    document.querySelectorAll(".add-item").forEach(button => {
        button.addEventListener("click", (e) => updateQuantity(e.target.dataset.index, 1));
    });

    document.querySelectorAll(".remove-item").forEach(button => {
        button.addEventListener("click", (e) => updateQuantity(e.target.dataset.index, -1));
    });
}

// uppdatera antalet av en vara i kundvagnen
function updateQuantity(index, change) {
    // Hämta kundvagnen från localStorage
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    // Kontrollera om den valda varan finns i kundvagnen
    if (cart[index]) {
        cart[index].quantity += change; // Uppdatera antalet

        // Om antalet blir 0, ta bort varan från kundvagnen
        if (cart[index].quantity <= 0) {
            cart.splice(index, 1);
        }
    }

    // spara den uppdaterade kundvagnen i localStorage
    localStorage.setItem("cart", JSON.stringify(cart));

    // ladda om kundvagnens innehåll för att visa uppdateringar
    loadCartItems();
}

// tömma hela kundvagnen när "TAKE MY MONEY!" knappen klickas
document.getElementById("clear-cart").addEventListener("click", () => {
    localStorage.removeItem("cart");
    window.location.href = "order-confirmation.html";
});
