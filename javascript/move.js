

function setupWindowAnimations() {
  const targets = document.querySelectorAll(".window-animate");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
        // 一度きりのアニメーションなら下行を有効に
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0
  });

  targets.forEach(target => observer.observe(target));
}

// 起動時にセットアップ
document.addEventListener("DOMContentLoaded", () => {
  setupWindowAnimations();
});


// アニメーション
document.querySelectorAll(".window-animate").forEach((el) => {
  el.addEventListener("mouseenter", () => {
    if (el.classList.contains("show")) {
      el.classList.add("hovered");
    }
  });

  el.addEventListener("mouseleave", () => {
    el.classList.remove("hovered");
  });
});
