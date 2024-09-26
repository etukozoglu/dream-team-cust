package co.simplon.dreamteam.customer.business.services;

import co.simplon.dreamteam.customer.business.entities.Developer;
import co.simplon.dreamteam.customer.business.repositories.DeveloperRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.List;


@Service
public class DeveloperService {

    private final DeveloperRepository developerRepository;

    @Autowired
    public DeveloperService(DeveloperRepository developerRepository) {
        this.developerRepository = developerRepository;
    }

    public void saveDevelopersFromCsv(MultipartFile file) throws Exception {
        List<Developer> developers = new ArrayList<>();

        try (BufferedReader reader = new BufferedReader(new InputStreamReader(file.getInputStream()))) {
            String line;
            while ((line = reader.readLine()) != null) {
                String[] fields = line.split(",");
                Developer developer = new Developer();
                developer.setFirstName(fields[0]);
                developer.setLastName(fields[1]);
                developer.setInternalNumber(fields[2]);
                developer.setEmail(fields[3]);
                developers.add(developer);
            }
        }

        // Save the list of developers to the database
        developerRepository.saveAll(developers);
    }
}