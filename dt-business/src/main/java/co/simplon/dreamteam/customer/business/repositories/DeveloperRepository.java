package co.simplon.dreamteam.customer.business.repositories;

import co.simplon.dreamteam.customer.business.dtos.UploadDeveloper;
import co.simplon.dreamteam.customer.business.entities.Developer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface DeveloperRepository extends JpaRepository<Developer, Long> {

}
