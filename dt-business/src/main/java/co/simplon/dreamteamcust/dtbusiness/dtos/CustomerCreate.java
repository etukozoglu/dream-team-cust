package co.simplon.dreamteamcust.dtbusiness.dtos;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;


public record CustomerCreate(@NotBlank @Size(max = 200) String firstName,
                             @NotBlank @Size(max = 200) String lastName,
                             @NotBlank String email,
                             @NotBlank String phone,
                             @NotBlank String job,
                             @NotBlank @Size(max = 200) String company,
                             @NotBlank @Size(max = 2000) String message) {
    public String teamSizeName() {
        return null;
    }

    public String companySizeName() {
        return null;
    }

    public Long companySizeId() {
            return null;
    }

    public String companyName() {
        return null;
    }

    public Long teamSizeId() {
            return null;
    }

    public Object name() {
                return null;
    }
}
