package co.simplon.dreamteam.customer.business.services;


import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;


@Service



public interface DeveloperService {
    void saveDevelopersFromCsv(MultipartFile file);
}

