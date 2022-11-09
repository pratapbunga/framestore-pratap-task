import { useState, useEffect } from "react";

export default function useAsync(fetcher, params) {
  const [value, setValue] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  async function getData(query) {
    try {
      setLoading(true);
      const result = await fetcher(query);
      setValue(result);
    } catch (e) {
      setError(e);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getData(params);
  }, [params]);

  return { data: value, error, loading };
}
