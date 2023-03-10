# Ecommerce-front-AluraGeek
Front end de un ecommerce simulando una API rest con json-server. Challenge de Alura ONE
# Sobre el proyecto
En este proyecto se busca tener una interfaz grafica de usuario amigable, estilizada y responsiva para la interacción con un ecommerce. Este proyecto solo tiene alcance
hasta la interfaz visual. Funcionalidades como la compra de productos, autenticación de usuarios, edicion y eliminación de productos, gestión de inventarios, etc, no 
están contempladas. Solo se contempla visualización y creación de nuevos productos.
## ¿Como se hizo?
- ### Vite
Usando Vite (una herramienta de desarrollo que ha crecido ráoidamente en popularidad) se construyó este proyecto, se usó vite por la facilidad que da 
para ambientes de desarrollo y para la construcción del código para productivo.
- ### Json-server
Usando json-server se simuló una API REST para la obtención de datos a renderizar en la página, posteriormente en este documento se dará el instructivo en caso
de querer ejecutar el proyecto para visualizar correctamente los datos.
- ### Arquitectura BEM
Usando la arquitectura BEM se hizo la organización de el código y la estructura del proyecto.
- ### Modelo Vista Controlador
Se trabajó un modelo vista controlador teniendo el proyecto estructurado a diferentes niveles, teniendo las vistas (HTML) en el ROOT del repositorio, 
el modelo (JS) en la carpeta services, y los controladores en la carpeta controllers.
- ### HTML semántico
Se usó HTML semántico para acompañar los propositos del ejercicio (un Ecommerce) haciendo que la página mejore en su SEO.
- ### ES6
El uso de ES6 fue vital para este proyecto, para tener código más legible sin perder funcionalidad
## Tecnologías

Vite             |   JSON SERVER |   CSS  |   HTML |   ES6    
:-------------------------:|:-------------------------:|:-------------------------:|:-------------------------:|:-------------------------:
<img width="102" alt="vite" src="https://user-images.githubusercontent.com/63006483/224161734-42ccd681-a37c-4024-90af-374fac887cfb.png">  |  <img width="109" alt="JsonServer" src="https://user-images.githubusercontent.com/63006483/224162260-41dbdb79-f929-40d4-b664-daa3f20388a2.png">  |  <img width="107" alt="css" src="https://user-images.githubusercontent.com/63006483/224161943-696ff54f-e8fb-4502-aa9f-02244f08b4cf.png">  |  <img width="102" alt="HTML" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpngGRjYX1ca7qAADU3K6eGLj7ShQE3L2otdzfryl_Y9Ht2QRoQKYQbsXd36XIxMbYOw0&usqp=CAU">  |  <img width="102" alt="ES6" src="https://www.howtogeek.com/wp-content/uploads/csit/2019/07/9608c9ff.png?height=200p&trim=2,2,2,2&crop=16:9">  

# ¿Como visualizar?
En github pages está una versión de la página usando datos estaticos y local storage para ilustrar lo que se puede hacer en la página con el uso de la API.
Alternativamente se puede descargar el proyecto y seguir los siguientes pasos:
- Instalar el proyecto: En el directorio raiz usar ```npm install``` para instalar todas las dependencias del proyecto.
- Visualizar el proyecto: Usar el comando ```npm run dev``` para visualizar la página web en entorno de desarrollo. En caso de mostrar error 503 ver siguiente paso.
- Iniciar json-server: Usar el comando ```npx json-server -w db/products.json``` para iniciar la simulación de API. Ahora se pueden visualizar todos los productos traidos desde la API.

## Pasos extra:
- Construir el proyecto: Usando ```npm run build``` se nos creará la carpeta dist con todo nuestro código listo para producción.
