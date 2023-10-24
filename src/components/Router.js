import React, { Component } from 'react'
import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom'
import HomeDepartamentos from './HomeDepartamentos'
import CreateDepartamento from './CreateDepartamento'

//
import DetalleDepartamento from './DetalleDepartamento'
import MenuDepartamentos from './MenuDepartamentos'
export default class Router extends Component {
    render() {
        function DetalleDepartamentoElement() {
            // var { iddepartamento } = useParams()
            var { iddepartamento, nombre, localidad } = useParams()
            return <DetalleDepartamento iddepartamento={iddepartamento} nombre={nombre} localidad={localidad} />
        }
        return (
            <BrowserRouter>
                <MenuDepartamentos />
                <hr />
                <Routes>
                    <Route path='/' element={<HomeDepartamentos />} />
                    <Route path='/createdepartamento' element={<CreateDepartamento />} />
                    {/* <Route path='/details/:iddepartamento' element={<DetalleDepartamentoElement />} /> */}
                    <Route path='/details/:iddepartamento/:nombre/:localidad' element={<DetalleDepartamentoElement />} />
                </Routes>
            </BrowserRouter>
        )
    }
}
