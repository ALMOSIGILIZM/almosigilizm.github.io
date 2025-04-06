//Napisz
function showDialog(message) {
    const overlay = document.getElementById("overlay");
    const dialog = document.getElementById("dialog");
    const textarea = document.getElementById("dialog-text");


    textarea.value = message;

    overlay.style.display = "block";
    dialog.style.display = "block";
}

function hideDialog() {
    const overlay = document.getElementById("overlay");
    const dialog = document.getElementById("dialog");

    overlay.style.display = "none";
    dialog.style.display = "none";
    dodatkowe.style.display = "none";
}

document.querySelectorAll(".write-btn").forEach(button => {
    button.addEventListener("click", function () {
        const productElement = this.closest(".product");
        const productTitle = productElement.querySelector("h3").innerText;
        const message = `Hej, jestem zainteresowany koszulką \"${productTitle}\"\n TEKST: [Taki sam / Podaj]\n KOLORYSTYKA: [Taka sama / Podaj]\n ROZMIAR: [S/M/L/XL/XXL]`;
        showDialog(message);
        dodatkowe.style.display = "block";
    });
});
document.querySelectorAll(".custom-btn").forEach(button => {
    button.addEventListener("click", function () {
        const productElement = this.closest(".product");
        const message = `Hej, jestem zainteresowany customem \n PRZÓD: [WPISZ] \n TYŁ: [WPISZ]\n KOLORY: [PODAJ KOLORY]\n ROZMIAR: [S/M/L/XL/XXL]. `;
        showDialog(message);
    });
});
document.getElementById("close-btn").addEventListener("click", hideDialog);

document.getElementById("copy-btn").addEventListener("click", function () {
    const textarea = document.getElementById("dialog-text");
    textarea.select();
    document.execCommand("copy");
    alert("Wiadomość została skopiowana do schowka!");
});

document.getElementById("overlay").style.display = "none";
document.getElementById("dialog").style.display = "none";







//showProducts
document.getElementById("overlay").style.display = "none";
document.getElementById("dialog").style.display = "none";


document.getElementById('productsHidden').style.display = 'none';

document.getElementById('showProducts').addEventListener('click', function() {
    const hiddenProducts = document.getElementById('productsHidden');
    const button = this;

    if (hiddenProducts.style.display === 'none') {
        hiddenProducts.style.display = 'grid';
        button.textContent = 'Pokaż mniej';
    } else {
        hiddenProducts.style.display = 'none';
        button.textContent = 'Zobacz więcej'; 
    }
});



