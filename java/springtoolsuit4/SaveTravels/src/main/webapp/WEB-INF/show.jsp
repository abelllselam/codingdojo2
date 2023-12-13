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
		<h1>Expense Details</h1>
		<a href="/expenses">Go back</a>
		<p>Expense Name: ${travel.expense }</p>
		<p>Expense Description: ${travel.description}</p>
		<p>Vendor: ${travel.vendor }</p>
		<p>Amount Spent: ${travel.amount }</p>
		
	</body>
</html>