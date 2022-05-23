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
		//A new user object called currentUser is instantiated. by taking the getUserbyId function from the userDAO, and parsing it from a STRING into an integer 
		//using the Integer class.
		User currentUser = uDAO.getUserbyId(Integer.parseInt(pDTO.user_id));
		
		// a new wishlist object is instantiated called currentWishlist, that takes the title, price, description, category, image and THE newly instantiated
		//current user object above that includes the parsed string to integer conversion.
		Wishlist currentWishlist = new Wishlist(
				pDTO.product_id,
				pDTO.title,
				pDTO.price,
				pDTO.category,
				pDTO.image,
				currentUser
				);
	
		
		//finally, this wishlist with the combination of the DTO values, and the current user object is ran through the addProducToUser function.
		pDAO.addProductToUser(currentWishlist);
		
	}
	
	public List<Wishlist> getUserWishList(int user_id){
	//get the list of wishlist from the DAO
	List<Wishlist> userWishlist = pDAO.getUserWishList(user_id);
	//return that List of wishlist.
	return userWishlist;
		
	}
	
	public void deleteUserItem(String deleteProduct) {
//		String deleteItemString = deleteProduct.product_id;
//		System.out.println(deleteItemString);
		pDAO.deleteItembyUser(deleteProduct);
		
	//trying to fix merge please help us
		
		
	}
}
