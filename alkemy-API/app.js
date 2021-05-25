const express = require('express');
const cors = require('cors');

const PORT = 5000;

const app = express();
app.use(cors());     //encargara de manejar errores de cors, hay muchas alternativas a este
app.use(express.json());  //Se encarga de parsear el body de las request, si no lo ponemos no podemos leerlo
//app.use('/', routes);
//app.use('/public/upload', express.static(__dirname + '/public/upload'));

try {   //try-catch para manejar errores en caso de tenerlo cuando levantamos el servidor
    app.listen(PORT, () => {    //Escuchamos al puesto PORT
        console.log(`Server en puerto ${PORT}`);
        
    });
} catch (error) {
    console.log(`Error en puerto ${PORT}`, error);  //En caso de error veremos esto en nuestra consola
}