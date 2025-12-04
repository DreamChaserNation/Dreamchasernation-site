// Auto-link "Shop" and "Wear the Mission Apparel" to Printify Pop-Up
(function() {
  var URL = "https://dreamchasernation.printify.me/";
  var targets = ["shop","wear the mission apparel"];
  function normalize(t) { return (t||"").replace(/\s+/g," ").trim().toLowerCase(); }
  document.querySelectorAll("a").forEach(function(a){
    var txt = normalize(a.textContent||a.innerText);
    if (targets.indexOf(txt) !== -1) {
      a.setAttribute("href", URL);
      a.setAttribute("target", "_blank");
      a.setAttribute("rel", "noopener");
    }
  });
})();
