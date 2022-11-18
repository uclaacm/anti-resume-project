import { CardActionArea } from '@mui/material';
// import Avatar from '@mui/material/Avatar';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
// import './idcard.css';

interface LoginProps {
  name: string;
  year: number;
  bio: string;
  image?: string;
}

const IDCard: React.FC<LoginProps> = ({ image, name, year, bio }) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <Link href="/resumeViewPage">
        <CardActionArea>
          <div className="center">
            <Image
              src={image || ''}
              alt="Picture of the author"
              width="350px"
              height="300px"
            />
          </div>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {year}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {bio}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Link>
    </Card>
  );
};
export default IDCard;
