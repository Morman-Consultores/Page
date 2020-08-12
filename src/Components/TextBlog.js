import React from "react";
import Intro from "./Intro";
import {Link} from "react-router-dom";

const TextBlog = (props) => {
    return (
        <div>
            <Intro index={props.index}/>
            <div className={"termCard"}>
                <Link style={{color: "#383838", textDecoration: "underline"}} to={"blog"}>REGRESAR</Link>
                <p>Juan Mora, Noviembre 21, 2018</p>
                <h2>Alianzas ¿Clave del éxito?</h2>
                <p>En el mundo empresarial, así como en la vida personal en algunas ocasiones debemos entender
                    la gran necesidad de conocernos a nosotros mismos, es decir, en diferentes circunstancias
                    nos empeñamos en apostarle a nuestra propia forma de hacer las cosas, nos enamoramos más de
                    lo debido de algún proyecto y terminamos cayendo en ese doloroso pensamiento que nos dice que
                    no tenemos errores, de alguna forma nos convencemos que somos perfectos y sabemos de forma clara
                    y precisa como hacer las cosas. Pero ¿se aplica esto en la vida real? ¿Qué pasa al momento de
                    emprender o construir tu propio proyecto?</p>
                <p>Por si fuera poco, las personas caemos en el mismo error mil y una veces antes de entender que lo
                    que hacemos no es siempre la mejor forma de hacerlo, la mejor manera de entender la realidad como
                    es y no como la imaginamos es tener una idea clara de quienes somos y a donde vamos, estas preguntas
                    deben ser perfectamente respondidas antes de plantearnos los objetivos. He aquí un ejemplo, imaginemos
                    dos proyectos diferentes "A" y "B"</p>
                <ul>
                    <li>•	El proyecto A se dedica a la construcción de un vehículo de competencia y cuentan con
                        un excelente desarrollo ingenieril, pero por algún motivo sus finanzas son escasas y sus
                        resultados han sido completamente lineales ya durante mucho tiempo, no tenemos una visión
                        clara de crecimiento y a pesar de que ingenierilmente se cuenta con una amplia experiencia
                        y capacidad, ya se ha explotado lo que se tiene que explotar con los mismos recursos intentando
                        mil posibilidades con lo poco que se tiene, por lo tanto la solución más viable es buscar un
                        incremento de recursos para ahora iniciar una búsqueda de combinaciones diferentes en un nivel
                        financiero más grande al que están acostumbrados.</li>
                    <li>•	El proyecto B de igual forma se dedica a la construcción de un vehículo de competencia,
                        con la diferencia de que al ser un proyecto nuevo no cuentan con tanta experiencia ingenieril
                        ni un gran desarrollo en competencias de este ramo, sin embargo la forma de obtención y
                        desarrollo de recursos de alguna forma ha resultado exitosa y evolutiva a la par de que su
                        imagen sigue un constante crecimiento, en este caso encontraríamos que su principal conflicto
                        puede ser que su capacidad ingenieril deberá crecer directamente proporcional al crecimiento de
                        su marca y de su demanda. Estamos entonces hablando de una capacidad de inversión interesante,
                        pero sin tener una ambición ingenieril muy fuerte.</li>
                    <p>En el caso de los proyectos "A" y "B" el crear una alianza estratégica puede resultar beneficiosa
                        para ambos proyectos, sin embargo esta posibilidad puede verse alejada debido a falta de
                        entendimiento por parte de alguno de los proyectos, es decir, si uno de los proyectos no cuenta
                        con una cultura empresarial lo suficientemente madura como para entender que en algunas ocasiones
                        la única forma de crecer es aprender de alguien más las cosas que te fallan, así como la contra
                        parte puede aprender de ti, es aquí donde se generaría esta barrera que impedirá el crecimiento
                        de ambos proyectos.</p>
                    <p>Hoy por hoy debemos partir de una línea sincera y sencilla, que se torne con ambición de crecimiento
                        pero a la vez de aprendizaje, las personas que dirigen los proyectos o las empresas no pueden esperar
                        un crecimiento si continúan buscando un producto que ya fue explotado a su máxima expresión, debemos
                        mantenernos en búsqueda de ideas frescas y extrovertidas, aunque en algunas ocasiones puedan estar
                        fuera de nuestra zona de comodidad, debemos tener la madurez de aceptar una postura diferente que nos
                        llevará a una situación de éxito previamente analizado por nosotros, y esto es muy sencillo de lograr.</p>
                    <p><i><b>¿Cómo es esta situación?</b></i> Sé que me llevará al éxito porque al analizarme ya entendí lo que hago
                        mal y ya se quien lo hace bien, entonces se deben proponer alianzas o adquisiciones que otorguen
                        un valor añadido a mi empresa o proyecto.</p>
                    <p>Todo esto con confianza y seguridad, ya que no podemos permitirnos suponer que el aceptar nuevas ideas
                        y nuevas jerarquías nos quitará el poder ni nos desviará del objetivo que queremos alcanzar, entonces
                        he aquí otro conflicto, ¿es esta una prueba para saber si mi objetivo está bien planteado? Si tu objetivo
                        final es que tu proyecto reluzca y se posicione como uno de los mejores, tomarás la opción de una alianza,
                        por otra parte si tu objetivo es fomentar tu ego y tu grandeza quedarás siempre estancado en este camino
                        lineal sin obtener el crecimiento deseado.</p>
                    <img alt={"Blog Picture"} src={require("../Assets/aliance.png")}/>
                </ul>
            </div>
        </div>
    )
}

export default TextBlog;