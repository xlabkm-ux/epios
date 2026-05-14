import { useState, useEffect, useRef, useCallback } from "react";
import { API_BASE_URL } from "../api-config";

export function useApi<T>(path: string, interval?: number) {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  const pathRef = useRef(path);
  pathRef.current = path;

  const fetchData = useCallback(async () => {
    try {
      const response = await fetch(`${API_BASE_URL}${pathRef.current}`);
      if (!response.ok) {
        throw new Error(`API Error: ${response.statusText}`);
      }
      const result = await response.json();
      setData(result);
      setError(null);
    } catch (err) {
      setError(err instanceof Error ? err : new Error("Unknown error"));
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    if (!path) {
      setLoading(false);
      return;
    }

    fetchData();

    if (interval) {
      const id = setInterval(fetchData, interval);
      return () => clearInterval(id);
    }
  }, [path, interval, fetchData]);

  return { data, loading, error, refresh: fetchData };
}
