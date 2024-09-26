package co.simplon.dreamteamcust.dtbusiness.repositories;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import co.simplon.dreamteamcust.dtbusiness.entities.CompanySize;
import co.simplon.dreamteamcust.dtbusiness.enums.CompanySizeRange;

public interface CompanySizeRepository extends JpaRepository<CompanySize, Long> {
    Optional<CompanySize> findByRange(CompanySizeRange range);

}
