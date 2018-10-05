# Trident Video su React

[![](http://tridentsuisse.ch/images/logo.png)](http://tridentsuisse.ch/)

### React
E' una libreria sviluppata in Javascript per la costruzione di interfacce, al suo interno ci sono i principi di programmazione funzionale: i componenti devono fare un solo compito.
La caratteristica principale delle applicazioni scritte in React è la velocità in cui lavorano.
Inoltre quando ci sono cambiamenti questi avvengono automaticamente grazie al Virtual DOM.
Sotto alcuni punti di vista React si inspira a Php, dato che Facebook, come backend usava il medesimo.

### Componenti
Un componente è un eleemente indipendente e riutilizzabile, quando si dichiara il nome, quest'ultimo deve sempre essere scritto in PascalCase.
Al suo interno si usa la sintassi di JSX per costruire elementi.
Il componente prima di essere utilizzato deve sempre esportato.
```
import React from 'React';
class HelloWorld extends Component{
    render(){
        return(
            <h1> Hello world </h1>
        )
    }
}
export default HelloWorld;
```
### Tipologie di componenti
#### Puri
```
//Componenti Puri
class App extends React.Component{
    render(){
        return(
            <p> Hello world </p>
        )
    }
}
```
Si implementano con una classe ma sono una estensione di React.pureComponent

#### Funzionali
La caratteristica principale è che vengono incapsulati all'interno di una funzione ed hanno solo proprietà.
```
//Componenti Funzionali
const App = (props) => (
    <p> hello world </p>
)
```
Sono più facili da creare e da leggere perchè hanno meno codice e non hanno bisogno di render()
Non si può utilizzare this.
Ma i suoi svantaggi sono che non si possono utilizzare i metodi del ciclo di vita dei componenti al suo interno e non hanno uno state e non si possono utilizzare refs.

### Props: le proprietà di un componente
Quello che chiamiamo attributi in HTML, in JSX si chiamano proprietà

### State: lo stato di un componente
Si occupa di gestire i dati dei componenti e se qualcosa cambia nello state, React gli aggiorna automaticamente.



### React DOM
Serve per per reiderizzare 
ReactDOM.render riceve due parametri: cosa reiderizza, dove lo reiderizza

### JSX 
Il codice JSX sembra HTML ma in realtà è un insieme tra Javascritpt e HTML, si può considerare un estensione della stessa.
Viene utilizzato come processatore (simile a Sass) e una volta compilato trasforma il codice in Javascript.
L'unico problema che sorge è che essendo codice Javascript, ci sono alcune parole riservate:
class diventa className.
- Ho risolto il problema di Emmet con JSX modificando il file setting.json di Visual Studio Code


### Hash
Quando passi in produzione i file creati hanno un Hash, questo è stato creato per evitare che i file salvati nella cache del browser diano problemi quando facciamo qualche cambio.

### Ciclo di vita dei componenti
| Nome | Utilizzo |
| ------ | ------ |
| constructor() | E' il primo metodo che viene richiamato al creare un componente: possiamo inizializzare uno stato, aggiungere eventi (bind).  |
| componentWillMount() | Si esegue prima di montare un componente (ancora non è visibile): possiamo eseguire un setState() |
| render() | Contiene tutti gli elementi da reiderizzare, contiene anche JSN e il return |
| componentDidMount() | Si usa solo una volta, e si richiama quando un componente viene aggiunto al DOM (è visibile) |
| componentWillReceiveProps() | Richiamo quando il componente riceve nuove proprietà |
| shouldComponentUpdate() | Quando le proprietà (props) o lo stato (state) di un componente è stato modificato|
| componentWillUpdate() | Metodo richiamato prima di reiderizzare un componente se shouldComponentUpdate() ritorna true |
| componentDidUpdate() | Metodo richiamato dopo il render |
| componentWillUnmount() | Metodo richiamato prima di eliminare un componente |
| componentDidCatch() | Se succede qualche errore lo posso catturare|



```sh
componentWillMount() //Si esegue prima di montare un componente
render() //Contiene tutti gli elementi da reinderizzare
componentDidMount() //Si usa solo una volta è ideale per richiamare API
componentwillReceiveProps() //Richiamato quando il componente riceve nuove proprietà
shouldComponentUpdate() //
componentWillUpdate() //
```


Dillinger is a cloud-enabled, mobile-ready, offline-storage, AngularJS powered HTML5 Markdown editor.

  - Type some Markdown on the left
  - See HTML in the right
  - Magic


  


You can also:
  - Import and save files from GitHub, Dropbox, Google Drive and One Drive
  - Drag and drop markdown and HTML files into Dillinger
  - Export documents as Markdown, HTML and PDF

Markdown is a lightweight markup language based on the formatting conventions that people naturally use in email.  As [John Gruber] writes on the [Markdown site][df1]

> The overriding design goal for Markdown's
> formatting syntax is to make it as readable
> as possible. The idea is that a
> Markdown-formatted document should be
> publishable as-is, as plain text, without
> looking like it's been marked up with tags
> or formatting instructions.

This text you see here is *actually* written in Markdown! To get a feel for Markdown's syntax, type some text into the left window and watch the results in the right.

### Tech

Dillinger uses a number of open source projects to work properly:

* [AngularJS] - HTML enhanced for web apps!
* [Ace Editor] - awesome web-based text editor
* [markdown-it] - Markdown parser done right. Fast and easy to extend.
* [Twitter Bootstrap] - great UI boilerplate for modern web apps
* [node.js] - evented I/O for the backend
* [Express] - fast node.js network app framework [@tjholowaychuk]
* [Gulp] - the streaming build system
* [Breakdance](http://breakdance.io) - HTML to Markdown converter
* [jQuery] - duh

And of course Dillinger itself is open source with a [public repository][dill]
 on GitHub.

### Installation

Dillinger requires [Node.js](https://nodejs.org/) v4+ to run.

Install the dependencies and devDependencies and start the server.

```sh
$ cd dillinger
$ npm install -d
$ node app
```

For production environments...

```sh
$ npm install --production
$ NODE_ENV=production node app
```

### Plugins

Dillinger is currently extended with the following plugins. Instructions on how to use them in your own application are linked below.

| Plugin | README |
| ------ | ------ |
| Dropbox | [plugins/dropbox/README.md][PlDb] |
| Github | [plugins/github/README.md][PlGh] |
| Google Drive | [plugins/googledrive/README.md][PlGd] |
| OneDrive | [plugins/onedrive/README.md][PlOd] |
| Medium | [plugins/medium/README.md][PlMe] |
| Google Analytics | [plugins/googleanalytics/README.md][PlGa] |


### Development

Want to contribute? Great!

Dillinger uses Gulp + Webpack for fast developing.
Make a change in your file and instantanously see your updates!

Open your favorite Terminal and run these commands.

First Tab:
```sh
$ node app
```

Second Tab:
```sh
$ gulp watch
```

(optional) Third:
```sh
$ karma test
```
#### Building for source
For production release:
```sh
$ gulp build --prod
```
Generating pre-built zip archives for distribution:
```sh
$ gulp build dist --prod
```
### Docker
Dillinger is very easy to install and deploy in a Docker container.

By default, the Docker will expose port 8080, so change this within the Dockerfile if necessary. When ready, simply use the Dockerfile to build the image.

```sh
cd dillinger
docker build -t joemccann/dillinger:${package.json.version} .
```
This will create the dillinger image and pull in the necessary dependencies. Be sure to swap out `${package.json.version}` with the actual version of Dillinger.

Once done, run the Docker image and map the port to whatever you wish on your host. In this example, we simply map port 8000 of the host to port 8080 of the Docker (or whatever port was exposed in the Dockerfile):

```sh
docker run -d -p 8000:8080 --restart="always" <youruser>/dillinger:${package.json.version}
```

Verify the deployment by navigating to your server address in your preferred browser.

```sh
127.0.0.1:8000
```

#### Kubernetes + Google Cloud

See [KUBERNETES.md](https://github.com/joemccann/dillinger/blob/master/KUBERNETES.md)


### Todos

 - Write MORE Tests
 - Add Night Mode

License
----

MIT


**Free Software, Hell Yeah!**

[//]: # (These are reference links used in the body of this note and get stripped out when the markdown processor does its job. There is no need to format nicely because it shouldn't be seen. Thanks SO - http://stackoverflow.com/questions/4823468/store-comments-in-markdown-syntax)


   [dill]: <https://github.com/joemccann/dillinger>
   [git-repo-url]: <https://github.com/joemccann/dillinger.git>
   [john gruber]: <http://daringfireball.net>
   [df1]: <http://daringfireball.net/projects/markdown/>
   [markdown-it]: <https://github.com/markdown-it/markdown-it>
   [Ace Editor]: <http://ace.ajax.org>
   [node.js]: <http://nodejs.org>
   [Twitter Bootstrap]: <http://twitter.github.com/bootstrap/>
   [jQuery]: <http://jquery.com>
   [@tjholowaychuk]: <http://twitter.com/tjholowaychuk>
   [express]: <http://expressjs.com>
   [AngularJS]: <http://angularjs.org>
   [Gulp]: <http://gulpjs.com>

   [PlDb]: <https://github.com/joemccann/dillinger/tree/master/plugins/dropbox/README.md>
   [PlGh]: <https://github.com/joemccann/dillinger/tree/master/plugins/github/README.md>
   [PlGd]: <https://github.com/joemccann/dillinger/tree/master/plugins/googledrive/README.md>
   [PlOd]: <https://github.com/joemccann/dillinger/tree/master/plugins/onedrive/README.md>
   [PlMe]: <https://github.com/joemccann/dillinger/tree/master/plugins/medium/README.md>
   [PlGa]: <https://github.com/RahulHP/dillinger/blob/master/plugins/googleanalytics/README.md>
