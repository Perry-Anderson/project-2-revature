package com.revature.controllers;

import javax.servlet.http.HttpSession;

import com.google.gson.Gson;
import com.revature.models.LoginDTO;
import com.revature.models.User;
import com.revature.services.UserService;

import io.javalin.http.Handler;

public class UserController {
	UserService us = new UserService();
	public Handler loginHandler = (ctx) -> {
		String body = ctx.body();
		
		Gson gson = new Gson();
		
		LoginDTO LDTO = gson.fromJson(body, LoginDTO.class);
		
		if(us.login(LDTO.getUsername(), LDTO.getPassword()) != null) {
			ctx.req.getSession();
			
			ctx.status(202);
			
			String userJSON = gson.toJson(us.login(LDTO.getUsername(), LDTO.getPassword()));

			ctx.result(userJSON);
		}else {
			ctx.status(401);
			System.out.println("Login Failed");
		}
	};
	
	public Handler newUserHandler = (ctx) ->{
		String body = ctx.body();
		
		Gson gson = new Gson();
		
		User newUser = gson.fromJson(body, User.class);
		
		if(us.newUserService(newUser) == true) {
			ctx.status(202);
		}else {
			ctx.status(401);
		}
		
	};
}
