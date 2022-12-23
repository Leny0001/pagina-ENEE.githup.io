import './estilo.css';
export function Banner(){
  return <>
      <img class="img" src="https://d2jhl5pzkfi24b.cloudfront.net/article_image/0001/04/430cd7b1620507a295844f62eca830ec3916f152.jpeg" alt=''></img>
        <section class="centrado">
                <h3 className='animate__animated animate__backInLeft'>Titulo</h3>
                <hr />
            <p>Parrafo de prueba dentro de la imagen estatica de la parte superior de la página.</p> 
            <button class="boton">
                <span><span></span></span>Boton
            </button>
        </section>
     <section class="Tarjetas">
        <article id="primera1">
            <h2>GTIC</h2>
            <p>Departamento de tecnoligía ENEE</p>
            <a href='http://localhost:5068/' target="_blank">Acceder</a>
        </article>

        <article id="segunda2">
            <h2>Titulo</h2>
            <p>Párrafo de prueba de cada items.</p>
        </article>

        <article id="tercero3">
            <h2>Titulo</h2>
            <p>Párrafo de prueba de cada items.</p>
        </article>

        <article id="cuarto4">
            <h2>Titulo</h2>
            <p>Párrafo de prueba de cada items.</p>
        </article>
    </section>
 </>
}
