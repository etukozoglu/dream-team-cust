package co.simplon.dreamteam.customer.business.services;

import org.springframework.stereotype.Service;

import co.simplon.dreamteam.customer.business.dtos.CreateCustomer;
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

	public CreateCustomer createCustomer(CreateCustomer createCustomer) {

		// On recherche de TeamSize
		TeamSize teamSize = teamSizeRepo.findByRange(createCustomer.teamSize())
				.orElseThrow(() -> new IllegalArgumentException("Invalid team size: " + createCustomer.teamSize()));

		// On recherche de CompanySize
		CompanySize companySize = companySizeRepo.findByRange(createCustomer.companySize()).orElseThrow(
				() -> new IllegalArgumentException("Invalid company size: " + createCustomer.companySize()));

		// On mappe le DTO vers l'entité
		Customer customer = new Customer();
		customer.setFirstName(createCustomer.firstName());
		customer.setLastName(createCustomer.lastName());
		customer.setEmail(createCustomer.email());
		customer.setPhoneNumber(createCustomer.phoneNumber());
		customer.setRole(createCustomer.role());
		customer.setCompanyName(createCustomer.companyName());
		customer.setMessage(createCustomer.message());
		customer.setTeamSize(teamSize);
		customer.setCompanySize(companySize);

		// On enregistre l'entité dans le repository
		Customer savedCustomer = customerRepo.save(customer);

		// On retourne le DTO correspondant
		return mapToDto(savedCustomer);
	}

	private CreateCustomer mapToDto(Customer customer) {
		return new CreateCustomer(customer.getRequestNumber(), customer.getFirstName(), customer.getLastName(),
				customer.getEmail(), customer.getPhoneNumber(), customer.getRole(), customer.getCompanyName(),
				customer.getMessage(), customer.getTeamSize().getRange(), customer.getCompanySize().getRange());
	}

	public List<Customer> getAllCustomers() {
		return customerRepo.findAll();
	}

}