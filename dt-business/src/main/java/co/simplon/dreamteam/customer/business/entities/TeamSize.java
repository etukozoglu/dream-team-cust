package co.simplon.dreamteam.customer.business.entities;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
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

    @Column(name = "team_size_range", nullable = false, length = 50)
    private String range;

    public Long getTeamSizeId() {
        return teamSizeId;
    }

    public void setTeamSizeId(Long teamSizeId) {
        this.teamSizeId = teamSizeId;
    }

    public String getRange() {
        return range;
    }

    public void setRange(String range) {
        this.range = range;
    }

    @Override
    public String toString() {
        return "{teamSizeId=" + teamSizeId + ", range=" + range + "}";
    }
}