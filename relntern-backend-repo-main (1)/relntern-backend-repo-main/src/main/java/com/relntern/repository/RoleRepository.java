package com.relntern.repository;

import org.springframework.data.jpa.repository.JpaRepository;
//import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

//import com.relntern.model.InactiveIntern;
import com.relntern.model.Role;


@Repository
public interface RoleRepository extends JpaRepository<Role, Integer>{
	
	@Query(value="SELECT * FROM user WHERE username=?1 and password=?2",nativeQuery=true)
	Role loginValidation(String username,String password);

}
