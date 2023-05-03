
 const welcome = document.getElementsByClassName("welcome")[0];
function askName() {
    let username = sessionStorage.getItem('username');

    if (username === null) {
        username = prompt("Please enter your name");
    }

    if (username != null) {
        welcome.innerHTML = `<h1>Welcome ${username}, I am Fatima Faisal</h1><p>A Web Developer in Training</p>`;
        sessionStorage.setItem('username', username);
    } else {
        welcome.innerHTML = `<h1>Welcome Visitor, I am Fatima Faisal</h1><p>A Web Developer in Training</p>`;
    }
}
askName();