import React, { Component } from 'react'
import axios from 'axios'
import Global from './Global'
import { NavLink } from 'react-router-dom'
export default class DetalleDepartamento extends Component {
    // state = {
    //     departamento: {},
    //     status: false
    // }
    // findDepartamentos = () => {
    //     var request = "api/departamentos/" + this.props.iddepartamento
    //     var url = Global.apiDepartamentos + request
    //     axios.get(url).then(response => {
    //         this.setState({
    //             departamento: response.data,
    //             status: true
    //         })
    //     })
    // }
    // componentDidMount = () => {
    //     this.findDepartamentos()
    // }
    render() {
        return (
            <div>
                <h1>DetalleDepartamento {this.props.iddepartamento}</h1>
                <NavLink to="/">Back to List</NavLink>
                {
                    // this.state.status == true && (
                    <ul className='list-group'>
                        <li className='list-group-item'>
                            Id:{this.props.numero}
                        </li>
                        <li className='list-group-item'>
                            Nombre:{this.props.nombre}
                        </li>
                        <li className='list-group-item'>
                            Localidad:{this.props.localidad}
                        </li>
                    </ul>
                    // )
                }
            </div>
        )
    }
}
