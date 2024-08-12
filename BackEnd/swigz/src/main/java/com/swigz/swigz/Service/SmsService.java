package com.swigz.swigz.Service;

import java.text.DecimalFormat;
import java.util.HashMap;
import java.util.Map;
import java.util.Random;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.swigz.swigz.Config.Twilloconfig;
import com.swigz.swigz.Model.CustomerDetail;
import com.swigz.swigz.Model.OtpRequest;
import com.swigz.swigz.Model.OtpResponse;
import com.swigz.swigz.Model.OtpStatus;
import com.swigz.swigz.Model.OtpValidation;
import com.swigz.swigz.Repository.CustomerRepo;
import com.twilio.Twilio;
import com.twilio.rest.api.v2010.account.Message;
import com.twilio.type.PhoneNumber;

@Service
public class SmsService {
    
    @Autowired
    private Twilloconfig twilloconfig;
    private Twilio twilio;
    @Autowired
    private CustomerRepo customerRepo;
    
    // private CustomerDetail customerDetail;
    Map <String,String> otpmap = new HashMap<>();

    private String generateOtp()
    {
        return new DecimalFormat("0000000")
                   .format(new Random().nextInt(999999));
    }

    public OtpResponse sendSms(OtpRequest otpRequest)
    {
        OtpResponse  otpResponse = null;
        try{
            twilio.init(twilloconfig.getAccount_Sid(), twilloconfig.getAuth_Token());;
            PhoneNumber to = new PhoneNumber(otpRequest.getNumber());
            PhoneNumber from = new PhoneNumber(twilloconfig.getTrail_Number());
            String otp = generateOtp();
            String otpmessage = "Dear Customer , OTP For Swigz App "+otp;
            Message message = Message
                        .creator(to,from, // from
                                otpmessage)
                        .create();
            System.out.println(message);
            otpmap.put(otpRequest.getNumber(), otp);
            System.out.println(otpmap.get(otpRequest.getNumber()));
            otpResponse = new OtpResponse(OtpStatus.DELIVERED,otpmessage);
            return otpResponse;    
        }catch(Exception e){
            otpResponse = new OtpResponse(OtpStatus.FAILED,e.getMessage());
            return otpResponse;
        }
    }

    public String validateOtp(OtpValidation otpValidation)
    {
        String otp = otpmap.get(otpValidation.getNumber());
        System.out.println(otp);
        if(otp.equals(otpValidation.getOneTimePassword()))
        {
            otpmap.remove(otpValidation.getNumber(),otpValidation.getOneTimePassword());
            if(customerRepo.findById(otpValidation.getNumber()).get() == null)
            {
                CustomerDetail customerDetail = new CustomerDetail();
                customerDetail.setPhonenumber(otpValidation.getNumber());
                customerRepo.save(customerDetail);
            }
            return "OTP is Valid";
        }
        else{
            return "OTP is Invalid";
        }
    }
    public boolean PostData(CustomerDetail customerDetail, String id) {
        // CustomerDetail customerDetail2 = customerRepo.findById(id).get();
        // System.out.println(id);
        // customerDetail.setPhonenumber(customerDetail.getPhonenumber());
        customerRepo.save(customerDetail);
        return true;
    }
    public CustomerDetail getData(String id)
    {
        return customerRepo.findById(id).get();
    }
}

