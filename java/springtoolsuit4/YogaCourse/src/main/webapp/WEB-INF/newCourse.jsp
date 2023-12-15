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
	<title>Create course</title>
</head>
<body style="border: 2px solid black; width:1000px; min-height:600px;margin:100px auto;">
	<div style="display:flex; justify-content: space-around;gap:300px;">
		<div>
			<h1>Create a Course</h1>
		</div>
		<div style="margin-top:30px;">
			<a href="/home">Home</a>
		</div>
	</div>
	<form:form style="margin:50px;" action="/process/courses/new"  method="post" modelAttribute="course">
		
		<div>
			<p>
				<form:errors style="color:red" path="courseName"/>
			</p>
			<form:label path="courseName">Name:</form:label>
			<form:input path="courseName"/>				
		</div>
		<div>
			<p>
				<form:errors style="color:red" path="day"/>
			</p>
			<form:label path="day">Day:</form:label>
			<form:input path="day"/>
		</div>
		<div>
			<p>
				<form:errors style="color:red" path="price"/>
			</p>
			<form:label path="price">Price:</form:label>
			<form:input path="price"/>
		</div>
		<div>
			<p>
				<form:errors style="color:red" path="time"/>
			</p>
			<form:label path="time">Time:</form:label>
			<form:input type="time" path="time"/>
		</div>
		<div>
			<p>
				<form:errors style="color:red" path="description"/>
			</p>
			<form:label path="description">Description:</form:label>
			<form:input path="description"/>
		</div>
		<form:hidden path="user.id" value="${user.id }"/>
		<button>Submit</button>
	</form:form>
	
</body>
</html>