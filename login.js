var attempt = 3;
function verify()
{
	var uname = document.getElementById("uname").value;
	var pwd = document.getElementById("pwd").value;
	if ( uname == "epam" && password == "epam")
	{
		alert ("successful login");
		window.location = "login.html";
		return false;
	}
	else
	{
		attempt --;
		alert(attempt+" attempts left;");
		if( attempt == 0)
		{
			document.getElementById("uname").disabled = true;
			document.getElementById("pwd").disabled = true;
			document.getElementById("submit").disabled = true;
			return false;
		}
	}
}
