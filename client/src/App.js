import React, {Component} from "react"
//import Conditional from "./Components/Conditional"

class App extends Component {
    constructor() {
        super()
        this.state = {
            character: {}
        }
    }

    componentDidMount() {
        this.setState({loading: true})
        fetch("https://swapi.co/api/people/1")
            .then(respone => respone.json())
            .then(data => {
                this.setState({
                    loading: false,
                    character: data
                })
            })
    }

    render() {
        return (
            <div>
                <h2>{this.state.loading ? "We are loading" : this.state.character.name}</h2>
            </div>
        )
    }
}

export default App
