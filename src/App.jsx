import { useState } from "react";
import Users from "./components/Users";

function App() {
  const [selectedUsers, setSelectedUsers] = useState([]);

  const [users, setUsers] = useState([
    {
      id: 1,
      firstName: "John",
      lastName: "Doe",
      age: 30,
      gender: "male",
      imgSrc:
        "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?fm=jpg&w=3000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHVzZXJzfGVufDB8fDB8fHww",
    },
    {
      id: 2,
      firstName: "Jane",
      lastName: "Smith",
      age: 25,
      gender: "female",
      imgSrc:
        "https://img.freepik.com/free-photo/horizontal-portrait-smiling-happy-young-pleasant-looking-female-wears-denim-shirt-stylish-glasses-with-straight-blonde-hair-expresses-positiveness-poses_176420-13176.jpg?size=626&ext=jpg&ga=GA1.1.1413502914.1719878400&semt=ais_user",
    },
    {
      id: 3,
      firstName: "Michael",
      lastName: "Johnson",
      age: 23,
      gender: "male",
      imgSrc:
        "https://t3.ftcdn.net/jpg/01/95/65/20/360_F_195652074_3fDZxqH4Nn5lQZgQ0JbUuFqI7my84uxy.jpg",
    },
    {
      id: 4,
      firstName: "Emily",
      lastName: "Williams",
      age: 35,
      gender: "female",
      imgSrc:
        "https://img.freepik.com/free-photo/impressed-young-pretty-student-girl-wearing-back-bag-holding-book-pen-isolated-orange_141793-84648.jpg?size=626&ext=jpg&ga=GA1.1.460282344.1720635860&semt=ais_user",
    },
    {
      id: 5,
      firstName: "James",
      lastName: "Brown",
      age: 28,
      gender: "male",
      imgSrc:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTftZ-iGAHXNiafdQX3HKONHSfgOlgKjlicFbOIx0zWWOP19Tf7EQOiz3cItijQ93YL8JI&usqp=CAU",
    },
    {
      id: 6,
      firstName: "Sarah",
      lastName: "Miller",
      age: 32,
      gender: "female",
      imgSrc:
        "https://img.freepik.com/free-photo/serious-woman-with-elegant-curly-hair-looking-camera-while-working-with-computer-outdoor-cafe_197531-6752.jpg?size=626&ext=jpg&ga=GA1.1.460282344.1720635860&semt=ais_user",
    },
    {
      id: 7,
      firstName: "David",
      lastName: "Davis",
      age: 18,
      gender: "male",
      imgSrc:
        "https://thumbs.dreamstime.com/b/hispanic-teenager-standing-over-blue-background-big-smile-face-pointing-hand-finger-to-side-looking-camera-306078302.jpg",
    },
    {
      id: 8,
      firstName: "Emma",
      lastName: "Moore",
      age: 27,
      gender: "female",
      imgSrc:
        "https://img.freepik.com/free-photo/smiling-young-blonde-slavic-girl-putting-hand-her-chest-gesturing-victory-sign_141793-125276.jpg?size=626&ext=jpg&ga=GA1.1.460282344.1720635860&semt=ais_user",
    },
    {
      id: 9,
      firstName: "Daniel",
      lastName: "Wilson",
      age: 33,
      gender: "male",
      imgSrc:
        "https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?size=626&ext=jpg&ga=GA1.1.2008272138.1721001600&semt=sph",
    },
    {
      id: 10,
      firstName: "Olivia",
      lastName: "Taylor",
      age: 20,
      gender: "female",
      imgSrc:
        "https://img.freepik.com/free-photo/feeling-like-genius-holding-finger-proudly-up-air-after-realizing-great-idea-saying-eureka_1194-406883.jpg?size=626&ext=jpg&ga=GA1.1.460282344.1720635860&semt=ais_user",
    },
  ]);

  const toggleUserSelection = userId => {
    setSelectedUsers(prevSelectedUsers =>
      prevSelectedUsers.includes(userId)
        ? prevSelectedUsers.filter(id => id !== userId)
        : [...prevSelectedUsers, userId]
    );
  };

  const deleteUser = userId => {
    setUsers(prevUsers => prevUsers.filter(user => user.id !== userId));
    setSelectedUsers(prevSelectedUsers =>
      prevSelectedUsers.filter(id => id !== userId)
    );
  };

  return (
    <>
      {users.map(user => (
        <Users
          key={user.id}
          user={user}
          isSelected={selectedUsers.includes(user.id)}
          toggleUserSelection={toggleUserSelection}
          deleteUser={deleteUser}
        />
      ))}
    </>
  );
}

export default App;
