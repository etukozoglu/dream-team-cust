package co.simplon.dreamteamcust.dtbusiness.dtos;

import jakarta.validation.constraints.NotBlank;

public record TeamSizeDTO(@NotBlank String size) {
}
