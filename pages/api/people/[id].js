import { people } from '../../../data'

export default function person({ query: { id } }, res) {
    const fitterPerson = people.filter((p) => p.id === id)

    if (fitterPerson.length > 0) {
        return res.status(200).json(fitterPerson[0])
    } else {
        return res.status(404).json({ message: `User ${id} not found` })
    }
}
