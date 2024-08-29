package co.simplon.dreamteamcust.dtbusiness.entities;

import jakarta.persistence.*;

@Entity
@Table(name = "t_company_sizes")
public class CompanySize {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "company_size_id")
    private Long id;

    @Column(name = "company_size_range")
    private String size;

    public String getSize() {
        return size;
    }

    public void setSize(String size) {
        this.size = size;
    }


    public Long getId() {
        return id;
    }

    public void setName(String companyName) {
    }
}
