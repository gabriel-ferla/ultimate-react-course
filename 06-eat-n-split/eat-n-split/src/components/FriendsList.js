import React from 'react'

// Components
import Friend from './Friend';



const FriendsList = ({friends}) => {
    

  return (
    <ul>
        {friends.map((friend) => (
            <Friend friend={friend} key={friend.id} />
        ))}
    </ul>
  )
}

export default FriendsList