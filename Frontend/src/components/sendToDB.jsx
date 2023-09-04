
function sendToDB(props) {
  (async function(){
    try {
      const response = await fetch(`http://localhost:4000/submissions`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(props), 
      });
  
      if (response.ok) {
        console.log('Data submitted successfully');
      
      } else {
        console.error('Failed to submit data');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  })()
}

export default sendToDB