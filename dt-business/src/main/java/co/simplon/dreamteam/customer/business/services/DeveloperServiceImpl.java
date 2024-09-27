package co.simplon.dreamteam.customer.business.services;


import com.opencsv.CSVReader;
import com.opencsv.exceptions.CsvException;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.io.InputStreamReader;
import java.util.List;

@Service
public class DeveloperServiceImpl implements DeveloperService {

    @Override
    public void saveDevelopersFromCsv(MultipartFile file) {
        try (CSVReader reader = new CSVReader(new InputStreamReader(file.getInputStream()))) {

            List<String[]> csvData = reader.readAll();

            for (String[] row : csvData) {
                if (!row[0].equalsIgnoreCase("First Name")) { // Ignorer l'entête
                    String internalId = row[0];
                    String firstName = row[1];
                    String lastName = row[2];
                    String email = row[3];

                    System.out.println(firstName + " " + lastName + " (" + internalId + ") - " + email);
                }
            }
        } catch (IOException | CsvException e) {
            e.printStackTrace();
        }
    }
}

