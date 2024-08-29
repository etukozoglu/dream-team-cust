package co.simplon.dreamteamcust.dtbusiness.services;

import co.simplon.dreamteamcust.dtbusiness.dtos.CustomerCreate;
import co.simplon.dreamteamcust.dtbusiness.entities.CompanySize;
import co.simplon.dreamteamcust.dtbusiness.entities.Customer;
import co.simplon.dreamteamcust.dtbusiness.entities.TeamSize;
import co.simplon.dreamteamcust.dtbusiness.repositories.CompanySizeRepository;
import co.simplon.dreamteamcust.dtbusiness.repositories.CustomerRepository;
import co.simplon.dreamteamcust.dtbusiness.repositories.TeamSizeRepository;

import jakarta.persistence.EntityNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Collection;

@Service
public class CustomerService {

    private final CustomerRepository customers;
    private final CompanySizeRepository companySizes;
    private final TeamSizeRepository teamSizes;

    public CustomerService(CustomerRepository customers, CompanySizeRepository companySizes, TeamSizeRepository teamSizes) {
        this.customers = customers;
        this.companySizes = companySizes;
        this.teamSizes = teamSizes;
    }

  @Transactional
    public void create(CustomerCreate inputs) {
        Customer entity = new Customer();
        entity.setName(inputs.name());
        entity.setCompanySize(companySizes.getOne(inputs.companySizeId()));
        entity.setTeamSize(teamSizes.getOne(inputs.teamSizeId()));
        customers.save(entity);

        String companyName = inputs.companyName();
        CompanySize companySize = companySizes.findByNameIgnoreCase(companyName);
        if (companySize == null) {
            companySize = new CompanySize();
            companySize.setName(companyName);
            companySizes.save(companySize);
        }
        entity.setCompanySize(companySize);

        String teamSizeName = inputs.teamSizeName();
        TeamSize teamSize = teamSizes.findByNameIgnoreCase(teamSizeName);
        if (teamSize == null) {
            teamSize = new TeamSize();
            teamSize.setName(teamSizeName);
            teamSizes.save(teamSize);
        }
        entity.setTeamSize(teamSize);
        customers.save(entity);
    }

    public <CustomerView> Collection<CustomerView> getAll() {
        return customers.findAllProjectedBy();
    }


}
