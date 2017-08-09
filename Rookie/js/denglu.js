window.onload = function() {

    var logged = document.getElementById('logged');

    var login = document.getElementById('login');
    var denglu = document.getElementById('denglu');

     denglu.onclick = function() {
     	
     	 alert("未完成");
     	 window.location.href = "../index.html";
        logged.style.display = 'block';
        login.style.display = 'none';

       
    }
}
