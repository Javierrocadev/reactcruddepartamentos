import React, { Component } from 'react'
import axios from 'axios'
import Global from './Global'
import { Navigate } from 'react-router-dom'
export default class CreateDepartamento extends Component {
    cajaNumero = React.createRef()
    cajaNombre = React.createRef()
    cajaLocalidad = React.createRef()

    state = {
        status: false
    }
    insertDepartamento = (e) => {
        e.preventDefault()
        var id = parseInt(this.cajaNumero.current.value)
        var nombre = this.cajaNombre.current.value
        var loc = this.cajaLocalidad.current.value

        var departamento = {
            numero: id,
            nombre: nombre,
            localidad: loc
        }
        var request = "api/departamentos"
        var url = Global.apiDepartamentos + request
        axios.post(url, departamento).then(response => {
            this.setState({
                status: true
            })
        })
        this.setState({ status: true })

    }


    render() {
        if (this.state.status == true) {
            return (<Navigate to="/"></Navigate>)
        }
        else {
            return (
                <div>
                    <h1>Create Departamento</h1>
                    <form>
                        <label >Id departamento</label>
                        <input className='form-control' type='number' ref={this.cajaNumero}></input>
                        <label >Localidad</label>
                        <input className='form-control' ref={this.cajaNombre}></input>
                        <label >Localidad</label>
                        <input className='form-control' type='text' ref={this.cajaLocalidad}></input>
                        <button className='btn btn-info' onClick={this.insertDepartamento}>create</button>
                    </form>
                </div>
            )
        }

    }
}
