package registration.model;
import java.io.Serializable;
import lombok.Getter;
import lombok.Setter;

/**
 * This is an Employee class.
 *
 * @author Diya
 **/

@Setter
@Getter
public class Employee implements Serializable {

	private static final long serialVersionUID = 1L;
	private String firstName;
	private String lastName;
	private String userName;
	private String password;
	private String address;
	private String contact;

}