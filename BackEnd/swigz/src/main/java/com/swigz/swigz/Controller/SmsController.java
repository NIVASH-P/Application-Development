package com.swigz.swigz.Controller;

import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
// import org.springframework.web.reactive.function.BodyInserter;
// import org.springframework.web.reactive.function.BodyInserters;
// import org.springframework.web.reactive.function.server.ServerRequest;
// import org.springframework.web.reactive.function.server.ServerResponse;
import org.springframework.web.bind.annotation.RestController;

import com.swigz.swigz.Model.OtpRequest;
import com.swigz.swigz.Model.OtpResponse;
import com.swigz.swigz.Model.OtpValidation;
import com.swigz.swigz.Service.SmsService;

// import com.otpverification.otpverification.Service.OtpService;
// import com.otpverification.otpverification.passwordreset.PasswordReset;

import lombok.extern.slf4j.Slf4j;

// import reactor.core.publisher.Mono;

@Component
@RestController
@RequestMapping("/otp")
@Slf4j
@CrossOrigin("*")
public class SmsController {
    
    @Autowired
    private SmsService smsService;

    @GetMapping("/process")
    public String processSMS()
    {
        return "SMS Sent";
    }

    @PostMapping("/Sentotp")
    public OtpResponse sendOtp(@RequestBody OtpRequest otpRequest)
    {
        return smsService.sendSms(otpRequest);
    }
    
    @PostMapping("/validateotp")
    public String validateOtp(@RequestBody OtpValidation otpValidation)
    {
        return smsService.validateOtp(otpValidation);
    }
}
