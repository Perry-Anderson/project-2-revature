package com.revature.daos;

import java.util.List;

import javax.persistence.Query;

import org.hibernate.Session;

import com.revature.utils.HibernateUtil;



import com.revature.models.User;


public class UserDAO {

	public User getUser(String username) {
		System.out.print("Hello");
		Session ses = HibernateUtil.getSession();
		Query q = ses.createQuery("FROM User u WHERE u.username = ?0");
		q.setParameter(0, username);
		User user = (User) q.getSingleResult();
		HibernateUtil.closeSession();
		return user;
	}
	
	public User makeUser(User u) {
		Session ses = HibernateUtil.getSession();
		ses.save(u);
		HibernateUtil.closeSession();
		return u;
	}
//public List<Movie> getMoviesByDirectorId(int id){
//		
//		Session ses = HibernateUtil.getSession();
//		
//		//create a query with a parameter that takes in the director id (given in the method argument)
//		//"find every Movie which we'll call m, where the id of it's Director object = ?"
//		//"m" is an alias (different name) that we gave to Movie, so help us make a cleaner query
//		Query q = ses.createQuery("FROM Movie m WHERE m.director_fk.director_id = ?0");
//		
//		//set the ? to the id sent in the method call. This is how we PARAMETERIZE HQL
//		q.setParameter(0, id);
//		
//		//create a List of Movies based on the results of the query
//		List<Movie> movieList = q.getResultList();
//		
//		HibernateUtil.closeSession();
//		
//		return movieList;
//		
//		/*
//		  I'd imagine this is a good template for user login
//		  "FROM User u WHERE u.username = ?0 etc...."
//		 */

	public User getUserbyId(int user_id) {
		Session ses = HibernateUtil.getSession();
		User currentUser = ses.get(User.class, user_id);
		HibernateUtil.closeSession();
		return currentUser;
	}
		
	}
	

