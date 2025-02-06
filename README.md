# Página personalizada
<br> 

 -  Este repositório é uma página personalizada com fotos, uma mensagem e também o tempo juntos. Criado para minha namorada. O objetivo deste projeto é comemorar meu namoro, normalmente sempre tento adicionar algo de mês em mês. Abaixo, você encontrará uma descrição detalhada das funcionalidades e características do site, incluindo detalhes sobre como algumas funções são implementadas

<br>

## Funcionalidades


 ### **1 • O contador na página calcula o tempo que estamos juntos, exibindo a contagem em anos, dias, horas, minutos e segundos. A implementação deste contador é feita através de JavaScript, utilizando a função setInterval() para atualizar a contagem a cada segundo.**

 - Como Funciona:
Data de Início: A data de início do relacionamento é definida como um objeto Date.
Cálculo da Diferença: A diferença entre a data atual e a data de início é calculada em milissegundos.
Conversão: Essa diferença é convertida em anos, dias, horas, minutos e segundos, que são então exibidos em elementos HTML específicos.
javascript

      ```
    Verify
    Run
    Copy code
    const dataInicio = new Date(2024, 8, 30).getTime();
    setInterval(() => {
    const dataAtual = new Date().getTime();
    const diferenca = dataAtual - dataInicio;
    document.getElementById("anos").textContent = Math.floor(diferenca / (1000 * 60 * 60 * 24 * 365)) + " anos";
    // Cálculos para dias, horas, minutos e segundos
    }, 1000);




### **2 • Modais**

  - A página contém modais que exibem informações importantes, como datas significativas do nosso relacionamento. Esses modais podem ser abertos e fechados com um clique.

  - Como Funciona:
Os modais são inicialmente ocultos e são exibidos ao clicar em botões específicos.
O JavaScript altera o estilo de exibição do modal para "flex" quando ativado.

```
 function openModal() {
    document.getElementById("importantDatesModal").style.display = "flex";
}
function closeModal() {
    document.getElementById("importantDatesModal").style.display = "none";
```

### **3 • Mudança de Tema**

 -  Só tem 3 temas, Normal, Dark e Neon

 - Como Funciona:
 - Definição dos Temas no CSS: Cada tema é definido por classes CSS específicas que alteram as propriedades de estilo da página. Aqui estão os exemplos de como os temas são configurados:_
```
 /* Estilos para a paleta normal */
    .normal {
    background: url("url-da-imagem-normal") no-repeat center center fixed;
    background-size: cover;
    color: #e2e8f0;
}

/* Estilos para a paleta escura */
.dark {
    background: url("url-da-imagem-escura") no-repeat center center fixed;
    background-size: cover;
    color: #ffffff;
}

/* Estilos para a paleta neon */
.neon {
    background: url("url-da-imagem-neon") no-repeat center center fixed;
    background-size: cover;
    color: #ffffff;
}
```


 - Cada classe (.normal, .dark, .neon) define um conjunto de estilos que serão aplicados ao corpo da página, incluindo a cor de fundo e a cor do texto.
 
 ```
let temas = ["normal", "dark", "neon"];
 let indiceTema = 0;

 function toggleTheme() {
    indiceTema = (indiceTema + 1) % temas.length; // Incrementa o índice do tema
    document.body.className = temas[indiceTema]; // Altera a classe do body
 } 
```
 



- Array de Temas: Um array chamado temas contém os nomes das classes CSS correspondentes a cada tema.
Índice do Tema: A variável indiceTema é usada para rastrear qual tema está atualmente ativo.
Função ```toggleTheme():``` Quando chamada, essa função incrementa o índice do tema e usa o operador módulo (%) para garantir que ele retorne ao início do array quando atingir o final. Em seguida, a classe do elemento <body> é atualizada para o tema correspondente.

 - Botão de Alternância: O botão que ativa a mudança de tema é definido no HTML e chama a função ```toggleTheme()``` quando clicado:
  ```<button class="theme-button" id="theme-button" onclick="toggleTheme()"></button>```


### **4 Requisição do Webhook**
- A funcionalidade de requisição do webhook é implementada para notificar sempre que minha namorada acesse a página. Essa notificação é enviada através de um bot do Telegram, permitindo que receba alertas em tempo real sobre as visitas ao site

#### Como Funciona:
 - Configuração do Webhook: O webhook é uma URL que recebe requisições HTTP. Neste projeto, uma requisição POST é enviada para um endpoint específico sempre que a página é carregada. O código responsável por essa requisição é o seguinte:

```
fetch('https://hook.us2.make.com/a9rr902xqv2auvxqs89oohyp6y12hdsg', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        message: '!'
    })
});
```

 - **URL do Webhook**: A URL https://hook.us2.make.com/... é o endpoint do webhook que foi configurado para receber as notificações.
 - **Método POST**: A requisição é feita usando o método HTTP POST, que é adequado para enviar dados ao servidor.

##### Uso de Alternativas Gratuitas

 -  Essa abordagem foi escolhida como uma solução gratuita para monitorar a entrada da minha namorada do site. Usar um bot do Telegram é uma maneira eficiente e prática de receber notificações instantâneas sem a necessidade de configurar um servidor próprio ou utilizar serviços pagos
