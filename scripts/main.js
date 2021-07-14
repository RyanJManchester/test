let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/firefox-logo.png') {
        myImage.setAttribute('src','images/grey-firefox-logo.png');
    } else {
        myImage.setAttribute('src', 'images/firefoc-logo.png');
    }
}