package com.swigz.swigz.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.swigz.swigz.Model.CustomerDetail;

@Repository
public interface CustomerRepo extends JpaRepository<CustomerDetail,String> {
    
}
