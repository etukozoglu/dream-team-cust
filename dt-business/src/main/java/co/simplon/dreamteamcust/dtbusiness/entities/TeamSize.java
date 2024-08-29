package co.simplon.dreamteamcust.dtbusiness.entities;

import jakarta.persistence.*;

@Entity
@Table(name = "t_team_size")
public class TeamSize {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "team_size_id")
    private Long id;

    @Column(name = "team_size_range")
    String size;

    public String getSize() {
        return size;
    }

    public void setSize(String size) {
        this.size = size;
    }

    public Long getId() {
        return id;
    }
}
