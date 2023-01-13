import React from 'react'
import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'
 
const users = [
    {
        userName: 'NASA',
        name: 'NASA',
        isFollow: false
    },
    {
        userName: 'elonmusk',
        name: 'Elon Musk',
        isFollow: false
    },
    {
        userName: 'SpaceX',
        name: 'SpaceX',
        isFollow: true
    }
]




export function App () {
    return (
        <React.Fragment>
            {
                users.map(({userName,name,isFollow}) => {
                    return (
                        <TwitterFollowCard 
                            key={userName}
                            userName={userName}
                            initialIsFollowing = {isFollow}
                        >
                            {name}
                        </TwitterFollowCard>
                    )
                })
            }
        </React.Fragment>
    )

}