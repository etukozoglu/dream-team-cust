package co.simplon.dreamteamcust.dtbusiness.repositories;

import co.simplon.dreamteamcust.dtbusiness.entities.Customer;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CustomerRepository extends JpaRepository<Customer, Long> {
}
