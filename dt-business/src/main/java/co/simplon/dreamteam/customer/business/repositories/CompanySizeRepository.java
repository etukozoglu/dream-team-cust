package co.simplon.dreamteam.customer.business.repositories;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import co.simplon.dreamteam.customer.business.entities.CompanySize;

public interface CompanySizeRepository extends JpaRepository<CompanySize, Long> {
    Optional<CompanySize> findByRange(String range);

}
