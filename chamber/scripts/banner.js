document.addEventListener('DOMContentLoaded', function() {
    const popupBanner = document.getElementById('popupBanner');
    const closeBtn = document.getElementById('closeBtn');

    // Show the popup banner only on Mondays, Tuesdays, and Wednesdays
    const today = new Date();
    const dayOfWeek = today.getDay(); // 0 (Sunday) - 6 (Saturday)
    if (dayOfWeek >= 1 && dayOfWeek <= 3) {
        popupBanner.style.display = 'block';
    }

    // Close the popup banner when the close button is clicked
    closeBtn.addEventListener('click', function() {
        popupBanner.style.display = 'none';
    });
});


// JavaScript to show the popup banner only on Mondays, Tuesdays, Wednesdays, and Saturdays
/*document.addEventListener('DOMContentLoaded', function() {
    var currentDate = new Date();
    var dayOfWeek = currentDate.getDay(); // Get the day of the week (0 for Sunday, 1 for Monday, etc.)

    if (dayOfWeek === 1 || dayOfWeek === 2 || dayOfWeek === 3 || dayOfWeek === 6) { // Show the banner on Monday, Tuesday, Wednesday, or Saturday
        document.getElementById('popupBanner').style.display = 'block';
    }

    // Close banner functionality
    document.getElementById('closeBtn').addEventListener('click', function() {
        document.getElementById('popupBanner').style.display = 'none';
    });
});
*/
