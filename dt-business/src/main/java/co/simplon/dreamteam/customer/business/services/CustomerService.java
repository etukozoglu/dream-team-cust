package co.simplon.dreamteam.customer.business.services;

import org.springframework.stereotype.Service;

import co.simplon.dreamteam.customer.business.dtos.CustomerCreate;
import co.simplon.dreamteam.customer.business.entities.CompanySize;
import co.simplon.dreamteam.customer.business.entities.Customer;
import co.simplon.dreamteam.customer.business.entities.TeamSize;
import co.simplon.dreamteam.customer.business.repositories.CompanySizeRepository;
import co.simplon.dreamteam.customer.business.repositories.CustomerRepository;
import co.simplon.dreamteam.customer.business.repositories.TeamSizeRepository;

import java.util.List;

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

		// On recherche de TeamSize
		TeamSize teamSize = teamSizeRepo.findByRange(customerCreate.teamSize())
				.orElseThrow(() -> new IllegalArgumentException("Invalid team size: " + customerCreate.teamSize()));

		// On recherche de CompanySize
		CompanySize companySize = companySizeRepo.findByRange(customerCreate.companySize()).orElseThrow(
				() -> new IllegalArgumentException("Invalid company size: " + customerCreate.companySize()));

		// On mappe le DTO vers l'entité
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

		// On enregistre l'entité dans le repository
		Customer savedCustomer = customerRepo.save(customer);

		// On retourne le DTO correspondant
		return mapToDto(savedCustomer);
	}

	private CustomerCreate mapToDto(Customer customer) {
		return new CustomerCreate(customer.getRequestNumber(), customer.getFirstName(), customer.getLastName(),
				customer.getEmail(), customer.getPhoneNumber(), customer.getRole(), customer.getCompanyName(),
				customer.getMessage(), customer.getTeamSize().getRange(), customer.getCompanySize().getRange());
	}

	public List<Customer> getAllCustomers() {
		return customerRepo.findAll();
	}

}