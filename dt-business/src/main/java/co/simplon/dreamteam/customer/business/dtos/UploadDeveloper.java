package co.simplon.dreamteam.customer.business.dtos;

import co.simplon.dreamteam.customer.business.dtos.validators.FileSize;
import co.simplon.dreamteam.customer.business.dtos.validators.FileType;
import org.springframework.web.multipart.MultipartFile;

public record UploadDeveloper(
       @FileType()
        @FileSize()
        MultipartFile file
) {

}
