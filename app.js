class Product {
  constructor(id, name, price) {
    this.id = id;
    this.name = name;
    this.price = price;
  }
  calPrice(quantity) {
    return this.price * quantity;
  }
}

class ShopingCardItem {
  constructor(product, quantity) {
    this.product = product;
    this.quantity = quantity;
  }
  totalPrice() {
    return this.product.calPrice(this.quantity);
  }
}

const pc = new Product(0, "Pc gamer", 2100);
const phone = new Product(1, "Iphone 14", 3000);
const tv = new Product(2, "LED TV", 1000, 4);
const ps = new Product(3, "PLAY STATION 5 PRO", 2700);

const item1 = new ShopingCardItem(pc, 4);
const item2 = new ShopingCardItem(phone, 5);
const item3 = new ShopingCardItem(tv, 3);
const item4 = new ShopingCardItem(ps, 2);

class ShopingCardInstances {
  constructor() {
    this.items = [];
  }
  totalItems() {
    return this.items.length;
  }
  addItem(item) {
    this.items.push(item);
  }
  displayItem() {
    this.items.forEach((it) => {
      const { product, quantity } = it;

      console.log(
        `You have purchased ${quantity} of ${
          product.name
        } with a full price of ${product.calPrice(quantity)} dt`
      );
    });
  }

  removeItem(id) {
    const index = this.items.findIndex((it) => it.product.id === id);
    console.log(index);
    return this.items.splice(index, 1);
  }
}

const cart = new ShopingCardInstances();

cart.addItem(item2);
cart.addItem(item3);
cart.addItem(item4);

cart.displayItem();

cart.addItem(item1);
console.log(cart);
