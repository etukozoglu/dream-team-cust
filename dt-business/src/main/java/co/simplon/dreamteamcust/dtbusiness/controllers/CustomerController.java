package co.simplon.dreamteamcust.dtbusiness.controllers;

import co.simplon.dreamteamcust.dtbusiness.entities.Customer;
import co.simplon.dreamteamcust.dtbusiness.services.CustomerService;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequestMapping("/customers")
public class CustomerController {

    private CustomerService service;

    public CustomerController(CustomerService service) {
        this.service = service;
    }

//    @PostMapping
//    void create (CustomerCreate inputs) {
//        service.create(inputs);
//    }
}
