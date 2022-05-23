package com.revature.controllers;

import java.util.ArrayList;
import java.util.List;

import com.google.gson.Gson;
import com.revature.models.ProductDTO;
import com.revature.models.User;
import com.revature.models.Wishlist;
import com.revature.services.ProductService;

import io.javalin.http.Handler;

public class ProductController {
	//A new ProductService object is instantiated to be used in the controller layer.
	ProductService ps = new ProductService();
	
	public Handler addProductHandler = (ctx) ->{
		// the body String is created using the Handler's configuration's body
				
		ProductDTO pDTO = new ProductDTO();
		String body = ctx.body();
//		ctx.result(ctx.formParam("id")) ;
		Gson gson = new Gson();
		ProductDTO newItem = gson.fromJson(body, ProductDTO.class);

		ps.addProductService(newItem);
		ctx.status(202);
		
	};
	
	public Handler getUserWishlist = (ctx) -> {
		
		String body = ctx.body();
		Gson gson = new Gson();
		int user_id = Integer.parseInt(ctx.pathParam("user_id"));
		System.out.print(user_id);
		List<Wishlist> userWishlist = ps.getUserWishList(user_id);
		System.out.print(userWishlist);
		ctx.result(gson.toJson(ps.getUserWishList(user_id)));
		ctx.status(202);
		
	};
	
	public Handler deleteProductHandler = (ctx) -> {
		
		String product_id = ctx.pathParam("product_id");
		System.out.println(product_id);
		
		//requests the CTX context file's body as a string
//		String body = ctx.body();
//
//		//we make a GSON object called gson
//		Gson gson = new Gson();
//		ProductDTO pdto = new ProductDTO();
//		//Use the new constructor of our productDTO class.
//		ProductDTO productID = gson.fromJson(body, ProductDTO.class);
//		System.out.println(productID);
		ps.deleteUserItem(product_id);
		ctx.status(202);
	};
}
