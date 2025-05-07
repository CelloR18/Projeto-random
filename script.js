function cliquei(){
    const valor1= Math.ceil(document.querySelector(".primeiro").value) //coloque tudo no Math.ceil
    const valor2= Math.floor(document.querySelector(".segundo").value) //coloque tudo no Math.floor
    const result= Math.floor(Math.random() * (valor1 - valor2 + 1)) + valor2; // para gerar um numero aletorio
    
    if(valor1 >= valor2){
        alert("O primeiro valor deve ser menor que o segundo valor")
    }
    else{
        alert(result)
    }

    
}