import { useDataFetch } from "../hooks/useDataFetch";

interface TodoItem {
  id: number;
  title: string;
  userId: number;
  completed: boolean;
}

export function UseDataFetch() {
  const { data, loading } = useDataFetch<TodoItem[]>({
    url: "https://jsonplaceholder.typicode.com/todos/",
    defaultValue: [],
  });

  if (loading) {
    return <h3>Loading</h3>;
  }

  return (
    <div>
      {data.map((item) => (
        <div key={item.id}>{item.title}</div>
      ))}
    </div>
  );
}
