import { useState } from 'react'
import { userState }from 'react'

export function TwitterFollowCard ({ userName = 'unknown' , name}) {
//                                    valor por defecto

const [isFollow, setIsFollowing] = useState(false)

const text = isFollow ? 'Siguiendo' : 'Seguir'
const buttonClassName = isFollow ? 'tw-followCard-button is-following' : 'tw-followCard-button'

const handleClick = () => {
    setIsFollowing(!isFollow)
}

    return (
        <article className='tw-followCard'>
            <header className='tw-followCard-header'>
                <img 
                    className='tw-followCard-avatar'
                    alt="El avatar de midudev" 
                    src={`https://unavatar.io/${userName}`}/>
                <div className='tw-followCard-info'>
                    <strong>{name}</strong>
                    <span
                    className='tw-followCard-infoUserName'>
                        @{userName}
                    </span>
                </div>
            </header>

            <aside>
                <button className={buttonClassName} onClick={handleClick} >
                    {text}
                </button>
            </aside>
        </article>
    )
}