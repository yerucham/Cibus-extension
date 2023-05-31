(() => {
setTimeout(function() {
  NotifiRestAlert();
  // Perform actions with the extracted value here
}, 2000);

})();

function NotifiRestAlert()
{
  var currentDate = new Date();
var currentDay = currentDate.getDate();
var currentMonth = currentDate.getMonth() + 1; // Adding 1 since getMonth() returns zero-based index

// Get the last day of the current month
var lastDay = new Date(currentDate.getFullYear(), currentMonth, 0).getDate();

var element = document.querySelector('.bdg.space');

// Extract the text content from the element
var text = element.textContent;
 var rest = text.match(/₪(\d+\.\d+)/)[1];
// Check if the current day is the last day of the month
if (!sessionStorage.getItem('alertShown')) {
  // Show the alert
 
  if (currentDay === lastDay) {
    alert(' יתרתך היא ' + rest+' ש"ח, '+'היום הוא היום האחרון של החודש במידה וקיימת ברשותך יתרה ולא יבוצע בה שימוש עד סוף היום, היתרה תתאפס. ');
  }
  if (lastDay-currentDay == 1) {
    alert(' יתרתך היא ' + rest+' ש"ח, '+'מחר הוא היום האחרון של החודש במידה וקיימת ברשותך יתרה ולא יבוצע בה שימוש עד סוף היום, היתרה תתאפס. ');
    }
  // Set the flag in sessionStorage to indicate that the alert has been shown
  sessionStorage.setItem('alertShown', true);
}
}



