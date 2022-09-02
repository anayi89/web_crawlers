const products = document.querySelectorAll('[aria-label="Product Section"] > li > div > div > a')
for (let i = 0; i < products.length; i++)
{
	fetch(products[i].getAttribute("href"))
		.then(function (response) {return response.text()})
		.then(function (html) {var parser = new DOMParser()
			let doc = parser.parseFromString(html, "text/html")
			let prod_name = doc.querySelector("#productTitle").innerText
            let prod_price = doc.querySelector(".product__price").innerText.split("\n").toString().replace(",", ".")
			let prod_upc = doc.querySelector(".wag-accordion-shipping-content").innerText.split("UPC: ")[1]
            console.log(prod_name + "|" + prod_price + "|" + prod_upc)
		}
	)
}