function another() {
    fetch('/sheriff')
    .then(function(res) {return res.json()})
    .then(function(json) {
      document.querySelector("main").innerHTML = json.html;
      document.getElementById("tweet-button").href = "https://twitter.com/intent/tweet?text=" + encodeURIComponent(json.sheriff + "\n" + json.message);
    }).then(function() {twemoji.parse(document.body, {folder: "svg", ext: ".svg"})});
}

window.onload = function() {
  another();
}