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

$daysOfTheWeek.addEventListener('click', handleClick);
$addEntryButton.addEventListener('click', showEntryModal);
$form.addEventListener('submit', handleFormSubmit);

function handleClick(event) {
  if (event.target.matches('.day-text')) {
    var $homeView = document.querySelector('[data-view = "home"]');
    $homeView.className = 'w-100 hidden';
    var $dayView = document.querySelector('[data-view = "Day"]');
    $dayView.className = 'w-100';
    $dayView.querySelector('h1').textContent = event.target.textContent;
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
  data[h1Text] = [{ description, time: entryTime }];
  event.target.closest('.entry-modal-container').classList.add('hidden');
}

function renderTable(day) {
  var dayData = data[day];
  for (var i = 0; i < dayData.length; i++) {
    for (var key in dayData[i]) {

    }
  }
}
