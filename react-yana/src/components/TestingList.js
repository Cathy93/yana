import React from 'react'
import Testing from './Testing'

export default function TestingList ({
    items
}) {
    return (
        <div>
        {
            items.map((item) => (
                <Testing title={ item.title } />
            ))
        }
        </div>
    )
}
