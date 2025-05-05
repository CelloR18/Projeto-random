function cliquei(){
    const valor1= Math.ceil(document.querySelector(".primeiro").value)
    const valor2= Math.floor(document.querySelector(".segundo").value)
    const result= Math.floor(Math.random() * (valor1 - valor2 + 1)) + valor2;
    
    alert(result)
}