const addBtn = document.getElementById('add');

const storedNotes = JSON.parse(localStorage.getItem('notes'));

if (storedNotes) {
  storedNotes.forEach(storedNote => addNewNote(storedNote))
}

addBtn.addEventListener('click', () => addNewNote());

function addNewNote(text = '') {
  const note = document.createElement('div');
  note.classList.add('note');
  note.innerHTML = `
  <div class="tools">
    <button class="btn btn-edit">
      <i class="fas fa-edit"></i>
    </button>
    <button class="btn btn-delete">
      <i class="fas fa-trash-alt"></i>
    </button>
  </div>
  
  <div class="main ${ text ? '' : 'hidden' }"></div>
  <textarea class="${ text ? 'hidden' : '' }"></textarea>
`;

  const editBtn = note.querySelector('.btn-edit');
  const deleteBtn = note.querySelector('.btn-delete');
  const main = note.querySelector('.main');
  const textArea = note.querySelector('textarea');

  textArea.value = text;
  main.innerHTML = marked(text);

  deleteBtn.addEventListener('click', () => {
    note.remove();

    updateLs()
  });

  editBtn.addEventListener('click', () => {
    main.classList.toggle('hidden');
    textArea.classList.toggle('hidden');
  });

  textArea.addEventListener('input', (e) => {
    const { value } = e.target;

    main.innerHTML = marked(value);

    updateLs();
  });

  document.body.appendChild(note);
}

function updateLs() {
  const notesText = document.querySelectorAll('textarea');

  const notes = [];

  notesText.forEach(noteText => notes.push(noteText.value));

  localStorage.setItem('notes', JSON.stringify(notes))
}

