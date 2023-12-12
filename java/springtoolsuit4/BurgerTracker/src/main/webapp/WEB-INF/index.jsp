<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>
<%@ page isErrorPage="true" %>  
<%@ taglib prefix = "c" uri = "http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html>
	<head>
		<meta charset="ISO-8859-1">
		<title>Insert title here</title>
		<style>
			table {
				border: 2px solid black; 
				border-collapse: collapse;
			}
			th, td {
				border: 2px solid;
				border-spacing:10px 20px;
				padding: 30px;
			}
			
			h1, h2 {
				color: blue;
			}
			
			button {
				color: white;
				background-color: blue;
			}
		</style>
	</head>
	<body>
		<h1>Burger Tracker</h1>
		<table>
			<thead>
				<tr>
					<th>Burger Name</th>
					<th>Restaurant Name</th>
					<th>Rating</th>
				</tr>
			</thead>
			<tbody>
				<c:forEach var="burger" items="${burgers}">
					<tr>
						<td>${burger.name}</td>
						<td>${burger.restName}</td>
						<td>${burger.rating}</td>
					</tr>
				</c:forEach>
			</tbody>
		</table>
		
		<h2>Add a Burger</h2>
		<form:form action="/burgers" method="POST" modelAttribute="burger">
			<div>
				<form:errors path="name"/>
				<form:label path="name">Burger Name:</form:label>
				<form:input path="name"/>
			</div>
			<div>
				<form:errors style="color: red;" path="restName"/>
				<form:label path="restName">Restaurant Name:</form:label>
				<form:input path="restName"/>
			</div>
			<div>
				<form:errors path="rating"/>
				<form:label path="rating">Rating:</form:label>
				<form:input type="number" path="rating"/>
			</div>
			<div>
				<form:errors path="notes"/>
				<form:label path="notes">Notes:</form:label>
				<form:input path="notes"/>
			</div>
			<button>Submit</button>
		</form:form>

	</body>
</html>