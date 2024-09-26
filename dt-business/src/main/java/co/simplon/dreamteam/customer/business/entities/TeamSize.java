package co.simplon.dreamteamcust.dtbusiness.entities;

import co.simplon.dreamteamcust.dtbusiness.enums.TeamSizeRange;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "t_team_sizes")
public class TeamSize {

    public TeamSize() {
    }

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "team_size_id")
    private Long teamSizeId;

    @Enumerated(EnumType.STRING)
    @Column(name = "team_size_range", nullable = false, length = 50)
    private TeamSizeRange range;

    public Long getTeamSizeId() {
	return teamSizeId;
    }

    public void setTeamSizeId(Long teamSizeId) {
	this.teamSizeId = teamSizeId;
    }

    public TeamSizeRange getRange() {
	return range;
    }

    public void setRange(TeamSizeRange range) {
	this.range = range;
    }

    @Override
    public String toString() {
	return "{teamSizeId=" + teamSizeId + ", range=" + range + "}";
    }

}
