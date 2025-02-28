import axios from "axios";
import { useEffect, useState } from "react";

interface IState<T> {
  error: null | string;
  data: {} | T;
  loading: boolean;
  status: number | null;
}

export function useFetch<T>(url: string) {
  const [state, setState] = useState<IState<T>>({
    error: null,
    data: {},
    loading: false,
    status: null,
  });

  async function getData() {
    try {
      setState((prev) => ({ ...prev, loading: true }));

      const response = await axios(url);

      if (response.status === 200) {
        setState((prev) => ({
          ...prev,
          loading: false,
          data: response.data,
          status: response.status,
        }));
      } 
    } catch (error: any) {
      setState((prev) => ({
        ...prev,
        loading: false,
        error: error.message,
      }));
    }
  }

  useEffect(() => {
    getData();
  }, [url]);

  return [state.data, state.loading, state.error, state.status];
}
