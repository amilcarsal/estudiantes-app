# BuscarEstudiante

`BuscarEstudiante` es un componente de React diseñado para buscar y mostrar información sobre estudiantes utilizando un número de carnet. Se conecta a una API externa para recuperar los datos del estudiante y proporciona opciones para buscar, limpiar y cancelar la búsqueda.

## Descripción del Componente

El componente `BuscarEstudiante` permite a los usuarios ingresar un número de carnet y realizar una búsqueda para obtener detalles sobre el estudiante asociado. Utiliza el estado de React para manejar el valor del carnet ingresado, el estudiante encontrado, y cualquier mensaje de error. 

### Funcionalidades

- **Buscar**: Realiza una solicitud a la API para buscar un estudiante por número de carnet.
- **Limpiar**: Borra el número de carnet ingresado, el estudiante encontrado y cualquier mensaje de error.
- **Cancelar**: Borra el número de carnet y el estudiante encontrado, y permite redirigir o realizar otras acciones si es necesario.

### Instalación

Para utilizar este componente, asegúrate de tener los siguientes paquetes instalados:

- `react`
- `axios`

Puedes instalar los paquetes necesarios con:

```bash
npm install axios

