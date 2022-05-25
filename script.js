console.log('veikia')

// konstruktorius

function Cars(marke, spalva, duruSkaicius) {
    this.marke = marke
    this.spalva = spalva
    this.duruSkaicius = duruSkaicius
    this.raktas = function(raktasM){
      let secretKey = raktasM
      console.log(secretKey)
    }
    
  }

  const myCar = new Cars('Toyota', 'juoda', 5)
  const myCar1 = new Cars('Audi', 'balta', 3)
  const myCar3 = new Cars('BMW', 'Žalia', 5)

  myCar.raktas(85858 + `e6590487i`)
  myCar1.raktas(9 + `e6590487i`)
  myCar3.raktas(3843374 + `e6590487i`)

  // klasė

  
  
  const ages = [33, 32, 16];
  console.log(ages.filter((age) => age > 20))
  // naujas masyvas iš norimų reikšmių

  const numbers = [1, 2, 3, 4];

  numbers.forEach((num) => {
    const square = num * num;
    console.log("Skaičiaus kvadratas: " + square);
  });

function sliceFruit(fruit) {
  console.log("Pjaustau " + fruit + "!")
}

const fruits = ["🍎", "🍊", "🍋", "🍓", "🥝"]

fruits.forEach(sliceFruit)
const food = ["🍔", "🍟", "🍦"]

food.forEach((item) => {
  console.log("Nupirk " + item + "!")
})