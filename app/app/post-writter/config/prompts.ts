import * as PrismaModels from '@prisma/client';

export const writterPrompt = `You are a proffesional copywritter.
You specialized in writting Linkedin post that engage the audience and build the personal brand of the author.

Given an example and some info the author wants to share, you craft a post following the format and length of the example provided`;

export const POST_TEMPLATES: Omit<
    PrismaModels.PostTemplate,
    'createdAt' | 'updatedAt'
>[] = [
    {
        id: '0',

        name: 'La Gran Revelación',
        tags: ['professional', 'informative', 'contrarian'],

        content: `
        {emoji} Este cambio de mentalidad lo cambió todo para mí como {x}.

        Cuando comencé mi {x}, me centré en:

        - {primera cosa que no debía ser foco}

        - {segunda cosa que no debía ser foco}

        - {tercera cosa que no debía ser foco}

        - {others if they are common mistakes}

        
        Hice esto durante 5-6 meses cuando empecé, y acabé agotado. Era mentalmente agotador.
        
        No porque trabajara duro.
        
        Era porque estaba haciendo tantas cosas y todas eran muy diferentes.
        
        La mejor manera es concentrarse en una cosa cada vez y dar lo mejor de uno mismo.
`,
    },
    {
        id: '2',
        name: 'Lo que Me Impresiona',
        tags: ['professional', 'informative', 'contrarian'],
        content: `
        He conocido y trabajado con muchos {{XXX}} en los últimos {{XXX}} años. Lo ÚNICO que me impresiona cuando conozco a un {{XXX}} es cómo {{XXX}}
    
        No me impresiona {{XXX}}\n
        No me impresiona {{XXX}}\n
        No me impresiona {{XXX}}\n
        No me impresiona {{XXX}}\n
        No me impresiona {{XXX}}\n
    
        Lo que me impresiona es cuando veo a un {{XXX}} que {{XXX}}. ¿Estás de acuerdo?\n
        
        {{Escribe por qué te impresiona eso}}
        
        {{Escribe una conclusión de una frase}}
    
        {{CTA}}
    
\n
`,
    },
    {
        id: '3',
        name: 'La Mayoría Fracasa',
        tags: ['aprendizajes', 'informative', 'contrarian'],
        content: `
        La mayoría de la gente fracasa en {tema}{emoji}.

Pero si evitas estos 5 errores comunes, te garantizo que no lo harás.

{A continuación, presenta errores comunes en ese campo}
{Presenta el error 1, en 3 palabras} {emoji}.
→ {Explica en qué consiste en 10 palabras}.

Haz esto en su lugar
↳ {Explica lo que deberían hacer en su lugar en 1 o varios: punto 1}.
↳ {Explica lo que deberían hacer en su lugar en 1 o varios punto 2}.
__

{Presenta el error, en 3 palabras seguido de un espacio y un emoji}.
→ {Explica en qué consiste en 10 palabras}.


Haz esto en su lugar
↳ {igual que el primero}.
__

{Presenta el error, en 3 palabras seguido de un espacio y un emoji}.
→ {Explica en qué consiste en 10 palabras}.

Haz esto en su lugar
↳ {igual que el primero}.
__

{Presenta el error, en 3 palabras seguido de un espacio y un emoji}.
→ {Explica en qué consiste en 10 palabras}.

Haz esto en su lugar
↳ {igual que el primero}.
__

{Presenta el error, en 3 palabras seguido de un espacio y un emoji}.
→ {Explica en qué consiste en 10 palabras}.

Haz esto en su lugar
↳ {igual que el primero}.

{Incluye un mensaje final}

{Llamada a la acción}

\n

`,
    },
    {
        id: '4',
        name: '¿Quién Lo Dice?',
        tags: ['lecciones', 'tips', 'ideas'],
        content: `
        ¿Quién dice que {{XXX}} no puede {{XXX}}...?!
        
        Pregúntame lo que quieras sobre {{el tema}} y te intentaré contestar en comentarios.

        Aquí va una estrategia que funciona bien para {XXX}. Se llama {crea un nombre que siga las mejores estrategias de marketing}. Funciona porque {XXX} y {XXX}.

        Aquí van algunos principios de cómo puedes aplicarla:
        
        - Tip 1 
        {{xxx}}
        
        - Tip 2 
        {{xxx}}
        
        - Tip 3 
        {{xxx}}
        
        - Tip 4 
        {{xxx}}
        
        - Tip 5
        {{xxx}}
        
        #hashtags
        P.S. If you want to swipe some of my best {{XXX}} strategies, then comment "yes, please" below.
        
        \n
        
        `,
    },
    {
        id: '6',
        name: 'Soy un Contrarian',
        tags: ['lecciones', 'tips', 'ideas', 'historias'],
        content: `
        [Hook: Frase que desafía explícitamente una creencia ampliamente aceptada o una opinión popular en ese sector. Por ejemplo "No tener un negocio online es lo mejor que puedes hacer"]

        La mayoría de la gente piensa que {creencia ampliamente aceptada}, pero la verdad es que {tu perspectiva contraria}.

        Esto es lo que la mayoría están pasando por alto:

[Punto 1: Breve explicación]
[Punto 2: Breve explicación]
[Punto 3: Breve explicación]

Es hora de que adoptemos una nueva forma de pensar sobre {tema y por qué esta nueva forma de pensar}

¿Cuál es tu experiencia con [tema]? ¿Estás de acuerdo o en desacuerdo?>

{CTA}

{HASHTAGS}
        `,
    },
    {
        id: '7',
        name: '10 Ideas con Bait',
        tags: ['lecciones', 'tips', 'ideas', 'historias'],
        content: `
            10 ideas para {tema} que te harán {algo positivo}:

            1. {idea 1} {emoji} 


            2. {idea 2} {emoji}


            3. {idea 3} {emoji}


            4. {idea 4} {emoji}


            5. {idea 5} {emoji}


            6. {idea 6} {emoji}


            7. {idea 7} {emoji}


            8. {idea 8} {emoji}


            9. ...??? {WRITE LITERALLY THE "...???" It's part of the template}

            
            10. ????? 😑 {same as previous}

            Ayuda! Se me han acado las ideas para {tema}! ¿Qué otras ideas se te ocurren?

            ¿Qué deberían ser las ideas 9 y 10?

            O dinos cual es la idea de las 10 que {algo positivo haciendo referencia al tema}.

            {CTA}
        `,
    },
    {
        id: '8',
        name: 'Ya Trabajo Yo',
        tags: ['lecciones', 'tips', 'ideas', 'historias'],
        content: `Me he tirado más de {número} horas estudiando {tema}, para que tú no tengas que hacerlo.

        Te cuento lo que he aprendido y que hará que {cambio que el lector quiere}.

        1. {idea 1 - something that is actually counter intuitive but proven by data} {emoji}
        {Explica la idea 1} {Explica como puede ser aplicada}
        
        2. {idea 2 - Something different to the previous} {emoji}
        {Explica la idea 2} {Explica como puede ser aplicada}
        
        2. {idea 3 - Something different to the previous} {emoji}
        {Explica la idea 3} {Explica como puede ser aplicada}

        No sé a ti, pero a mi me han sorprendido mucho estos datos. Sabía que {una idea} pero no me imaginaba que {otra idea}.

        {CTA}

        {HASHTAGS}
        `,
    },
    {
        id: '9',
        name: 'Espero Fallar Más',
        tags: ['lecciones', 'tips', 'ideas', 'historias'],
        content: `
        {Fallé en x / No conseguí y / ... frase contando tu fracaso}

        {otros ejemplos de fracaso}

        {Otro ejemplo de fracaso}

        {Otro ejemplo de fracaso}

        {Otro ejemplo de fracaso}

        Todos esos fracasos no se olvidan, los recuerdo cada día.

        Así es como aprendí.

        Y así es como he conseguido {algo que ha conseguido}

        Y {algo más que has conseguido}.
        
        Y cuidar de mi familia, mis hijos.

        Espero que ellos también fracasen.


        {HASHTAGS}
        `,
    },
    {
        id: '10',
        name: 'Cómo Saber Si Eres',
        tags: ['lecciones', 'tips', 'ideas', 'historias'],
        content: `How do you know if you are a {{XXX}}? You do any of the following things:
1.{{XXX}} 

2.{{XXX}} 

3.{{XXX}} 

4.{{XXX}} 

5.{{XXX}} 

6.{{XXX}} 

7.{{XXX}}


What are some other signs that would tell you are a {{XXX}}? Leave it in the comments.

{HASHTAGS}`,
    },
    {
        id: '11',
        name: 'Lo Que Importa',
        tags: ['lecciones', 'tips', 'ideas', 'historias'],
        content: `{x} is not just about {x} and {x}.

        It's about:
        - {soft skill 1}
        - {soft skill 2}
        - {soft skill 3}
        - {soft skill 4}
         
        When I started {x}, it was about sharing what I was learning.
         
        It's also about transforming myself into a more disciplined person and following good habits.
        
        {customer testomonial}
         
        For me, this is what {x} is.
         
        Not {vanity metric 1}
        Not {vanity metric 2}
        Not {vanity metric 3}

{HASHTAGS}`,
    },
    {
        id: '12',
        name: `That's a Wrap!`,
        tags: ['lecciones', 'tips', 'ideas', 'historias'],
        content: `Exactly {time} ago, I started {X}. So, here's my {x} wrapped: 


        > {highlight 1}
        > {highlight 2}
        > {highlight 3}
        > {highlight 4}
        > {highlight 5}
        > {highlight 6}
        > {highlight 7}
        
        I am sure I am missing out on a few things, but these were the key highlights. 
        
        {x} will always be special. 
        
        Can't wait to see what {X} has in store. 

{HASHTAGS}`,
    },
    {
        id: '14',
        name: 'Controla el Futuro',
        tags: ['lecciones', 'tips', 'ideas', 'historias'],
        content: `¿¿Quieres predecir el futuro??
        
        Piensa menos en:
        {lagging metric 1}
        {lagging metric 2}
        {lagging metric 3}
        {lagging metric 4}
        
        Y piensa más en:
        {leading metric 1}
        {leading metric 2}
        {leading metric 3}
        {leading metric 4}
        
        {engaging zinger}
        
        {CTA}

{HASHTAGS}
        `,
    },
    {
        id: '15',
        name: 'Tu Superpoder',
        tags: ['lecciones', 'tips', 'ideas', 'historias'],
        content: `Everyone has a unique ability.
        
        The more time you spend working on your superpowers the happier you'll be.

        My super powers have always been:
          
        1. 
        
        2. 
        
        3.


        My weakness (kryptonite) have always been:
        
        1. 
        
        2. 
        
        3.


        The trick is to find people who's super powers are your kryptonite and then work together, so you can become a super machine.


        If you work on your weaknesses, all you end up with a bunch of medicor weaknesses. If you agree with this concept, write “agree!” in the comments.


        And if you are brave enough, list your top 3 super powers and top 3 weaknesses. Trust me it feels good to say it out loud.
        
        {CTA}

        {HASHTAGS}
        `,
    },
    {
        id: '16',
        name: 'El Lenguaje del Éxito',
        tags: ['lecciones', 'tips', 'ideas', 'historias'],
        content: `The language of successful {{XXX}}:


        1. {{XXX}} 
        
        2. {{XXX}} 
        
        3. {{XXX}} 
        
        4. {{XXX}} 
        
        5. {{XXX}} 
        
        6. {{XXX}} 
        
        7. {{XXX}}

        
        What should number {{XXX}} be...?
        Which number do you think is the most important...? #hashtags
        `,
    },
    {
        id: '17',
        name: 'Bad vs Good',
        tags: ['lecciones', 'tips', 'ideas', 'historias'],
        content: `Un buen {profesión} no {hace esto}, {hace esto otro}.

        {Lista de ejemplos concretos}

        1. Un buen {profesión} no {hace esto}, {hace esto otro}.
        
        2. Un buen {profesión} no {hace esto}, {hace esto otro}.
        
        3. Un buen {profesión} no {hace esto}, {hace esto otro}.
        
        4. Un buen {profesión} no {hace esto}, {hace esto otro}.
        
        5. Un buen {profesión} no {hace esto}, {hace esto otro}.
        
        6. Un buen {profesión} no {hace esto}, {hace esto otro}.
        
        7. ...¿Qué se me olvida? {emoji} ¿Qué más hace un buen {profesión} que a veces confundimos con {hace esto}?

        {CTA}

        {HASHTAGS}

        `,
    },
    {
        id: '18',
        name: 'Hay Maneras',
        tags: ['lecciones', 'tips', 'ideas', 'historias'],
        content: `
        Megalistado de 20 manera de {x}

        {IMPORTANTE: Escribe 20 maneras de hacer x en el siguiente formato:}
        {tip 1} {emoji}
        -> {describe tip 1 en 10 palabras}
        {Escribe un listado de la 1 a la 20, ambas incluidas!!}


        {CTA}

        {HASHTAGS}

        `,
    },
    {
        id: '19',
        name: 'Old vs New',
        tags: ['lecciones', 'tips', 'ideas', 'historias'],
        content: `Como {hacer algo}

        Como se hacía antes:
        {manera 1}
        {manera 2}
        {manera 3}
        {manera 4}
        {manera 5}

        Como se hace ahora:
        {manera 1}
        {manera 2}
        {manera 3}
        {manera 4}
        {manera 5}

        En este caso...¡Lo nuevo >>> Lo viejo!

        {CTA}

        {HASHTAGS}

        `,
    },
    {
        id: '20',
        name: 'La Pregunta (In)Correcta',
        tags: ['lecciones', 'tips', 'ideas', 'historias'],
        content: `
        
        La pregunta incorrecta: {pregunta incorrecta}.

        La pregunta correcta: {pregunta correcta}.

        La pregunta incorrecta: {pregunta incorrecta}.

        La pregunta correcta: {pregunta correcta}.

        La pregunta incorrecta: {pregunta incorrecta}.

        La pregunta correcta: {pregunta correcta}.

        Antes de {x es importante y - en forma de metáfora}.

        {CTA}

        {HASHTAGS}

        `,
    },
    {
        id: '21',
        name: '¿Quién Debería Hacerlo?',
        tags: ['lecciones', 'tips', 'ideas', 'historias'],
        content: `¿Quién debería ser {puesto relevante}?
        
        Quién este dispuesto aria:

        - {Tarea complicada 1}

        - {Tarea complicada 2}

        - {Tarea complicada 3}

        - {Tarea complicada 4}

        - {Tarea complicada 5}

        Solo si estás dispuesto a todo esto, deberías plantearte {puesto relevante}.

        De {puesto relevante} depende {algo importante}. No es para todos.

        {CTA incitando a la reflexión}

        {HASHTAGS}

        `,
    },
    {
        id: '22',
        name: '¿Cuál Te Cargas?',
        tags: ['lecciones', 'tips', 'ideas', 'historias'],
        content: `Pongamos que puedes borrar {algo} de la existencia. ¿Qué sería?
       
        - {Algo que borrarías en 1 palabra. Haz forma de pirámide con las opciones}

        - {Algo que borrarías en 1 palabra más larga que la anterior}

        - {Algo que borrarías en 1 palabra más larga que la anterior}

        - {Algo que borrarías en 1 palabra más larga que la anterior}

        - {Algo que borrarías en 1 palabra más larga que la anterior}

        - {Algo que borrarías en 1 palabra más larga que la anterior}

        - {Algo que borrarías en 1 palabra más larga que la anterior}

        - ...¿Me estoy dejando opciones obvias? {emoji}

        ¿Cuál se llevaría el hachazo?

        {CTA}

        {HASHTAGS}

        `,
    },
    {
        id: '23',
        name: 'Pese a Todo!',
        tags: ['lecciones', 'tips', 'ideas', 'historias'],
        content: `
        <Recuerda que puedes...>

        - {cosa horrible que te puede pasar en ese tema}

        - {cosa horrible que te puede pasar}

        - {cosa horrible que te puede pasar}

        - {cosa horrible que te puede pasar}

        - {cosa horrible que te puede pasar}

        Y, pese a todo, {conseguir un gran éxito, desarrollando la descripción de ese éxito}

        {CTA}

        {HASHTAGS}

        `,
    },
    {
        id: '24',
        name: 'Esto Quieren Decirte',
        tags: ['lecciones', 'tips', 'ideas', 'historias'],
        content: `
        {Situación: se dirije a una persona con un puesto relevante y que la gente no se atreve a ser totalmente sincera a la cara. Este post "destapa" esas obviedades de forma amable}
        ¿Eres {puesto relevante}?

        ¿Sabes lo que tus {empleados, clientes, proveedores, etc} quieren decirte y no se atreven?

        Estás son las tres cosas que les gustaría decirte (pero quizá no se atreven):

        1. {cosa que quieren decirte 1, que es una "elefante en la sala"}

        2. {cosa que quieren decirte 2, que es una "elefante en la sala"}

        3. {cosa que quieren decirte 3, que es una "elefante en la sala"}

        4...¿Me estoy dejando algo más obvio? {emoji}

        {CTA}

        {HASHTAGS}

        `,
    },

    {
        id: '25',
        name: 'Me Before vs After',
        tags: ['lecciones', 'tips', 'ideas', 'historias'],
        content: `
        {El autor escribe sobre si mismo, antes y despues de un cambio importante en su vida}
        {Nombre del autor} antes:

        - {algo que hacía antes y no era lo mejor}

        - {algo que hacía antes y no era lo mejor}

        - {algo que hacía antes y no era lo mejor}

        {Nombre del autor} ahora:

        - {algo que hace ahora y es lo mejor}

        - {algo que hace ahora y es lo mejor}

        - {algo que hace ahora y es lo mejor}

        Cómo hayas sido no tiene por qué marcar como vas a ser.

        {CTA}

        {HASHTAGS}

        `,
    },
    {
        id: '26',
        name: 'Me Before vs After',
        tags: ['lecciones', 'tips', 'ideas', 'historias'],
        content: `
        {El autor escribe sobre un tema en el que ha mejorado, escribiendo como fueron los primeros 10 que hizo vs lo últimos 10 que ha hecho}
        Mis primeros 10 {cosas que hizo el autor}:

        - {Métrica}
        - {Métrica}
        - {Métrica}
        - {Resultado}

        Mis últimos 10 {cosas que ha hecho el autor}:

        - {Métrica}
        - {Métrica}
        - {Métrica}
        - {Resultado}

        {Conclusión, insight}

        {CTA}

        {HASHTAGS}

        `,
    },
    {
        id: '27',
        name: '¿Nuev@ Aquí?',
        tags: ['lecciones', 'tips', 'ideas', 'historias'],
        content: `
        {El autor intenta dar 5 consejos para aquellos que empiezan a adentrarse en el tema en el que él/ella es experto}

        ¿Estás empezando a {lo que el autor es experto? Aquí van algunos consejos que me hubiese gustado que me diesen a mí al empezar (te ahorrarán MUCHO tiempo y dolores de cabeza):

        - No dejes que te intimide {algo que intimida a los novatos}
        - Presta atención a {algo que no se suele prestar atención}
        - No te preocupes sobre {algo que preocupa a los novatos}
        - {algo que parece importante} no es tan importante como parece


        Y recuerda...pásalo bien! Recuerda que estás aquí para disfrutar y aprender!

        {CTA}

        {HASHTAGS}

        `,
    },
    {
        id: '28',
        name: 'No es Tan Distinto!',
        tags: ['lecciones', 'tips', 'ideas', 'historias'],
        content: `
        {El autor crea un post en el que hace un paralelismo entre lo que se dedica y un deporte u otra actividad. La metáfora encaja perfectamente y ayuda a comprender mejor el tema}

        En {deporte o actividad} es importante que te {algo importante}.

        {Explicación de por qué es importante}

        Es lo mismo en {tema del autor}. Si no te {algo importante}, no vas a llegar a {algo importante}.

        {Sigue desarrollando paralelismos con la metáfora, al menos dos más}

        {CTA}

        {HASHTAGS}

        `,
    },
    {
        id: '29',
        name: '¡Hart@s!',
        tags: ['lecciones', 'tips', 'ideas', 'historias'],
        content: `
        {El autor dice estar harto de algo que ve constamente hacer, admirar, compartir...y propone admirar otro tipo de cosas que realmente le parece más importantes aunque menos llamativas}

        Estoy harto de {algo que harta al autor}.

        Enséñame {algo que el autor considera más importante}.

        Enséñame {algo que el autor considera más importante}.

        Enséñame {algo que el autor considera más importante}.

        Pero deja de contarme como {algo que harta al autor}.

        ¿Soy solo yo o alguien más está harto de {algo que harta al autor}? ¿Qué te gustaría ver en su lugar?

        {HASHTAGS}

        `,
    },
    {
        id: '30',
        name: 'Miran para Otro Lado',
        tags: ['lecciones', 'tips', 'ideas', 'historias'],
        content: `
        {El autor quiere destacar por qué algo que no se suele destacar es importante, y para ello cita a personas famosas y cómo ese algo les cambió la vida}

        Hay pocas cosas más importantes que {algo que el autor considera más importante}.

        Y sin embargo, apenas se habla de ello.

        {Cita REAL de una persona famosa que lo considera importante} dijo que {algo que dijo sobre el tema}.

        {Cita o dato REAL de otra persona famosa que lo considera importante} consiguio {algo que consiguió} gracias a {algo que el autor considera más importante}.

        {Cita o dato REAL de otra persona famosa que lo considera importante} se apoyo en {algo que el autor considera más importante} para {algo que consiguió}.

       Y sin embargo en el mundo del {tema del autor}, parece que solo importa {algo que el autor considera menos importante y que todo el mundo habla}.

       {CTA}

        {HASHTAGS}

        `,
    },
];

export const generalInstructions = `
- Keep the structure (not the content) of the example. If there is a list, a conversation, a question, etc, include those formats in your post.
- You can add or remove information from the example to make the post more engaging.
- Properly format the post: include the line breaks, the emojis, bold, italic, slashes, arrows, etc.
- Follow best copywritting practices for linkedin posts and properly format your post.
- what is between {} is a placeholder for you to fill
`;
