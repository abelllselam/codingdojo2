<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!-- c:out ; c:forEach etc. --> 
<%@ taglib prefix = "c" uri = "http://java.sun.com/jsp/jstl/core" %>
<!-- Formatting (dates) --> 
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"  %>
<!-- form:form -->
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<!-- for rendering errors on PUT routes -->
<%@ page isErrorPage="true" %>

<!DOCTYPE html>
<html>
<head>
	<style>
			input {
				
				margin-bottom:20px;
				padding: 7px;
				border: 2px solid black;
				width:60%;
				box-sizing:border-box;
				
			}
			label {
				font-weight:bold;
				 display: inline-block;
	        	width: 150px;
	        	text-align: left;
				
			}
		</style>
	<meta charset="ISO-8859-1">
	<title>Login and Registeration</title>
</head>
<body style="border: 2px solid black; width:1000px; min-height:600px;margin:100px auto;">
	<h1 style="margin-left:300px; color: blue;">Course Platform - Instructors</h1>
	
	<div style="display: flex; justify-content: space-evenly;">
	
	<form:form style="border: 2px solid black; width: 400px; padding: 20px;" action="/process/login/reg"  method="post" modelAttribute="user">
		<h3>New Instructor</h3>
		<div>
			<form:label path="name">Name:</form:label>
			<form:input path="name"/>
			<form:errors style="color:red" path="name"/>
		</div>
		<div>
			<form:label path="email">Email:</form:label>
			<form:input path="email"/>
			<form:errors style="color:red" path="email"/>
		</div>
		<div>
			<form:label path="password">Password:</form:label>
			<form:input path="password"/>
			<form:errors style="color:red" path="password"/>
		</div>
		<div>
			<form:label path="confirm">Confirm PW:</form:label>
			<form:input path="confirm"/>
			<form:errors style="color:red" path="confirm"/>
		</div>
		<button>Submit</button>
	</form:form>
	
	<form:form style="border: 2px solid black; width: 400px; padding: 20px;" action="/process/login" method="post" modelAttribute="loginUser">
		<h3>Login</h3>
		<div>
			<form:label path="email">Email:</form:label>
			<form:input path="email"/>
			<form:errors style="color:red" path="email"/>
		</div>
		<div>
			<form:label path="password">Password:</form:label>
			<form:input path="password"/>
			<form:errors style="color:red" path="password"/>
		</div>
		<button>Submit</button>
	</form:form>
	</div>
</body>
</html>