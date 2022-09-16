var data = {
  view: 'home',
  entries: []
};

var $daysOfTheWeek = document.querySelector('.days-of-the-week');
$daysOfTheWeek.addEventListener('click', handleClick);
function handleClick(event) {
  if (event.target.matches('.day-text')) {
    var $homeView = document.querySelector('[data-view = "home"]');
    $homeView.className = 'w-100 hidden';
    var $dayView = document.querySelector('[data-view = "Day"]');
    $dayView.className = 'w-100';
  }
}
