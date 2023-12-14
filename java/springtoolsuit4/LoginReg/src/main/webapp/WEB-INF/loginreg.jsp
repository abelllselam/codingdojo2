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
	<meta charset="ISO-8859-1">
	<title>Login and Registeration</title>
</head>
<body>
	<h1>Welcome!</h1>
	<p>Join our growing community.</p>
	<h3>Register</h3>
	<form:form style="border: 2px solid black; background-color: lightblue; width: 300px;" action="/process/login/reg"  method="post" modelAttribute="user">
		
		<div>
			<form:label path="userName">Username:</form:label>
			<form:input path="userName"/>
			<form:errors path="userName"/>
		</div>
		<div>
			<form:label path="email">Email:</form:label>
			<form:input path="email"/>
			<form:errors path="email"/>
		</div>
		<div>
			<form:label path="password">Password:</form:label>
			<form:input path="password"/>
			<form:errors path="password"/>
		</div>
		<div>
			<form:label path="confirm">Confirm PW:</form:label>
			<form:input path="confirm"/>
			<form:errors path="confirm"/>
		</div>
		<button>Submit</button>
	</form:form>
	<h3>Login</h3>
	<form:form style="border: 2px solid black; background-color: lightblue; width: 300px;" action="/process/login" method="post" modelAttribute="loginUser">
		
		<div>
			<form:label path="email">Email:</form:label>
			<form:input path="email"/>
			<form:errors path="email"/>
		</div>
		<div>
			<form:label path="password">Password:</form:label>
			<form:input path="password"/>
			<form:errors path="password"/>
		</div>
		<button>Submit</button>
	</form:form>
</body>
</html>