class Product {
  constructor(title, quantity, price) {
    this.title = title;
    this.quantity = quantity;
    this.price = price;
    this.updateQuantity.bind(this);
    this.totalPrice = quantity * price;
  }

  updateQuantity(quantity) {
    this.quantity += quantity;
  }
}

class Cart {
  constructor() {
    this.cartItems = [];
  }

  addItem(product) {
    const alreadyInCart = myCart.checkIfItemsExist(product.title);
    if (alreadyInCart) {
      return product.updateQuantity(product.quantity);
    } else {
      this.cartItems.push(product);
    }
  }

  checkIfItemsExist(title) {
    return (
      this.cartItems.filter((item) => item.title === title)[0] !== undefined
    );
  }

  removeItem(title) {
    this.cartItems = [...this.cartItems].filter((item) => item.title !== title);
  }

  showShopingCart() {
    console.log(this.cartItems);
  }
}

const product1 = new Product("PC", 5, 1800);
const product2 = new Product("phone", 3, 4800);
const product3 = new Product("TV", 1, 8500);
const myCart = new Cart();

myCart.addItem(product1);
myCart.removeItem("PC");
myCart.addItem(product2);
myCart.addItem(product3);
myCart.showShopingCart();

product3.updateQuantity(50);
myCart.showShopingCart();

// console.log(myCart.checkIfItemsExist("TV"));

console.log(myCart);
