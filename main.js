// keys: description, type, dressCode, imageUrl
const clothing = [
    {
        description: 'Michael Kors Blue Dress Shirt',
        type: "top",
        dressCode: 'formal',
        imageUrl: 'https://slimages.macysassets.com/is/image/MCY/products/0/optimized/19226370_fpx.tif?$browse$&wid=376&fmt=webp',
    },
    {
        description: 'Calvin Klein Steel Gray Dress Shirt',
        type: "top",
        dressCode: 'formal',
        imageUrl: 'https://slimages.macysassets.com/is/image/MCY/products/2/optimized/19714862_fpx.tif?bgc=255,255,255&wid=400&qlt=90,0&layer=comp&op_sharpen=0&resMode=bicub&op_usm=0.7,1.0,0.5,0&fmt=webp',
    },
    {
        description: 'Michael Kors Pink Dress Shirt',
        type: "top",
        dressCode: 'formal',
        imageUrl: 'https://slimages.macysassets.com/is/image/MCY/products/3/optimized/21014523_fpx.tif?op_sharpen=1&wid=1230&hei=1500&fit=fit,1&$filterxlrg$&fmt=webp',
    },
    {
        description: 'Michael Kors White Dress Shirt',
        type: "top",
        dressCode: 'formal',
        imageUrl: 'https://slimages.macysassets.com/is/image/MCY/products/8/optimized/10468918_fpx.tif?$browse$&wid=376&fmt=webp',
    },
    {
        description: 'Alfani Short Sleeve Shirt',
        type: "top",
        dressCode: 'casual',
        imageUrl: 'https://slimages.macysassets.com/is/image/MCY/products/1/optimized/20929261_fpx.tif?$browse$&wid=376&fmt=webp',
    },
    {
        description: 'Tommy Hilfiger white Short Sleeve Shirt',
        type: "top",
        dressCode: 'casual',
        imageUrl: 'https://slimages.macysassets.com/is/image/MCY/products/1/optimized/8789631_fpx.tif?$browse$&wid=376&fmt=webp',
    },
    {
        description: 'Wrangler Graphic T-shirt',
        type: "top",
        dressCode: 'sport',
        imageUrl: 'https://slimages.macysassets.com/is/image/MCY/products/8/optimized/21436348_fpx.tif?$browse$&wid=376&fmt=webp',
    },
    {
        description: 'Adidas red T-shirt',
        type: "top",
        dressCode: 'sport',
        imageUrl: 'https://slimages.macysassets.com/is/image/MCY/products/2/optimized/13336822_fpx.tif?$thumb$&wid=376',
    },
    {
        description: 'Nike Giannis Basketball Sneakers',
        type: "shoes",
        dressCode: 'sport',
        imageUrl: 'https://slimages.macysassets.com/is/image/MCY/products/0/optimized/21824750_fpx.tif?op_sharpen=1&wid=1230&hei=1500&fit=fit,1&$filterxlrg$&fmt=webp',
    },
    {
        description: 'Adidas High Top Sneakers',
        type: "shoes",
        dressCode: 'sport',
        imageUrl: 'https://slimages.macysassets.com/is/image/MCY/products/0/optimized/18588060_fpx.tif?op_sharpen=1&wid=1230&hei=1500&fit=fit,1&$filterxlrg$&fmt=webp',
    },
    {
        description: 'Sperry Brown Shoes',
        type: "shoes",
        dressCode: 'casual',
        imageUrl: 'https://slimages.macysassets.com/is/image/MCY/products/2/optimized/524862_fpx.tif?$thumb$&wid=376',
    },
    {
        description: 'Sperry Brown Shoes',
        type: "shoes",
        dressCode: 'formal',
        imageUrl: 'https://slimages.macysassets.com/is/image/MCY/products/6/optimized/21650286_fpx.tif?op_sharpen=1&wid=1230&hei=1500&fit=fit,1&$filterxlrg$&fmt=webp',
    },
    {
        description: 'Casual Pants',
        type: "bottom",
        dressCode: 'casual',
        imageUrl: 'https://slimages.macysassets.com/is/image/MCY/products/6/optimized/21650286_fpx.tif?op_sharpen=1&wid=1230&hei=1500&fit=fit,1&$filterxlrg$&fmt=webp',
    },
    {
        description: 'Dress Blue Pants',
        type: "bottom",
        dressCode: 'casual',
        imageUrl: 'https://www.macys.com/shop/product/mens-haggar-cool-18-pro-classic-fit-expandable-waist-flat-front-stretch-dress-pants?ID=4372158&CategoryID=89',
    },
    {
        description: 'Blue Dress Pants',
        type: "bottom",
        dressCode: 'formal',
        imageUrl: 'https://www.macys.com/shop/product/mens-haggar-cool-18-pro-classic-fit-expandable-waist-flat-front-stretch-dress-pants?ID=4372158&CategoryID=89',
    },
    {
        description: 'Gray Dress Pants',
        type: "bottom",
        dressCode: 'formal',
        imageUrl: 'https://slimages.macysassets.com/is/image/MCY/products/0/optimized/10067390_fpx.tif?$thumb$&wid=376',
    },
    {
        description: 'Black Dress Pants',
        type: "bottom",
        dressCode: 'formal',
        imageUrl: 'https://slimages.macysassets.com/is/image/MCY/products/3/optimized/11786133_fpx.tif?$browse$&wid=376&fmt=webp',
    },
    {
        description: 'Adidas Track Pants',
        type: "bottom",
        dressCode: 'sport',
        imageUrl: 'https://slimages.macysassets.com/is/image/MCY/products/3/optimized/11786133_fpx.tif?$browse$&wid=376&fmt=webp',
    },
    {
        description: 'Adidas Jogger Pants',
        type: "bottom",
        dressCode: 'sport',
        imageUrl: 'https://slimages.macysassets.com/is/image/MCY/products/3/optimized/11786133_fpx.tif?$browse$&wid=376&fmt=webp',
    },
]

// DOM Elements
const dateElem = document.getElementById("date")
const clothesElem = document.getElementById("clothes")
const newElem = document.getElementById("new")

// Date Vars
const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const date = new Date()
const day = weekday[date.getDay()]

dateElem.innerHTML = date.toDateString()

// === Functions ===

// Logic
function getClothingType() {
    switch (day.toLowerCase()) {
        case "sunday":
            return "sport"
        case "saturday":
            return "casual"
        default:
            return "formal"
    }
}

function getOutfit(type) {

    let clothes = clothing.filter(obj => obj.dressCode === type)
    let clothesTop = clothes.filter(obj => obj.type === "top")
    let clothesBottom = clothes.filter(obj => obj.type === "bottom")
    let clothesShoes = clothes.filter(obj => obj.type === "shoes")

    return outfit = {
        top: clothesTop[Math.floor(Math.random() * clothesTop.length)],
        bottom: clothesBottom[Math.floor(Math.random() * clothesBottom.length)],
        shoes: clothesShoes[Math.floor(Math.random() * clothesShoes.length)]
    }
}

// Render
function displayOutfit(outfit) {

    let articles = Object.keys(outfit)

    removeArticles(articles)
    articles.forEach(type => {
        createArticle(outfit[type])
    })
}

function removeArticles(articles) {
    articles.forEach(id => {
        let elem = document.getElementById(id)
        if (elem) { elem.remove() }
    })
}

function createArticle(article) {

    const element = document.createElement("div")
    const elemDesc = document.createElement("div")
    const elemImg = document.createElement("img")

    element.id = article.type
    elemDesc.innerHTML = article.description
    elemImg.src = article.imageUrl
    elemImg.alt = article.description

    element.appendChild(elemImg)
    element.appendChild(elemDesc)

    clothesElem.appendChild(element)
}

// Interactions
newElem.addEventListener('click', (() => refreshOutfit()))

function refreshOutfit() {
    displayOutfit(getOutfit(getClothingType()))
}

refreshOutfit()