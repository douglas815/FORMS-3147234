import { showModal,hideModal } from "./modal";


document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("formulario");
  const closeModalButton = document.getElementById("close-modal");

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    showModal();
    form.reset(); // Reset the form fields after submission
  });

  closeModalButton.addEventListener("click", () => {
    hideModal();
  });
});