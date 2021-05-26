const express = require('express');
const cors = require('cors');
const app = express();
const routes = require('./src/routes');


//Settings
const PORT = 5000;



//Middlewares
app.use(cors());     //encargara de manejar errores de cors, hay muchas alternativas a este
app.use(express.json());  //Se encarga de parsear el body de las request, si no lo ponemos no podemos leerlo
app.use('/', routes);


//Routes

//Starting the server


try {   //try-catch para manejar errores en caso de tenerlo cuando levantamos el servidor
    app.listen(PORT, () => {    //Escuchamos al puesto PORT
        console.log(`Server en puerto ${PORT}`);
        
    });
} catch (error) {
    console.log(`Error en puerto ${PORT}`, error);  //En caso de error veremos esto en nuestra consola
}