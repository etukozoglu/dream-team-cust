package co.simplon.dreamteamcust.dtbusiness.dtos;

import co.simplon.dreamteamcust.dtbusiness.enums.CompanySizeRange;
import co.simplon.dreamteamcust.dtbusiness.enums.TeamSizeRange;
import jakarta.validation.constraints.Size;

public record CustomerCreate(

	Long requestNumber, @Size(max = 100) String firstName, @Size(max = 100) String lastName, String email,
	String phoneNumber, @Size(max = 200) String companyName, @Size(max = 50) String role,
	@Size(max = 2000) String message, TeamSizeRange teamSize, CompanySizeRange companySize

) {
}
