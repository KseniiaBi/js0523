//--------------------------TASK 1---------------------------------------
//1) написати свої приклади за темою ООП (і обʼєкти, і функції)

// обʼєкти

let facialCareCosmetics = {
  brandName: 'brand',
  country: 'country',
  category: 'women',
  displaySkinCareInfo() {
    console.log(
      `The cosmetics brand ${this.brandName} from ${this.country} specializes in facial skincare cosmetics for ${this.category}.`
    );
  },
};

let skinCareProduct1 = {
  brandName: 'Histomer',
  country: 'Italy',
  age: 35,
  __proto__: facialCareCosmetics,
};

let productDetails1 = {
  time: 'day',
  type: ['dry', 'oily', 'combination'],
  class: 'professional',
  __proto__: skinCareProduct1,
};
// for (let prop in productDetails1) {
//   console.log(prop);
// }

let skinCareProduct2 = {
  brandName: 'Christina ',
  country: 'Israel',
  age: 25,
  __proto__: facialCareCosmetics,
};

let productDetails2 = {
  time: 'night',
  type: ['dry', 'oily', 'combination', 'sensitive'],
  class: 'professional',
  __proto__: skinCareProduct2,
};
for (let prop in productDetails2) {
  if (facialCareCosmetics.hasOwnProperty(prop)) {
    console.log(prop);
  }
}

// функції

function Calculator(pdv, sum) {
  this.pdv = pdv;
  this.sum = sum;

  if (this.pdv === 20 || this.pdv === 14 || this.pdv === 7) {
    this.sumPdv = function () {
      const result = (this.pdv / 100) * this.sum;
      console.log(`Сума пдв: ${result} грн.`);
      return result;
    };

    this.sumZPdv = function () {
      const result = (this.pdv / 100) * this.sum + this.sum;
      console.log(`Сума з пдв: ${result} грн.`);
      return result;
    };
  } else {
    console.error('Ви ввели не вірний відсоток');
  }
}

const calc = new Calculator(20, 1000);
const calc1 = new Calculator(18, 1000);
calc.sumPdv();
calc.sumZPdv();
