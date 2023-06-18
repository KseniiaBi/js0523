// в цьому об`экті я закопав значення, яке шукатиму

const array = {
  level_1: {
    level1_1: {
      level2_1: {
        level3_1: "empty",
        level3_2: {
          level4_1: "empty",
          level4_2: "empty",
          level4_3: {
            level5_1: "empty",
            level5_2: {
              level6_1: "treasure",
            },
          },
        },
      },
    },
    level1_2: "empty",
  },
  level_2: "empty",
  level_3: "treasure",
  level_4: {
    level4_1: "empty",
    level4_2: {
      level4_3: "empty",
    },
  },
};



function findTreasure(obj, find) {
  for (let key in obj) {
    if (obj[key] === find) {
     console.log(`Знайдено ${find} в ${key}`);
    } else if (typeof obj[key] === "object") {
      findTreasure(obj[key], find);
    }
  }
};

findTreasure(array, "treasure");



