function getApi() {
    const Uri = `https://deckofcardsapi.com/api/deck/new/draw/?count=1`;

    fetch(Uri)
        .then(res => res.json())
        .then(data => {
            const card = data.cards[0]; // Access the first card
            const { image, value, suit } = card;

            document.getElementById("suit").textContent = `Suit: ${suit}`;
            document.getElementById("value").textContent = `Value: ${value}`;

            const imageArea = document.getElementById("imageArea");
            imageArea.innerHTML = ""; // Clear previous image

            // Create a new image element
            const img = document.createElement("img");
            img.setAttribute("src", image);
            img.setAttribute("alt", `${value} of ${suit}`);
            img.setAttribute("class", "card-image");

            imageArea.appendChild(img);
        })
        .catch(err => {
            console.error("Error fetching data:", err);
            document.getElementById("container").textContent = "Error fetching card data.";
        });
}

// Add event listener to the button
document.getElementById("getCard").addEventListener("click", getApi);
