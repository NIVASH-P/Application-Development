package com.swigz.swigz.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.swigz.swigz.Model.CustomerDetail;
import com.swigz.swigz.Service.SmsService;

@CrossOrigin("*")
@RestController
public class CustomerDetailsController {
    @Autowired
    public SmsService smsService;

    @PutMapping("/put")
    public boolean UpdateData(@RequestBody CustomerDetail customerDetail)
    {
        // return true;
        // System.out.println(customerDetail.getPhonenumber()+"Hello");
        // return true;
        try{
            return smsService.PostData(customerDetail, customerDetail.getPhonenumber());
        }
        catch(Error error)
        {
            return false;
        }
    }
    @GetMapping("/get/{id}")
    public CustomerDetail getData(@PathVariable String id)
    {
        return smsService.getData(id);
    }
}
