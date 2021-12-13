import { people } from '/data'

export default function handler(rep, res) {
    return res.status(200).json(people)
}
