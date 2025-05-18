import XIcon from '@mui/icons-material/X';
import FacebookIcon from '@mui/icons-material/Facebook';
import React from 'react';
import data from "./data.json"
export default function Main() {

const handleOnClickTwitter = ()=>{
    window.location.href="https://x.com/"
}  

const [index,setIndex] = React.useState(0);

const handleOnClickFaceBook = ()=>{
    window.location.href="https://facebook.com/"
}  
 const onNext = ()=>{
     if(index<data.length-1){
         setIndex(prev=>prev+1)  
     }
 }

 const onPrevious = ()=>{
     if(index>0){
         setIndex(prev=>prev-1)
     }
 }
const style=
{
    height:"100vh",
    backgroundImage: data[index].bg,    
    backgroundSize: "cover",
    display:'flex',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center'
}

  return (
    <div key={data[index].id} style={style}>
      <div className='relative bg-white h-[50%] rounded-lg p-6 w-[35%] flex flex-col justify-center items-center gap-[2rem]'>
           <div className='absolute top-10 flex flex-col justify-center items-center w-[100%] h-[100px]'>
             <p style={{
                fontFamily:'cambria',
                color:'rgb(129, 86, 0)',
                fontSize:'1.2rem',
                fontWeight:'bold',
                padding:'20px',
                textAlign:'justify'
             }}>
              {data[index].quote}
             </p>
            </div>   
            <div className=' flex flex-col justify-center items-end w-[40%] right-10 absolute h-[50px]'>
              <p
              style={{
                fontStyle:'italic'
              }}
              >
                - {data[index].author}
              </p>
            </div>

            <div className='absolute bottom-10 w-[90%] flex flex-row items-center h-[50px]'>
                <div>
                    <XIcon
                     onClick={handleOnClickTwitter}
                    color='black'
                    className='cursor-pointer'
                    />
                </div>
                <div>
                  <FacebookIcon
                  onClick={handleOnClickFaceBook}
                  fontSize='large'
                    color='black'
                    className='cursor-pointer'
                  />
                </div>
            </div>

            <div className='absolute bottom-10 flex right-5 gap-[2rem] '>
              <div>
                <button 
                onClick={onPrevious}
                className={`h-[45px] w-[85px] bg-orange-300 text-white cursor-${index===0 ? "not-allowed":"pointer"} rounded-md`}>Previous</button>
              </div>
              <div>
                <button 
                onClick={onNext}
                className={`h-[45px] w-[85px] bg-orange-300 text-white cursor-${index===data.length-1 ? "not-allowed":'pointer'} rounded-md`}>Next</button>
              </div>
            </div>
      </div>
    </div>
  )
}
