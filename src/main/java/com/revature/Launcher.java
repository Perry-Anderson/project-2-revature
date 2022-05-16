package com.revature;

import java.sql.Connection;
import java.sql.SQLException;

import com.revature.controllers.UserController;
import com.revature.daos.UserDAO;
import com.revature.models.User;

import io.javalin.Javalin;

public class Launcher {

	public static void main(String[] args) {
		UserController uc = new UserController();
		Javalin app = Javalin.create(
				config ->{
					config.enableCorsForAllOrigins();
				}
				
			).start(5000);
		System.out.print("Got here");
		
		
		app.post("/login", uc.loginHandler);
		
		app.post("/createuser", uc.newUserHandler);
		
		System.out.println("Hello, test for the GIT Pull and Pushes inconsistencies");
		
//		UserDAO uDAO = new UserDAO();
//		User u1 = new User("username", "password", "BoB", "Anderson", "BoB@bob.com");
//		User u2 = new User("username2", "password2", "Bill", "Steve", "steve@steve");
//		uDAO.makeUser(u1);
//		uDAO.makeUser(u2);
	}
}
