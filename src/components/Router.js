import React, { Component } from 'react'
import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom'
import HomeDepartamentos from './HomeDepartamentos'
import CreateDepartamento from './CreateDepartamento'

//
import DetalleDepartamento from './DetalleDepartamento'
import MenuDepartamentos from './MenuDepartamentos'
import EliminarDepartamento from './EliminarDepartamento'
import UpdateDepartamento from './UpdateDepartamento'
export default class Router extends Component {
    render() {
        function DetalleDepartamentoElement() {
            // var { iddepartamento } = useParams()
            var { iddepartamento, nombre, localidad } = useParams()
            return <DetalleDepartamento iddepartamento={iddepartamento} nombre={nombre} localidad={localidad} />
        }
        function EliminarDepartamentoElement() {
            var { iddepartamento } = useParams()
            return <EliminarDepartamento iddepartamento={iddepartamento} />
        }
        function UpdateDepartamentoElement() {
            var { iddepartamento } = useParams()
            return <UpdateDepartamento iddepartamento={iddepartamento} />
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
                    <Route path="/delete/:iddepartamento" element={<EliminarDepartamentoElement />} />
                    <Route path="/update/:iddepartamento" element={<UpdateDepartamentoElement />} />
                </Routes>
            </BrowserRouter>
        )
    }
}
