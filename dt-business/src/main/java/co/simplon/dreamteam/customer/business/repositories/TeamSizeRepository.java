package co.simplon.dreamteam.customer.business.repositories;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import co.simplon.dreamteam.customer.business.entities.TeamSize;

public interface TeamSizeRepository extends JpaRepository<TeamSize, Long> {
    Optional<TeamSize> findByRange(String range);
}
