


const divCreate = document.createElement("div");
divCreate.classList.add("modal")
const body = document.body;
const h1El = document.createElement('h1');
const ulEl = document.createElement('ul');
h1El.textContent = 'Dados Do Seu Cep:'
body.insertAdjacentElement("beforeend", divCreate)
divCreate.insertAdjacentElement("beforeend", h1El)
divCreate.insertAdjacentElement("beforeend", ulEl)

function limpar() {
    ulEl.innerHTML = '';
    document.getElementById("ceps").value = '';
  }


async function consultar() {
    
    const cep = document.getElementById("ceps").value.replace(/\D/g, '');

    if(cep === '') {
        alert("CAMPO VAZIO");
       limpar();
    }else {
        let url = await fetch('https://viacep.com.br/ws/'+ cep + '/json/?');
        const response = await url.json();
        console.log(response);

        ulEl.innerHTML = '';
        ulEl.insertAdjacentHTML("beforeend", `<li> Logradouro: ${response.logradouro} </li>`)
        ulEl.insertAdjacentHTML("beforeend", `<li> Complemento: ${response.complemento} </li>`)
        ulEl.insertAdjacentHTML("beforeend", `<li> Bairro: ${response.bairro} </li>`)
        ulEl.insertAdjacentHTML("beforeend", `<li> Localidade: ${response.localidade} </li>`)
        ulEl.insertAdjacentHTML("beforeend", `<li> Estado: ${response.uf} </li>`)

        document.getElementById("ceps").value = '';
    }

}


document.querySelector('.buttons').addEventListener("click", consultar);

ScrollReveal({ reset: true });

var slideUp = {
    distance: '150%',
    origin: 'bottom',
    opacity: null,
    reset: true,
    delay: 375,
    duration: 500,
    easing: "cubic-bezier(0.175, 0.885, 0.32, 1.275)"
};

var slideDown = {
    distance: '80%',
    origin: 'top',
    opacity: '10%',
    reset: true,
    delay: 375,
    duration: 500,
    easing: "cubic-bezier(0.175, 0.885, 0.32, 1.275)"
};
ScrollReveal().reveal('.modal', slideUp);
ScrollReveal().reveal('.container', slideDown);