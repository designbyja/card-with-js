document.addEventListener("DOMContentLoaded", function () {
  var imgElement = document.querySelector(".group-child");
  imgElement.addEventListener("click", function () {
    var overlay = document.createElement("div");
    overlay.className = "overlay";

    var popup = document.createElement("div");
    popup.className = "popup";
    popup.innerHTML =
      "Alt-text pop-up: Photo of a beautiful french bulldog, lens blur";

    var closeBtn = document.createElement("span");
    closeBtn.className = "close-btn";
    closeBtn.innerHTML = "&times;";
    closeBtn.addEventListener("click", function () {
      overlay.parentNode.removeChild(overlay);
    });

    popup.appendChild(closeBtn);
    overlay.appendChild(popup);
    document.body.appendChild(overlay);
  });
});
