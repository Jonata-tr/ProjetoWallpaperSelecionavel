import './App.css'
import {useState} from 'react'




function Main(){
  
  const [click, setClick] = useState(null)
  
  const toggle = (valor) => {
    if(click === valor){
      return setClick(null)
    }
  
    setClick(valor)
  }
  
  return(
    <div className='bg'>
      <button onClick={() => {toggle(10)}}>Clica em mim</button>
      <div className={click != null? 'lista show' : 'lista' }>
        <ul >
        {lista.map((item, valor) => (
          <li className='lista2'>
            {item.categoria}
            <div className='options-li'>
              <ShowTeste details={item.details}  i={valor} />
            </div>
          </li>
        ))}
        </ul>
      </div>
    </div>
  )
}

function ShowTeste({details}) {

  
  const [bg, setBg] = useState(null)

  const background = (url) => {
    const body = document.querySelector("body")
    body.style.backgroundImage = `url(${url})`
    
  }

  return(
    <>
      {details.map((imag, i) => (
        <div className='bgOptions'>
          <img
            key={i}
            src={imag.wallpaper1}
            alt=''
            onClick={() => {background(imag.wallpaper1)}}
            />
          <img
            key={i}
            src={imag.wallpaper2}
            alt=''
            onClick={() => {background(imag.wallpaper2)}}
            />
          <img
            key={i}
            src={imag.wallpaper3}
            alt=''
            onClick={() => {background(imag.wallpaper3)}}
            />
          <img
            key={i}
            src={imag.wallpaper4}
            alt=''
            onClick={() => {background(imag.wallpaper4)}}
          />
        </div>
      ))}
    </>
  )
}

const lista = [
  {
    categoria: 'Anime',
    details:[
      {
        wallpaper1: 'https://wallpaperaccess.com/full/3097725.jpg',
        wallpaper2: 'https://wallpaperaccess.com/full/3097725.jpg',
        wallpaper3: 'https://wallpaperaccess.com/full/3097725.jpg',
        wallpaper4: 'https://wallpaperaccess.com/full/3097725.jpg'
    }
    ]
  },
  {
    categoria: 'Carros',
    details:[
      {
        wallpaper1: 'https://wallpaperaccess.com/full/3097725.jpg',
        wallpaper2: 'https://wallpaperaccess.com/full/3097725.jpg',
        wallpaper3: 'https://wallpaperaccess.com/full/3097725.jpg',
        wallpaper4: 'https://wallpaperaccess.com/full/3097725.jpg'
      }
    ]
  },
  {
    categoria: 'Paisagem',
    details:[
      {
        wallpaper1: 'aaa',
        wallpaper2: 'asasdadasdss',
        wallpaper3: 'ddsdsdda',
      }
    ]
  },
  {
    categoria: 'Jogos',
    details:[
      {
        wallpaper1: 'aaa',
        wallpaper2: 'asasdadasdss',
        wallpaper3: 'ddsdsdda',
      }
    ]
  }
]

console.log(lista[2].details.wallpaper2)

export default Main;