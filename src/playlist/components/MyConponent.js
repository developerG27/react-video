class MyComponent extends Components{
  constructor(){
    //inizializzo lo state
  }

  componentWillMount(){
    //Si esegue prima di montare un componente
    //Si può usare per fare setState()

    //Durante la reinderizzazione del componente
  }

  render(){
    //Contiene gli elementi da reiderizzare
    //Si possono usare per calcolare le proprietà
  }

  componentDidMount(){
    //Si usa solo una volta
    //E' l'ideale per chiamare una API, fare setInterval ecc..

    //Quando il componente si aggiunge al DOM
  }

  componentWillReceiveProps(){
    //Metodo richimato una volta che riceve nuove proprietà
    //Attualizza le nuove proprietà
  }

  shouldComponentUpdate(){
    //Si usa dopo che lo state o i props dei componenti sono stati modificati
  }

  componentWillUpdate(){
    //Metodo richiamato prima di reiderizzare il componente, se shouldComponentUpdate ritorna true
  }

  componentDidUpdate(){
    //Metodo richiamato dopo il render
  }

  componentWillUnmount(){
    //Metodo richiamato prima di eliminare il componente
  }

  componentDidCatch(){
    //Se c'è qualche errore lo scopro da qui
  }
}