function getJoke() {
  fetch("https://official-joke-api.appspot.com/random_joke")
    .then(response => response.json())
    .then(data => {
      document.getElementById("setupText").innerText = data.setup;
      document.getElementById("punchlineText").innerText = data.punchline;
    })
    .catch(error => {
      document.getElementById("setupText").innerText = "Oops! Couldn't fetch joke.";
      document.getElementById("punchlineText").innerText = "";
      console.error("Error fetching joke:", error);
    });
}