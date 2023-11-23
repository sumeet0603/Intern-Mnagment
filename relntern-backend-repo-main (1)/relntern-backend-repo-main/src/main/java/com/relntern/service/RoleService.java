package com.relntern.service;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

import org.json.simple.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.relntern.dbutil.DButil;
import com.relntern.model.Role;
import com.relntern.repository.RoleRepository;

@Service
public class RoleService{
	
	@Autowired
	private RoleRepository userRepo;
	
	Connection connection;
	int flag=0;
	public RoleService() throws SQLException{
		connection = DButil.getConnection();
	}
	

	public Role loginValidation(String username, String password) {
		
		Role user= userRepo.loginValidation(username, password);
		return user;
		
//			try {
//				PreparedStatement statement = connection.prepareStatement("SELECT * FROM CUSTOMER WHERE username='"+username+"'");
//				ResultSet rs = statement.executeQuery();
//				
//				while(rs.next())
//				{
//					if(rs.getString(2).equals(username) && rs.getString(3).equals(password)) {
//						flag = 1;
//					}
//					else {
//						System.out.println("invalid username/password");
//					}
//				}
//			} catch (SQLException e) {
//				
//				e.printStackTrace();
//			}
//		return flag;
	}

	
}
