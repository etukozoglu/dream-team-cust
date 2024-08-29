package co.simplon.dreamteamcust.dtbusiness.repositories;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import co.simplon.dreamteamcust.dtbusiness.entities.TeamSize;
import co.simplon.dreamteamcust.dtbusiness.enums.TeamSizeRange;

public interface TeamSizeRepository extends JpaRepository<TeamSize, Long> {
    Optional<TeamSize> findByRange(TeamSizeRange range);
}
