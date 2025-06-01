function openPopup(name, quote) {
  document.getElementById('popup-name').textContent = name;
  document.getElementById('popup-quote').textContent = quote;
  document.getElementById('popup').style.display = 'flex';
}

function closePopup() {
  document.getElementById('popup').style.display = 'none';
}
