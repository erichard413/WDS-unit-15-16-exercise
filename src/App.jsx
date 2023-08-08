import "./App.css";
import user from "../before/user.json";
import UserCard from "./UserCard";
import UserCardClass from "./UserCardClass";

function App() {
  return (
    <>
      <h2>This is using a functional react Component</h2>
      <UserCard
        name={user.name}
        age={user.age}
        address={user.address}
        phoneNumber={user.phoneNumber}
      />
      <h2>This is using a class react Component</h2>
      <UserCardClass
        name={user.name}
        age={user.age}
        address={user.address}
        phoneNumber={user.phoneNumber}
      />
    </>
  );
}

export default App;
