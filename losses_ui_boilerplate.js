import React, { useState } from 'react';

function App() {
  const [file, setFile] = useState(null);
  const [losses, setLosses] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleFileChange = event => {
    setFile(event.target.files[0]);
  };

  const calculateLosses = async () => {
    if (!file) {
      alert('Please upload a data file.');
      return;
    }

    setIsLoading(true);
    const formData = new FormData();
    formData.append('data', file);

    try {
      const response = await fetch('/calculate-losses', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        const result = await response.json();
        setLosses(result.losses);
      } else {
        throw new Error('Failed to calculate losses');
      }
    } catch (error) {
      alert('Error: ' + error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <h1>Loss Calculation Interface</h1>
      <input type="file" onChange={handleFileChange} />
      <button onClick={calculateLosses} disabled={isLoading}>
        {isLoading ? 'Calculating...' : 'Calculate Losses'}
      </button>
      {losses && <div>Total Projected Loss: £{losses.total.toFixed(2)}</div>}
    </div>
  );
}

export default App;
