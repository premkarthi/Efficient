import React,{useState, useEffect} from 'react'

function Dashboard() {

    const [data, setData] = useState([])

    useEffect(()=>{
        (async()=>{
            let response = await fetch('http://localhost:4000/submissions')
            let res =await response.json()
    
            setData(res)
        })()
    
    },[])

    const deleteItem =async (id) =>{
        try {
            const response = await fetch(`http://localhost:4000/submissions/${id}`, {
              method: 'DELETE',
              headers: {
                'Content-Type': 'application/json',
              },
            });
            if (response.ok) {
              console.log(`Submission with ID ${id} deleted.`);
            } else {
              console.error(`Error deleting submission with ID ${id}:`, response.statusText);
            }
          } catch (error) {
            console.error('Error:', error);
          }
        };


  return (
    <div className='dashboard'>
        <h2>Dashboard</h2>
        <table>
            <thead>
            <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Age</th>
                <th>Country</th>
                <th>Job</th>
                <th>Program</th>
                <th>Education</th>
                <th>Paid</th>
                <th>Delete</th>
            </thead>
            <tbody>
                {
                    data.length > 0 && data.map((item, i)=>{
                        return  <tr key={i}>
                                <td>{i}</td>
                                    <td>{item.fullname}</td>
                                    <td>{item.email}</td>
                                    <td>{item.age}</td>
                                    <td>{item.country}</td>
                                    <td>{item.job}</td>
                                    <td>{item.program}</td>
                                    <td>{item.highereducation}</td>
                                    <td>{item.GIC}</td>
                                    <td><button onClick={()=> deleteItem(item._id)}>Delete</button></td>
                                </tr>
                    })
                }
           
            </tbody>
        </table>
    </div>
  )
}

export default Dashboard