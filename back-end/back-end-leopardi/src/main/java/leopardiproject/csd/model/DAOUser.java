package leopardiproject.csd.model;

import com.fasterxml.jackson.annotation.JsonIgnore;

import java.util.Set;

import javax.persistence.*;

@Entity
@Table(name = "user")
public class DAOUser {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	@Column
	private String username;
	@Column
	@JsonIgnore
	private String password;

	@Column
	private String name;

	@Column
	private String lastname;

	@Column
	private String email;

	// role based
	@ManyToMany(fetch = FetchType.EAGER, cascade = CascadeType.ALL)

	// role based
	@JoinTable(name = "USER_ROLES", joinColumns = { @JoinColumn(name = "USER_ID") }, inverseJoinColumns = {
			@JoinColumn(name = "ROLE_ID") })

	// role based
	private Set<Role> roles;

	public long getId() {
		return this.id;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public Set<Role> getRoles() {
		return roles;
	}

	public void setRoles(Set<Role> roles) {
		this.roles = roles;
	}

	public String getName() { 
		return name; 
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getemail() {
		return email;
	}

	public void setemail(final String email) {
		this.email = email;
	}

	public String getlastname() {
		return lastname;
	}

	public void setlastname(final String lastname) {
		this.lastname = lastname;
	}

}