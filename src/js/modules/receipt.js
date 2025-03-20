document.addEventListener("DOMContentLoaded", () => {
    const orderDetails = JSON.parse(localStorage.getItem("currentOrder"));

    if (!orderDetails || !orderDetails.items || orderDetails.items.length === 0) {
        document.querySelector("main").innerHTML = "<h1>Ingen beställning hittades.</h1>";
        return;
    }

    // Uppdatera referensnumret på kvittot
    document.querySelector(".receipt__id").innerText = orderDetails.reference;

    const orderedItemsContainer = document.querySelector(".ordered-items");
    const template = document.querySelector(".ordered.template");

    if (!template) {
        console.error("Template saknas i HTML.");
        return;
    }

    orderedItemsContainer.innerHTML = ""; // Rensa gamla beställningar

    let totalPrice = 0;

    orderDetails.items.forEach(item => {
        let orderElement = template.cloneNode(true);
        orderElement.style.display = "flex";
        orderElement.classList.remove("template");

        let itemName = orderElement.querySelector(".ordered__name");
        let itemPrice = orderElement.querySelector(".ordered__price");
        let itemQuantity = orderElement.querySelector(".ordered__amount");

        if (itemName && itemPrice && itemQuantity) {
            itemName.innerText = item.name;
            itemPrice.innerText = `${item.price * item.quantity} SEK`;
            itemQuantity.innerText = `${item.quantity} stycken`;
        } else {
            console.error("Ett eller flera element saknas i beställningsmallen.");
        }

        orderedItemsContainer.appendChild(orderElement);
        totalPrice += item.price * item.quantity;
    });

    // Uppdatera totalbeloppet på kvittot
    document.querySelector(".receipt__total-price").innerText = `${totalPrice} SEK`;
});