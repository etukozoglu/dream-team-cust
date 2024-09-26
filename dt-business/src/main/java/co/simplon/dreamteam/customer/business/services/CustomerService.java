package co.simplon.dreamteamcust.dtbusiness.services;

import org.springframework.stereotype.Service;

import co.simplon.dreamteamcust.dtbusiness.dtos.CustomerCreate;
import co.simplon.dreamteamcust.dtbusiness.entities.CompanySize;
import co.simplon.dreamteamcust.dtbusiness.entities.Customer;
import co.simplon.dreamteamcust.dtbusiness.entities.TeamSize;
import co.simplon.dreamteamcust.dtbusiness.repositories.CompanySizeRepository;
import co.simplon.dreamteamcust.dtbusiness.repositories.CustomerRepository;
import co.simplon.dreamteamcust.dtbusiness.repositories.TeamSizeRepository;

@Service
public class CustomerService {

    private final CustomerRepository customerRepo;
    private final CompanySizeRepository companySizeRepo;
    private final TeamSizeRepository teamSizeRepo;

    public CustomerService(CustomerRepository customerRepo, CompanySizeRepository companySizeRepo,
	    TeamSizeRepository teamSizeRepo) {
	this.customerRepo = customerRepo;
	this.companySizeRepo = companySizeRepo;
	this.teamSizeRepo = teamSizeRepo;
    }

    public CustomerCreate createCustomer(CustomerCreate customerCreate) {

	// Convertir les énumérations en entités
	// Recherche de TeamSize
	TeamSize teamSize = teamSizeRepo.findByRange(customerCreate.teamSize())
		.orElseThrow(() -> new IllegalArgumentException("Invalid team size: " + customerCreate.teamSize()));

	// Recherche de CompanySize
	CompanySize companySize = companySizeRepo.findByRange(customerCreate.companySize()).orElseThrow(
		() -> new IllegalArgumentException("Invalid company size: " + customerCreate.companySize()));

	// Mapper le DTO vers l'entité
	Customer customer = new Customer();
	customer.setFirstName(customerCreate.firstName());
	customer.setLastName(customerCreate.lastName());
	customer.setEmail(customerCreate.email());
	customer.setPhoneNumber(customerCreate.phoneNumber());
	customer.setRole(customerCreate.role());
	customer.setCompanyName(customerCreate.companyName());
	customer.setMessage(customerCreate.message());
	customer.setTeamSize(teamSize);
	customer.setCompanySize(companySize);

	// Enregistrer l'entité en utilisant le repository
	Customer savedCustomer = customerRepo.save(customer);

	// Retourner le DTO correspondant
	return mapToDto(savedCustomer);
    }

    private CustomerCreate mapToDto(Customer customer) {
	return new CustomerCreate(customer.getRequestNumber(), customer.getFirstName(), customer.getLastName(),
		customer.getEmail(), customer.getPhoneNumber(), customer.getRole(), customer.getCompanyName(),
		customer.getMessage(), customer.getTeamSize().getRange(), customer.getCompanySize().getRange());
    }
}
