<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<%@ taglib prefix = "c" uri = "http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Omikuji</title>
</head>
<body>
	<h1>Here's Your Omikuji!</h1>
	<div style="border: 2px solid black; width:300px; margin:50px; background-color: skyblue; font-weight:bolder;">
		<p style="padding: 50px;">In <c:out value="${number}" /> years, you will live in <c:out value="${city}" /> with <c:out value="${person}" /> as your roommate, <c:out value="${hobby}" /> for a living. The next time you see a <c:out value="${thing}" />, you will have a good luck. Also, <c:out value="${say}" />.
		</p>
	</div>

	<a href="/omikuji">Go Back</a>
</body>
</html>