package co.simplon.dreamteam.customer.business.repositories;

import co.simplon.dreamteam.customer.business.dtos.DeveloperUpload;
import co.simplon.dreamteamcust.dtbusiness.entities.Developer;
import org.springframework.data.jpa.repository.JpaRepository;

public interface DeveloperRepository extends JpaRepository<Developer, Long> {
    DeveloperUpload save(DeveloperUpload developerUpload);
}
