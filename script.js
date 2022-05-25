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

    createFirstInput()



    function createFirstInput(){
    const container = document.getElementById('container')
    const createTaskInput = document.createElement("input");    
    const createTaskInputValue = document.getElementById('input-value')    
    createTaskInput.setAttribute("type", "text")
    createTaskInput.classList.add('w3-input', 'w3-border', 'w3-sand')
    console.log(container)
    console.log(createTaskInput)
    createTaskInputValue.appendChild(createTaskInput);
}