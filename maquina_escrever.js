/*
Script Efeito Máquina de escrever
TypeErase por: Vinicius Vrech Barato
TypeWriter por: (tem vária referências na web)(aqui fiz uma leve adequação para minha necessidade)
*/

<script type="text/javascript"> //vou comentar linha a linha
   typeWriter(document.querySelector("h1")); //essa linha starta a função que começa a escrever o texto contido dentro da 
   //tag H1(esse código você encontra no google facilmente, o problema era encontrar algo para apagar e reescrever)...
   //vale lembrar que nesse caso só poderá existir uma tag h1 ou pode adaptar de acordo com a necessidade.
   function typeWriter(elemento) { 
        elemento.setAttribute('style','opacity:1;'); //aqui foi o seguinte, como na função de aparagar seta a opacidade como 0, 
        //aqui volto ela como 1
        elemento = document.querySelector("h1"); //variavel "elemento" pega o "object HtmlHeadingElement" da tag h1
        const textoArray = elemento.innerHTML.split(''); //variavel textoArray separa todo o texto da tag h1
        elemento.innerHTML = ''; //é setado como vazio, logo, a tag h1 fica vazia
        for(let i = 0; i < textoArray.length; i++) { //inicia o processo de escrita do texto
            setTimeout(() => elemento.innerHTML += textoArray[i], 120 * i); //valor 120 seria a velocidade de digitação de cada letra,
            //pode-se alterar e adquar a necessidade. Quanto meno o valor, mais rapido é a digitação.
        }
        setTimeout(() => typeErase(elemento.innerHTML,""),5000);
        //apos terminar o for acima que escreveu todo o texto, tem uma pausa de 5 segundos para chamar a função de apagar o texto
        //typeErase tem como parametro o texto em questão "elemento.innerHTML" e passa vazio em outra variavel, 
        //pois o método que encontrei para apagar é chamando a função de apagar varias vezes
        //então todas variaveis criada dentro da função apagar são modificadas toda vez, e ao final, tenho que passar o texto novamente,
        //não posso sempre criar uma variavel.
        //essa variavel vazia seria como um variavel global
    }
    function typeErase(elemento,valor) {
        let str = document.querySelector("h1").innerText; //mesmo conceito, aqui pego o texto do h1
        if ((str.length-1) >= 0){ // faço o teste se o tamanho da variavel seja no maximo até a posição 0
            valor += document.querySelector("h1").innerText[str.length - 1]; //variavel "valor" recebe a ultima letra antes de apagar
        }
        document.getElementById('h1').innerHTML = str.substring(0,(str.length - 1)); //um substring para ir apagando a ultima letra
        if (str.length == 0){ //if para quando terminar o texto
            let valorh1 = valor.split('').reverse().join(''); 
            //split('').reverse().join('') serve para inverter o texto pois quando eu salvo ali em cima, ele salva invertido 
            //Ex.:"vino30 ele salva como "03oniv"
            //então preciso escrever novamente "vino30"
            var element = document.getElementById('h1'); //aqui seto o element com a tag h1 que esta vazia
            element.innerHTML = valorh1; //aqui passo para a tag "h1" o texto de maneira correta novamente
            setTimeout(() => typeWriter(document.querySelector("h1")),1000); //depois de tudo isso, 
            //chamo novamente a funçao de escrever com 1 segundo
            var element = document.getElementById('h1');//aqui pego novamente a tag h1 e salvo dentro de element
            element.setAttribute('style','opacity:0;'); // aqui seto a opacidade como 0, pois 1 segundo é o suficiente para 
            //aparecer o texto 
            //novamente na tela, perdendo o efeito de digitação, por isso que no inicio da função de escrever a opacidade seto para 1
        } else {
            setTimeout(() => typeErase(str,valor),80); //se nao entrar no if ali em cima, chamo a função de apagar passando 
            //str(que agora está com o texto -1), 
            //e a variavel "valor" que está salvando o texto de trás para frente
        }
    }
   //com isso quando inicia a página fica em um loop infinito, pois cada função fica se chamando ao seu termino
   //pesquisando na internet não achei nenhum código que fizesse esse método de apagar, estou no começo para mexer com 
   //php, javascript, css, porém, possuo uma boa base lógica, possibilitando a criação de código e entendendo seu funcionamento
   //mais rápido, obivo, que esse código ta cheio de gambiarra e tenho certez que existe uma maneira mais simples de se fazer
   //porém essa foi a maneira que consegui montar, qualquer ajudar, dica, será bem-vindo
   //podem copiar e usar a vontade o código, como falei não achei nada parecido na internet, então decide tentar montar eu mesmo
   //e disponibilizar, (varios tópicos pessoal sempre pedindo "e para apagar como eu faço?".....
   //bom para apagar está aí.....valeu
</script>
