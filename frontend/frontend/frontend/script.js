const API_URL =
    "https://6x8zs1s6m3.execute-api.ap-south-1.amazonaws.com/prod/shorten";

const form = document.getElementById("urlForm");
const urlInput = document.getElementById("urlInput");
const result = document.getElementById("result");

form.addEventListener("submit", async (event) => {
    event.preventDefault();

    const url = urlInput.value.trim();

    result.textContent = "Creating short URL...";

    try {
        const response = await fetch(API_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                url: url
            })
        });

        const data = await response.json();

        if (!response.ok) {
            throw new Error(data.error || "Something went wrong");
        }

        result.innerHTML = `
            <p>Short URL created successfully!</p>
            <p>Short ID: <strong>${data.shortId}</strong></p>
        `;

    } catch (error) {
        result.textContent = "Error: " + error.message;
    }
});
