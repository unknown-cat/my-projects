const listItems = document.querySelectorAll('.nav-list .list-item');
const contents = document.querySelectorAll('.content');

listItems.forEach((item, idx) => {
  item.addEventListener('click', () => {
   hideAllContents();
   hideAllItems();

   item.classList.add('active');
   contents[idx].classList.add('show');
  })
});

function hideAllContents() {
  contents.forEach(content => content.classList.remove('show'))
}

function hideAllItems() {
  listItems.forEach(item => item.classList.remove('active'))
}
