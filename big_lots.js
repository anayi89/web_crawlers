// https://www.biglots.com/c/weekly-deals/clearance/_/N-1986357092?No=0&Nrpp=144&fulfillment_type=CustomerPickup&lazy=true#/c/weekly-deals/clearance/_/N-1986357092?No=144&Nrpp=48&fulfillment_type=CustomerPickup
const products = document.querySelectorAll(".product-link")
for (let i = 0; i < products.length; i++)
{
	fetch(products[i].getAttribute("href"))
		.then(function (response) {return response.text()})
		.then(function (html) {var parser = new DOMParser()
			let doc = parser.parseFromString(html, "text/html")
			let prod_name = doc.querySelector(".product-name > h1").innerText
            let prod_price = doc.querySelector(".regular-price").innerText
			let prod_sku = doc.querySelector(".accordion-body-content > div:nth-child(2)").innerText.split("SKU(s): ")[1]
            console.log(prod_name + "|" + prod_price + "|" + prod_sku)
		}
	)
}