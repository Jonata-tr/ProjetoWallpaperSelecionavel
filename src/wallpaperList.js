import React from "react"

const images = [
  {
    categoria:'Anime',
    details:[
      {
        id:1,
        src1: 'https://images4.alphacoders.com/640/640956.jpg',
        src2: 'https://wallpapercave.com/wp/wp5810767.jpg',
        src3: 'https://steamuserimages-a.akamaihd.net/ugc/940586530515504757/CDDE77CB810474E1C07B945E40AE4713141AFD76/?imw=5000&imh=5000&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false',
        src4: 'https://wallake.org/uploads/posts/2022-06/1656399841_1749-1.webp',
      }
    ]
  },
  {
    categoria:'Jogos',
    details:[
      {
        id:2,
        src1: 'https://tm.ibxk.com.br/2014/07/09/09135431419270.jpg?ims=768x480',
        src2: 'https://mobimg.b-cdn.net/v3/fetch/86/864ef939e9e13034fe2dcfb2125e59bc.jpeg',
        src3: 'https://images6.alphacoders.com/511/511799.jpg',
        src4: 'https://gamenewsbrazil.files.wordpress.com/2013/01/dmc_raising_hell-wallpaper-1600x900.jpg',
      }
    ]
  },
  {
    categoria:'Filmes',
    details:[
      {
        id:3,
        src1: 'https://images7.alphacoders.com/550/thumb-1920-550739.jpg',
        src2: 'https://img.elo7.com.br/product/original/36B4045/painel-festa-200x100cm-bee-movie-festalinda.jpg',
        src3: 'https://images7.alphacoders.com/116/thumb-1920-1165584.jpg',
        src4: 'https://i.pinimg.com/originals/d6/11/ec/d611ec500a3c282377031f6e87663186.jpg'
      }
    ]
  },
  {
    categoria:'Paisagem',
   details:[
      {
        id:4,
        src1: 'https://wallpaperaccess.com/full/109691.jpg',
        src2: 'https://www.senff.com.br/app/uploads/2018/05/paisagem-maravilhosa-wallpaper.jpg',
        src3: 'https://wallpaperaccess.com/full/2344342.jpg',
        src4: 'https://www.r2pg.com.br/wp-content/uploads/2016/07/1467865538505.jpg'
      }
    ]
  }
]

console.log(images)

function ListRender() {
  
  return(
    <div className="categorias show">
      {images.map(imgs => (
        <ShowList categoria={imgs.categoria} key={imgs.categoria}>
          <ListOptions details={imgs.details}/>
        </ShowList>
      ))}
    </div>
  )
}


const ShowList = ({categoria, children}) => {
  return(
    <div className="bg-size">
      
    </div>
  )
}

function  ListOptions({details}) {
  const body = document.querySelector('body')
  const dropDonw = document.querySelector(".categorias")
 
  return(
    <div className="aa">
      {details.map(selection => (
        <div className="img display">
          <img 
            key={selection.src1} 
            src={selection.src1} alt='' 
            onClick={()  => {
              body.style.backgroundImage = `url(${selection.src1})`
              dropDonw.classList.toggle('show')
            }}/>
          <img 
            key={selection.src2} 
            src={selection.src2}
            alt=''
            onClick={()  => {
              body.style.backgroundImage = `url(${selection.src2})`
              dropDonw.classList.toggle('show')
          }}/>
          <img
            key={selection.src3}
            src={selection.src3}
            alt=''
            onClick={()  => {
              body.style.backgroundImage = `url(${selection.src3})`
              dropDonw.classList.toggle('show')
          }}/>
          <img
            key={selection.src4}
            src={selection.src4}
            alt=''
            onClick={()  => {
              body.style.backgroundImage = `url(${selection.src4})`
              dropDonw.classList.toggle('show')
          }}/>
        </div>
      ))}
    </div>
    
  )
}

export default ListRender