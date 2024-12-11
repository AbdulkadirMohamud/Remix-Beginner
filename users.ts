export interface User {
    id: string;
    name: string;
    email: string;
    password: string;
  }
  
  export const users: User[] = [
    {
      id: "1",
      name: "Jan peter",
      email: "jan.peter@example.com",
      password: "password689",
    },
    {
      id: "2",
      name: "Cristiano Ronaldo",
      email: "Crisitano.Ronaldo@example.com",
      password: "password456",
    },
    {
      id: "3",
      name: "Moses Abraham",
      email: "Moses.Abraham@example.com",
      password: "password768",
    },
    {
      id: "4",
      name: "Arnold Toynbee",
      email: "arnold.toynbee20@example.com",
      password: "password326",
    },
  ];
  
  export const addUser = (user: User) => {
    // Look for an existing user
    const existingUser = findUserByEmailPassword(user.email, user.password);
  
    if (!existingUser) {
      users.push(user);
    }
  };
  
  export const findUser = (id: string) => users.find((u) => u.id === id);
  
  export const findUserByEmailPassword = (email: string, password: string) =>
    users.find((u) => u.email === email && u.password === password);
  
  export const deleteUser = (id: string) => {
    const index = users.findIndex((u) => u.id === id);
    if (index !== -1) {
      users.splice(index, 1);
    }
  };