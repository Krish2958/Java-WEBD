import axios from 'axios';
import { QueryClient } from 'react-query';
import { toast } from 'react-toastify';

// Base API instance
const api = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Response interceptor for handling responses and errors
api.interceptors.response.use(
  (response) => response.data,
  (error) => {
    if (error.response && error.response.data.message) {
      toast.error(error.response.data.message);
    } else {
      toast.error('An unexpected error occurred');
    }
    return Promise.reject(error);
  }
);

// React Query default function
export const defaultQueryFn = async ({ queryKey }) => {
  const response = await api.get(queryKey[0]);
  return response;
};

// React Query Client
export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      queryFn: defaultQueryFn,
      refetchOnWindowFocus: false,
      staleTime: 3000,
    },
    mutations: {
      onError: (error) => {
        toast.error('An error occurred');
      },
    },
  },
});

export default api;
