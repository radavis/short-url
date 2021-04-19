const main = () => {
  const form = document.getElementById("short-url-form");
  form.addEventListener("submit", event => {
    event.preventDefault();
    console.log('button pressed');
  });
}

document.addEventListener("DOMContentLoaded", main);
