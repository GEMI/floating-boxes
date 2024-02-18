document.querySelectorAll(".box").forEach(function (box) {
  box.addEventListener("click", function () {
    const animations = ["crawl", "dangle", "jump", "stretch", "flip"];
    const animation = animations[Math.floor(Math.random() * 5)];

    box.classList.add(animation);

    setTimeout(function () {
      box.classList.remove(animation);
    }, 5000);
  });
});