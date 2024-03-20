<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<link href="style.css" rel="stylesheet">
<title>Registration page</title>
<script src="validation.js"></script>
</head>
<body>
	<div class="container">
		<div class="header">
			<h1>Employee Registration Form</h1>
		</div>
		<form class="form" id="form-id" action="<%= request.getContextPath() %>/register" method="post">
			<div class="form-control">
				<label for="firstName" class="required">First Name:</label>
				<input type="text" id="firstName" name="firstName" placeholder="Enter your First Name" onkeypress='return event.charCode >= 65 && event.charCode <= 90 || (event.charCode >= 97 && event.charCode <= 122)'>
				<span id="error-firstName">Error Message</span>
			</div>
			<div class="form-control">
				<label for="lastName" class="required">Last Name:</label>
				<input type="text" id="lastName" name="lastName" placeholder="Enter your Last Name" onkeypress='return event.charCode >= 65 && event.charCode <= 90 || (event.charCode >= 97 && event.charCode <= 122)'>
				<span id="error-lastName">Error Message</span>
			</div>
			<div class="form-control">
				<label for="userName" class="required">User Name:</label>
				<input type="text" id="userName" name="userName" placeholder="Enter your User Name" >
				<span id="error-userName">Error Message</span>
			</div>
			<div class="form-control" class="required">
				<label for="password" class="required">Password:</label>
				<input type="password" id="password" name="password" placeholder="Enter your Password" >
				<span id="error-password">Error Message</span>
			</div>
			<div class="form-control">
				<label for="address" class="required">Address:</label>
				<input type="text" id="address" name="address" placeholder="Enter your Address">
				<span id="error-address">Error Message</span>
			</div>
			<div class="form-control">
				<label for="contact" class="required">Contact Number:</label>
				<input type="text" id="contact" name="contact" placeholder="Enter your Contact Number" maxlength="10" onkeypress='return (event.charCode >= 48 && event.charCode <= 57)'>
				<span id="error-contact">Error Message</span>
			</div>
			<div class="btn-control" >
				<button type="submit" onclick="submitForm()">Submit</button>
				<button type="reset" onclick="resetForm()">Reset</button>
			</div>
		</form>
	</div>
</body>
</html>