import { useState } from "react";

// Components
import FriendsList from "./components/FriendsList";
import FormAddFriend from "./components/FormAddFriend";
import FormSliptBill from "./components/FormSliptBill";

const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

function Button ({children, onClick}) {
  return (
    <button className="button" onClick={onClick}>{children}</button>
  )
}

function App() {
  const [friends, setFriends] = useState(initialFriends)
  const [showAddFriend, setShowAddFriend] = useState(false)
  const [selectedFriend, setSelectedFriend] = useState(null)

  function handleShowAddFriend() {
    setShowAddFriend((show) => !show)
  }

  function handleAddFriend(friend) {
    setFriends((friends) => [...friends, friend])
    setShowAddFriend(false)
  }

  function handleSelection(friend) {
    setSelectedFriend(friend)
    setSelectedFriend((selected) => selected?.id === friend.id ? null : friend)
    setShowAddFriend(false)
  }

  return (
    <div className="app">
      <div className="sidebar">
        <FriendsList friends={friends} selectedFriend={selectedFriend} onSelection={handleSelection} />
        {showAddFriend && <FormAddFriend onAddFriend={handleAddFriend} />}
        <Button onClick={handleShowAddFriend}>{showAddFriend ? 'Close' : 'Add Friend'}</Button>
        </div>
        {selectedFriend && <FormSliptBill selectedFriend={selectedFriend} />}
    </div>
  )
};

export default App;


