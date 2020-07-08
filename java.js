function ab(){
    var money=preco.value.replace(",",".")
    var tempoM=n1.value
    var tempoH=tempoM/60
    var velocidade=n2.value
    var kmL=n3.value
    var n4=velocidade*tempoH/kmL //calculo de quanto gasto
    var n5=n4*money //calculo para calcular o valor do gasto de gasolina
    var litros=n4.toFixed(2).replace(".",",")
    var valor=n5.toFixed(2).replace(".",",")

    twoResult.innerHTML = `Para a viagem, é necessário: ${litros} litros.
    Aproximadamente ${valor} reais.`
    

}

