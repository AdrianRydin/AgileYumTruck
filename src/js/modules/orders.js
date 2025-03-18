document.addEventListener("DOMContentLoaded", () => {
    updateCartIcon(); // Update cart icon on page load

    document.querySelectorAll(".food_item--1-container, .food_item--2-container").forEach((item) => {
        let count = 0;
        const countElement = item.querySelector(".count"); // FIX: Use class selector
        const decrementBtn = item.querySelector(".decrement"); // FIX: Ensure correct button selector
        const incrementBtn = item.querySelector(".increment");
        const addToCartBtn = item.querySelector(".adding__item");
        const foodTitle = item.querySelector("h2").innerText;
        const foodPrice = 59; // Set default price

        if (!decrementBtn || !incrementBtn || !addToCartBtn || !countElement) {
            console.error("Missing elements in food item container:", item);
            return; // Prevents running the code if elements are missing
        }

        // Increase count
        incrementBtn.addEventListener("click", () => {
            count++;
            countElement.innerText = count;
        });

        // Decrease count (minimum 0)
        decrementBtn.addEventListener("click", () => {
            if (count > 0) {
                count--;
                countElement.innerText = count;
            }
        });

        // Add to cart
        addToCartBtn.addEventListener("click", () => {
            if (count > 0) {
                let cart = JSON.parse(localStorage.getItem("cart")) || [];

                // Check if the item already exists in cart
                const existingItem = cart.find((item) => item.name === foodTitle);
                if (existingItem) {
                    existingItem.quantity += count; // Update quantity
                } else {
                    cart.push({ name: foodTitle, price: foodPrice, quantity: count });
                }

                localStorage.setItem("cart", JSON.stringify(cart));
                updateCartIcon();

                alert(`${count} x ${foodTitle} added to cart!`);
                count = 0; // Reset counter after adding
                countElement.innerText = count;
            } else {
                alert("Select a quantity before adding to cart.");
            }
        });
    });
});

// Function to update the cart badge
function updateCartIcon() {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    let totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    const cartBadge = document.getElementById("cart-badge");

    if (cartBadge) {
        if (totalItems > 0) {
            cartBadge.innerText = totalItems;
            cartBadge.style.display = "block"; // Show badge when items are added
        } else {
            cartBadge.style.display = "none"; // Hide badge when cart is empty
        }
    }
}
