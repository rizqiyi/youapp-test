"use client";

import {
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";

interface State {
  name: string;
  birthday: string;
  height: number;
  weight: number;
  isEmptyProfile: boolean;
  interests: string[];
}

interface ProfileState {
  state: State;
  loading: boolean;
  setState: Dispatch<SetStateAction<State>>;
  setLoading: Dispatch<SetStateAction<boolean>>;
}

const initialState: ProfileState = {
  state: {
    name: "",
    birthday: "",
    height: 0,
    isEmptyProfile: false,
    weight: 0,
    interests: [""],
  },
  loading: true,
  setState: () => {},
  setLoading: () => {},
};

const ProfileContext = createContext(initialState);

interface ProfileProviderProps {
  children: React.ReactNode;
}

const ProfileProvider: React.FC<ProfileProviderProps> = ({
  children,
}: ProfileProviderProps) => {
  const [state, setState] = useState<State>(initialState.state);
  const [loading, setLoading] = useState<boolean>(initialState.loading);

  return (
    <ProfileContext.Provider value={{ state, setState, loading, setLoading }}>
      {children}
    </ProfileContext.Provider>
  );
};

export const useProfileContext = () => {
  const mapContext = useContext(ProfileContext);

  return mapContext;
};

export default ProfileProvider;
