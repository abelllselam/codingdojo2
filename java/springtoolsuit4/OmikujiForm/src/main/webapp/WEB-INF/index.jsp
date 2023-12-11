<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<%@ taglib prefix = "c" uri = "http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html>
<head>
<style>
	input {
		border: 2px solid;
		padding: 5px;
	}
	body {
		margin: 50px;
	}
</style>
<meta charset="ISO-8859-1">
<title>Omikuji</title>
</head>
<body>
	<h1>Send an Omikuji!</h1>
	<form action="/omikuji/process" method="post">
		<div style="border: 2px solid black; width:300px; padding:20px;">
			<div>
				<label>Pick any number from 5 to 25</label>
				<input type="number"  name="number" min="5" max="25" />
			</div>
			<div>
				<label>Enter the name of any city:</label>
				<input type="text" name="city" id="city" />
			</div>
			<div>
				<label>Enter the name of any real person</label>
				<input type="text" name="person" id="person" />
			</div>
			<div>
				<label>Enter professional endeavor or hobby:</label>
				<input type="text" name="hobby" id="hobby" />
			</div>
			<div>
				<label>Enter any type of living thing:</label>
				<input type="text" name="thing" id="thing" />
			</div>
			<div>
				<label>Say something nice to someone:</label>
				<input  type="text" name="say" />
			</div>
			<p>Send and show a friend</p>
			<input style="background-color: blue; color: white;" type="submit" value="Submit" />
		</div>
	</form>

</body>
</html>