import { showModal, hideModal } from "./modal.js";

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("formulario");
  const closeModalButton = document.getElementById("close-modal");

  if (!form) {
    console.error("No se encontró el formulario con id 'formulario'.");
    return;
  }

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    showModal();
    form.reset();
  });

  closeModalButton.addEventListener("click", () => {
    hideModal();
  });
});
