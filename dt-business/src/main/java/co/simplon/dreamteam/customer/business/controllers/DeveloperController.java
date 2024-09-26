package co.simplon.dreamteam.customer.business.controllers;


import co.simplon.dreamteam.customer.business.services.DeveloperService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;


@RequestMapping("developers")
@RestController
public class DeveloperController {
    private final DeveloperService developerService;

    public DeveloperController(DeveloperService developerService) {
        this.developerService = developerService;
    }


    @PostMapping("upload")
    public ResponseEntity<Void> uploadDevelopers(@RequestParam("file") MultipartFile file) {
        try {
            // Pass the MultipartFile to the service layer for processing
            developerService.saveDevelopersFromCsv(file);
            return ResponseEntity.status(HttpStatus.CREATED).build();
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }
}