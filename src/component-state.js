var root = ReactDOM.createRoot(document.getElementById("root"));


class User extends React.Component  {
    constructor(props) {
        super(props)
        this.changeEmail = this.changeEmail.bind(this)

        this.state = {
                name: "Dzema Dzema",
                email: "info@dzema.com"
        }   
    }
    changeEmail(){
        this.setState({
            name: "Taro Taro",
            email: "info@Taro.com"
        })
        console.log(this)
        
    }
    render(){
        return (

            <div>
                <h2>{ this.state.name }</h2>
                <p>{ this.state.email }</p>
                <button onClick={this.changeEmail}>Change Email</button>
            </div>
        )
    }
}


root.render(<User />);
