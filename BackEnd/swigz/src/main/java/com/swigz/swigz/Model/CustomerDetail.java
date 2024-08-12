package com.swigz.swigz.Model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class CustomerDetail {
    @Id
    private String phonenumber;
    private String firstname;
    private String lastname;
    private String email;
    private String street ;
    private String city;
    private String state ;
    private String zipcode; 
    private String country ;
}
