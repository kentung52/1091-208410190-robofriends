import React from 'react'
import Card from './Card'

const CardList = ({ robots }) => {
    return (
        <div>
            {robots.map((user, i) => {
                return (
                    <Card
                        key={i}
                        id={user.id}
                        image={user.image}
                        name={user.name}
                        email={user.email}
                    />
                )
            })

            }
        </div>
    )
}

export default CardList

