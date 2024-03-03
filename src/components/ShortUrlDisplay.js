import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

const ShortUrlDisplay = () => {
  const { shortUrl } = useParams();

  useEffect(() => {
    const fetchOriginalUrl = async () => {
      const response = await fetch(`http://localhost:3001/${shortUrl}`);
      if (response.ok) {
        window.location.replace(response.url);
      } else {
        console.error('URL not found');
      }
    };

    fetchOriginalUrl();
  }, [shortUrl]);

  return (
    <div>
      <p>Redirecting...</p>
    </div>
  );
};

export default ShortUrlDisplay;
