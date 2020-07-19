import v4 from 'uuid';
const { uuidv4 } = v4;

let users = [
    {
        firstName: "John",
        lastName: "Doe",
        age: 25
    }, {
        firstName: "Jane",
        lastName: "Doe",
        age: 24
    }
]

export const getUsers = (req, res) => {
    res.send(users);
}

export const createUser = (req, res) => {
    const user = req.body
    users.push({ ... user, id: uuidv4() });
    res.send(`User with the name ${user.firstName} has been added to the database`)
}

export const getUser = (req, res) => {
    const { id } = req.params;
    const foundUser = users.find((user) => user.id === id);
    res.send(foundUser)
}

export const deleteUser = (req, res) => {
    const { id } = req.params;
    users = user.filter((user) => user.id !== id);
    res.send(`User with the ${id} deleted from the database.`)
}

export const updateUser = (req, res) => {
    const { id } = req.params;
    const { firstName, lastName, age } = req.body
    const user = users.find((user) => user.id === id)

    if (firstName) user.firstName = firstName
    if (lastName) user.lastName = lastName
    if (age) user.age = age

    res.send(`User with the id ${id} has been updated.`)

}