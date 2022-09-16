var data = {
  monday: [],
  tuesday: [],
  wednesday: [],
  thursday: [],
  friday: [],
  saturday: [],
  sunday: [],
};
var $daysOfTheWeek = document.querySelector('.days-of-the-week');
var $addEntryButton = document.querySelector('.add-entry');

$daysOfTheWeek.addEventListener('click', handleClick);
$addEntryButton.addEventListener('click', showEntryModal);

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
