package com.relntern.controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.json.simple.JSONObject;
import com.relntern.model.Role;
import com.relntern.service.RoleService;

@RestController
@RequestMapping("/user")
@CrossOrigin(allowedHeaders = "*", origins = "*")
public class RoleController {
	
	@Autowired
	private RoleService roleservice;
	
	@PostMapping("/validates")
	public Role UserLogin(@RequestBody JSONObject user) {
		String username = (String) user.get("username");
		String password = (String) user.get("password");
		
		Role flag = roleservice.loginValidation(username, password);
		
//		if(flag == 0) {
//			return 0;
//		}
		return flag;
	
	}
}
