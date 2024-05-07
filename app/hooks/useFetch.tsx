import { useState, useEffect } from "react";

const useFetch = (url: string,initalState:any) => {

  const [data, setData] = useState(initalState);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, [url]);

  return [data];
};

export default useFetch;
