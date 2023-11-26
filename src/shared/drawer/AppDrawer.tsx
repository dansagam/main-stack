import { Box, Button, ButtonProps, Drawer, Grid } from '@mantine/core';
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
    onSecAction?: () => void;
    isSecCancel?: boolean;
    ActionButtonProps?: ButtonProps;
    SecActionButtonProps?: ButtonProps;
  } & IChildren
>;

function AppDrawer(props: Props) {
  const {
    onAction,
    onClose,
    open,
    children,
    title,
    actionText,
    secActionText,
    isSecCancel = true,
    onSecAction,
    ActionButtonProps,
    SecActionButtonProps,
    ...rest
  } = props;
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
          <Button
            color="white"
            variant="outline"
            style={{ color: 'var(--mantine-color-black)' }}
            fullWidth
            onClick={() => {
              if (onSecAction && isSecCancel) {
                onSecAction();
              } else {
                onClose();
              }
            }}
            {...SecActionButtonProps}
          >
            {secActionText}
          </Button>
        </Grid.Col>
        <Grid.Col span={6}>
          <Button fullWidth onClick={onAction} {...ActionButtonProps}>
            {actionText}
          </Button>
        </Grid.Col>
      </Grid>
    </Drawer>
  );
}

export default AppDrawer;
