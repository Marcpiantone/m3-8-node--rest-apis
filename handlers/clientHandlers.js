const { v4: uuidv4 } = require("uuid");
const { clients } = require("../data/clients");

const handleClients = (req, res) => {
  res.status(200).json({ status: "200", data: clients });
};

const handleClient = (req, res) => {
  const id = req.params.id;

  const getClientByid = (id) => {
    return clients.find((client) => client.id === id);
  };

  if (getClientByid(id))
    return res.status(200).json({ status: "200", data: getClientByid(id) });
  else res.status(404).json({ status: "404", message: "Client not found" });
};

const handleNewClient = (req, res) => {
  const newClient = {
    id: uuidv4(),
    isActive: true,
    age: req.body.age,
    name: req.body.name,
    gender: req.body.gender,
    company: req.body.company,
    email: req.body.email,
    phone: req.body.phone,
    address: req.body.address,
  };

  const getClientByEmail = (newClient) => {
    return clients.find((client) => client.email === newClient.email);
  };

  if (getClientByEmail(newClient) === undefined) {
    clients.push(newClient);

    res.status(201).json({
      status: "201",
      message: "New client successfully created",
      data: newClient,
    });
  } else {
    res.status(401).json({
      status: "401",
      message: "Client already in database",
    });
  }
};

const handleDeleteClient = (req, res) => {
  const id = req.params.id;

  const deleteClient = (id) => {
    clients.splice(
      clients.findIndex((client) => client.id === id),
      1
    );
  };

  if (!!clients.find((client) => client.id === id)) {
    deleteClient(id);
    res
      .status(200)
      .json({ status: "200", message: "Client successfully deleted" });
  } else {
    res.status(404).json({ status: "404", message: "No client with this ID" });
  }
};

module.exports = {
  handleClients,
  handleClient,
  handleNewClient,
  handleDeleteClient,
};
