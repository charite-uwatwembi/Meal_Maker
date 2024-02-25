
const menu = {};


menu._meal = '';
menu._price = 0;


menu._meal = 42;
menu._price = 'forty-two';


console.log(menu);


Object.defineProperty(menu, 'meal', {
  set: function(mealToCheck) {
    if (typeof mealToCheck === 'string') {
      this._meal = mealToCheck;
    }
  }
});


Object.defineProperty(menu, 'price', {
  set: function(priceToCheck) {
    if (typeof priceToCheck === 'number') {
      this._price = priceToCheck;
    }
  }
});


menu.meal = 'Spaghetti';
menu.price = 5;


console.log(menu);


Object.defineProperty(menu, 'todaysSpecial', {
  get: function() {
    if (this._meal && this._price) {
      return `Today's Special is ${this._meal} for $${this._price}!`;
    } else {
      return 'Meal or price was not set correctly!';
    }
  }
});


console.log(menu.todaysSpecial);
