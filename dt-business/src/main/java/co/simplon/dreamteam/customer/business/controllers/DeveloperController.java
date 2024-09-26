package co.simplon.dreamteam.customer.business.controllers;

import co.simplon.dreamteam.customer.business.dtos.DeveloperUpload;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

@RequestMapping("developers")
@RestController
public class DeveloperController {
    private final DeveloperService developerService;

    public DeveloperController(DeveloperService developerService) {
        this.service = service;
    }

    @PostMapping("upload")
    void uploadDevelopers(@RequestBody DeveloperUpload developerUpload) {
        developerService.saveDevelopersFromCsv(developerUpload.getFile());
    }
}
