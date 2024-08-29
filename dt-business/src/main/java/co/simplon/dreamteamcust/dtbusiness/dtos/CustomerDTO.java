package co.simplon.dreamteamcust.dtbusiness.dtos;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;

public record CustomerDTO(@NotBlank @Size(max = 200) String firstName,
                          @NotBlank @Size(max = 200) String lastName,
                          @NotBlank String email,
                          @NotBlank String phone,
                          @NotBlank String job,
                          @NotBlank @Size(max = 200) String company,
                          @NotBlank @Size(max = 2000) String message) {
}
