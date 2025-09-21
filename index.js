function createFlower(x, y) {
    const flower = document.createElement("div");
    flower.classList.add("flower");
    flower.style.position = "absolute";
    flower.style.top = y + "px";
    flower.style.left = x + "px";

    // delay aleatorio entre 0 y 5 segundos
    const randomDelay = Math.random() * 5 + "s";
    flower.style.animationDelay = randomDelay;

    // agregar pétalos
    for (let i = 1; i <= 8; i++) {
        const petal = document.createElement("div");
        petal.classList.add("petal", "petal" + i);

        // cada pétalo también arranca en un momento distinto
        petal.style.animationDelay = Math.random() * 5 + "s";

        flower.appendChild(petal);
    }

    // centro
    const center = document.createElement("div");
    center.classList.add("center");
    flower.appendChild(center);

    document.getElementById("flowers-container").appendChild(flower);
}


document.querySelector(".button").classList.remove("d-none");

document.querySelector(".button").addEventListener("click", () => {
    const button = document.querySelector(".button");
    const heart = document.querySelector(".heart");
    const flowersContainer = document.getElementById("flowers-container");
    const despedida = document.querySelector(".despedida");
    const down = document.querySelector(".down");
    const img = document.querySelector("img");


    // ocultar botón
    button.classList.add("d-none");

    // mostrar corazón
    heart.classList.remove("d-none");
    heart.style.display = "block";

    // después de 2s → mostrar flores
    setTimeout(() => {
        const myDiv = document.getElementById("mensaje"); // o querySelector
        myDiv.remove();
        heart.style.display = "none"; // ocultar corazón
        flowersContainer.style.display = "block";

        for (let i = 0; i < 50; i++) {
            const x = Math.random() * window.innerWidth - 150;
            const y = window.innerHeight / 2 + Math.random() * (window.innerHeight / 2) - 200; createFlower(x, y);
        }

        // después de 3s → mostrar despedida
        setTimeout(() => {
            despedida.classList.add("show");
        }, 3000);

        // después de 3s → mostrar despedida
        setTimeout(() => {
            despedida.classList.add("d-none");
        }, 7000);

        // después de 3s → mostrar despedida
        setTimeout(() => {
            down.classList.add("show");
        }, 8000);

        // después de 3s → mostrar despedida
        setTimeout(() => {
            img.classList.add("show");
        }, 10000);



    }, 2000);
});

