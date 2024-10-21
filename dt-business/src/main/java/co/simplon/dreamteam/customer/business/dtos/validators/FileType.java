package co.simplon.dreamteam.customer.business.dtos.validators;

import java.lang.annotation.Documented;
import java.lang.annotation.ElementType;
import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;
import java.lang.annotation.Target;

import org.springframework.http.MediaType;

import jakarta.validation.Constraint;
import jakarta.validation.Payload;

@Retention(RetentionPolicy.RUNTIME)
@Target({ElementType.PARAMETER, ElementType.FIELD })
@Constraint(validatedBy = FileTypeValidator.class)
@Documented
public @interface FileType {
    String message() default "The file must be of type .csv";

    String[] types() default { MediaType.TEXT_PLAIN_VALUE + "text/csv" };


    Class<?>[] groups() default {};

    Class<? extends Payload>[] payload() default {};
}