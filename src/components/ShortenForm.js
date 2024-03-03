import React, { useState } from 'react';

const ShortenForm = () => {
  const [originalUrl, setOriginalUrl] = useState('');
  const [shortUrl, setShortUrl] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch('http://localhost:3001/shorten', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ originalUrl }),
    });

    const result = await response.json();
    setShortUrl(result.shortUrl);
  };

  return (
    <div>
      <h1>URL Shortener</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="url"
          placeholder="Enter URL"
          value={originalUrl}
          onChange={(e) => setOriginalUrl(e.target.value)}
          required
        />
        <button type="submit">Shorten</button>
      </form>
      {shortUrl && (
        <div>
          <p>Short URL: <a href={`http://localhost:3001/${shortUrl}`} target="_blank" rel="noopener noreferrer">{`http://localhost:3001/${shortUrl}`}</a></p>
        </div>
      )}
    </div>
  );
};

export default ShortenForm;
