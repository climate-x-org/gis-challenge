import React, { useState } from 'react';

function App() {
  const [file, setFile] = useState(null);
  const [losses, setLosses] = useState(null);

  const handleFileChange = event => {
    setFile(event.target.files[0]);
  };

  const calculateLosses = async () => {
    if (!file) {
      alert('Please upload a data file.');
      return;
    }

    const formData = new FormData();
    formData.append('data', file);

    // Assume the backend endpoint is /calculate-losses
    const response = await fetch('/calculate-losses', {
      method: 'POST',
      body: formData,
    });

    const result = await response.json();
    setLosses(result.losses);
  };

  return (
    <div>
      <h1>Loss Calculation Interface</h1>
      <input type="file" onChange={handleFileChange} />
      <button onClick={calculateLosses}>Calculate Losses</button>
      {losses && <div>Total Projected Loss: £{losses.total.toFixed(2)}</div>}
    </div>
  );
}

export default App;
