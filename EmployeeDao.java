package registration.dao;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.SQLException;
import registration.model.Employee;

/**
 * This is an EmployeeDao class.
 * 
 * @author Diya
 **/
public class EmployeeDao {

	public int registerEmployee(Employee employee) throws ClassNotFoundException {
		String INSERT_USERS_SQL = "INSERT INTO employee_registration" + "(first_name, last_name, user_name, password, address, contact) VALUES" + "( ?, ?, ?, ?, ?, ?);";
		int result = 0;
		Class.forName("com.mysql.cj.jdbc.Driver");
		// mySQL connection
		try (Connection connection = DriverManager.getConnection("jdbc:mysql://localhost:3306/employee_registration?useSSL=false", "root", "root");
			PreparedStatement ps = connection.prepareStatement(INSERT_USERS_SQL)) {
			ps.setString(1, employee.getFirstName());
			ps.setString(2, employee.getLastName());
			ps.setString(3, employee.getUserName());
			ps.setString(4, employee.getPassword());
			ps.setString(5, employee.getAddress());
			ps.setString(6, employee.getContact());
			System.out.println(ps);
			result = ps.executeUpdate();
		} catch (SQLException e) {
			printSQLException(e);
		}
		return result;
	}

	private void printSQLException(SQLException ex) {
		for (Throwable e : ex) {
			if (e instanceof SQLException) {
				e.printStackTrace(System.err);
				System.err.println("SQLState:" + ((SQLException) e).getSQLState());
				System.err.println("Error Code:" + ((SQLException) e).getErrorCode());
				System.err.println("Message:" + e.getMessage());
				Throwable t = ex.getCause();
				while (t != null) {
					System.out.println("Cause: " + t);
					t = t.getCause();
				}
			}
		}
	}

}