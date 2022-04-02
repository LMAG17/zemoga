# Zemoga React Native test

This Project is developed with react native

This application use the following libraries to work
-  react
-  react-native
-  redux
-  react-navigation
-  react-native-async-storage
-  react-native-vector-icons

# Layers
The project is divided into three main layers
  - Services layer: 
    This layer uses ServiceFactory and ServiceInteractor to connect and communicate with JSONPlaceholder Api.
  - Redux layer:
    This layer contains the control the transversal logic of the all application, it also uses redux-persistor to save in cache all the necessary data.
  - View layer:
    This layer shows to the user all the application content and handle user actions.

Additional layers
  - Utils layer:
    this layer provides to the application methos to calculate sizes and get randome images from internet.
  - Components layer
    this layer contains common components to reciclate code.

# Project structure
- In the "__src__" folder we can found:
    -  services: In this folder we can found the files to communicate with the Api.
    -  navigation: In this folder we can found the files that control the application navigation
    -  Screens: In this folder we can found the files that contains the applications visuals
    -  components: In this folder we can found the common components that help us to reciclate code
    -  constants: In this folder we can found the constants files 
    -  utils: In this folder we can found methods that help us to calculate visual sizes and methods to get images from internet
- In the "__tests__" folder we can found:
     -   Components-test.js : 
        individual components tests
     -   Navigation-tests.js : 
        navigation components tests
     -   Screens-test.js : 
        visual components tests
     -   Services-tests.js : 
        services tests
     -   Utils-tests.js : 
        utils methods tests
### Instalation
    

This application requires [Node.js](https://nodejs.org/), AndroidSDK and XCode, to run.

first pull the dependencies and then run the corresponding command

__Android__:
```sh
$ yarn 
$ yarn android
```
__iOS__:
```sh
$ yarn 
$ cd ios/ && pod install
$ yarn ios
```

# Zemoga React Native test

Esta prueba esta realizada con react native.

Esta aplicacion utiliza las siguientes librerias para su funcionamiento principal:
-  react
-  react-native
-  redux
-  react-navigation
-  react-native-async-storage
-  react-native-vector-icons

# Capas
El proyecto se divide en tres capas principales
  - Capa de los servicios y el modelo: 
    Esta capa contiene dos archivos, interactor y factory, esos archivos se encargaran de la comunicacion con la api.
  - Capa de Redux:
    Esta capa tiene la funcion de manejar la logica transversal de la aplicacion, utiliza ademas redux-persistor para almacenar en cache los datos necesarios.
  - Capa de las vistas:
    Esta capa se encarga de mostrar los datos al usuario y capturar las acciones realizadas.

Capas adicionales
  - Capa de utilidades:
    En esta capa encontraremos utilidades para hacer ajustes especificos de tamaños y obtener imagenes aleatorias 
  - Capa de componentes 
    En esta capa podremos encontrar componentes que nos permitan reutilizar codigo utilizado en varias pantallas

# Estructura del proyecto
  - En la carpeta "__src__" del proyecto podemos encontrar:
    -  services: En esta carpeta se almacenan las capas que proveen la aplicacion de datos.
    -  navigation: En esta carpeta se almacenan los controladores de la navegacion del proyecto 
    -  Screens: En esta carpeta se almacenan las vistas que componen el proyecto
    -  components: En esta carpeta encontraremos componentes que nos permitan reutilizar codigo
    -  constants: En esta carpeta encontraremos las constantes para el correcto funcionamiento del proyecto, por ejemplo las urls del servidor 
    -  utils: En esta carpeta encontraremos metodos que nos permitan realizar ajustes visuales, o obtener imagenes aleatorias
- En la carpeta "__tests__" del proyecto podemos encontrar:
     -   Components-test.js : 
        test de los componentes individuales
     -   Navigation-tests.js : 
        test de los componentes de navegacion
     -   Screens-test.js : 
        test de las pantallas
     -   Services-tests.js : 
        test de los servicios
### Instalacion
    

Esta aplicacion require [Node.js](https://nodejs.org/), AndroidSDK, XCode, para funcionar.

Instala las dependencias y luego dependiendo de la plataforma ejecuta el comando correspondiente:

__Android__:
```sh
$ yarn 
$ yarn android
```
__iOS__:
```sh
$ yarn 
$ cd ios/ && pod install
$ yarn ios
```