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
