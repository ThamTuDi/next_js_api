import Link from 'next/link'
import React from 'react'

export default function Peoole({ person }) {
    return (
        <li>
            <Link href={'/people/[id]'} as={`/people/${person.id}`}>
                <a>{person.name}</a>
            </Link>
        </li>
    )
}
