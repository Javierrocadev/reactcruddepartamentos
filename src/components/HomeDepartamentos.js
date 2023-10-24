import React, { Component } from 'react'
import axios from 'axios'
import Global from './Global'
import 'bootstrap/dist/css/bootstrap.min.css'
import loadImage from './assets/images/loadingBar.png'
import { NavLink } from 'react-router-dom'
export default class HomeDepartamentos extends Component {
    state = {
        departamentos: [],
        status: false
    }
    loadDepartamentos = () => {
        var request = "api/departamentos"
        var url = Global.apiDepartamentos + request
        axios.get(url).then(response => {
            this.setState({
                departamentos: response.data,
                status: true
            })
        })
    }
    componentDidMount = () => {
        this.loadDepartamentos();
    }
    render() {
        if (this.state.status == false) {
            return (<div><img src={loadImage} /></div>)
        }
        else {
            return (
                <div>
                    {this.state.status == true && (
                        <table className='table table-striped '>
                            <thead>
                                <tr>
                                    <th>id</th>
                                    <th>localidad</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.departamentos.map((departamento, index) => {
                                        return (
                                            <tr key={index}>
                                                <td>{departamento.numero}</td>
                                                <td>{departamento.localidad}</td>
                                                <td>
                                                    <NavLink className="btn btn-info" to={"/details/" + departamento.numero} >Details</NavLink>
                                                </td>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </table>
                    )
                    }
                </div >)
        }

    }
}
