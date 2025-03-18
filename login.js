document.addEventListener("DOMContentLoaded", () => {
  const usernameInput = document.querySelector("input[type='text']");
  const passwordInput = document.querySelector("input[type='password']");
  const loginButton = document.querySelector(".btn-login");
  const guestButton = document.querySelector(".btn-guest");

  const API_URL = "https://santosnr6.github.io/Data/yumyumusers.json";

  async function fetchUsers() {
    try {
      const response = await fetch(API_URL);
      if (!response.ok) {
        throw new Error(`Failed to fetch user data: ${response.status}`);
      }
      const data = await response.json();
      console.log("API Response:", data);

      if (Array.isArray(data.users)) {
        return data.users;
      } else {
        throw new Error("Invalid API response format");
      }
    } catch (error) {
      console.error("Error fetching user data:", error);
      return [];
    }
  }

  loginButton.addEventListener("click", async (event) => {
    event.preventDefault();
    const username = usernameInput.value.trim();
    const password = passwordInput.value.trim();

    if (!username || !password) {
      alert("Vänligen fyll i både användarnamn och lösenord.");
      return;
    }

    const users = await fetchUsers();

    if (!Array.isArray(users)) {
      console.error("User data is not an array:", users);
      alert("Tekniskt fel vid inloggning. Försök igen senare.");
      return;
    }

    const user = users.find(
      (user) => user.username === username && user.password === password
    );

    if (user) {
      localStorage.setItem("loggedInUser", JSON.stringify(user));
      alert(`Välkommen, ${user.username}! Du är inloggad som ${user.role}.`);

      setTimeout(() => {
        window.location.assign("/public/index.html");
      }, 100);
    } else {
      alert("Fel användarnamn eller lösenord.");
    }
  });

  guestButton.addEventListener("click", (event) => {
    event.preventDefault();
    alert("Du fortsätter som gäst.");
    localStorage.setItem("loggedInUser", JSON.stringify({ role: "guest" }));
    window.location.assign("/public/index.html");
  });
});
