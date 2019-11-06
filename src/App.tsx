import React from 'react';
import { Grommet, Select } from 'grommet';

const App: React.FC = () => {
  const OPTIONS = [{ name: "Bob", age: 22 }, { name: "Garol", age: 59 }];
  const [selected, setSelected] = React.useState<{
    name: string;
    age: number;
  }>();

  return (
    <Grommet>
      <Select
        options={OPTIONS}
        value={selected}
        valueKey={(opt) => opt.name}
        labelKey={(opt) => `${opt.name} (${opt.age})`}
        onChange={({ option }) => setSelected(option)}
      />
    </Grommet>
  );
}

export default App;
