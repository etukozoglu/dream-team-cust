package co.simplon.dreamteam.customer.business.dtos.validators;

import java.lang.annotation.Documented;
import java.lang.annotation.ElementType;
import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;
import java.lang.annotation.Target;

import jakarta.validation.Constraint;
import jakarta.validation.Payload;

@Retention(RetentionPolicy.RUNTIME)
@Target({ ElementType.FIELD })
@Constraint(validatedBy = FileSizeValidator.class)
@Documented
public @interface FileSize {

    static final long FIVE_MB = 5 * 1024 * 1024;

    String message() default "The size of the file must be less than 5MB";

    long max() default FIVE_MB;

    Class<?>[] groups() default {};

    Class<? extends Payload>[] payload() default {};
}
