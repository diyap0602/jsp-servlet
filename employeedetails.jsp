<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<link href="style.css" rel="stylesheet">
<title>Detail page</title>
</head>
<body>
	<h1 style = "color:white;"><%=request.getAttribute("firstName")%> Successfully registered! <br>
		<button onclick="document.location='employeeregister.jsp'" class="btn-back">Back to register page</button>
	</h1>
</body>
</html>