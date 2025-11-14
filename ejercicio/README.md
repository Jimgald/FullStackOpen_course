Ejercicio 2.1
Terminemos el código para renderizar el contenido del curso de los ejercicios 1.1 - 1.5.
efine un componente responsable de formatear un solo curso llamado Course.

La estructura de componentes de la aplicación puede ser, por ejemplo, la siguiente:

App
  Course
    Header
    Content
      Part
      Part
      ...copy
      
Por lo tanto, el componente Course contiene los componentes definidos en la parte anterior, que son responsables de renderizar el nombre del curso y sus partes.