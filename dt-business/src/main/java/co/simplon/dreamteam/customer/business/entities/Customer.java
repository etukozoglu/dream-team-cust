package co.simplon.dreamteamcust.dtbusiness.entities;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "t_customers")
public class Customer {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "request_number")
    private Long requestNumber;

    @Column(name = "customer_firstname")
    private String firstName;

    @Column(name = "customer_lastname")
    private String lastName;

    @Column(name = "customer_email")
    private String email;

    @Column(name = "customer_phone_number")
    private String phoneNumber;

    @Column(name = "customer_role")
    private String role;

    @Column(name = "customer_company_name")
    private String companyName;

    @Column(name = "customer_message")
    private String message;

    @OneToOne
    @JoinColumn(name = "team_size_id")
    private TeamSize teamSize;

    @OneToOne
    @JoinColumn(name = "company_size_id")
    private CompanySize companySize;

    public Long getRequestNumber() {
	return requestNumber;
    }

    public void setRequestNumber(Long requestNumber) {
	this.requestNumber = requestNumber;
    }

    public String getFirstName() {
	return firstName;
    }

    public void setFirstName(String firstName) {
	this.firstName = firstName;
    }

    public String getLastName() {
	return lastName;
    }

    public void setLastName(String lastName) {
	this.lastName = lastName;
    }

    public String getEmail() {
	return email;
    }

    public void setEmail(String email) {
	this.email = email;
    }

    public String getPhoneNumber() {
	return phoneNumber;
    }

    public void setPhoneNumber(String phoneNumber) {
	this.phoneNumber = phoneNumber;
    }

    public String getRole() {
	return role;
    }

    public void setRole(String role) {
	this.role = role;
    }

    public String getCompanyName() {
	return companyName;
    }

    public void setCompanyName(String companyName) {
	this.companyName = companyName;
    }

    public String getMessage() {
	return message;
    }

    public void setMessage(String message) {
	this.message = message;
    }

    public CompanySize getCompanySize() {
	return companySize;
    }

    public void setCompanySize(CompanySize companySize) {
	this.companySize = companySize;
    }

    public TeamSize getTeamSize() {
	return teamSize;
    }

    public void setTeamSize(TeamSize teamSize) {
	this.teamSize = teamSize;
    }

    @Override
    public String toString() {
	return "{requestNumber=" + requestNumber + ", firstName=" + firstName + ", lastName=" + lastName + ", email="
		+ email + ", phoneNumber=" + phoneNumber + ", role=" + role + ", companyName=" + companyName
		+ ", message=" + message + ", companySize=" + companySize + ", teamSize=" + teamSize + "}";
    }

}
