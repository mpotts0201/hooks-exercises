import { useState, useEffect } from 'react';

interface Todo {
    userId: number;
    id: number;
    title: string;
    completed: boolean
}

const FetchExample = () => {
    const [data, setData] = useState<Todo[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/todos")
        .then((res) => res.json())
        .then((data) => {
            setData(data);
            setLoading(false);
        })
        .catch(() => {
            setError(`ERROR: Could not fetch Todo's`);
            setLoading(false);
        });
    }, []);

    if (loading) return <p>Loading...</p>
    if (error) return <p>{error}</p>

    return (
        <>
            <h1>Todo's</h1>
            {data.map((item: any) => {
                return <p key={item.id}>{item.title}</p>;
            })}
        </>
    );
};

export default FetchExample;
