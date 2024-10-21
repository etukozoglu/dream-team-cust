package co.simplon.dreamteam.customer.business.services;


import co.simplon.dreamteam.customer.business.dtos.UploadDeveloper;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;


@Service



public interface DeveloperService {
    void saveDevelopersFromCsv(UploadDeveloper file);
}

