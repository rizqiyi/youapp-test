"use client";

import {
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

interface State {
  error: string;
}

interface ErrorState {
  state: State;
  setState: Dispatch<SetStateAction<State>>;
}

const initialState: ErrorState = {
  state: {
    error: "",
  },
  setState: () => {},
};

const ErrorContext = createContext(initialState);

interface ErrorProviderProps {
  children: React.ReactNode;
}

const ErrorProvider: React.FC<ErrorProviderProps> = ({
  children,
}: ErrorProviderProps) => {
  const [state, setState] = useState<State>(initialState.state);

  useEffect(() => {
    let timer: any = null;
    if (state.error) {
      timer = setTimeout(() => {
        setState({ error: "" });
      }, 3000);
    }

    return () => clearTimeout(timer);
  }, [state.error]);

  return (
    <ErrorContext.Provider
      value={{
        state,
        setState,
      }}
    >
      {children}
    </ErrorContext.Provider>
  );
};

export const useErrorContext = () => {
  const mapContext = useContext(ErrorContext);

  return mapContext;
};

export default ErrorProvider;
