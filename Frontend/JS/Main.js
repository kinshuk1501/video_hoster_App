const userid=sessionStorage.getItem("id");

const lout = document.getElementById('logout');
const lin = document.getElementById('login');
const sup = document.getElementById('signup');
const chek = document.getElementById('checker');
const All = document.getElementById('allposts');


if(userid===null)
{
  lout.style.display="none";
  lin.style.display="block";
  sup.style.display = 'block';
  chek.style.display = 'block';
  All.style.display = 'none';
}
else{
  lout.style.display = 'block';
  lin.style.display = 'none';
  sup.style.display = 'none';
  chek.style.display = 'none';
  All.style.display = 'block';
  getallvideo();
}

function logoutsession(){
  sessionStorage.removeItem("id");
  window.location="./index.html";
}

function loginpage(){
  window.location = './HTML/Login.html';
}

function signuppage()
{
  window.location = './HTML/Register.html';
}

function uploadpage()
{
  window.location = './HTML/Upload.html';
}


function getallvideo()
{
    const parent = document.getElementById('result');

    const xml=new XMLHttpRequest();
    xml.open('GET', 'http://localhost:3001/post/allposts', true);
    xml.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        let list = JSON.parse(this.responseText);
        for (var i = 0; i < list.length; i++) {
          parent.appendChild(adddata(list[i]));
        }
      }
    };
    xml.send();
}
function adddata(data)
{
    const div_pop=document.createElement("div");

    const title=document.createElement("h2")
    const title_text = document.createTextNode(data.title);
    title.appendChild(title_text);
    div_pop.appendChild(title);

    const vid = document.createElement('VIDEO');
    const src = 'http://localhost:3001/post/video/' + data._id;
    vid.setAttribute('src', src);
    vid.setAttribute('controls', 'controls');
    div_pop.appendChild(vid);

    const desc=document.createElement("p");
    const desc_text = document.createTextNode(data.description);
    desc.appendChild(desc_text);
    div_pop.appendChild(desc);


    return div_pop;

}