function User({ user }) {
  return (
    <>
      <p>First Name: {user.name.first}</p>
      <p>Last Name: {user.name.last}</p>
      <p>Email: {user.email}</p>
      <img src={user.picture.medium} alt={user.name.first} />
    </>
  );
}

export default User;
