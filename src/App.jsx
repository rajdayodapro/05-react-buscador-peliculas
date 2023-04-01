// Nos quedamos en 01:33:00

import { useState } from 'react';
import './App.css'
/**
 * useRef = referencia mutable que persiste en todo el ciclo de vida 
 * del componente, diferente a UseState este no renderiza 
 * en cada cambio. Crear un valor que persista en cada renderizado
 * Podemos referenciar un elemento del DOM 
 * usar esto para valores que quieres que persistan enntre renders y no se reinicien
 */
import { Movies } from "./components/Movies";
import { useMovies } from './hooks/useMovies';


function App() {
  const {mappedMovies} = useMovies()
  const [query, setQuery] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    const fields =Object.fromEntries(new window.FormData(event.target)) 
  }

  const handleChange = (event) => {
    setQuery(event.target.value)
  }

  // usando useRef Hook
  // const handleSubmit = (event) => {
  //   event.preventDefault()
  //   // Lo que hacemos aqui es que con el useRef, hago una referencia al input para que 
  //   // mediante current.value (siempre usar current) pueda obtener el valor de ese input
  //   // Entonces ref={inputRef} creara algo como un document.getElement.
  //   const inputEl = inputRef.current.value
  //   alert(inputEl)
  // }

  return (
    <div className='page'>

    <header>
      <h1>Buscador de Peliculas</h1>

      {/* Para formularios en vez de usar el evento clic para enviar, podemos usar el submit */}
      <form className='' onSubmit={handleSubmit}> 
        <input onChange={handleChange} value={query} name='query' type="text" placeholder='Avengers, Star Wars, The matrix' />
        <button type='submit'>Buscar</button>
      </form>
    </header>

    <main>
      {
       <Movies movies={mappedMovies} />
      }
    </main>

    </div>
  )
}

export default App


// /**
//  * como traerse datos del formulario.
//  * 🟨 Opcion 1: ( con hook de React)
//  * Puedes usar el Hook UseRef, para refrenciar el input 
//  * 
//  * <input ref={inputRef} type="text" placeholder='Avengers, Star Wars, The matrix' />
//  * 
//  * y despues crear una funcion handleSubmit (nombre opcional puedes poner el que quieras)
//  * donde reaccionemos al evento submit. 
//  * 
//  * 🟨 opcion 2: (sin hook de React)
//  * Puedes colocar un nombre que idetifique a tu input 
//  * 
//  * <input name='query' type="text" placeholder='Avengers, Star Wars, The matrix' />
//  * 
//  * y luego usar esta estrutura en el handleSubmit 
//  * 
//  *  const handleSubmit = (event) => {
//     event.preventDefault()
//     const query = new window.FormData(event.target).get('query')
//     alert(query)
//   }
//  * Donde:
//  * window.FormData va a obtener la data del evento que con get le hayamos definido, en este caso
//  * dentro de get estara el nombre del input 
//  * 
//  * 🟦 Cuando hay mas de un input
//  * 
//  * Podemos manejar un objeto en donde se coloquen todos los inputs 
//  *  
//  * const handleSubmit = (event) => {
//     event.preventDefault()
//     const fields =Object.fromEntries(new window.FormData(event.target)) 
//   }
//  * Si tebemos un segundo input 

//  * <input name='query' type="text" placeholder='Avengers, Star Wars, The matrix' />
//  * <input name='query2' type="text" placeholder='Avengers, Star Wars, The matrix' />
//  *
//  * fields seria un objeto con la informacion 

//   🟧 Cuando queremos ver si el input se ha usado, por ejemplo si se hace una validacion
//   En el codigo podemos tener una validacion que aparezca un error cuando no se ha puesto nada
//   pero no queremos que cuando se cargue la primera vez esto se muestre, solo si el input es usado
//   Ahi se puede usar un useRef, usando el modo controlado de react mediante useState
//   Para saber si es la primera vez en algo 

//   const isFirstInput = useRef(true)

//   y luego 

//   if (isFirstInput.current) {
//     isFirstInput.current = search === ''
//     return
//   }

//   Esto evaluara el componente para saber si es la primera vez que lo usa y evitar que cosas
//   se muestre antes de que se renderice
//  */