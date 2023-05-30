(() => {
//var search =document.getElementById('ctl00_cphMain_right_bar_txtSearchRest');
//search.value="מייק";

var currentDate = new Date();
var currentDay = currentDate.getDate();
var currentMonth = currentDate.getMonth() + 1; // Adding 1 since getMonth() returns zero-based index

// Get the last day of the current month
var lastDay = new Date(currentDate.getFullYear(), currentMonth, 0).getDate();

// Check if the current day is the last day of the month
if (!sessionStorage.getItem('alertShown')) {
  // Show the alert
 
  if (currentDay === lastDay) {
    alert("היום היום האחרון של החודש במידה וקיימת ברשותך יתרה ולא יבוצע בה שימוש עד סוף היום, היתרה תתאפס.  ");
  }
  if (lastDay-currentDay == 1) {
      alert("מחר היום אחרון של החודש, במידה וקיימת ברשותך יתרה ולא יבוצע בה שימוש עד סוף החודש, היתרה תתאפס.  ");
    }
  // Set the flag in sessionStorage to indicate that the alert has been shown
  sessionStorage.setItem('alertShown', true);
}

})();





