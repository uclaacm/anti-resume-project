import Card from '@mui/material/Card';
import React from 'react';
interface LoginProps {
  name: string;
  year: number;
  bio: string;
}

const IDCard: React.FC<LoginProps> = ({ name, year, bio }) => {
  return (
    <Card>
      <h1>{name}</h1>
      <h1>{year}</h1>
      <p>{bio}</p>
    </Card>
  );
};

export default IDCard;
