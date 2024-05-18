

// Components
import FriendsList from "./components/FriendsList";
import FormAddFriend from "./components/FormAddFriend";
import FormSliptBill from "./components/FormSliptBill";

function App() {
  return (
    <div className="app">
      <div className="sidebar">
        <FriendsList />
        <FormAddFriend />
        <button className="button">Add Friend</button>
      </div>
        <FormSliptBill />
    </div>
  );
}

export default App;
