import { useState, useEffect } from 'react';

interface Todo {
    userId: number;
    id: number;
    title: string;
    completed: boolean
}

const useFetchSolution = (url: string) => {
    const [data, setData] = useState<Todo[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        fetch(url)
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

    return { data, loading, error };
};

export default useFetchSolution;
