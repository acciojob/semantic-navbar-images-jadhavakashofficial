const toggleBtn = document.getElementById('toggleBtn');

toggleBtn.addEventListener('click', () => {
  document.body.style.backgroundColor =
    document.body.style.backgroundColor === 'lightblue'
      ? '#f8f8f8'
      : 'lightblue';
});
