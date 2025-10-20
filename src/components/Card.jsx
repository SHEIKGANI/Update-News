import React from 'react'

const Card = ({data}) => {
    console.log(data);
    const readMore = (url)=>{
        window.open(url);
    }
  return (
    <div className='cardContainer'>
        {data.map((curItem,index)=>{
            if(!curItem.urlToImage){
                return null
            }else{
                return(
                <div className='card' style={{margin:5, padding:5}}>
                    <img src={curItem.urlToImage}/>
                    <div className='Content'>
                        <a className='title' onClick={()=>window.open(curItem.url)}>{curItem.index}</a>
                        <p className=''>{curItem.description}</p>
                        <button onClick={()=>window.open(curItem.url)}>Read More</button>
                    </div>
                </div>
            )
            }
        })}
    </div>
  )
}

export default Card