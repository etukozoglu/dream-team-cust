package co.simplon.dreamteam.customer.business.services;

import com.opencsv.CSVReader;
import com.opencsv.exceptions.CsvException;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.io.InputStreamReader;
import java.util.List;

public void saveDevelopersFromCsv(MultipartFile file) {
    try (CSVReader reader = new CSVReader(new InputStreamReader(file.getInputStream()))) {

        reader.setSeparator(';');
        List<String[]> csvData = reader.readAll();


        for (String[] row : csvData) {
            if (!row[0].equals("First Name")) { // Ignorer l'en-tête
                String firstName = row[0];
                String lastName = row[1];
                String internalId = row[2];
                String email = row[3];

                System.out.println(firstName + " " + lastName + " (" + internalId + ") - " + email);
            }
        }
    } catch (IOException | CsvException e) {
        e.printStackTrace();
    }
}
