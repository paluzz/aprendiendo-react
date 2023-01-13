import { useState } from 'react'
import { userState }from 'react'

export function TwitterFollowCard ({ userName = 'unknown' , children, initialIsFollowing}) {
//                                    valor por defecto

const [isFollow, setIsFollowing] = useState(initialIsFollowing)

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
                    <strong>{children}</strong>
                    <span
                    className='tw-followCard-infoUserName'>
                        @{userName}
                    </span>
                </div>
            </header>

            <aside>
                <button className={buttonClassName} onClick={handleClick} >
                    <span className='tw-followCard-text'>{text}</span> 
                    <span className="tw-followCard-unFollow">Dejar de Seguir</span>
                </button>
            </aside>
        </article>
    )
}