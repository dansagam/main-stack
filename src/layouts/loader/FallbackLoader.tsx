import { Box, Loader } from '@mantine/core';
import React from 'react';

function FallbackLoader() {
  return (
    <Box style={{ placeItems: 'center' }} display="grid" h="100%">
      <Loader />
    </Box>
  );
}

export default FallbackLoader;
