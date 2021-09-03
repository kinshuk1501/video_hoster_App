var form = document.getElementById('register_form');

form.addEventListener('submit', submitthedata);


function submitthedata(event)
{
    event.preventDefault();

    const userid = document.getElementById('signup_userid').value;
    const username = document.getElementById('signup_uname').value;
    const useremail = document.getElementById('signup_email').value;
    const userpass = document.getElementById('signup_pass').value;

    const xhttp = new XMLHttpRequest();
    xhttp.open('POST', 'http://localhost:3001/user/register', true);
    xhttp.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        console.log(this.responseText)
        const res = this.responseText;
        if (res === 'False') {
          alert('UserNotAdded');
        } else {
          sessionStorage.setItem("id",res);
          window.location = '../index.html';
        }
      }
    };

    const data = JSON.stringify({
      "userId": userid,
      "username": username,
      "email": useremail,
      "password": userpass,
    });
    console.log(data);
    xhttp.send((data));

}