document.querySelectorAll('.gallery .item').forEach(item => {
  item.addEventListener('click', () => {
    alert(item.querySelector('h2').textContent);
  });
});
