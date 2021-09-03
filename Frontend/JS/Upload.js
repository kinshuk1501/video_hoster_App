const form = document.getElementById('upload_form');

form.addEventListener('submit', uploadvideo);

const id = sessionStorage.getItem('id');
if(id===null)
{
   window.location = './Login.html';
}


function uploadvideo(event)
{
    event.preventDefault();
    const formData=new FormData(form);
    for (var pair of formData.entries()) {
      console.log(pair[0] + ', ' + pair[1]);
    }

    const xhttp = new XMLHttpRequest();
    xhttp.open('POST', 'http://localhost:3001/post/single', true);
    xhttp.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        console.log(this.responseText);
        const res = this.responseText;
        if (res === 'False') {
          alert('UserNotAdded');
        } else {
          window.location="../index.html"
        }
      }
    };
    
    formData.append('id',id);
    xhttp.send(formData);
}