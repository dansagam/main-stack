import React from 'react';
import { Tooltip, UnstyledButton } from '@mantine/core';
import { SidebarDataType } from './SidebarData';
import classes from './sidebar-link.module.css';

type SidebarLinkProps = {
  data: SidebarDataType;
};
function SidebarLink(props: SidebarLinkProps) {
  const { data } = props;
  return (
    <Tooltip label={data.title} position="right" p={6} arrowSize={7} arrowOffset={27} withArrow>
      <UnstyledButton className={classes['btn-main']}>
        <data.icon />
      </UnstyledButton>
    </Tooltip>
  );
}

export default SidebarLink;
