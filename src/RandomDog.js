import React, { useEffect, useState } from 'react';
import './RandomDog.css'

function AnimalImage() {
  const [imageUrl, setImageUrl] = useState('');

  useEffect(() => {
    fetchRandomDogImage();
  }, []);

  const fetchRandomDogImage = async () => {
    try {
      const response = await fetch('https://random.dog/woof.json');
      const data = await response.json();
      setImageUrl(data.url);
    } catch (error) {
      console.error('Error fetching dog image:', error);
    }
  };

  return (
    <div className="animal-image-container">
      {imageUrl && <img classname='animal-image' src={imageUrl} alt="Dog was too powerful. Try Reloading" />}
    </div>
  );
}

export default AnimalImage;
