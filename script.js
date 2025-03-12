function generatePoem(response) {
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    cursor: null,
    delay: 40,
  });
}

function poemGenerator(event) {
  event.preventDefault();

  let userSearch = document.querySelector("#user-input");

  let prompt = `Generate a swahilli poem about ${userSearch.value}`;
  let context =
    "You're the swahili poem assitant  please provide a short, brief and concise six lines swahili poem following the user's search and remember to following a basic html format like this <p> </p> when generating the swahili poem,Sign SheCodes AI below the swahili poem using a <strong> ";
  let apiKey = "5765tb49aco10f17ace1b436b0213fc4";
  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let poem = document.querySelector("#poem");
  poem.classList.remove("hidden");
  poem.innerHTML = `<div class="blink">
      🔃 Generating a swahili poem about ${userSearch.value} for
      you...;
    </div>`;

  axios.get(apiURL).then(generatePoem);
}

let searchForm = document.querySelector("#form");
searchForm.addEventListener("submit", poemGenerator);
