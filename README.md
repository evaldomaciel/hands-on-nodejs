# Hands-on Node.js

Olá, bem-vindo ao **Hands-on Node.js**, esse repositório tem como objetivo ser um guia prático, direto ao ponto, sobre Node.JS.
 
O objetivo será desenvolver um passo a passo, que será listado nos *commits*, que será utilizado em conjunto com o Anki, ou qualquer outra ferramenta para revisão espaçada de conteúdo. O intuito aqui é manter o conhecimento vivo, mesmo que deixemos de trabalhar com Node em algum momento, ou foquemos mais em um framework e não iremos utilizar tanto o Node em sua essência.
 
É óbvio para todos que se não praticarmos esquecemos alguns pontos, mas acredite, às vezes esquecemos o básico e isso em algum momento pode fazer a diferença no desempenho das novas atividades diárias, ou se estivermos nós afastados desse mundo por algum motivo.

## Aviso

Nesse material não é abordado a instalação do Node.js, por ser uma atividade tão básica que não faz sentido alguém, com o mínimo de conhecimento em qualquer linguagem de programação, precisar de um guia para instalação de um serviço que é basicamente *next, next, next*. Se você precisa de ajuda com instalação, procure na internet! Aqui vamos direto ao desenvolvimento. 

Logo, faço o download versão LTS do Node.js e comece a instalação enquanto você lê as próximas linhas.

Download em: https://nodejs.org

Você não precisa ser um programador JavaScript para entender a maior parte dos exercícios que iremos fazer aqui, se já estudou algoritmos ou já programa em qualquer linguagem de programação, vamos em frente, se nunca programou... vamos também, se você patinar em algo, faça uma pergunta no StackOverflow, faça o curso do Gustavo Guanabara, só não venha me perguntar. ~~Pode perguntar, mas vou te zoar.~~ 

# Bem-vindo ao Node.js

Uma forma simples e momentânea de explicar o Node.js é: "um servidor web que simula um navegador", logo a frente vamos explicar que não é bem assim, mas nesse primeiro momento tente imaginar dessa forma, pois, embora o Node execute eventos do JavaScript o fato de ser server-side o deu ao longo do tempo componentes que permitam o desenvolvimento de aplicações que vão muito além da capacidade de navegadores web.

O Node possuí arquitetura total *non-blocking thread* (não bloqueante), o que garante uma maior eficiência no uso de recursos do servidor, diferente do PHP, C#, Java e tantas outras linguagens, que enfiaram o processamento de dados. Outra vantagem do Node.js é que esse tipo de arquitetura não sofre com *dead-locks*, uma vez que o Node.js trabalha com *single-thread thread* (única thread por processo), o que garante um desenvolvimento simples e eficiente. Há a possibilidade de utilizar mais de uma instância quando se trabalha com Node.js através de *clusters*, vamos falar sobre isso em breve.

No Node trabalhamos com eventos de I/O (entrada e saída) do servidor. Um exemplo de evento que vai além da capacidade de navegador é o evento *connect* de um banco de dados, também podemos citar o *streaming* de dados entre serviços.

### Resumindo: 
- Single-thread: cada aplicação do Node.js é executada e uma instância;
- Event-loop: o Node.js é orientado a eventos de entrada e saída.

## Rodando o Node

Uma vez que tenhamos o ambiente Node instalando, vamos executar os primeiros comandos através do REPL (Read-eval-print-loop), abra o terminal do seu sistema operacional e execute o comando **node**. Opa, abriu o REPL, se você é programado já sabe que todo bom projeto deve começar com o pé direito e tem só uma forma de começar assim, se não for dessa forma, o universo irá conspirar para que tudo dê errado, então digite agora no console: 

```js
> console.log("Hello World")
```

O retorno esperado é "***Hello World***", óbvio não é mesmo? Parabéns, você começou a programa em JavaScript em Node.js, tudo de uma só vez. O riso é livre.

## Gerenciando módulos

### NPM
O NPM (Node Package Manager) é gerenciado de pacotes do Node, ele não nasceu com o Node, mas ganhou força devido ao uso pela comunidade e a partir da versão **0.6.0** passou a fazer parte oficialmente do projeto sendo o gerenciado padrão. 

Vamos listar alguns comandos do NPM, mas apenas não se preocupe com eles nesse momento, vamos utilizar na prática. 

- **npm init**: inicializar o gerenciador;
- **npm install *nome_do_módulo***: instala um módulo no projeto;
- **npm install -g *nome_do_módulo***: instala um módulo global;
- **npm install *nome_do_módulo* --save**: instala o módulo no projeto, atualizando o package.json na lista de dependências;
- **npm list**: lista todos os módulos do projeto;
- **npm list -g**: lista todos os módulos globais;
- **npm remove *nome_do_módulo***: desinstala um módulo do projeto;
- **npm remove -g *nome_do_módulo***: desinstala um módulo global;
- **npm update *nome_do_módulo***: atualiza a versão do módulo;
- **npm update -g *nome_do_módulo***: atualiza a versão do módulo global;
- **npm -v**: exibe a versão atual do NPM;
- **npm adduser *nome_do_usuário***: cria uma conta no NPM, através do site https://npmjs.org.
- **npm whoami**: exibe detalhes do seu perfil público NPM (é necessário criar uma conta antes);
- **npm publish**: publica um módulo no site do NPM (é necessário ter uma conta antes).

### Yarn
Nos últimos anos o Yarn, outro gerenciado de pacotes desenvolvido pelo Facebook, começou a ganhar muito espaço pois o seu propósito é solucionar todos os problemas encontrados no NPM, tanto com relação a desempenho quanto segurança.

- **yarn init**: inicializar o gerenciador;
- **yarn global add create-react-app**: cria um projeto global;
- **yarn add *nome_do_módulo***: instalar um módulo no projeto;
- **yarn upgrade *nome_do_módulo***: atualizar um módulo do projeto;
- **yarn remove *nome_do_módulo***: remover um módulo do projeto;
- **yarn login**: relizar no login no NPM (sim, no NPM).

Particularmente, prefiro utilizar o Yarn, mas é essencial que você conheça os dois, entenda suas diferenças e decida onde e quando utilizar cada um, como nosso projeto é *hands-on*, vamos focar na prática, se você quer entender melhor as diferenças entre cada um, pesquise!

### PACKAGE.JSON

Todo projeto Node.js é essencialmente um módulo, que também pode ser chamado de biblioteca, pacote ou *framework*, depende do conjunto de funcionalidades desenvolvido, o objetivo e a utilidade, nesse instante, para nós será simplesmente um módulo. Todo módulo Node.js possuí um arquivo *package.json*, o documento descrito do projeto. Para facilitar as coisas, a partir do desse momento vão nos referir ao projeto como um **pacote**.

O *package.json* é essencial para o projeto e se mal configurado pode causar bugs no projeto, pois este possuí atributos e valores chaves do projeto e também carregam as informações dos demais módulos que instalamos no decorrer do desenvolvimento do projeto.

É possível criar o arquivo *package.json* manual, mas ao iniciar o NPM com o comando "***npm init***", se não houver um arquivo criado no seu projeto, o NPM fará algumas perguntas relacionadas ao projeto e ao final do questionário um arquivo *package.json* será criado para você. 

Basicamente as perguntas serão: 

```
package name: (hands-on-nodejs)
version: (1.0.0)
description: 
entry point: 
test command:
git repository: 
keywords: 
author: 
license: (ISC)
```

Vamos a um exemplo prático, justamente o criado para este projeto.

```json
{
  "name": "meu-primeiro-app",
  "version": "1.0.0",
  "description": "Meu primeiro App",
  "main": "index.js",
  "type": "module",
  "scripts": {
    "test": "jest"
  },
  "private": true,
  "repository": {
    "type": "git",
    "url": "git+https://github.com/evaldomaciel/hands-on-nodejs.git"
  },
  "keywords": [
    "Nodejs",
    "node",
    "javascript",
    "typescript"
  ],
  "author": "Evaldo Borba Maciel",

  "homepage": "https://github.com/evaldomaciel/hands-on-nodejs#readme"
}
```

Descrevendo os atributos: 

- **name**: nome do projeto, nome pelo qual seu pacote será chamado via função *require('meu-primeiro-app')*;
- **description**: descrição do pacote. Deve ser curta e clara;
- **author**: atributo onde informamos o nome do autor. Pode ser uma *string* ou um *array*;
- **version**: versão do pacote em 3 níveis (Major, Minor e Patch);
- **main**: define o ponto de entrada da aplicação (o que vai ser retornado se alguém der um require no nosso pacote);
- **private** (booleano): quando definido como ***true*** previne a sua aplicação de ser publicada acidentalmente no npm;
- **scripts**: define um conjunto de scripts Node para você executar;
- **type**: define o formato do pacote, no nosso exemplo será um "module";

Além dos automaticamente podemos utilizar os seguintes parâmetros:
- **dependencies**: define uma lista de pacotes npm instalados como dependências de produção;
- **devDependencies**: define uma lista de pacotes npm instalados como dependências de desenvolvimento e a versão compatível;
- **engines**: define quais versões de Node este pacote/aplicação funciona;
- **contributors**: define um ou mais contribuidores. Esta propriedade é uma *array*;


### Dependencies

Vamos detalhar algo importante sobre dependências. 

``` json
"dependencies": {
  "pacote-1": "1.0.0", /** Permite somente essa versão da dependência */
  "pacote-2": "~1.0.0", /** ~ indica que somente o patch da dependência pode ser atualizado */
  "pacote-3": ">=1.0.0" /** >= indica que a versão da  dependência pode ser atualizada */
},
"devDependencies": {
  "pacote-4": "*"
}
```

- *"pacote-1": "1.0.0"*: aqui estamos dizendo que somente essa versão específica do pacote pode ser utilizada. Quando fixamos o número da versão o pacote não é atualizado, evitando assim uma possível quebra de uma funcionalidade.
- *"pacote-2": "~1.0.0"*: informamos a versão iniciando com til ("**~**") estamos dizendo que a dependência pode ter o seu patch atualizado. Atualizações de patch geralmente são seguras e não quebram o código.
- *"pacote-3": ">=1.0.0"*: informamos a versão iniciando com maior ou igual (*>=*) estamos dizendo que a dependência pode ter a sua versão atualizada a partir desta especificada. Cuidado, pois o código pode quebrar o código.  
- *"pacote-4": "`*`"*: informação a versão iniciando com *"`*`"* estamos dizendo que pode ser atualizada (ou utilizada) em qualquer versão. Está em especial foi definida em ***devDependencies***, atributo geralmente utilizado para a definição de dependências para testes automatizados, geralmente a alteração da versão dessa depedência não causa progrmas ao projeto. 

### Variáveis Globais

Como nos navegadores, no Node também podemos definir variáveis de escopo global a diferença é como estas variáveis são definidas. 

No *browser* definiríamos dessa maneira:

```js
window.today = new Date();
```

Uma vez que no Node não temos uma "janela" para nevegação, não faria sentido utilizar *window* como palavra reservada para um escopo global, por esse motivo o Node utiliza algo muito mais simples e intuítivo, a palavra *global*.

```js
global.today = new Date();
```

Uma vez que no Node não temos uma "janela" para navegação, não faria sentido utilizar *window* como palavra reservada para um escopo global, por esse motivo o Node utiliza algo muito mais simples e intuitivo, a palavra *global*.

### ES modules e CommonJS

Pacotes ou módulos são blocos de código desenvolvidos separadamente que combinados geram uma aplicação. Podemos utilizar dois padrões do Node para desenvolver nossas aplicações, *ECMAScript modules (ES modules)* ou *CommonJS*. A função require() faz parte deste padrão *CommonJS* que utilizamos para carregar os pacotes, o que nos permite ter uma aplicação modular. Para isso utilizamos definimos as variáveis globais *exports* ou *module.exports*.

Como definimos no nosso *package.json* que o tipo da nossa aplicação é um *module*, vamos desenvolver uma aplicação seguindo esse padrão.

Vamos a prática. No seu projeto crie um arquivo chamado **talk.js**. Nada de copiar e colar, digte o código:

```js
export default = function (msg) {
  console.log(msg)
}
```

Agora crie um arquivo chamado **guy.js** com esse código: 

```js
export function walk (walkTo) {
	console.log(walkTo)
}

export function talk (msg) {
	console.log(msg)
}
```


No primeiro exemplo definimos um pacote com uma única função, no segundo exemplo carregamos um objeto com duas funções, que poderiam ser várias. Lembra das aulas de programação orientada a objetos? O conceito é bem similar. ***Walk*** e ***Talk*** são ações, ou seja, funções. ***Guy*** é o cara, uma pessoa, que executa funções, como **falar**, **andar**, correr, pular, etc. Não preciso explicar que é possível ter atributos também.

Vamos criar agora um arquivo chamado app.js. Olha, nosso primeiro app nascendo. Ele vai carregar nossos pacotes. 

```js
import talk from "./talk.js";
import { talk as _talk, walk } from "./guy.js";

talk("Fala, meu camarada, chegou até aqui sem pular o Hello World?");
_talk("Opa, claro!");
walk("Vou para casa");
```
A saída será: 

> 1. Fala, meu camarada, chegou até aqui sem pular o Hello World?
> 2. Opa, claro!
> 3. Vou para casa

Repare que o código acima contém um *alias* para a função talk que é importada do *guy.js*, o motivo é simples, tempos um pacote chamado *talk* que exporta para o aplicativo uma função **padrão** que leva o mesmo do arquivo e um pacote chamado *guy* que possuí uma função chamada *talk*, por essa razão, para evitar conflitos, dizemos que o a função *talk* do pacote será chamada através de *_talk* no nosso aplicativo. 

Se tivesse desenvolvimento o código acimando em *CommonJS*, seria assim:

talk.js:
```js
module.exports = function(msg) {
  console.log(msg);
};
```

gay.js:
```js 
exports.talk = function(msg) {
  console.log(msg);
};

exports.walk = function(msg) {
  console.log(msg);
};
```

app.js:
```js
var talk = require("./talk");
var guy = require("./guy");

talk("Fala, meu camarada, chegou até aqui sem pular o Hello World?");
guy.talk("Opa, claro!");
guy.walk("Vou para a casa!");
```
É importante entender essas diferenças em um projeto, pois em algum momento você deverá trabalhar com um ou com outro.

Parabéns, você acaba de gerar o seu primeiro pacote **escalável** utilizando boas práticas do CommonJS. 

# Desenvolvendo uma aplicação Web

## Um pouco sobre protocolos

Agora que você já sabe o básico do básico sobre uma aplicação Node.js, podemos desenvolver uma aplicação web. O Node nos permite trabalhar com os protocolos comuns: HTTP, HTTPS, FTP, SSH, DNS, TCP, UDP e WebSockets. Há pacotes desenvolvidos que nos permitem trabalhar com outros protocolos, você pode encontra-los na comunidade. 

Sabemos que o protocolo mais comum para se criar uma aplicação web em ambiente local é o HTTP, então comecemos por aqui. O Node possuí um modulo nativo para iniciarmos esse desenvolvimento.

Crie um arquivo chamado ***index_server.js*** com o seguinte código (digite, sem copiar e colar): 

```js
import { createServer } from 'http';

var server = createServer(function (request, response) {
	response.writeHead(200, { "Content-type": "text/html" });
	response.write("Hello world");
	response.end();
});

server.listen(3000);
```

Arquivo concluído, rode no terminal o comando ***node .\index_server.js***

Obá, uma aplicação web em Node.js rodando no seu computador, olha só que legal. Acesse http://localhost:3000 e veja o que acontece.

O *Event Loop* do Node é responsável por lidar com a emissão de eventos do servidor. A função createServer() sobe o serviço, e espera um *callback* que estão passando através de uma função anônima que possuí dois parâmetros *function(request, response)* que é executada apenas quando o servidor recebe um requisição. No geral o Node trabalha com chamadas assíncrona que respondem através de *callbacks*. Por exemplo, vamos executar um função para retornar uma mensagem no console quando o serviço estiver de pé alterando o ***listen()***:

```js
server.listen(3000, () => console.log("O servidor está de pé!"));
```

Aqui utilizamos uma *arrow function*, para economizar linhas de código, obrigado ES6. 

O listen() é assíncrono, o Node invocar só irá invocar a sua função de callback se nenhum erro ocorrer antes do fim da execução da função. Ficou um pouco confuso? 

Você o código novamente, mas dessa vez vamos separar as funções passo a passo: 

```js
import { createServer } from 'http';
var responseRequest = function (request, response) {
  response.writeHead(200, { "Content-Type": "text/html" });
  response.write("Hello World!");
  response.end();
}
var server = createServer(responseRequest);
var serverOnline = function () {
  console.log('O servidor esta de pé!');
}
server.listen(3000, serverOnline);
```
### Explicando o código linha por linha
1. Importamos o componente *http* padrão do Node.js;
2. Desenvolvemos uma função chamada *responseRequest* que contém as informações básicas da rota que estamos criando;
3. Definimos o tipo de conteúdo que será apresentado no navegador se o carregamento ocorrer com sucesso (200), ou seja, um arquivo HTML;
4. Definimos o conteúdo HTML que será escrito na tela;
5. Fechamos o documento o tornado apto a ser utilizado;
6. Fecha a função *requestResponse*;
7. Inicia o serviço que nesse momento contém apenas o nosso *response* que é o conteúdo que será exibido na tela;
8. Definimos uma função para conter a nossa mensagem de status;
9. Definimos a mensagem que será exibida no console do servidor;
10. Fechamos a função serverOnline;
11. Iniciamos o servidor e se tudo der certo, o console imprime a mensagem no log para nós. 

## Trabalhando com rotas

Agora que entendemos como subir um serviço e desenvolver um servidor web, podemos trabalhar com rotas alternativas. Crie um arquivo chamado ***index_server2.js***, se você já trabalhou com rotas em qualquer framework, a sintaxe será bem simples de entender. Desenvolva o seguinte código: 

```js
import { createServer } from 'http';
var server = createServer(function (request, response) {
	response.writeHead(200, { "Content-Type": "text/html" });
	if (request.url == "/") {
		response.write("<h1>Home page</h1>");
	} else if (request.url == "/welcome") {
		response.write("<h1>Bem-vindo as rotas do Node :-)</h1>");
	} else {
		response.write("<head><meta charset=\"utf-8\"></head><h1>Página não encontrada :-(</h1>");
	}
	response.end();
});
server.listen(3000, function () {
	console.log('Servidor de pé!');
});
```

Preciso dizer que você deve executar o comando no terminal ***node .\index_server2.js***? 

Agora no navegador é esperado o seguinte comportamento: 

1. http://localhost:3000 - exibe "Home page" na tela;
2. http://localhost:3000/welcome - exibe "Bem-vindo as rotas do Node :-)" na tela;
3. http://localhost:3000/QUALQUER-OUTRA-PALAVRA - exibe "Página não encontrada :-(" na tela.

Repare que incluímos o no *head* a *charset UTF-8* para garantir que não dê erro na acentuação da página. Podemos desenvolver todo o HTML, se necessário, mas não faça isso. Veremos uma forma melhor de gerar nossas páginas.

Se você trabalha com requisições *HTTP* deve entender o que são *query strings*, ou seja, os parâmetros que passamos em **URL** e usamos para alguma finalidade como, por exemplo, a obtenção dos dados de um item em um banco de dados. No Node.js podemos acessar os valores desses parâmetros de URL com ajuda do pacote padrão *"url"* com uso da função *parser* que que captura os parâmetros e valores para nós. 

Vamos criar um arquivo chamado *query_server.js* com o seguinte código:

```js
import { createServer } from 'http';
import { parse } from 'url';
var server = createServer(function (request, response) {
	response.writeHead(200, { "Content-Type": "text/html" });
	response.write("<h1>Definição de query string</h1>");
	var result = parse(request.url, true);
	for (var key in result.query) {
		response.write("<br>" + key + ": " + result.query[key] + "</br>");
	}
	response.end();
});
server.listen(3000, function () {
	console.log('Servidor de pé!');
});
```

Ao iniciar o servidor vamos abrir o navegador utilizando a seguinte URL: http://localhost:3000/?name=Evaldo&lastName=Maciel

Se tudo ocorrer como esperado, o navegador irá exibir na tela as chaves *name* e *lastName* e os valores *Evaldo* e *Maciel*, respectivamente. Sinta-se livre para fazer quantos testes quiser. 

Veja o que diz a documentação sobre URL: https://nodejs.org/api/url.html

## Trabalhando com arquivos HTML 

Agora vamos separar o arquivo HTML do código JavaScript utilizando outro componente do Node.js, o FS (File System), que irá manipular os arquivos da nossa aplicação.

Crie um arquivo chamado *file_system.html*, sinta-se livre para definir o código. Em seguida vamos criar um arquivo chamado *file_system.js* para ler o conteúdo do nosso arquivo *html*, com o seguinte código: 

```js
import { readFile, readFileSync } from 'fs';
readFile('./file_system.html', function (erro, arquivo) {
	if (erro) throw erro;
	console.log(arquivo);
});
var arquivo = readFileSync('./file_system.html');
console.log(arquivo);
```
Ao executar o *node .\file_system.js* o terminal irá imprimir o *bytes* do arquivo.

### Explicado o código 
- *readFile*: faz a leitura do arquivo em disco;
- *readFileSync*: realiza a leitura síncrona do arquivo, bloqueando a aplicação até que a leitura termine;
- *console.log*: imprime os bytes no terminal.

É importante ressaltar que o FS possuí características específicas por sistema operacional do servidor. Tome esse cuidado ao desenvolver. Verifique a documentação para obter mais informações: https://nodejs.org/api/fs.html

Nosso objetivo aqui é gerar uma página da web, por isso não vamos simplesmente ler o arquivo e imprimir algo no console, vamos renderizar na tela do navegador, para isso vamos alterar o *file_system.js* para: 
```js
import { createServer } from 'http';
import { readFile } from 'fs';
import { join } from 'path';

const dirPath = join('.');

var server = createServer(function (request, response) {
	readFile(dirPath + '/file_system.html', function (erro, html) {
		response.writeHeader(200, { 'Content-Type': 'text/html' });
		response.write(html);
		response.end();
	});
});

server.listen(3000, function () {
	console.log('Executando Site Pessoal');
});
```
### Explicado o código 

- O que fizemos de diferente aqui foi utilizar apenas a função *readFile* do *FS* e importamos o módulo nativo do Node chamado *path*. 
- Utilizamos a função *join()* do Path para indicar que tanto o arquivo JavaScript quanto HTML estão no mesmo diretório, definido "." como parâmetro na função. 


# Desenvolvendo de forma assíncrona

O Node.js é conhecido por ser muito performático, o motivo desse desempenho é o fato de trabalhar com operações assíncronas. Para entender na prática, desenvolva o seguinte código em um arquivo chamado "generator_text.js": 

```js
import { writeFile, writeFileSync } from 'fs';

const asyncFunc = function () {
	let startTime = new Date().getMilliseconds();
	for (var i = 1; i <= 5; i++) {
		if (i == 1) {
			console.log("Criando arquivos de forma assíncrona");
		}
		let file = "async-txt" + i + ".txt";
		writeFile(file, "Hello Node.js!", function (err, out) {
			console.log(file + " - " + parseInt(parseInt(new Date().getMilliseconds()) - startTime));
		});
	}
}

const syncFunc = function () {
	let startTime = new Date().getMilliseconds();
	for (var i = 1; i <= 5; i++) {
		if (i == 1) {
			console.log("Criando arquivos de forma síncrona");
		}

		let file = "sync-txt" + i + ".txt";
		let out = writeFileSync(file, "Hello Node.js!");
		console.log(file + " - " + parseInt(parseInt(new Date().getMilliseconds()) - startTime));
	}
}

syncFunc();
asyncFunc();
```

Claro que uma série de fatores irão impactar no desempenho dessa execução, ainda assim, você verá no terminal que a assíncrona foi muito mais rápida que a síncrona e não "sequência", uma vez que execuções acabam sendo concorrentes. Isso garante a performance. Quando utilizamos funções síncronas o Node fica bloqueado até o final da execução. Em sistemas pequenos talvez seja imperceptível, mas em aplicações maiores, com muitos usuários, as execuções poderão ficar mais lentas e custosas para o hardware, além disso o tempo de retorno, obviamente, será maior.

Citando a configuração do laptop, um Lenovo L340, SSD 240GB M2, 8 GB de RAM 2400mhz, processador Intel(R) Core(TM) i5-9300HF 2.40GHz, a execução assíncrona levou 4 milissegundos, a execução síncrona levou o dobro do tempo, 8 milissegundos.

Lembre-se de apagar os arquivos que foram gerados na pasta do projeto.

Como sugestão de exercício, refaça o código acima desenvolvendo pacotes separados. Após isso, crie pacotes que utilizem as funções *readFile* e *readFileSync* do FS.  

## Event-loop em detalhes

O Node.js é orientado a eventos e executa bem funções assíncronas, isso devido ao bom trabalho o Event-loop, um mecanismo interno que utiliza, vejam só, duas bibliotecas bem conhecidas da linguagem **C**, a *libev* e *libeio*, responsável por fornecer esse bom desempenho do Node.

O nome é sugestivo, não é mesmo? É um loop, que fica verificando se há novos eventos a serem processados na fila de eventos. A maior parte dos pacotes do Node herdam funcionalidades do *EventEmitter*, módulo responsável por emitir esses eventos. O *EventEmitter* executa esse evento e retorna o *callback* da função. 

Por essa razão, em geral, aplicações em Node são bem estruturadas e não bloqueantes. 

## Callbacks hell

Trabalhar de forma assíncrona é excelente para performance, porém é preciso tomar cuidado o que chamamos de *callbacks hell*, que é o encadeamento de funções assíncronas. 

Veja um exemplo de código que você não deve desenvolver: 

```js
import { readdir, stat as _stat } from 'fs';
import { join } from 'path';
const dirPath = join('.');

readdir(dirPath, function (error, contents) {
	if (error) { throw error; }
	contents.forEach(function (content) {
		var path = './' + content;
		_stat(path, function (error, stat) {
			if (error) { throw error; }
			if (stat.isFile()) {
				console.log('%s %d bytes', content, stat.size);
			}
		});
	});
});

```
O objetivo aqui é simplesmente imprimir uma lista de arquivos do diretório, não era necessária essa quantidade tão grande de callbacks, concordam? 

Se for um diretório grande, cheio de arquivos e com milhares de requisições por segundos isso pode virar um *inferno*.

No JavaScript, independente se está trabalhando com node ou não, uma boa prática é criar funções de forma isoladas com objetivos claros, salvando em uma variável e passando-as como callback. Não crie muitas funções anônimas. 

Vamos um callbacks_heaven.js:

```js
import { readdir, stat as _stat } from 'fs';
import { join } from 'path';
const dirPath = join('.');

var readPath = function () {
	readdir(dirPath, function (error, path) {
		if (error) return error;
		path.forEach(function (file) {
			readFile(file);
		});
	});
};
var readFile = function (file) {
	var path = './' + file;
	_stat(path, function (error, stat) {
		if (error) return error;
		if (stat.isFile()) {
			console.log('%s %d bytes', file, stat.size);
		}
	});
};
readPath();
```
Bom senso define esse código. Encadeamento de callbacks? No máximo dois e olha lá. Não faça aquele código que você só você e Deus são capazes de entender, pois chega o dia em somente Deus vai saber o que o código faz. 

Com isso finalizamos o entendimento inicial sobre o Node.js, tudo o que você precisa saber para não ser um completo ignorante.