import useSWR from 'swr'
import Peoole from '../Componets/Peoole'

const fetcher = (url) => fetch(url).then((res) => res.json())

export default function Home() {
    const { data, error } = useSWR('./api/people', fetcher)
    if (error) return <div>{error.message}</div>
    if (!data) return <div> Loading...</div>
    console.log(data, 'data........')
    return (
        <ul>
            {data.map((elm) => (
                <Peoole key={elm.id} person={elm} />
            ))}
        </ul>
    )
}
