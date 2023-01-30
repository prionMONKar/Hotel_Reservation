const photoScroll = document.querySelector(".photo-scroll");
let photoIndex = 0;

setInterval(() => {
  photoIndex++;
  photoScroll.style.transform = `translateX(-${photoIndex * 400}px)`;
  if (photoIndex >= photoScroll.children.length - 1) {
    photoIndex = 0;
  }
}, 3000);

const sponsors = document.querySelector(".sponsors");
let sponsorIndex = 0;

setInterval(() => {
  sponsors.children[sponsorIndex].style.display = "none";
  sponsorIndex++;
  if (sponsorIndex >= sponsors.children.length) {
    sponsorIndex = 0;
  }
  sponsors.children[sponsorIndex].style.display = "block";
}, 5000);
