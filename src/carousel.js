import {useState} from 'react'

export const ShowImages = ({details}) => {

  const [show, setShow] = useState(null)
  const showIm = (i) => {
    if(show === null){
      setShow(i) 
      const body = document.querySelector('body')
      body.style.backgroundImage = `url("${i}")`
    }
    setShow(null)
  }
  


  return(
    <>
      {details.map(value => (
        <div 
          onClick={() => {showIm(value)}}
          className="imgContainers"
          style={{
            backgroundImage : `url(${value})`}
          }
        >
        </div>
      ))}
    </>
  )
}
