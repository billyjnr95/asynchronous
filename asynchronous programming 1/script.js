// (01) iterating with async/await
async function iterateWithAsyncAwait(array) {
    for (const value of array) {
      console.log(value);
      await new Promise(resolve => setTimeout(resolve, 1000)); // Wait for 1 second
    }
  }
  

// (02) awaiting a call
async function fetchDataFromAPI() {
    // Simulate fetching data from an API
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve('Data from API');
      }, 2000); // Simulate 2-second delay
    });
  }  
  
// (03) Awaiting Concurrent Requests
  async function awaitCall() {
    try {
      const data = await fetchDataFromAPI();
      console.log(data);
    } catch (error) {
      console.error('Error fetching data from API:', error);
    }
  }
  
  async function concurrentRequests() {
    try {
      // Make two API calls concurrently using Promise.all()
      const [result1, result2] = await Promise.all([
        fetch('https://api.example.com/endpoint1'),
        fetch('https://api.example.com/endpoint2')
      ]);
  
      // Parse the response data
      const data1 = await result1.json();
      const data2 = await result2.json();
  
      // Log the combined results
      console.log('Combined results:', data1, data2);
    } catch (error) {
      console.error('Error making concurrent requests:', error);
    }
  }
  
  