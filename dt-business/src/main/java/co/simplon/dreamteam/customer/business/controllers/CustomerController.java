package co.simplon.dreamteamcust.dtbusiness.controllers;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import co.simplon.dreamteamcust.dtbusiness.dtos.CustomerCreate;
import co.simplon.dreamteamcust.dtbusiness.services.CustomerService;
import jakarta.validation.Valid;

@RestController
@RequestMapping("/form")
@CrossOrigin("*")
public class CustomerController {

    private final CustomerService service;

    public CustomerController(CustomerService service) {
	this.service = service;
    }

    @PostMapping
    void createCustomer(@Valid @RequestBody CustomerCreate customerCreate) {
	service.createCustomer(customerCreate);
    }
}
