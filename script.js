function showPopup() {
  var popup = document.getElementById("popup");
  popup.style.display = "block";
  insertRandomJoke();
  changePopupColor();
}

function hidePopup() {
  var popup = document.getElementById("popup");
  popup.style.display = "none";
}

function insertRandomJoke() {
  var jokes = [
    "Why do programmers prefer dark mode? Because the light attracts bugs.",
    "Why don't scientists trust atoms? Because they make up everything!",
    "What do you call a pile of cats? A meowtain!", 
        "I'll never forget my granddad's last words to me just before he died: \"Are you still holding the ladder?\"",
    "\"I work with animals,\" a guy says to his date. \"That's so sweet,\" she replies. \"I love a man who cares about animals. Where do you work?\" \"I'm a butcher,\" he replies.",
    " How does a penguin build its house? Igloos it together!",
    " Why don't eggs tell jokes? Because they might crack up!",
    "How do you make a tissue dance? You put a little boogie in it!",
    " What did the zero say to the eight? Nice belt!",
    " Why don't zombies eat clowns? They taste funny!",
    " How do you catch a squirrel? Climb a tree and act like a nut!",
    " What do you call fake spaghetti? An impasta!",
    " How do you organize a space party? You planet!",
    " Why did the bicycle fall over? Because it was two-tired!",
    " What did one wall say to the other wall? I'll meet you at the corner!",
    "Why don't some couples go to the gym? Because some relationships don't work out!",
    " How does a cucumber become a pickle? It goes through a jarring experience!", "Never break someone’s heart, they only have one. Break their bones instead, they have 206 of them."
  ];
  var randomIndex = Math.floor(Math.random() * jokes.length);
  var jokeElement = document.getElementById("joke");
  jokeElement.textContent = jokes[randomIndex] + " " + getRandomLaughingEmoji();
}

function getRandomLaughingEmoji() {
  var emojis = ["😸", "😂", "🤣", "😁", "😆"];
  return emojis[Math.floor(Math.random() * emojis.length)];
}

function changePopupColor() {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  document.getElementById("popup").style.backgroundColor = color;
}
