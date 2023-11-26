import { OptionType, Prettify } from '@/@types/base';
import { Combobox, Group, Pill, PillsInput, useCombobox } from '@mantine/core';
import { IoIosCheckbox } from 'react-icons/io';
import React from 'react';
import classes from './multi-complete.module.css';
import { BsSquare } from 'react-icons/bs';

type MultiCompleteInputProps = Prettify<{
  options: Prettify<Pick<OptionType, 'label' | 'value'>>[];
  label?: string;
}>;
function MultiCompleteInput(props: MultiCompleteInputProps) {
  const { options, label } = props;
  const combobox = useCombobox({
    onDropdownClose: () => combobox.resetSelectedOption(),
    onDropdownOpen: () => combobox.updateSelectedOptionIndex('active'),
  });
  const [search, setSearch] = React.useState('');
  const [_value, setValue] = React.useState<Array<string>>([]);

  const handleValueSelect = (val: string) =>
    setValue((current) =>
      current.includes(val) ? current.filter((v) => v !== val) : [...current, val]
    );

  const handleValueRemove = (val: string) =>
    setValue((current) => current.filter((v) => v !== val));

  const _values = _value.map((item) => (
    <Pill
      key={item}
      withRemoveButton
      onRemove={() => handleValueRemove(item)}
      classNames={{ root: classes['pill-span'] }}
    >
      {item}
    </Pill>
  ));

  const _options = options
    .filter((option) => option.value.includes(search.trim().toLowerCase()))
    .map((opt) => (
      <Combobox.Option value={opt.value} key={opt.label} active={_value.includes(opt.value)}>
        <Group gap="sm">
          {_value.includes(opt.value) ? <IoIosCheckbox size={20} /> : <BsSquare size={15} />}
          <span>{opt.label}</span>
        </Group>
      </Combobox.Option>
    ));

  return (
    <Combobox store={combobox} onOptionSubmit={handleValueSelect}>
      <Combobox.DropdownTarget>
        <PillsInput
          onClick={() => combobox.openDropdown()}
          label={label}
          data-app-active={`${Boolean(_value.length > 0)}`}
          classNames={{ input: classes['pill-input-input'] }}
        >
          <Pill.Group>
            {_values}

            <Combobox.EventsTarget>
              <PillsInput.Field
                onFocus={() => combobox.openDropdown()}
                onBlur={() => combobox.closeDropdown()}
                value={search}
                placeholder="..."
                onChange={(event) => {
                  combobox.updateSelectedOptionIndex();
                  setSearch(event.currentTarget.value);
                }}
                onKeyDown={(event) => {
                  if (event.key === 'Backspace' && search.length === 0) {
                    event.preventDefault();
                    handleValueRemove(_value[_value.length - 1]);
                  }
                }}
              />
            </Combobox.EventsTarget>
          </Pill.Group>
        </PillsInput>
      </Combobox.DropdownTarget>
      <Combobox.Dropdown>
        <Combobox.Options>
          {_options.length > 0 ? _options : <Combobox.Empty>Nothing found...</Combobox.Empty>}
        </Combobox.Options>
      </Combobox.Dropdown>
    </Combobox>
  );
}

export default MultiCompleteInput;
