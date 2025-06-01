
function saveReflection() {
  const date = document.getElementById("reflect-date").value;
  const text = document.getElementById("reflect-text").value.trim();

  if (!date || !text) {
    alert("Please fill both date and reflection!");
    return;
  }

  localStorage.setItem("reflection-" + date, text);
  showSavedReflection(date, text);
}

function showSavedReflection(date, text) {
  const entryDiv = document.getElementById("saved-entry");
  entryDiv.innerHTML = `<strong>${date}</strong><p>${text}</p>`;
  entryDiv.style.display = "block";
}

window.onload = () => {
  const dateInput = document.getElementById("reflect-date");
  const today = new Date().toISOString().split("T")[0];
  dateInput.value = today;

  const saved = localStorage.getItem("reflection-" + today);
  if (saved) {
    document.getElementById("reflect-text").value = saved;
    showSavedReflection(today, saved);
  }
};
