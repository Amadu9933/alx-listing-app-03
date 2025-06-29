//This file will define a reusable Card component that will be used across the project to display information about various properties.
import React from 'react';
import { CardProps } from '@/interfaces';


const Card: React.FC<CardProps> = ({ title, description, imageUrl, onClick }) => {
    return (
        <div
            className="card"
            onClick={onClick}
            style={{ cursor: onClick ? 'pointer' : 'default', border: '1px solid #ddd', borderRadius: '8px', overflow: 'hidden', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}
        >
            {imageUrl && (
                <img
                    src={imageUrl}
                    alt={title}
                    style={{ width: '100%', height: '200px', objectFit: 'cover' }}
                />
            )}
            <div style={{ padding: '16px' }}>
                <h3 style={{ margin: '0 0 8px', fontSize: '1.25rem' }}>{title}</h3>
                {description && (
                    <p style={{ margin: '0', color: '#555' }}>{description}</p>
                )}
            </div>
        </div>
    );
};

export default Card;