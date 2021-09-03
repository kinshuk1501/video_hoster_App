var form = document.getElementById('login_form');

form.addEventListener('submit', submitthedata);

function submitthedata(event) {
  event.preventDefault();

  const userid = document.getElementById('login_userid').value;
 const userpass = document.getElementById('login_pass').value;

  const xhttp = new XMLHttpRequest();
  xhttp.open('POST', 'http://localhost:3001/user/login', true);
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      console.log(this.responseText);
      const res=this.responseText;
      if(res==="False")
      {
          alert("UserNotFound");
      }
      else{
           sessionStorage.setItem('id', res);
          window.location=("../index.html")
      }
    }
  };

  const data = JSON.stringify({
    userId: userid,
    password: userpass,
  });
  console.log(data);
  xhttp.send(data);
}
