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
	<title>Read Share</title>
</head>
<body style="border: 2px solid black; width:1000px; min-height:600px;margin:100px auto;">
	<div style="display:flex; justify-content: space-around;gap:300px;">
		<div>
			<h1 style="font-size:40px;"><c:out value="${book.title }"/> </h1>
		</div>
		<div>
			<div style="margin-top:35px;">
				<a href="/home">back to the shelves</a>
			</div>
		</div>
	</div>
	<div style="margin-left:130px; font-weight:bold; font-size:30px;">
		<p><span style="color: red;"><c:out value="${book.user.name}"/></span> read <span style="color: purple;"><c:out value="${book.title}"/></span> 
			by <span style="color: green;"><c:out value="${book.author}"/></span> </p>
	</div>
	<div>
		<p style="border-bottom:2px solid black; border-top:2px solid black;width: 500px;margin-left:130px;">
		<c:out value="${book.myThoughts}"/>
		</p>
	</div>
</body>
</html>