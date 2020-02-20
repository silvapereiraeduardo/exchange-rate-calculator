import { useState, useEffect } from "react";

export const BOOLEAN_TYPE = "boolean";
export const NUMBER_TYPE = "number";
export const STRING_TYPE = "string";
export const OBJECT_TYPE = "object";

function usePersistedState(key, initialState, type = STRING_TYPE) {
  const [state, setState] = useState(() => {
    const storageValue = localStorage.getItem(key);

    if (storageValue) {
      switch (type) {
        case BOOLEAN_TYPE: {
          return Boolean(storageValue);
        }
        case NUMBER_TYPE: {
          return Number(storageValue);
        }
        case STRING_TYPE: {
          return String(storageValue);
        }
        case OBJECT_TYPE: {
          return JSON.parse(storageValue);
        }
        default: {
          return storageValue;
        }
      }
    } else {
      return initialState;
    }
  });

  useEffect(() => {
    localStorage.setItem(
      key,
      type === OBJECT_TYPE ? JSON.stringify(state) : String(state)
    );
  }, [key, state, type]);

  return [state, setState];
}

export default usePersistedState;
