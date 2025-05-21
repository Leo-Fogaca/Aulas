import { Component } from "react";
import './panel.css'

class Panel extends Component {
    constructor() {
        super()
        this.state = {
            title: 'Título'
        }
    }
    render() {
        return(
            <h1 className="panel" onClick={() => this.setState({title: 'Novo título'})}>{this.state.title}</h1>
        )
    }
}

export default Panel
