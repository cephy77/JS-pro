function getUsers() {
  return fetch("http://localhost:4000/users")
    .then((resp) => resp.json())
    .then((rawData) => rawData);
}
export default getUsers;
