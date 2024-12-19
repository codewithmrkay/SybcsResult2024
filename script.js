let suprice = document.querySelector("#suprice")
// Function to navigate to the result form and set the course title
function goToResult(button) {
    // Get the course name from the clicked row
    var courseName = button.parentNode.parentNode.cells[1].innerText;

    // Set the course title in page 2
    document.getElementById('courseTitle').innerText = courseName;

    // Navigate to page 2
    document.getElementById('page1').style.display = 'none';
    document.getElementById('page2').style.display = 'block';
}

// Function to navigate to the result video
function viewResult() {
    let seatenumber = document.querySelector("#seatNumber").value
    let mothername = document.querySelector("#motherName").value
    if (seatenumber && mothername) {
        document.getElementById('page2').style.display = 'none';
        document.getElementById('page3').style.display = 'flex';
        setTimeout(() => {
            suprice.style.display="block"
        }, 2000);
    }
    else {
        alert("please fill details..!")
    }
}
