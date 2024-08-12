package com.swigz.swigz.Model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;

@Data
@AllArgsConstructor
@Getter
@Setter
public class OtpRequest {
    private String number;
    private String email;
    private String oneTimePassword;
}
