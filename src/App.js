import { useState } from 'react';
import { API } from './api';

function App() {
  const [resume, setResume] = useState('');
  const [feedback, setFeedback] = useState('');

  const getFeedback = async () => {
    const res = await API.post('/feedback', {
      resumeText: resume,
    });

    setFeedback(res.data.feedback);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>AI Resume & Interview Assistant</h1>

      <textarea
        rows="10"
        cols="70"
        placeholder="Paste your resume"
        value={resume}
        onChange={(e) => setResume(e.target.value)}
      />

      <br />
      <button onClick={getFeedback}>Generate Feedback</button>

      <h2>AI Feedback</h2>
      <p>{feedback}</p>
    </div>
  );
}

export default App;
