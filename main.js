// main.js
import { showModal, hideModal } from "./modal.js";

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("formulario");
  const closeModalButton = document.getElementById("close-modal");

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    showModal();
    form.reset(); // Limpiar campos tras enviar
  });

  closeModalButton.addEventListener("click", () => {
    hideModal();
  });
});
