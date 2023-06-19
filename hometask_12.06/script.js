//--------------------------TASK 1---------------------------------------
//написати реалізацію класу + наслідування + приватні, захищені
// та статичні методи
class WageWithHolding {
  constructor(lastName, zp) {
    this.lastName = lastName;
    this._zp = zp;
  }

  get zp() {
    if (typeof this._zp !== 'number' && this._zp !== undefined) {
      console.log('Error');
    } else if (this._zp !== undefined) {
      console.log(
        `Працівнику ${this.lastName} нараховано ЗП у розмірі ${this._zp} грн.`
      );
    } else {
      console.log(
        `В цьому місяці ЗП працівнику ${this.lastName} не нарахована.`
      );
    }
  }

  set zp(val) {
    if (val !== undefined) {
      this._zp = val;
      console.log(
        `Заробітну плату працівника ${this.lastName} змінено! ЗП нарахована у розмірі ${val} грн.`
      );
    } else {
      console.log(
        `В цьому місяці ЗП працівнику ${this.lastName} не нарахована.`
      );
    }
  }
}

class CalculateNetSalary extends WageWithHolding {
  static pdfo = 0.18;
  static vs = 0.015;
  static maxDay = 21;

  constructor(lastName, zp, day) {
    super(lastName, zp);
    this._day = day;
  }

  get day() {
    super.zp;

    if (
      (typeof this._day !== 'number' && this._day !== undefined) ||
      this._day > CalculateNetSalary.maxDay ||
      this._day < 0 ||
      this._day === undefined
    ) {
      console.log('Не коректно вказана кількість відпрацьованих днів');
    } else {
      console.log(
        `Кількість відпрацьованих днів в поточному місяці: ${this._day}.`
      );
    }
  }

  сalculationDeductionsSalary() {
    let deductionsPdfo =
      Math.round(this._zp * CalculateNetSalary.pdfo * 100) / 100;
    let deductionsVs = Math.round(this._zp * CalculateNetSalary.vs * 100) / 100;
    console.log(`Утримано ПДФО: ${deductionsPdfo} грн.`);
    console.log(`Утримано ВЗ: ${deductionsVs} грн.`);
  }

  calculateNetSalary() {
    let dailySalary =
      (this._zp * (1 - CalculateNetSalary.pdfo - CalculateNetSalary.vs)) /
      CalculateNetSalary.maxDay;
    let netSalary = Math.round(dailySalary * this._day * 100) / 100;
    console.log(`Зарплата "на руки": ${netSalary} грн.`);
    return netSalary;
  }
}

const employee = new CalculateNetSalary('Ivashchenko', 5000, 20);
const employee1 = new CalculateNetSalary('Borsyk', 6735.89, 10);
employee.day;
employee.сalculationDeductionsSalary();
employee.calculateNetSalary();
employee1.day;
employee1.сalculationDeductionsSalary();
employee1.calculateNetSalary();
