import React, { useState } from "react";
import { useEffect } from "react";

const Com = () => {
  return <div>Com</div>;
};

function useFetchData() {
  const [loading, setLoading] = useState([]);
  const [data, setData] = useState(null);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      fetch("https://jsonplaceholder.typicode.com/users")
        .then((res) => res.json())
        .then((data) => {
          setData(data?.splice(0, 10) || []);
          setLoading(false);
        })
        .catch((error) => {
          console.error(error);
        });
    }, 800);
  }, []);

  return {
    loading,
    data,
  };
}

export default {
  title: "Day01/DocumentScreen",
  component: Com,
};

export const DocumentScreen = () => {
  const { loading, data } = useFetchData();

  console.log(data, 222);
  if (loading) {
    return <div>loding...</div>;
  }

  return (
    <ul>
      {data.map((item) => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
  );
};
