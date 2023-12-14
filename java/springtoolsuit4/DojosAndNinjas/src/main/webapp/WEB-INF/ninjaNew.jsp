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
<title>Insert title here</title>
</head>
<body>
	<h1>New Ninja</h1>
	
	<form:form action="/process/ninjas/new" method="post" modelAttribute="ninja">
	
		<span>Dojo: </span>
		
			<form:select path="dojo.id">
			
				<c:forEach var="dojo" items="${dojos}">
				
					<form:option value="${dojo.id}" path="dojo.id">
					
						<c:out value="${dojo.name }"/>
					</form:option>
					
				</c:forEach>
			</form:select>
			<input type="hidden" name="dojo_id" value="">
		
		<div>
			<form:label path="firstName">First Name:</form:label>
			<form:input path="firstName"/>
		</div>
		<div>
			<form:label path="lastName">Last Name:</form:label>
			<form:input path="lastName"/>
		</div>
		<div>
			<form:label path="age">Age:</form:label>
			<form:input type="number" path="age"/>
		</div>
		<button>Create</button>
	</form:form>
</body>
</html>