package co.simplon.dreamteamcust.dtbusiness.dtos;

import co.simplon.dreamteamcust.dtbusiness.enums.CompanySizeRange;
import co.simplon.dreamteamcust.dtbusiness.enums.TeamSizeRange;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;

public record CustomerCreate(Long requestNumber,
	@NotBlank(message = "{errors.firstname}") @Size(max = 100) String firstName,
	@NotBlank(message = "{errors.lastname}") @Size(max = 100) String lastName,
	@NotBlank(message = "{errors.email}") String email,
	@NotBlank(message = "{errors.phone_number}") String phoneNumber,
	@NotBlank(message = "{errors.company_name}") @Size(max = 200) String companyName, @Size(max = 50) String role,
	@NotBlank(message = "{errors.message}") @Size(max = 2000) String message,
	@NotNull(message = "{errors.team_size}") TeamSizeRange teamSize,
	@NotNull(message = "{errors.company_size}") CompanySizeRange companySize) {
}
