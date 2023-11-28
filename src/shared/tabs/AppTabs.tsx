import { OptionType, Prettify } from '@/@types/base';
import { Tabs, TabsProps, rem } from '@mantine/core';
import React from 'react';

type AppTabsProps = Prettify<
  {
    options: Prettify<Pick<OptionType, 'label' | 'value'>>[];
    onChange?: (_val: string | null) => void;
    value?: string;
  } & Omit<TabsProps, 'children'>
>;
function AppTabs(props: AppTabsProps) {
  const { options, onChange, ...rest } = props;
  const [activeTab, setActiveTab] = React.useState<null | string>('');
  return (
    <Tabs
      value={activeTab}
      onChange={(e) => {
        setActiveTab(e);
        if (onChange) onChange(e);
      }}
      {...rest}
    >
      <Tabs.List styles={{ list: { borderRadius: rem(100) } }}>
        {options.map((field, idx) => (
          <Tabs.Tab value={field.value} key={`${field.label}-${idx}`}>
            {field.label}
          </Tabs.Tab>
        ))}
      </Tabs.List>
    </Tabs>
  );
}

export default AppTabs;
