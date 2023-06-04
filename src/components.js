var root = ReactDOM.createRoot(document.getElementById("root"));

// Function component
// Class component

// function component (+ hooks)
// class component (state + livecycle)

class TodoApp extends React.Component {
  constructor(props) {
    super(props);
    this.clearItems = this.clearItems.bind(this);
    this.addItem = this.addItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.state = {
      zadaci: ["1 zadatak", "2 zadatak", "3 zadatak"],
    };
  }

  deleteItem(item) {
    this.setState((prevState) => {
      const arr = prevState.zadaci.filter((i) => {
        return item != i;
      });
      return {
        zadaci: arr,
      };
    });
  }

  clearItems() {
    this.setState({
      zadaci: [],
    });
  }

  addItem(item) {
    if (this.state.zadaci.indexOf(item) > -1) {
      return "Ne mozete da unesete isti zadatak";
    }

    this.setState((prevState) => {
      return { zadaci: prevState.zadaci.concat(item) };
    });
  }

  render() {
    const data = {
      naslov: "Todo Aplication",
      objasnjeje: "Zadatci na cekanju",
      zadaci: ["1 zadatak", "2 zadatak", "3 zadatak"],
    };
    return (
      <div className="container my-3">
        <div className="card">
          <div className="card-header">
            <Header title={data.naslov} description={data.objasnjeje} />
          </div>
          <div className="card-body">
            <TodoList
              items={this.state.zadaci}
              clear={this.clearItems}
              deleteItem={this.deleteItem}
            />
          </div>
          <div className="card-footer">
            <NewItem addItem={this.addItem} />
          </div>
        </div>
      </div>
    );
  }
  componentDidMount() {
    const json_obj = localStorage.getItem("items");
    const items = JSON.parse(json_obj);
    if (items) {
      this.setState({
        zadaci: items,
      });
    }
  }
  componentDidUpdate(prevPtops, prevState) {
    if (prevState.zadaci.length !== this.state.zadaci.length) {
      const json_str = JSON.stringify(this.state.zadaci);
      localStorage.setItem("items", json_str);
    }
  }
}

const Header = (props) => {
  return (
    <div className="text-center">
      <h1 className="h2">{props.title}</h1>
      <p>{props.description}</p>
    </div>
  );
};

const TodoList = (props) => {
  return (
    <div>
      <ul className="list-group">
        {props.items.map((item, index) => (
          <TodoItem key={index} item={item} deleteItem={props.deleteItem} />
        ))}
      </ul>
       {
        props.items.length > 0 ?
      <p>
         <button className="btn btn-outline-danger float-end mt-2" onClick={props.clear}> Izbrisi</button>
      </p>
      :
      <div className="alert alert-warning">
        Dodajte neki zadatak.
      </div>


      }

    </div>
  );
};

class NewItem extends React.Component {
  constructor(props) {
    super(props);
    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.state = {
      error: "",
    };
  }
  onFormSubmit(e) {
    e.preventDefault();

    const item = e.target.elements.txtItem.value.trim();
    if (item) {
      e.target.elements.txtItem.value = "";
      const error = this.props.addItem(item);
      this.setState({
        error: error,
      });
    }
  }
  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.onFormSubmit}>
          <div className="input-group">
             <input className="form-control" type="text" name="txtItem" />
             <button className="btn btn-primary" type="submit">Ekle</button>
          </div>
        </form>
      </div>
    );
  }
  componentDidUpdate() {
    console.log("now item component je napravljen");
  }
}

function TodoItem(props) {
  return (
    <li className="list-group-item">
      {props.item}
      <button className="btn btn-danger btn-sm float-end"
        onClick={() => {
          props.deleteItem(props.item);
        }}
      >
        X
      </button>
    </li>
  );
}

root.render(<TodoApp />);
