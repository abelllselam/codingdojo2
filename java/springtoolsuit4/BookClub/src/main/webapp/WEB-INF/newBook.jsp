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
	<title>Book Share</title>
</head>
<body style="border: 2px solid black; width:1000px; min-height:600px;margin:100px auto;">
	<div style="display:flex; justify-content: space-around;gap:300px;">
		<div>
			<h1>Add a Book to Your Shelf!</h1>
		</div>
		<div style="margin-top:30px;">
			<a href="/home">back to the shelves</a>
		</div>
	</div>
	<form:form style="margin:50px;" action="/process/books/new"  method="post" modelAttribute="book">
		
		<div>
			<form:label path="title">Title:</form:label>
			<form:input path="title"/>
			<form:errors path="title"/>
		</div>
		<div>
			<form:label path="author">Author:</form:label>
			<form:input path="author"/>
			<form:errors path="author"/>
		</div>
		<div>
			<form:label path="myThoughts">My thoughts:</form:label>
			<form:input path="myThoughts"/>
			<form:errors path="myThoughts"/>
		</div>
		<form:hidden path="user.id" value="${user.id }"/>
		<button>Submit</button>
	</form:form>
	
</body>
</html>