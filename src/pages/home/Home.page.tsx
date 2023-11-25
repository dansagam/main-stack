import { ColorSchemeToggle } from '@/components/ColorSchemeToggle/ColorSchemeToggle';
import { Box, Grid } from '@mantine/core';
import React from 'react';

function HomePage() {
  return (
    <Box>
      <Grid gutter={{ base: 5, xs: 'md', md: 'xl', xl: 50 }}>
        <Grid.Col span={{ sm: 12, md: 6, lg: 8 }}>the Graph coming here</Grid.Col>
        <Grid.Col span={{ sm: 12, md: 6, lg: 4 }}>Right Columns</Grid.Col>
        <Grid.Col span={12}>the transasctions</Grid.Col>
      </Grid>
      HomePage
      <ColorSchemeToggle />
    </Box>
  );
}

export default HomePage;
