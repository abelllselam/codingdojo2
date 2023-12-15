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
	<title>View Course</title>
</head>
<body style="border: 2px solid black; width:1000px; min-height:600px;margin:100px auto;">
	<div style="display:flex; justify-content: space-around;gap:300px;">
		<div>
			<h1 style="font-size:40px;"><c:out value="${ course.courseName}"/> with <c:out value="${ course.user.name}"/> </h1>
		</div>
			</div>
	<div style="margin-left:100px;">
		<p style="border-bottom:2px solid black; border-top:2px solid black;width: 500px;margin-left:130px;">
			<p>Day:<c:out value="${ course.day}"/></p>	
			<p>Cost:$<c:out value="${ course.price}"/></p>	
			<p>Time:<c:out value="${ course.time}"/></p>	
			<p>Day:<c:out value="${ course.description}"/></p>	
		</p>
	</div>
</body>
</html>