const ball = document.querySelector(".ball");

document.addEventListener(
  "click",
  (event) => {
    ball.style.backgroundColor = "#deb887";

    //Subtrair metade do width e height do elemento
    ball.style.transform = `translateY(${event.clientY - 6}px)`;
    ball.style.transform += `translateX(${event.clientX - 6}px)`;
  },
  false
);
