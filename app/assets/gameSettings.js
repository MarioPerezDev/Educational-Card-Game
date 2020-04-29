const gameSettings = {
  "title":"game1",
  "rounds":[
    {
      "roundid":0,
      "enemyName":"Hacker001",
      //El texto de debajo es el que se deberá cambiar para dar información cada ronda
      "roundText":"Lo mejor es utilizar una secuencia aleatoria. Las fechas de nacimiento o datos personales son siempre la peor opción, pues un ataque se volvería mucho más sencillo.     Buscar siempre claves que tengan más de ocho dígitos. Cuantos menos caracteres conforme una clave, más fácil es romperla para un pirata informático, puesto que el número de combinaciones posibles son menos. Se consideran débiles las combinaciones menores de ocho dígitos, que pueden identificarse con programas generadores de combinaciones aleatorias (llamados robots), lo que se conoce como \"la fuerza bruta\".",
      "enemyPic":"assets/images/Hacker.jpg",
      "enemyCard":{
        "number":1,
        //  Cambiar el nombre de la carta:
        "name":"Contraseña robada",
        //  Selecciona el poder de la carta que contiene la pregunta. Cuanto más difícil, más poder debe tener:
        "power":2,
        //  Introduzca la url de la imagen de la carta
        "image":"assets/images/password.png",
        //  Aquí es donde irá la pregunta
        "powerinfo":"Te he visto escribir tu contraseña del correo, ya me la sé y me dispongo a probarla en otras aplicaciones",
      },
      "ownCards":[{
        // Escriba el nombre de la respuesta de esta carta:
        "name":"Cambio múltiple",
        //  Este será el poder de la carta. Si la respuesta que escribe es muy mala deberá tener menor poder que el de la carta enemiga.
        //  Si es la respuesta óptima, deberá tener más poder que la del enemigo.
        //  La tercera carta (e intermedia) puede ser mayor o menor, en función de la respuesta
        "power":1,
        //  Imagen asociada a la carta
        "image":"assets/images/password.png",
        //  Introduzca la respuesta que se asociará a la carta
        "powerinfo":"Cambio la contraseña de todas las aplicaciones en las que uso esa misma contraseña.",
        //  Aquí deberá introducir una respuesta personalizada para la carta (o respuesta) que se mostrará una vez el alumno responda
        "feedback":"Nunca escribas la misma contraseña en múltiples aplicaciones distintas. Es mejor utilizar una diferente en cada lugar e irlas cambiando con cierta frecuencia.",
      },
      {
        // Escriba el nombre de la respuesta de esta carta:
        "name":"Cambio único",
        //  Este será el poder de la carta. Si la respuesta que escribe es muy mala deberá tener menor poder que el de la carta enemiga.
        //  Si es la respuesta óptima, deberá tener más poder que la del enemigo.
        //  La tercera carta (e intermedia) puede ser mayor o menor, en función de la respuesta
        "power":3,
        //  Imagen asociada a la carta
        "image":"assets/images/password.png",
        //  Introduzca la respuesta que se asociará a la carta
        "powerinfo":"Solo tendré que cambiar la contraseña de dicha página web o aplicación, puesto que uso una diferente en cada una.",
        //  Aquí deberá introducir una respuesta personalizada para la carta (o respuesta) que se mostrará una vez el alumno responda
        "feedback":"A pesar de que es una buena decisión, es mejor ir cambiando frecuentemente la contraseña (además de una diferente en cada aplicación).",
      },
      {
        // Escriba el nombre de la respuesta de esta carta:
        "name":"Cambio frecuente",
        //  Este será el poder de la carta. Si la respuesta que escribe es muy mala deberá tener menor poder que el de la carta enemiga.
        //  Si es la respuesta óptima, deberá tener más poder que la del enemigo.
        //  La tercera carta (e intermedia) puede ser mayor o menor, en función de la respuesta
        "power":4,
        //  Imagen asociada a la carta
        "image":"assets/images/password.png",
        //  Introduzca la respuesta que se asociará a la carta
        "powerinfo":"Cambio con frecuencia las contraseñas de las aplicaciones que uso y uso una diferente en cada una, por lo que no me supone un gran riesgo.",
        //  Aquí deberá introducir una respuesta personalizada para la carta (o respuesta) que se mostrará una vez el alumno responda
        "feedback":"Enhorabuena, es la mejor práctica posible.",
      },
      ],
    },
    {
      "roundid":1,
      "enemyPic":"assets/images/Hacker.jpg",
      "enemyName":"Hacker002",
      //  El texto de debajo es el que se deberá cambiar para dar información cada ronda
      "roundText":"Los archivos ejecutables fueron los mayores causantes de virus hace unos años, aunque ahora estén ligeramente en desuso.",
      "enemyCard":{
        "number":1,
        //  Cambiar el nombre de la carta:
        "name":"Correo entrante",
        //  Selecciona el poder de la carta que contiene la pregunta. Cuanto más difícil, más poder debe tener:
        "power":3,
        //  Introduzca la url de la imagen de la carta
        "image":"assets/images/mail.png",
        //  Aquí es donde irá la pregunta
        "powerinfo":"Acabas de registrarte en una página web. Te piden que actives tu cuenta accediendo a tu correo electrónico. En tu correo recibes un e-mail con un archivo ejecutable.",
      },
      "ownCards":[{
        // Escriba el nombre de la respuesta de esta carta:
        "name":"Ejecución",
        //  Este será el poder de la carta. Si la respuesta que escribe es muy mala deberá tener menor poder que el de la carta enemiga.
        //  Si es la respuesta óptima, deberá tener más poder que la del enemigo.
        //  La tercera carta (e intermedia) puede ser mayor o menor, en función de la respuesta
        "power":1,
        //  Imagen asociada a la carta
        "image":"assets/images/mail.png",
        //  Introduzca la respuesta que se asociará a la carta
        "powerinfo":"Lo abro sin pensármelo dos veces, si me lo ha mandado la web en la que me he registrado no puede ser un archivo maligno.",
        //  Aquí deberá introducir una respuesta personalizada para la carta (o respuesta) que se mostrará una vez el alumno responda
        "feedback":"NUNCA ejecutes un archivo que hayas recibido por correo. Los archivos ejecutables pueden hacer mucho daño a tu ordenador, abriendo ciertos procesos que pueden comprometerlo por completo.",
      },
      {
        // Escriba el nombre de la respuesta de esta carta:
        "name":"Duda",
        //  Este será el poder de la carta. Si la respuesta que escribe es muy mala deberá tener menor poder que el de la carta enemiga.
        //  Si es la respuesta óptima, deberá tener más poder que la del enemigo.
        //  La tercera carta (e intermedia) puede ser mayor o menor, en función de la respuesta
        "power":2,
        //  Imagen asociada a la carta
        "image":"assets/images/mail.png",
        //  Introduzca la respuesta que se asociará a la carta
        "powerinfo":"Como es muy raro, sospecho. Lo ejecutaré y me fijaré bien en lo que hace para pararlo si veo que comienza a ejecutar algo extraño.",
        //  Aquí deberá introducir una respuesta personalizada para la carta (o respuesta) que se mostrará una vez el alumno responda
        "feedback":"Tampoco es una buena opción. Aunque sepas que los archivos ejecutables son peligrosos, muchas veces ejecutan procesos sobre los que no tenemos control, nunca abras uno sin saber exactamente de qué se trata.",
      },
      {
        // Escriba el nombre de la respuesta de esta carta:
        "name":"Rechazo",
        //  Este será el poder de la carta. Si la respuesta que escribe es muy mala deberá tener menor poder que el de la carta enemiga.
        //  Si es la respuesta óptima, deberá tener más poder que la del enemigo.
        //  La tercera carta (e intermedia) puede ser mayor o menor, en función de la respuesta
        "power":4,
        //  Imagen asociada a la carta
        "image":"assets/images/mail.png",
        //  Introduzca la respuesta que se asociará a la carta
        "powerinfo":"No lo abro, pues es un ejecutable. Es irrelevante quién me lo haya mandado, puede ser un phising.",
        //  Aquí deberá introducir una respuesta personalizada para la carta (o respuesta) que se mostrará una vez el alumno responda
        "feedback":"Bien hecho. Nunca abras un ejecutable recibido por correo si no estás al 100% seguro de qué se trata.",
      },
      ],
    },
    {
      "roundid":2,
      "enemyName":"Hacker001",
      //El texto de debajo es el que se deberá cambiar para dar información cada ronda
      "roundText":"Esta es una práctica muy utilizada también. No suele ser un ataque específico a una persona, sino más bien una propagación en masa para que exista la posibilidad de que alguno caiga.",
      "enemyPic":"assets/images/Hacker.jpg",
      "enemyCard":{
        "number":1,
        //  Cambiar el nombre de la carta:
        "name":"Pregunta de datos",
        //  Selecciona el poder de la carta que contiene la pregunta. Cuanto más difícil, más poder debe tener:
        "power":3,
        //  Introduzca la url de la imagen de la carta
        "image":"assets/images/admin.jpg",
        //  Aquí es donde irá la pregunta
        "powerinfo":"Un administrador de una página web te pregunta la contraseña para poder acceder a tu cuenta y gestionar algunas cosas.",
      },
      "ownCards":[{
        // Escriba el nombre de la respuesta de esta carta:
        "name":"Negación",
        //  Este será el poder de la carta. Si la respuesta que escribe es muy mala deberá tener menor poder que el de la carta enemiga.
        //  Si es la respuesta óptima, deberá tener más poder que la del enemigo.
        //  La tercera carta (e intermedia) puede ser mayor o menor, en función de la respuesta
        "power":4,
        //  Imagen asociada a la carta
        "image":"assets/images/admin.jpg",
        //  Introduzca la respuesta que se asociará a la carta
        "powerinfo":"No se la doy bajo ningún concepto, un administrador no debería preguntarme nunca la contraseña.",
        //  Aquí deberá introducir una respuesta personalizada para la carta (o respuesta) que se mostrará una vez el alumno responda
        "feedback":"Buena decisión. Efectivamente, ningún administrador te debería preguntar nunca tu contraseña. Si lo hace, algo trama.",
      },
      {
       // Escriba el nombre de la respuesta de esta carta:
        "name":"Confesión",
        //  Este será el poder de la carta. Si la respuesta que escribe es muy mala deberá tener menor poder que el de la carta enemiga.
        //  Si es la respuesta óptima, deberá tener más poder que la del enemigo.
        //  La tercera carta (e intermedia) puede ser mayor o menor, en función de la respuesta
        "power":1,
        //  Imagen asociada a la carta
        "image":"assets/images/admin.jpg",
        //  Introduzca la respuesta que se asociará a la carta
        "powerinfo":"Puedo decírsela. Es un administrador (lo indica un icono al lado de su nick) y por tanto no va a hacer nada malo con ella.",
        //  Aquí deberá introducir una respuesta personalizada para la carta (o respuesta) que se mostrará una vez el alumno responda
        "feedback":"Nunca reveles tu contraseña, a nadie. Un administrador no debería pedirte la contraseña bajo ningún concepto.",
        
      },
      {
        // Escriba el nombre de la respuesta de esta carta:
        "name":"Borrado posterior",
        //  Este será el poder de la carta. Si la respuesta que escribe es muy mala deberá tener menor poder que el de la carta enemiga.
        //  Si es la respuesta óptima, deberá tener más poder que la del enemigo.
        //  La tercera carta (e intermedia) puede ser mayor o menor, en función de la respuesta
        "power":3,
        //  Imagen asociada a la carta
        "image":"assets/images/admin.jpg",
        //  Introduzca la respuesta que se asociará a la carta
        "powerinfo":"Se la digo, es un administrador y no hará nada malo. Como no me fío, una vez me diga que ha terminado la cambiaré por si acaso.",
        //  Aquí deberá introducir una respuesta personalizada para la carta (o respuesta) que se mostrará una vez el alumno responda
        "feedback":"¡Nunca hagas esto! Un administrador no te preguntará jamás por datos personales, por lo que está actuando mal.",
      },
      ],
    },
    {
      "roundid":3,
      "enemyPic":"assets/images/Hacker.jpg",
      "enemyName":"Hacker002",
      //  El texto de debajo es el que se deberá cambiar para dar información cada ronda
      "roundText":"Este concepto se conoce comúnmente como \"Baiting\". Es bastante peligroso puesto que es muy directo. Te sorprendería la cantidad de gente que no conocía ni su existencia.",
      "enemyCard":{
        "number":1,
        //  Cambiar el nombre de la carta:
        "name":"Baiting",
        //  Selecciona el poder de la carta que contiene la pregunta. Cuanto más difícil, más poder debe tener:
        "power":3,
        //  Introduzca la url de la imagen de la carta
        "image":"assets/images/baiting.jpg",
        //  Aquí es donde irá la pregunta
        "powerinfo":"Al bajarte del coche encuentras un pendrive en el suelo",
      },
      "ownCards":[{
        "number":1,
        // Escriba el nombre de la respuesta de esta carta:
        "name":"Ayuda",
        //  Este será el poder de la carta. Si la respuesta que escribe es muy mala deberá tener menor poder que el de la carta enemiga.
        //  Si es la respuesta óptima, deberá tener más poder que la del enemigo.
        //  La tercera carta (e intermedia) puede ser mayor o menor, en función de la respuesta
        "power":1,
        //  Imagen asociada a la carta
        "image":"assets/images/baiting.jpg",
        //  Introduzca la respuesta que se asociará a la carta
        "powerinfo":"Cojo el pendrive del suelo para ver qué hay dentro y averiguar de quién es para devolvérselo",
        //  Aquí deberá introducir una respuesta personalizada para la carta (o respuesta) que se mostrará una vez el alumno responda
        "feedback":"Mala decisión. Debes tirarlo o dárselo al encargado de ciberseguridad, él sabrá cómo operarlo. Puedes haber sido directamente atacado con dicho pendrive. Mejor dárselo a alguien especializado.",
      },
      {
       // Escriba el nombre de la respuesta de esta carta:
        "name":"Evasión",
        //  Este será el poder de la carta. Si la respuesta que escribe es muy mala deberá tener menor poder que el de la carta enemiga.
        //  Si es la respuesta óptima, deberá tener más poder que la del enemigo.
        //  La tercera carta (e intermedia) puede ser mayor o menor, en función de la respuesta
        "power":2,
        //  Imagen asociada a la carta
        "image":"assets/images/baiting.jpg",
        //  Introduzca la respuesta que se asociará a la carta
        "powerinfo":"Ignoro el pendrive puesto que sé que puede ser una técnica utilizada por un atacante.",
        //  Aquí deberá introducir una respuesta personalizada para la carta (o respuesta) que se mostrará una vez el alumno responda
        "feedback":"Error, si tu lo ignoras lo más probable es que en otro momento lo encuentre otro empleado y caiga en la trampa. Es mejor dárselo a alguien especializado en el tema.",
      },
      {
        // Escriba el nombre de la respuesta de esta carta:
        "name":"Traspaso",
        //  Este será el poder de la carta. Si la respuesta que escribe es muy mala deberá tener menor poder que el de la carta enemiga.
        //  Si es la respuesta óptima, deberá tener más poder que la del enemigo.
        //  La tercera carta (e intermedia) puede ser mayor o menor, en función de la respuesta
        "power":4,
        //  Imagen asociada a la carta
        "image":"assets/images/baiting.jpg",
        //  Introduzca la respuesta que se asociará a la carta
        "powerinfo":"En cuanto veo el pendrive lo recojo para dárselo a alguien especializado en el tema, él lo gestionará mejor que yo.",
        //  Aquí deberá introducir una respuesta personalizada para la carta (o respuesta) que se mostrará una vez el alumno responda
        "feedback":"Efectivamente, es la decisión más acertada. Un especialista sabrá cómo operar con el dispositivo sin problemas o incluso inhabilitarlo.",
      },
      ],
    },
  ],
};
export default gameSettings;