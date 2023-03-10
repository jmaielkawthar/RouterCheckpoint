import React from 'react'


const Rating = ({rating, handleRating}) => {
    const stars=(rating)=>{
        var tab=[]
        for(let i=1;i<=5;i++){
          if(i<=rating){
            tab.push(<span onClick={()=>handleRating(i)}  style={{color:"gold",fontSize:'30px' ,cursor:"pointer"}}>★</span>)
          }else{
            tab.push(<span onClick={()=>handleRating(i)}  style={{color:"gray",fontSize:'30px',cursor:"pointer"}}>★</span>)
          }
        }return tab
      }
  return (
    <div>
        {React.Children.toArray(stars(rating))}
    </div>
  )
  
}
Rating.defaultProps={
  handleRating:()=>{}
}
export default Rating