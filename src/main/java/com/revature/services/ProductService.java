package com.revature.services;

import java.util.ArrayList;
import java.util.List;

import com.revature.daos.ProductDAO;
import com.revature.daos.UserDAO;
import com.revature.models.ProductDTO;
import com.revature.models.User;
import com.revature.models.Wishlist;

public class ProductService {
	//the product down
	ProductDAO pDAO = new ProductDAO();
	UserDAO uDAO = new UserDAO();
	
	public void addProductService(ProductDTO pDTO) {
		User currentUser = uDAO.getUserbyId(Integer.parseInt(pDTO.user_id));
		Wishlist currentWishlist = new Wishlist(
				Integer.parseInt(pDTO.id),
				pDTO.title,
				pDTO.price,
				pDTO.description,
				pDTO.category,
				pDTO.image
				);
	
		pDAO.addProductToUser(currentUser, currentWishlist);
		
	}
	
	public List<Wishlist> getUserWishList(int user_id){
	//get the list of wishlist from the DAO
	List<Wishlist> userWishlist = pDAO.getUserWishList(user_id);
	//return that List of wishlist.
	return userWishlist;
		
	}
	
	public void deleteUserItem(int user_id, int product_id) {
		pDAO.deleteItembyUser(user_id, product_id);
	}
}
