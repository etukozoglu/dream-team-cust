package co.simplon.dreamteam.customer.business.controllers;

import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import co.simplon.dreamteam.customer.business.dtos.CustomerCreate;
import co.simplon.dreamteam.customer.business.entities.Customer;
import co.simplon.dreamteam.customer.business.services.CustomerService;
import jakarta.validation.Valid;

@RestController
@RequestMapping("/form")
@CrossOrigin("*")
public class CustomerController {

    private final CustomerService service;

    public CustomerController(CustomerService service) {
	this.service = service;
    }

    @GetMapping("/customers")
    public List<Customer> getAllCustomers() {
	return service.getAllCustomers();
    }

    @PostMapping
    void createCustomer(@Valid @RequestBody CustomerCreate customerCreate) {
	service.createCustomer(customerCreate);
    }

}
