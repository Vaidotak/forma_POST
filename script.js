
// console.log('veikia')

// // konstruktorius

// function Cars(marke, spalva, duruSkaicius) {
//     this.marke = marke
//     this.spalva = spalva
//     this.duruSkaicius = duruSkaicius
//     this.raktas = function(raktasM){
//       let secretKey = raktasM
//       console.log(secretKey)
//     }
    
//   }

//   const myCar = new Cars('Toyota', 'juoda', 5)
//   const myCar1 = new Cars('Audi', 'balta', 3)
//   const myCar3 = new Cars('BMW', 'Žalia', 5)

//   myCar.raktas(85858 + `e6590487i`)
//   myCar1.raktas(9 + `e6590487i`)
//   myCar3.raktas(3843374 + `e6590487i`)

//   // klasė

  
  
//   const ages = [33, 32, 16];
//   console.log(ages.filter((age) => age > 20))
//   // naujas masyvas iš norimų reikšmių

//   const numbers = [1, 2, 3, 4];

//   numbers.forEach((num) => {
//     const square = num * num;
//     console.log("Skaičiaus kvadratas: " + square);
//   });

// function sliceFruit(fruit) {
//   console.log("Pjaustau " + fruit + "!")
// }

// const fruits = ["🍎", "🍊", "🍋", "🍓", "🥝"]

// fruits.forEach(sliceFruit)
// const food = ["🍔", "🍟", "🍦"]

// food.forEach((item) => {
//   console.log("Nupirk " + item + "!")
// })


// https://httpdump.io/

let endpoint = 'https://httpdump.io/r4kix'
let payload = {
    name: 'Vaidotas',
    surname: 'Ku',
    b: 'b',
};
fetch(endpoint,
    {
        method: "POST",
        body: JSON.stringify(payload),
        mode: 'no-cors'
    })
    .then(function(res){ console.log(res)})

    const createButton = document.getElementsByClassName("w3-btn", "w3-brown")
    console.log(createButton[0])
    const submitButton = document.getElementById('submit-button')
    
    createButton[0].addEventListener('click', createInput)
    
    submitButton.addEventListener('submit', submitAllValues)


    function createInput() {
      const inputContainer = document.createElement("div");
      inputContainer.setAttribute('id', 'input-container')
      const ciaSugulsInput = document.getElementById("input-value");
      const createInput = document.createElement("input");//šitą appendinsiu
      const createCloseButton = document.createElement('button') //šitą appendinsiu
      createCloseButton.innerHTML = "X";
      createCloseButton.classList.add('w3-button', 'w3-xlarge', 'w3-circle', 'w3-teal')
      inputContainer.append(createInput, createCloseButton)
      createInput.setAttribute("type", "text");
      createInput.classList.add("w3-input", "w3-border", "w3-sand");
      ciaSugulsInput.appendChild(inputContainer);
      //createCloseButton.addEventListener('click', removeInput(inputContainer))
      //console.log(removeInput(inputContainer))
    }
    function removeInput(element){
      
      return element.remove();
    }

    function submitAllValues(){

    }
