import React from 'react'
import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'
 
export function App () {

    

    return (
        <React.Fragment>
            <TwitterFollowCard 
                userName="midudev" 
                name="Miguel Angel" 
            />
            <TwitterFollowCard 
                userName="NASA" 
                name="NASA" 
            />
            <TwitterFollowCard 

                userName="elonmusk" 
                name="Elon Musk" 
            />
            <TwitterFollowCard  
                userName="SpaceX" 
                name="SpaceX" 
            />
        </React.Fragment>
    )

}