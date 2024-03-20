package registration.controller;

import java.io.IOException;
import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpServlet;
import registration.model.Employee;
import registration.dao.EmployeeDao;

/**
 * This is an EmployeeServlet class.
 * 
 * @author Diya
 **/
@WebServlet("/register")
public class EmployeeServlet extends HttpServlet {

	private static final long serialVersionUID = 1L;
	private EmployeeDao employeeDao = new EmployeeDao();

	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		response.getWriter().append("Served at:").append(request.getContextPath());
		RequestDispatcher dispatcher = request.getRequestDispatcher("employeeregister.jsp");
		dispatcher.forward(request, response);
	}

	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		String firstName = request.getParameter("firstName");
		String lastName = request.getParameter("lastName");
		String userName = request.getParameter("userName");
		String password = request.getParameter("password");
		String address = request.getParameter("address");
		String contact = request.getParameter("contact");

		Employee employee = new Employee();
		employee.setFirstName(firstName);
		employee.setLastName(lastName);
		employee.setUserName(userName);
		employee.setPassword(password);
		employee.setAddress(address);
		employee.setContact(contact);
		try {
			employeeDao.registerEmployee(employee);
		} catch (Exception e) {
			e.printStackTrace();
		}
		request.setAttribute("firstName", firstName);
		RequestDispatcher register = request.getRequestDispatcher("employeedetails.jsp");
		register.forward(request, response);
		RequestDispatcher inputData = request.getRequestDispatcher("employeeregister.jsp");
		inputData.forward(request, response);
	}

}