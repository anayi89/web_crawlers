// find the book title and its in-store availability
let bn_books1 = document.querySelectorAll(".product-shelf-title > a")
for (let i = 0; i < bn_books1.length; i++)
{
    console.log(bn_books1[i].getAttribute("title"))
    console.log(document.querySelectorAll(".plp-bopis-badge")[i].innerText.split("\n")[2])
}
// find the book title and its ISBN
let bn_books2 = document.querySelectorAll(".product-shelf-title > a")
for (let i = 0; i < bn_books2.length; i++)
{
	fetch(document.querySelectorAll(".product-shelf-title > a")[i].getAttribute("href"))
		.then(function (response) {return response.text()})
		.then(function (html) {var parser = new DOMParser()
			let doc = parser.parseFromString(html, "text/html")
            let prod_title = doc.querySelectorAll(".pdp-header-title")[0].innerText 
			let prod_isbn = doc.querySelector(".plain > tbody > tr > td").innerText
			console.log(prod_title)
            console.log(prod_isbn)
		}
	)
}