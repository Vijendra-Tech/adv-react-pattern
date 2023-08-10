import { createContext, useCallback, useContext, useState } from "react";
import "../../components/hover.css";

const AddressContext = createContext();

function Address({ children }) {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");
  const toggle = useCallback(() => {
    setOpen((state) => !state);
  }, []);

  return (
    <AddressContext.Provider value={{ open, value, toggle, setValue }}>
      <div className="flyout">{children}</div>
    </AddressContext.Provider>
  );
}

function Input(props) {
  const { value, toggle } = useContext(AddressContext);

  return (
    <input
      onFocus={toggle}
      onBlur={toggle}
      className="flyout-input"
      value={value}
      {...props}
    />
  );
}

function List({ children }) {
  const { open } = useContext(AddressContext);
  return (
    open && (
      <div className="flyout-list">
        <ul>{children}</ul>
      </div>
    )
  );
}

function Item({ children, value }) {
  const { setValue } = useContext(AddressContext);

  return (
    <li
      onMouseDown={() => {
        setValue(value);
      }}
      className="flyout-list-item"
    >
      {children}
    </li>
  );
}

Address.Input = Input;
Address.List = List;
Address.Item = Item;

export { Address };
