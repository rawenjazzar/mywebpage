// Array of possible URLs for the "No" button
const noPageURLs = [
    'no_page_1.html',
    'no_page_2.html',
    'no_page_3.html',
    // Add more URLs as needed
];

function redirectToNoPage() {
    // Choose a random URL from the array
    const randomIndex = Math.floor(Math.random() * noPageURLs.length);
    const randomURL = noPageURLs[randomIndex];

    // Redirect to the selected URL
    window.location.href = randomURL;
}

function showSecondMessage() {
    document.getElementById('proposalText').style.display = 'none';
    document.getElementById('giftImage').style.display = 'none';
    document.getElementById('btnYes').style.display = 'none';
    document.getElementById('btnNo').style.display = 'none';
    document.getElementById('hiddenMessage').style.display = 'block';
    document.getElementById('hiddenGif').style.display = 'inline-block';
}

function moveNoButton() {
    const buttonNo = document.getElementById('btnNo');
    const maxX = window.innerWidth - buttonNo.clientWidth;
    const maxY = window.innerHeight - buttonNo.clientHeight;

    // Generate random coordinates within the window
    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    // Set the new position
    buttonNo.style.position = 'absolute';
    buttonNo.style.left = randomX + 'px';
    buttonNo.style.top = randomY + 'px';
}

// Add event listener to move the "No" button on hover
document.getElementById('btnNo').addEventListener('mouseover', moveNoButton);

// Add event listener to show the second message when "Yes" is clicked
document.getElementById('btnYes').addEventListener('click', function() {
    showSecondMessage();
    // Remove the hover effect on "No" button after "Yes" is clicked
    document.getElementById('btnNo').removeEventListener('mouseover', moveNoButton);
});
// ... (previous code remains unchanged)

function captureResponse() {
    // Log a message when the "Yes" button is clicked
    console.log('User clicked on "Yes"');
}

