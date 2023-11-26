import { Box, Button, Drawer, Grid } from '@mantine/core';
import React from 'react';
import classes from './drawer.module.css';
import { IChildren, Prettify } from '@/@types/base';

type Props = Prettify<
  Omit<React.ComponentPropsWithRef<typeof Drawer>, 'opened'> & {
    open: boolean;
    onAction: () => void;
    title?: string;
    actionText?: string;
    secActionText?: string;
  } & IChildren
>;

function AppDrawer(props: Props) {
  const { onAction, onClose, open, children, title, ...rest } = props;
  return (
    <Drawer
      opened={open}
      onClose={onClose}
      classNames={{ content: classes.content, body: classes.body, header: classes.header }}
      overlayProps={{ backgroundOpacity: 0.5, blur: 4 }}
      position="right"
      title={title || 'd'}
      {...rest}
    >
      <Box style={{ flex: 1 }}>{children}</Box>
      <Grid gutter={10}>
        <Grid.Col span={6}>
          <Button fullWidth>Apply</Button>
        </Grid.Col>
        <Grid.Col span={6}>
          <Button fullWidth onClick={onAction}>
            Apply
          </Button>
        </Grid.Col>
      </Grid>
    </Drawer>
  );
}

export default AppDrawer;
