package co.simplon.dreamteamcust.dtbusiness.entities;

import jakarta.persistence.*;
import org.hibernate.mapping.ToOne;

@Entity
@Table(name = "t_customers")
public class Customer {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "request_number")
    private Long id;



    @Column(name = "customer_firstname")
    private String firstName;

    @Column(name = "customer_lastname")
    private String lastName;

    @Column(name = "customer_email")
    private String email;

    @Column(name = "customer_phone_number")
    private String phone;

    @Column(name = "customer_role")
    private String role;

    @Column(name = "customer_company_name")
    private String company;

    @Column(name = "customer_message")
    private String message;

    @OneToOne
    @JoinColumn(name = "company_size_range_id")
    private CompanySize size;


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

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getRole() {
        return role;
    }
    public void setRole(String role) {
        this.role = role;
    }

    public String getCompany() {
        return company;
    }

    public void setCompany(String company) {
        this.company = company;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public Long getId() {
        return id;
    }

    public void setCompanySize(CompanySize companySize) {
        this.size = companySize;
    }

    public void setTeamSize(TeamSize teamSize) {
    }

    public void setName(Object name) {

    }
}
