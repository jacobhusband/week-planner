var data = {
  monday: [],
  tuesday: [],
  wednesday: [],
  thursday: [],
  friday: [],
  saturday: [],
  sunday: []
};
var $daysOfTheWeek = document.querySelector('.days-of-the-week');
var $addEntryButton = document.querySelector('.add-entry');
var $form = document.querySelector('form');
var $h1 = document.querySelectorAll('h1');
var $tbody = document.querySelector('tbody');

$daysOfTheWeek.addEventListener('click', handleClick);
$addEntryButton.addEventListener('click', showEntryModal);
$form.addEventListener('submit', handleFormSubmit);
window.addEventListener('beforeunload', storeData);

function handleClick(event) {
  if (event.target.matches('.day-text')) {
    var $homeView = document.querySelector('[data-view = "home"]');
    $homeView.className = 'w-100 hidden';
    var $dayView = document.querySelector('[data-view = "Day"]');
    $dayView.className = 'w-100';
    $dayView.querySelector('h1').textContent = event.target.textContent;
    removeTableData();
    renderTable(event.target.textContent.toLowerCase());
  }
}

function removeTableData() {
  var tr = $tbody.lastElementChild;

  while (tr) {
    $tbody.removeChild(tr);
    tr = $tbody.lastElementChild;
  }
}

function showEntryModal(event) {
  var $modalContainer = document.querySelector('.entry-modal-container');
  $modalContainer.classList.remove('hidden');
}

function handleFormSubmit(event) {
  event.preventDefault();
  var description = $form.elements.description.value;
  var entryTime = $form.elements['entry-time'].value;
  var h1Text = $h1[1].textContent.toLowerCase();
  data[h1Text].push({ description, time: entryTime });
  event.target.closest('.entry-modal-container').classList.add('hidden');
  removeTableData();
  renderTable(h1Text);
  $form.reset();
}

function renderTable(day) {
  var tr, td;
  var dayData = data[day];
  if (dayData) {
    for (var i = 0; i < dayData.length; i++) {
      tr = document.createElement('tr');
      for (var key in dayData[i]) {
        td = document.createElement('td');
        td.textContent = dayData[i][key];
        tr.prepend(td);
      }
      var button = document.createElement('button');
      td = document.createElement('td');
      button.textContent = 'Delete';
      button.className = 'delete-button';
      td.appendChild(button);
      tr.appendChild(td);
      $tbody.appendChild(tr);
    }
  }
}

function storeData(event) {
  localStorage.setItem('data', JSON.stringify(data));
}

if (JSON.parse(localStorage.getItem('data'))) {
  data = JSON.parse(localStorage.getItem('data'));
}
var $entryModal = document.querySelector('.entry-modal-container');

$entryModal.addEventListener('click', function (event) {
  if (!event.target.matches('.entry-modal') && event.target.matches('.entry-modal-container')) {
    event.target.className = 'entry-modal-container hidden';
  }
});

var $table = document.querySelector('table');
$table.addEventListener('click', deleteEntry);

function deleteEntry(event) {
  if (event.target.matches('.delete-button')) {
    var wtf = event.target.parentElement.firstChildElement;
    console.log(event.target.parentElement.parentElement.firstChildElement.nextElementSibling);
  }
}
