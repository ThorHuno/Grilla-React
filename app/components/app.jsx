import React from 'react';
import ReactDom from 'react-dom';
import TableProducto from './table-producto/table-producto';

let data = [
    {
        Id: 1,
        Nombre: 'Aquiles',
        Edad: 27,
        Titulo: 'Ing Sistemas'
    }, {
        Id: 2,
        Nombre: 'Juan',
        Edad: 29,
        Titulo: 'Ing Sistemas'
    }, {
        Id: 3,
        Nombre: 'Oscar',
        Edad: 32,
        Titulo: 'Ing Sistemas'
    }
];
const App = (props) => <TableProducto data={data}/>

ReactDom.render(
    <App/>, document.getElementById('app'));