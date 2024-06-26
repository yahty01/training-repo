type AddressType = {
  street: string; // ПОДПРАВЛЯЕМ any
  city: string; // ПОДПРАВЛЯЕМ any
};

type UserType = {
  id: number,
  name: string,
  age: number,
  address: AddressType
};

type UserListPropsType = {
  users: UserType[]; // ПО МОЕМУ ЧЕГО-ТО НЕ ХВАТАЕТ...
};

export const UserList = ({users}: UserListPropsType) => {
  return (
    <div id={'hw01-users'}>
      <h2>User List:</h2>

      <ul>
        {users.map((users) => ( // ВСЕ ТОВАРЫ В СТРАНУ ПРИЕЗЖАЮТ В КОНТЕЙНЕРАХ, А В РЕАКТЕ...
          <li key={users.id} id={`hw01-user-${users.id}`}>
            <strong>{users.name}</strong> (Age: {users.age})<strong> Address:</strong>
            {users.address.street}, {users.address.city}
          </li>
        ))}
      </ul>
    </div>
  );
};
