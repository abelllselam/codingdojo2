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
		table {
			border-collapse:collapse;
			width:875px;
		}
		th, td {
			border:2px solid black;
			text-align: center;
			padding:8px;
		}
	</style>
	<meta charset="ISO-8859-1">
	<title>Dashboard</title>
</head>
<body style="border: 2px solid black; width:1000px; min-height:600px;margin:100px auto;">
	<div style="display:flex; justify-content: space-around; gap:500px;">
		<div>
			<h1>Welcome <c:out value="${user.name }"/></h1>
			<p>Course Schedule</p>
		</div>
		<div>
			<div style="margin-top:30px;">
				<a href="/logout/home">logout</a>
			</div>
			
		</div>
	</div>
	<div style="margin-left:60px;">
		<table style="border:2px solid black;">
			<thead>
				<tr>
					<th>Class Name</th>
					<th>Instructor</th>
					<th>weekday</th>
					<th>price</th>
					<th>Time</th>
				</tr>
			</thead>
			<tbody>
				<c:forEach var="course" items="${courses}">
					<tr>
						<td><a href="/courses/show/${course.id}"><c:out value="${course.courseName}"/></a>
						<c:if test="${course.user.id == user.id }">
						<a href="/courses/<c:out value="${course.id}"/>/edit"><button>edit</button></a>
						</c:if></td>
						<td><c:out value="${course.user.name}"/></td>
						<td><c:out value="${course.day}"/></td>
						<td><c:out value="${course.price}"/></td>
						<td><c:out value="${course.time}"/></td>
					</tr>
				</c:forEach>
			</tbody>
		</table>
	</div>
	<a href="/courses/new"><button style="margin:50px 60px;">+ new course</button></a>
</body>
</html>