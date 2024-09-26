package co.simplon.dreamteamcust.dtbusiness.entities;

import co.simplon.dreamteamcust.dtbusiness.enums.CompanySizeRange;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "t_company_sizes")
public class CompanySize {

    public CompanySize() {
    }

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "company_size_id")
    private Long companySizeId;

    @Enumerated(EnumType.STRING)
    @Column(name = "company_size_range", nullable = false, length = 50)
    private CompanySizeRange range;

    public Long getCompanySizeId() {
	return companySizeId;
    }

    public void setCompanySizeId(Long companySizeId) {
	this.companySizeId = companySizeId;
    }

    public CompanySizeRange getRange() {
	return range;
    }

    public void setRange(CompanySizeRange range) {
	this.range = range;
    }

    @Override
    public String toString() {
	return "{companySizeId=" + companySizeId + ", range=" + range + "}";
    }

}