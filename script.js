const BITLY_API_ACCESS_TOKEN = "your-access-token-here";
// note: I was unable to create a bitly access token with a social media login.
// Create a bitly account with an email and password.

const form = document.getElementById("form");
const urlField = document.getElementById("url");
const result = document.getElementById("result");
const debug = document.getElementById("debug");

form.addEventListener("submit", event => {
  event.preventDefault();

  // https://dev.bitly.com/api-reference
  const data = { long_url: urlField.value };
  fetch("https://api-ssl.bitly.com/v4/shorten", {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${BITLY_API_ACCESS_TOKEN}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  })
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }
    return response.json();
  })
  .then(json => {
    console.log(json);
    result.innerHTML = json.link;
    debug.innerHTML = JSON.stringify(json, null, 2);
  })
  .catch(err => debug.innerHTML = err);
});
