window.onload = init;
function init(){
	var usersubmit_button = document.getElementById("usersubmitbutton");
	var usercancel_button = document.getElementById("usercancelbutton")
	usersubmit_button.onclick = identify_usermessage;
	usercancel_button.onclick = cancel_usermessage;
}

function identify_usermessage(){
	var username_Input = document.getElementById("username");
	var usernameinput = username_Input.value;
	var userpassord_Input = document.getElementById("userpassword");
	var userpasswordinput = userpassord_Input.value;
	if (usernameinput=="aaa" && userpasswordinput=="aaa") {
		alert("登陆成功")
		window.location.href="index3.html";
	}
	else{
		alert("用户名或密码错误，请重新输入！")
		username_Input.value = "";
		userpassord_Input.value = "";
	}

}

function cancel_usermessage(){
	username_Input.value = null;
	userpassord_Input.value = null;

}