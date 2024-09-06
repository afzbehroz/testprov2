import { useState, useEffect } from "react";

export default function Q5() {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const result = await response.json();
      setData(result);
      setIsLoading(false);
    }

    fetchData();
  }, []);

  if (isLoading) {
    return <p>Laoding...</p>;
  }

  return (
    <ul>
      {data.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}
