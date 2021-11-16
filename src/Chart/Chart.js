import React from 'react';
import { Bar } from 'react-chartjs-2';


const Chart = ({states,newf}) => {
    console.log(states,newf)
const data = {
  labels: ['Jan', 'Feb', 'March', 'April', 'May', 'June'],
  datasets: [
    {
      label: '# Covid Positive Cases',
      data : newf===[] ? states.map(v => {
        return v.negative }):

         newf.map(v => {
         return v.negative }),
      backgroundColor: 'red',
     
    },
    {
      label: '# Covid Negative Cases',
       data : newf===[] ? states.map(v => {
           return v.negative }):

            newf.map(v => {
            return v.negative }),
      backgroundColor: 'green',
      
    },
    // {
    //   label: '# of Green Votes',
    //   data: [3, 10, 13, 15, 22, 30],
    //   backgroundColor: 'rgb(75, 192, 192)',
    //   stack: 'Stack 1',
    // },
  ],
};

const option = {
    tittle:{
           display:true,
           text:"line Chart"
    },
    scales:{
         yAxes:[
             {
                  ticks:{
                      min:10,
                      max:500,
                      stepSize:50
                  }
             }
         ]
    }
};

return(
  <>
   
    <div className='header ' >

      <div className='links'>
        
    
      </div>
    </div>

    <div style={{border:"2px solid black" ,width:"80%",margin:"0 auto"}}>
    <Bar style={{width:"80%",height:"200px",backgroundColor:"white"}} data={data} options={option} />
    </div>
  </>
)
};

export default Chart;