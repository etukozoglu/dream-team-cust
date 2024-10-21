package co.simplon.dreamteam.customer.business.services;

import co.simplon.dreamteam.customer.business.dtos.UploadDeveloper;
import co.simplon.dreamteam.customer.business.entities.Developer;
import co.simplon.dreamteam.customer.business.repositories.DeveloperRepository;
import com.opencsv.CSVReader;
import com.opencsv.exceptions.CsvException;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.List;

@Service
public class DeveloperServiceImpl implements DeveloperService {
    private final DeveloperRepository developerRepository;

    private static final Logger log = LoggerFactory.getLogger(DeveloperServiceImpl.class);

    public DeveloperServiceImpl(DeveloperRepository developerRepository) {
        this.developerRepository = developerRepository;
    }

    @Override
    public void saveDevelopersFromCsv(UploadDeveloper file) {
        try (CSVReader reader = new CSVReader(new InputStreamReader(file.file().getInputStream()))) {

            List<String[]> csvData = reader.readAll();

            for (String[] row : csvData) {
                if (!row[0].equalsIgnoreCase("First Name")) {// Ignorer l'entête
                    Developer developer = new Developer();
                    developer.setFirstName(row[0]);
                    developer.setLastName(row[1]);
                    developer.setInternalNumber(row[2]);
                    developer.setEmail(row[3]);
                    developerRepository.save(developer);
                    log.info("succesfully saved developer with email {} and firstname {}", developer.getEmail(), developer.getFirstName());
                }
            }
        } catch (IOException | CsvException e) {
            e.printStackTrace();
            log.error("Error while reading CSV file", e);
        }
    }
}

