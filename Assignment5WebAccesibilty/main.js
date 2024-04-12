/**
 * Handles the functionality for showing and hiding the comments section on the page.
 * 
 * The `showHideBtn` element is used to toggle the visibility of the `commentWrapper` element.
 * When the button is clicked or the Enter key is pressed, the `toggleCommentsVisibility` function is called.
 * 
 * The `toggleCommentsVisibility` function checks the current text of the `showHideBtn` element
 * and updates the button text and the `commentWrapper` element's display style accordingly.
 */
// functionality for showing/hiding the comments section

const showHideBtn = document.querySelector('.show-hide');
const commentWrapper = document.querySelector('.comment-wrapper');

commentWrapper.style.display = 'none';

showHideBtn.onclick = function () {
    toggleCommentsVisibility();
};

// Add event listener for Enter key press
showHideBtn.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        toggleCommentsVisibility();
    }
});

function toggleCommentsVisibility() {
    let showHideText = showHideBtn.textContent;
    if (showHideText === 'Show comments') {
        showHideBtn.textContent = 'Hide comments';
        commentWrapper.style.display = 'block';
    } else {
        showHideBtn.textContent = 'Show comments';
        commentWrapper.style.display = 'none';
    }
}

// functionality for adding a new comment via the comments form

const form = document.querySelector('.comment-form');
const nameField = document.querySelector('#name');
const commentField = document.querySelector('#comment');
const list = document.querySelector('.comment-container');

form.onsubmit = function (e) {
    e.preventDefault();
    submitComment();
};

function submitComment() {
    const listItem = document.createElement('li');
    const namePara = document.createElement('p');
    const commentPara = document.createElement('p');
    const nameValue = nameField.value;
    const commentValue = commentField.value;

    namePara.textContent = nameValue;
    commentPara.textContent = commentValue;

    list.appendChild(listItem);
    listItem.appendChild(namePara);
    listItem.appendChild(commentPara);

    nameField.value = '';
    commentField.value = '';
}
