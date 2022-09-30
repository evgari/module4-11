'use strict';

const cart = {
  items: [],
  count: 0,
  get totalPrice() {
    return this.calculateItemPrice;
  },
  increaseCount(count) {
    this.count += count;
  },
  calculateItemPrice() {
    const goodsPrice = this.items.reduce((goodPrice, good) =>
      goodPrice + (good.price * good.quantity), 0);

    return goodsPrice;
  },
  add(name, price, quantity = 1) {
    const good = {
      name,
      price,
      quantity,
    };

    this.items.push(good);
    this.increaseCount(quantity);
    this.calculateItemPrice();
  },
  clear() {
    this.items.length = 0;
    this.count = 0;
  },
  print() {
    const itemsStr = JSON.stringify(this.items);

    console.log(itemsStr);
    console.log(this.totalPrice());
  },
};

cart.add('молоко', 100, 40);
cart.add('кефир', 50, 30);
cart.add('масло', 150, 20);
cart.add('йогурт', 75, 10);
// cart.totalPrice = 10;
cart.print();


