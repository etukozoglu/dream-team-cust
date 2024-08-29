package co.simplon.dreamteamcust.dtbusiness.dtos;

public record CustomerView(Long request_number, String firstName, String lastName, String email, String phoneNumber,
	String job, String message) {

}
