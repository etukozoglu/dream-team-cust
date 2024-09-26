package co.simplon.dreamteam.customer.business.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import co.simplon.dreamteam.customer.business.entities.Customer;

public interface CustomerRepository extends JpaRepository<Customer, Long> {
}
