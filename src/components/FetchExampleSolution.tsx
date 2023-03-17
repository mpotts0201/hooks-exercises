import { useFetchSolution } from '../hooks';

const FetchExampleSolution = () => {
    const { data, loading, error } = useFetchSolution("https://jsonplaceholder.typicode.com/todos");

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

export default FetchExampleSolution;
