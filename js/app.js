var slideIndex = 1;
showDivs(slideIndex);

function slideNext(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("slides");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";
  }
  x[slideIndex-1].style.display = "block";
}

// Constructor Notation for shoes
function laptop(name, stock, price, image) {
  this.name = name;
  this.stock = stock;
  this.price = price;
  this.image = image;
}

// Empty array open for push
var laptopArray = [];

// objects crated from Constructor Notation
var msi1 = new laptop ("MSI GL62M 7REX-1067 15.6 Intel Core i7 7th Gen 7700HQ (2.80 GHz) NVIDIA GeForce GTX 1050 Ti 16 GB Memory 512 GB M.2 SATA SSD Windows 10 Home 64-Bit Gaming Laptop", 9, 1089.00, "img/MSI1.jpg");
var msi2 = new laptop ("MSI GL62M 7RD-032 15.6 Intel Core i7 7th Gen 7700HQ (2.80 GHz) NVIDIA GeForce GTX 1050 16 GB Memory 128 GB SSD 1 TB HDD Windows 10 Home 64-Bit Gaming Laptop", ":0 Out of Stock", 979.00, "img/MSI2.jpg");
var asus = new laptop ("ASUS ROG Strix GL702VM-DB74 Gaming Laptop Intel Core i7 6700HQ (2.6 GHz) 16 GB Memory 1 TB HDD 256 GB SSD NVIDIA GeForce GTX 1060 6 GB 17.3 FHD 1920 x 1080 Windows 10 Home 64-Bit", 3, 1329.00, "img/ASUS.jpg");
var lenovo1 = new laptop ("Lenovo Legion Y520 80WK001MUS 15.6 Intel Core i7 7th Gen 7700HQ (2.80 GHz) NVIDIA GeForce GTX 1050 Ti 16 GB Memory 128 GB M.2 PCIe SSD 1 TB HDD Windows 10 Home 64-Bit Gaming Laptop", 12, 1069.00, "img/lenovo1.jpg");
var lenovo2 = new laptop ("Lenovo Legion Y720 80VR001BUS 15.6 Intel Core i7 7th Gen 7700HQ (2.80 GHz) NVIDIA GeForce GTX 1060 16 GB Memory 128 GB SSD 1 TB HDD Windows 10 Home 64-Bit Gaming Laptop", 4, 1229.00, "img/lenovo2.jpg");
var dell = new laptop ("DELL Alienware 15 R3 AW15R3-3831SLV Gaming Laptop Intel Core i7 6700HQ (2.60 GHz) 16 GB Memory 1 TB HDD 128 GB SSD NVIDIA GeForce GTX 1060 6 GB GDDR5 15.6 Windows 10 Home 64-Bit", 15, 1379.00, "img/dell.jpg");

// push objects into array

laptopArray.push(msi1, msi2, asus, lenovo1, lenovo2, dell);

for(var i = 0; i < laptopArray.length; i++) {
  var textName = document.createTextNode (laptopArray[i].name);
  var textStock = document.createTextNode ("Available " + laptopArray[i].stock);
  var textPrice = document.createTextNode ("Starting at $" + laptopArray[i].price + ".00");
  var addtCart = document.createTextNode("Add to cart");
  var addW = document.createTextNode("Add to Wishlist");
  var laptopImg = laptopArray[i].image;


  var addItem = document.createElement('div');
  var  newDiv = document.createElement('div');
  var  nameH2 = document.createElement('h2');
  var  stockH3 = document.createElement('h3');
  var  priceH5 = document.createElement('h5');
  var  addCart = document.createElement('button');
  var addWish = document.createElement('button');
  var  image = document.createElement('img');

    nameH2.appendChild(textName);
    stockH3.appendChild(textStock);
    priceH5.appendChild(textPrice);
    addCart.appendChild(addtCart);
    addCart.className = "btn btn-warning";
    addCart.id = "cart";
    addWish.appendChild(addW);
    addWish.className = "btn btn-secondary";
    addWish.id = "wishlist";
    image.src = laptopImg;
    image.className = "img-responsive";

    addItem.className = "col-sm-4";
    newDiv.className = "laptop laptopBrand" + " thumbnail ";
    newDiv.appendChild(nameH2);
    newDiv.appendChild(image);
    newDiv.appendChild(stockH3);
    newDiv.appendChild(priceH5);
    newDiv.appendChild(addCart);
    newDiv.appendChild(addWish);
    addItem.appendChild(newDiv);

    document.getElementById("laptops").appendChild(addItem);
}
