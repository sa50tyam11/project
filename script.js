const thumbs = document.querySelectorAll(".thumb");

const mainImage = document.getElementById("mainImage");
const mainTitle = document.getElementById("mainTitle");
const mainDesc = document.getElementById("mainDesc");
const liveLink = document.getElementById("liveLink");
const codeLink = document.getElementById("codeLink");
const techContainer = document.querySelector(".tech");

thumbs.forEach(thumb => {
  thumb.addEventListener("click", () => {

    thumbs.forEach(t => t.classList.remove("active"));
    thumb.classList.add("active");

    mainImage.src = thumb.dataset.img;
    mainTitle.textContent = thumb.dataset.title;
    mainDesc.textContent = thumb.dataset.desc;
    liveLink.href = thumb.dataset.live;
    codeLink.href = thumb.dataset.code;

    techContainer.innerHTML = "";
    thumb.dataset.tech.split(",").forEach(t => {
      const span = document.createElement("span");
      span.textContent = t;
      techContainer.appendChild(span);
    });

  });
});
