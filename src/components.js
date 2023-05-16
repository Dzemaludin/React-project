var root = ReactDOM.createRoot(document.getElementById("root"));

// Function component
// Class component

class TodoApp extends React.Component {
  render() { 
    const data = {
        naslov: "Todo Aplication",
        objasnjeje: "Zadatci na cekanju",
        zadaci: ["1 zadatak","2 zadatak","3 zadatak"]
    }
    return (
      <div>
        <Header title={data.naslov} description={data.objasnjeje} />
        <TodoList items={data.zadaci} />
        <button>Ocisti</button>
      </div>
    );
  }
}


class Header extends React.Component {
  render() {
    return  (
    <div>
      <h1>{ this.props.title }</h1>
      <p>{ this.props.description }</p>
    </div>
    );
  }
}

class TodoList extends React.Component{
  clearItems(){
    
  }
  render(){
    return (
      <div>
      <ul>
          {
            this.props.items.map((item,index) =>
            <TodoItem key={index} item={item}/>)
          }
      </ul>
      <button onClick={this.clearItems}> Izbrisi</button>
      </div>
    );
  }
}


class TodoItem extends React.Component {
  render(){
    return <li>{this.props.item}</li>
  }
}

var template = root.render(<TodoApp/>);
