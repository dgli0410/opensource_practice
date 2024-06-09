const host = "http://127.0.0.1:8080";
const entriesContainer = document.querySelector('.entries-container');

function getEntries() {
    axios.get(`${host}/entry`)
        .then(response => {
            console.log(response.data);
            renderEntries(response.data.entries);
        })
        .catch(error => {
            console.error('Error fetching entries:', error);
        });
}

function renderEntries(entries) {
    entriesContainer.innerHTML = '';
    entries.forEach(entry => {
        const entryDiv = document.createElement('div');
        entryDiv.classList.add('entry-item');
        
        const entryContent = document.createElement('div');
        entryContent.textContent = `${entry.name}: ${entry.content}`;
        entryDiv.appendChild(entryContent);
        
        const entryTimestamp = document.createElement('div');
        entryTimestamp.classList.add('timestamp');
        entryTimestamp.textContent = new Date(entry.timestamp).toLocaleString();
        entryDiv.appendChild(entryTimestamp);

        const deleteBtn = document.createElement('button');
        deleteBtn.classList.add('delete-btn');
        deleteBtn.textContent = 'x';

        deleteBtn.addEventListener('click', function() {
            deleteEntry(entry.id);
        });

        entryDiv.appendChild(deleteBtn);
        entriesContainer.appendChild(entryDiv);
    });
}

window.addEventListener('DOMContentLoaded', function() {
    getEntries();
});

const nameInput = document.querySelector('.name-input');
const contentInput = document.querySelector('.content-input');

contentInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        addEntry();
    }
});

function addEntry() {
    const name = nameInput.value.trim();
    const content = contentInput.value.trim();
    if (name === '' || content === '') return;

    const entryData = {
        id: 0,
        name: name,
        content: content,
        timestamp: new Date()
    };

    axios.post(`${host}/entry`, entryData)
        .then(response => {
            nameInput.value = '';
            contentInput.value = '';
            getEntries();
        })
        .catch(error => {
            console.error('Error adding entry:', error);
        });
}

function deleteEntry(entryId) {
    axios.delete(`${host}/entry/${entryId}`)
        .then(function(response) {
            console.log('Entry deleted:', response.data);
            getEntries();
        })
        .catch(function(error) {
            console.error('Error deleting entry:', error);
        });
}
