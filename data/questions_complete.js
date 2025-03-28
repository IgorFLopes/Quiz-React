const data = [
    {
      category: "HTML",
      questions: [
        {
          question: "Qual tag cria um parágrafo?",
          options: ["<p>", "<h1>", "<text>", "<ul>"],
          answer: "<p>",
          tip: "É uma tag de uma letra apenas",
        },
        {
          question: "Qual atributo adiciona um link para a tag a?",
          options: ["alt", "href", "src", "link"],
          answer: "href",
          tip: "Hyperlink Reference",
        },
        {
          question: "As listas não ordenadas tem a tag de:",
          options: ["<ol>", "<ul>", "<li>", "<list>"],
          answer: "<ul>",
        },
        {
          question: "Qual atributo deixa o input obrigatório?",
          options: ["placeholder", "value", "required", "maxlength"],
          answer: "required",
        },
        {
          question: "A tag semântica indicada para rodapés é a:",
          options: ["div", "main", "section", "footer"],
          answer: "footer",
        },
        {
          question: "Qual elemento HTML é utilizado para criar um botão?",
          options: ["<div>", "<input>", "<button>", "<form>"],
          answer: "<button>",
          tip: "É uma tag que corresponde exatamente ao que está escrito no botão."
        },
        {
          question: "Qual tag insere uma imagem em um documento HTML?",
          options: ["<img>", "<pic>", "<image>", "<src>"],
          answer: "<img>",
          tip: "Abreviação de 'imagem' em inglês."
        },
        {
          question: "Qual elemento é usado para criar um campo de entrada de texto?",
          options: ["<input>", "<textarea>", "<field>", "<textbox>"],
          answer: "<input>",
          tip: "É uma tag genérica usada para diversos tipos de entrada."
        },
      ],
    },
    {
      category: "CSS",
      questions: [
        {
          question: "Qual regra altera a cor de um elemento?",
          options: ["color", "background-color", "font-size", "transition"],
          answer: "color",
          tip: "Cor em inglês",
        },
        {
          question: "Para aumentar a fonte de um elemento utilizamos:",
          options: ["font", "text-transform", "font-size", "hover"],
          answer: "font-size",
        },
        {
          question: "A posição que deixa um elemento fixo é a:",
          options: ["static", "absolute", "fixed", "relative"],
          answer: "fixed",
        },
        {
          question: "Qual propriedade define o espaço interno de um elemento?",
          options: ["margin", "padding", "border", "outline"],
          answer: "padding",
          tip: "É o oposto de 'margin'."
        },
        {
          question: "Como aplicamos uma sombra em um texto?",
          options: ["text-shadow", "box-shadow", "shadow-text", "text-decoration"],
          answer: "text-shadow",
          tip: "A palavra 'texto' está no nome da propriedade."
        },
        {
          question: "Qual unidade é relativa ao tamanho da fonte do elemento pai?",
          options: ["px", "em", "%", "rem"],
          answer: "em",
          tip: "É muito utilizada para escalabilidade em designs responsivos."
        },
        {
          question: "Qual propriedade é usada para definir o tipo de display de um elemento?",
          options: ["visibility", "display", "position", "flex"],
          answer: "display",
          tip: "É utilizada para alterar como um elemento aparece, como 'block' ou 'inline'."
        },
        {
          question: "Como podemos criar um layout de coluna flexível?",
          options: ["grid-template", "flex-direction", "align-items", "column-span"],
          answer: "flex-direction",
          tip: "Uma propriedade do Flexbox que define a direção do layout."
        },
      ],
    },
    {
      category: "JavaScript",
      questions: [
        {
          question: "O que é Vanilla JavaScript?",
          options: [
            "JavaScript puro",
            "Uma biblioteca JavaScript",
            "Um framework JavaScript",
            "Um compilador de JavaScript",
          ],
          answer: "JavaScript puro",
        },
        {
          question: "Com qual instrução declaramos uma constante em JavaScript?",
          options: ["const", "let", "var", "define"],
          answer: "const",
        },
        {
          question: "Qual dos tipos de dado a seguir não existe em JavaScript?",
          options: ["string", "number", "boolean", "float"],
          answer: "float",
        },
        {
          question: "Qual dos métodos a seguir seleciona um elemento?",
          options: ["querySelector", "parseInt", "sort", "reduce"],
          answer: "querySelector",
        },
        {
          question:
            "Qual destas propriedades da a quantidade de elementos de um array?",
          options: ["qty", "length", "items", "index"],
          answer: "length",
        },
        {
          question: "Qual método converte uma string em um número inteiro?",
          options: ["parseInt", "Number", "toFixed", "String"],
          answer: "parseInt",
          tip: "O nome começa com 'parse'."
        },
        {
          question: "Qual operador verifica tanto valor quanto tipo em uma comparação?",
          options: ["==", "===", "=", "!=="],
          answer: "===",
          tip: "É o operador mais estrito de igualdade."
        },
        {
          question: "Qual método adiciona um elemento ao final de um array?",
          options: ["push", "pop", "shift", "unshift"],
          answer: "push",
          tip: "É o oposto de 'pop'."
        },
      ],
    },
  ];
  
  export default data;