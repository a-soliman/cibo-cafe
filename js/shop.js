var shopShelf = document.getElementById('shopShelf')

var shopArray =[]

function shopItem(image, name, descraption, price, inStock){
	this.image = image
	this.name = name
	this.descraption = descraption
	this.price = price
	this.inStock = inStock
}
var houseHalf = new shopItem('img/menu/01.jpg', 'House Blend - 0.5 lb', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad.', '$ 9.75', false )
var houseOne = new shopItem('img/menu/01.jpg', 'House Blend - 1 lb', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad.', '$ 18.00', true )

var espressoHalf = new shopItem('img/menu/01.jpg', 'Espresso Blend - 0.5 lb', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad.', '$ 9.75', true )
var espressoOne = new shopItem('img/menu/01.jpg', 'Espresso Blend - 1 lb', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad.', '$ 18.00', true )

var decafHalf = new shopItem('img/menu/01.jpg', 'Decaf Blend - 0.5 lb', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad.', '$ 9.75', true )
var decafOne = new shopItem('img/menu/01.jpg', 'Decaf Blend - 1 lb', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad.', '$ 18.00', true )

var KenyaHalf = new shopItem('img/menu/01.jpg', 'Kenya AA - 0.5 lb', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad.', '$ 9.75', true )
var KenyaOne = new shopItem('img/menu/01.jpg', 'Kenya AA - 1 lb', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad.', '$ 18.00', true )

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
		addToCart.setAttribute('class', 'com-btn')
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