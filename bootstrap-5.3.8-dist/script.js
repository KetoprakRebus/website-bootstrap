function kirimPesan(event){
event.preventDefault();
alert("Terima kasih atas kritik dan saran Anda!");
}

function login(event){
event.preventDefault();

let user=document.getElementById("username").value;
let pass=document.getElementById("password").value;

if(user=="admin" && pass=="123"){
alert("Login berhasil!");
}else{
alert("Username atau password salah");
}
}