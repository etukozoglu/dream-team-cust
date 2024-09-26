package co.simplon.dreamteamcust.dtbusiness.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import co.simplon.dreamteamcust.dtbusiness.entities.Customer;

public interface CustomerRepository extends JpaRepository<Customer, Long> {
}
