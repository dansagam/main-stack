import { Box, Button } from '@mantine/core';
import React from 'react';
import NotFoundIcon from '@/assets/svg/not-found.svg?react';
import { useNavigate } from 'react-router-dom';

function NotFound() {
  const navigate = useNavigate();
  return (
    <Box h="100%" display="grid" style={{ placeItems: 'center' }}>
      <NotFoundIcon />
      <Button
        onClick={() => {
          navigate('/');
        }}
      >
        Go Back Home
      </Button>
    </Box>
  );
}

export default NotFound;
