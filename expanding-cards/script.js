const panels = document.querySelectorAll('.panel');

panels.forEach(panel => {
  panel.addEventListener('click', function () {
    removeActiveClasses(panels);
    this.classList.toggle('active');
  })
});

function removeActiveClasses(elements) {
  elements.forEach(el => {
    el.classList.remove('active');
  })
}