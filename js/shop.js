var shopShelf = document.getElementById('shopShelf')

var shopArray =[]

function shopItem(image, smallImage,  name, descraption, price, inStock){
	this.image = image
	this.smallImage = smallImage
	this.name = name
	this.descraption = descraption
	this.price = price
	this.inStock = inStock
}
var houseHalf = new shopItem('img/menu/01.jpg', 'img/product/01.jpg', 'House Blend - 0.5 lb', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad.', 9.75, false )
var houseOne = new shopItem('img/menu/01.jpg', 'img/product/01.jpg', 'House Blend - 1 lb', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad.', 18.00, true )

var espressoHalf = new shopItem('img/menu/01.jpg', 'img/product/01.jpg', 'Espresso Blend - 0.5 lb', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad.', 9.75, true )
var espressoOne = new shopItem('img/menu/01.jpg', 'img/product/01.jpg', 'Espresso Blend - 1 lb', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad.', 18.00, true )

var decafHalf = new shopItem('img/menu/01.jpg', 'img/product/01.jpg', 'Decaf Blend - 0.5 lb', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad.', 9.75, true )
var decafOne = new shopItem('img/menu/01.jpg', 'img/product/01.jpg', 'Decaf Blend - 1 lb', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad.', 18.00, true )

var KenyaHalf = new shopItem('img/menu/01.jpg', 'img/product/01.jpg', 'Kenya AA - 0.5 lb', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad.', 9.75, true )
var KenyaOne = new shopItem('img/menu/01.jpg', 'img/product/01.jpg', 'Kenya AA - 1 lb', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad.', 18.00, true )

//pushing the items into the array
shopArray.push(houseHalf)
shopArray.push(houseOne)
shopArray.push(espressoHalf)
shopArray.push(espressoOne)
shopArray.push(decafHalf)
shopArray.push(decafOne)
shopArray.push(KenyaHalf)
shopArray.push(KenyaOne)

// for loop to list the items
for (var i = 0; i < shopArray.length; i++) {
	

	//Creating new elements
	var col = document.createElement('div')
	col.setAttribute('class', 'col-md-4 col-sm-6 col-xs-12')

	var singleItem = document.createElement('div')
	singleItem.setAttribute('class', 'single-our-menu')

	var imageDiv = document.createElement('div')
	imageDiv.setAttribute('class', 'sm-image')

	var image = document.createElement('img')
	image.setAttribute('src', shopArray[i].image)

	var addToCart = document.createElement('a')
	addToCart.setAttribute('href', '#')
	
	

	var itemName = document.createElement('div')
	itemName.setAttribute('class', 'sm-heading')
	itemName.innerHTML = shopArray[i].name

	//content holder will be nested into content
	var content = document.createElement('div')
	content.setAttribute('class', 'sm-content') 

	var contentHolder = document.createElement('div')
	contentHolder.setAttribute('class', 'sm-des')
	contentHolder.innerHTML = shopArray[i].descraption

	var price = document.createElement('div')
	price.setAttribute('class', 'sm-price')
	price.innerHTML = shopArray[i].price

	//an if statemnent to check if item in stock
	if (!shopArray[i].inStock) {
		addToCart.setAttribute('class', 'com-btn disabled-btn')
		addToCart.innerHTML = 'Out Of Stock'
	} else {
		addToCart.setAttribute('class', 'com-btn addToCart')
		addToCart.setAttribute('item-name', shopArray[i].name)
		addToCart.setAttribute('item-price', shopArray[i].price)
		addToCart.setAttribute('item-small-image', shopArray[i].smallImage )
		addToCart.innerHTML = 'Add To Cart'
	} // end of if statement

	//NESTING

	// imageDiv ====> contains A)image B)Add To Cart C)Item Name
	imageDiv.appendChild(image)
	imageDiv.appendChild(addToCart)
	imageDiv.appendChild(itemName)

	// content =====> contains A)contentHolder
	content.appendChild(contentHolder)

	// singleItem ====> contains A)imageDiv B)content C)price
	singleItem.appendChild(imageDiv)
	singleItem.appendChild(content)
	singleItem.appendChild(price)

	//colum ===>contains A)singleItem
	col.appendChild(singleItem)

	// putting everything on the selling shelf
	shopShelf.appendChild(col)


	
} //the for loop

// an array for guest purchece
	var guestArray = []

// CART
$('.addToCart').click(function(event) {
	event.preventDefault();
	var itemName = $(this).attr('item-name')
	var itemPrice = $(this).attr('item-price')
	var itemImage = $(this).attr('item-small-image')

	

	// an object for guest purchace
	var guestPurchaced = {
		item: itemName, 
		price: itemPrice
	}

	guestArray.push(guestPurchaced)
	// creating cart elements
	//item wrapper
	var itemWrapper = document.createElement('tr')
	itemWrapper.setAttribute('class', 'cart_item')
	//Remove
	var cartRemove = document.createElement('td')
	cartRemove.setAttribute('class', 'remove')

	var removeA = document.createElement('a')
	removeA.setAttribute('href', '#')
	removeA.innerHTML = 'X'

	// image
	var cartImageHolder = document.createElement('td')
	cartImageHolder.setAttribute('class', 'item-img')

	var cartImage = document.createElement('img')
	cartImage.setAttribute('src', itemImage)

	//name
	var cartItemTitle = document.createElement('td')
	cartItemTitle.setAttribute('class', 'item-title')
	cartItemTitle.innerHTML = itemName

	//price
	var cartPrice = document.createElement('td')
	cartPrice.setAttribute('class', 'item-price')
	cartPrice.innerHTML = Number(itemPrice)

	//qty
	var  cartItemQty = document.createElement('td')
	cartItemQty.setAttribute('class', 'item-qty')

	var qtyInput = document.createElement('input')
	qtyInput.setAttribute('type', 'number')
	qtyInput.setAttribute('value', 1)
	qtyInput.setAttribute('id', 'itemQty')
	qtyInput.setAttribute('min', 1)
	qtyInput.setAttribute('name', 'qty')


	//total
	var cartTotal = document.createElement('td')
	cartTotal.innerHTML =  itemPrice

	//nesting

	//cartRemove ===> contains removeA
	cartRemove.appendChild(removeA)
	//cartImageHolder ===> contains cartImage
	cartImageHolder.appendChild(cartImage)
	//cartItemQty ====> contains qtyInput
	cartItemQty.appendChild(qtyInput)
	// itemWrapper ====>conatins A)cartRemove , B)cartImageHolder , C)cartItemTitle , D)cartPrice , E)cartItemQty , F) cartTotal.
	itemWrapper.appendChild(cartRemove)
	itemWrapper.appendChild(cartImageHolder)
	itemWrapper.appendChild(cartItemTitle)
	itemWrapper.appendChild(cartPrice)
	itemWrapper.appendChild(cartItemQty)
	itemWrapper.appendChild(cartTotal)

	//intrducing the output
	var cart = document.getElementById('cart')
	// nesting to the output
	cart.appendChild(itemWrapper)
	console.log(guestArray)


	
}) // add to cart

//an array for the total price
var totalArray = []


$('.updateCart').click(function(event) {
	event.preventDefault();

	
	for (var i = 0; i < guestArray.length; i++) {
		totalArray.push(Number(guestArray[i].price)) 
	}
	var sum = totalArray.reduce(function(a, b) { return a + b; });

document.getElementById('subTotal').innerHTML = sum * document.getElementById('itemQty').value
document.getElementById('total').innerHTML = sum



})



