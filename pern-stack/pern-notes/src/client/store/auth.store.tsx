import { create } from 'zustand';
import jwt_decode from 'jwt-decode';
import { type AxiosResponse } from 'axios';
import { axiosAuth } from '@/libs/axios';
import { type LoginUser, type RegisterUser } from '../../server/db/schemas/user.schema';

interface Profile {
  id: number;
  username: string;
  role: string;
}

interface State {
  accessToken: string | null;
  user: Profile | null;
  isAuth: boolean;
  persist: boolean;
}

interface Actions {
  setAuth: (accessToken: string) => void;
  register: (data: RegisterUser) => Promise<AxiosResponse<any, any> | undefined>;
  login: (data: LoginUser) => Promise<AxiosResponse<any, any> | undefined>;
  logout: () => Promise<AxiosResponse<any, any> | undefined>;
}

export const useAuthStore = create<State & Actions>((set) => ({
  accessToken: null,
  user: null,
  isAuth: false,
  persist: false,
  setAuth: (accessToken) =>
    set(() => ({
      accessToken,
      user: jwt_decode<Profile>(accessToken),
      isAuth: true,
    })),
  register: async (data: RegisterUser) => {
    try {
      const res: AxiosResponse = await axiosAuth.post('/auth/register', data, {
        headers: { 'Content-Type': 'application/json' },
        withCredentials: true,
      });

      return res;
    } catch (error) {
      console.error(error);
    }
  },
  login: async (data: LoginUser) => {
    try {
      const res: AxiosResponse = await axiosAuth.post('/auth/login', data, {
        headers: { 'Content-Type': 'application/json' },
        withCredentials: true,
      });

      return res; 
    } catch (err) {
      console.error(err);
    }
  },
  logout: async () => {
    try {
      const res = await axiosAuth.post('/auth/logout');
      set(() => ({ accessToken: '', isAuth: false }));

      return res;
    } catch (err) {
      console.error(err);
    }
  },
}));
