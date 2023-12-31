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
		<h1>Save Travels</h1>
		
		<table>
			<thead>
				<tr>
					<th>Expenses</th>
					<th>Vendor</th>
					<th>Amount</th>
					<th>Actions</th>
				</tr>
			</thead>
			<tbody>
				<c:forEach var="travel" items="${travels }">
					<tr>
						<td><a href="/expenses/${travel.id}">${travel.expense }</a></td>
						<td>${travel.vendor }</td>
						<td>${travel.amount }</td>
						<td><a href="/expenses/edit/${travel.id}">edit</a>|||
						<form action="/expenses/delete/${travel.id}" method="post">
   						 	<input type="hidden" name="_method" value="delete">
    						<input type="submit" value="Delete">
						</form>
						</td>
					</tr>
				</c:forEach>
			</tbody>
		</table>
		
		<h2>Add an expense</h2>
		<form:form action="/process/expenses" method="POST" modelAttribute="travel">
				<div>
				<form:errors style="color: red;" path="expense"/>
				</div>
				<div>
				<form:errors style="color: red;" path="vendor"/>
				</div>
				<div>
				<form:errors style="color: red;" path="amount"/>
				</div>
				<div>
				<form:errors style="color: red;" path="description"/>
				</div>
			<div>
				<form:label path="expense">Expense Name:</form:label>
				<form:input path="expense"/>
				
			</div>
			<div>
				
				<form:label path="vendor">Vendor:</form:label>
				<form:input path="vendor"/>
				
			</div>
			<div>
				
				<form:label path="amount">Amount:</form:label>
				<form:input type="text" path="amount"/>
				
			</div>
			<div>
				
				<form:label path="description">Description:</form:label>
				<form:input path="description"/>
				
			</div>
			<button>Submit</button>
		</form:form>

	</body>
</html>