import axios from 'axios'
import React from 'react'
import Chart from '../Chart/Chart';
import "../CssFiles/Table.css"
import { useEffect ,useState} from 'react'
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
const Home = () => {
    const [states,setState] = useState([])
    const [selectValue,setSelectValue] = useState("")
    const [newFValue,setNewFvalue] = useState([])
    const [edit,setEdit] = useState(false)




    useEffect(() =>{
        axios.get("https://api.covidtracking.com/v1/states/current.json")
        .then( (res) => {
            setState(res.data)
        })
    },[])

    // console.log(states)
    // console.log(selectValue)

  

    const handleValue = (e) => {
        const val = e.target.value
        setSelectValue(e.target.value)
    
       const dat = states.filter((f) => (f.state === val   ))
        setNewFvalue(dat)


    }

// console.log(newFValue)

      const EditFn = (e) => {
         setEdit(true)

         if(setEdit === true){
             document.body.backgroundColor ="red"
         }
      }
    return (
        <div className={edit === true ? "active" : "nActive"}> 
            
            <div className="select_nd_heading"> 
            <h1>COVID APP</h1>

            {edit === false ? (
                <button onClick={(e)=>EditFn(e)}>Click Me !You Can Check Covid GraPh</button>
            ) : (
                <>
                <span style={{fontWeight:"bold" ,
                              display:"flex",
                              marginLeft:"1rem",
                              marginTop:"-1rem",
                              alignItems:'center'
            
            }}>Select the State <ArrowDownwardIcon /></span>
                 
                </>
            )}

            

            <select onChange={(e) => handleValue(e)}>
                <option>sellect</option>
                {
                    states.map((val,i) => {
                        return <option key={i}>{val.state}</option>
                    })
                }
            </select>

            </div>



            {edit === false ? (
            <div className="main_table">

            <Table className="Table" style={{
                                           width:"100%",         
                                                     }}>
                <Thead>
                <Tr>
                    <Th>Time</Th>
                    <Th>Hospitalized</Th>
                    <Th>hospitalizedCurrently</Th>
                    <Th>State</Th>
                    <Th>Negative Tests Viral</Th>
                    <Th>positive</Th>
                    <Th>Total Tests Viral</Th>
                    
                


                </Tr>
                </Thead>

                <Tbody>

            {selectValue === "" ? 
                states.map((e,i) => {
                return <Tr key={i}>
                    
                    
                    <Td>{e.checkTimeEt}</Td>
                    <Td>{e.hospitalized}</Td>
                    <Td>{e.hospitalizedCurrently}</Td>
                    <Td>{e.state}</Td>
                    <Td className="neg">{e.negativeTestsViral}</Td>
                    <Td className="pos">{e.positive}</Td>
                    <Td>{e.totalTestsViral}</Td>




                </Tr>
                     
                 
                
            })
            
            : (

                newFValue.map((e,i) => {
                    return <Tr key={i}>
                        
                        
                        <Td>{e.checkTimeEt}</Td>
                        <Td>{e.hospitalized}</Td>
                        <Td>{e.hospitalizedCurrently}</Td>
                        <Td>{e.state}</Td>
                        <Td>{e.negativeTestsViral}</Td>
                        <Td>{e.positive}</Td>
                        <Td>{e.totalTestsViral}</Td>




                    </Tr>
                         
                     
                    
                })
            ) }
                  
              
              </Tbody>
              </Table>

            </div>)

            :(



    
            <Chart
                states={states}
                newf={newFValue}
            />
            )}
        </div>
    )
}

export default Home
