import { useEffect, useState } from "react";

type DataFetchParams<DataType> = {
  url: string;
  options?: RequestInit;
  defaultValue: DataType;
};

export function useDataFetch<DataType>({
  url,
  options,
  defaultValue,
}: DataFetchParams<DataType>) {
  const [data, setData] = useState<DataType>(defaultValue);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    setLoading(true);
    fetch(url, { ...options, signal: controller.signal })
      .then((response) => response.json())
      .then((res) => {
        setData(res);
        setLoading(false);
      })
      .catch((error) => console.log(error));

    return () => {
      controller.abort("Component unmounted");
    };
  }, [url]);

  return {
    data,
    loading,
  };
}
