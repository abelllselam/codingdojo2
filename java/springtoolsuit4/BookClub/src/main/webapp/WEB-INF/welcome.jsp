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
	<div style="display:flex; justify-content: space-around;gap:300px;">
		<div>
			<h1>Welcome <c:out value="${user.name }"/></h1>
			<p>Books from everyone's shelves:</p>
		</div>
		<div>
			<div style="margin-top:30px;">
				<a href="/logout/home">logout</a>
			</div>
			<a href="/books/new">+ Add a book to my shelf!</a>
		</div>
	</div>
	<div style="margin-left:60px;">
		<table style="border:2px solid black;">
			<thead>
				<tr>
					<th>ID</th>
					<th>Title</th>
					<th>Author Name</th>
					<th>Posted By</th>
				</tr>
			</thead>
			<tbody>
				<c:forEach var="book" items="${books}">
					<tr>
						<td><c:out value="${book.id}"/></td>
						<td><a href="/books/${book.id}"><c:out value="${book.title}"/></a></td>
						<td><c:out value="${book.author}"/></td>
						<td><c:out value="${book.user.name}"/></td>
					</tr>
				</c:forEach>
			</tbody>
		</table>
	</div>
</body>
</html>