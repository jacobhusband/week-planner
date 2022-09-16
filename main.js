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
var $h1 = document.querySelector('h1');

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

}

function handleFormSubmit(event) {
  event.preventDefault();
  var description = $form.elements.description.value;
  var entryTime = $form.elements['entry-time'].value;
  var h1Text = $h1.textContent.toLowerCase();
  data[h1Text] = [{ description, time: entryTime }];
}
