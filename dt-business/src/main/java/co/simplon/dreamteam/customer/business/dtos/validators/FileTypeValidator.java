package co.simplon.dreamteam.customer.business.dtos.validators;

import org.springframework.web.multipart.MultipartFile;

import jakarta.validation.ConstraintValidator;
import jakarta.validation.ConstraintValidatorContext;

public class  FileTypeValidator implements ConstraintValidator<FileType, MultipartFile> {

    private static final String CSV_TYPE = "text/csv";

    @Override
    public void initialize(FileType constraintAnnotation) {

    }

    @Override
    public boolean isValid(MultipartFile value, ConstraintValidatorContext context) {
        if (value == null) {
            return true;
        }

        String fileType = value.getContentType();
        return CSV_TYPE.equals(fileType);
    }
}
