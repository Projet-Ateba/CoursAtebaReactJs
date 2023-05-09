import React, { useState } from 'react';
import images from './singe.webp'
function ImageComponent({ src, alt }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleClick = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div>
      <img src={src=images} alt={alt} onClick={handleClick} style={{ cursor: 'pointer' }} />
      {isExpanded && (
        <div
          onClick={handleClick}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            height: '100%',
            width: '100%',
            background: 'rgba(0, 0, 0, 0.5)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <img src={src=images} alt={alt} style={{ minWidth: '900px', minHeight: '900px' }} />
        </div>
      )}
    </div>
  );
}

export default ImageComponent;
