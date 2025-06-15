// import React from 'react';

// const Users = () => {
//   return (
//     <div style={{ padding: '2rem' }}>
//       <h2>Users Management</h2>
//       <p>CRUD functionality for users will go here.</p>
//     </div>
//   );
// };

// export default Users;




import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Avatar,
  Stack,
  Typography,
  Checkbox,
  TableFooter,
  TablePagination,
  Box,
  IconButton,
  Tooltip,
  Button,
  TextField,
} from "@mui/material";
import FilterListIcon from "@mui/icons-material/FilterList";
import "./Users.css"; // Assuming you have a CSS file for styling

function UserTable() {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [selectedUserId, setSelectedUserId] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:5002")
      .then((res) => {
        setUsers(res.data.users || []);
      })
      .catch((err) => {
        console.error("Error fetching users:", err);
      });
  }, []);

  const onShow = (user) => {
    alert(`
      Name: ${user.firstName} ${user.maidenName} ${user.lastName}
      Age: ${user.age}
      Height: ${user.height}
      Weight: ${user.weight}
      EyeColor: ${user.eyeColor}
      Hair-Color: ${user.hair.color}
      Hair-Type: ${user.hair.type}
      Address: ${user.address.address}, ${user.address.city}, ${user.address.state}, ${user.address.postalCode}
      Bank-Details: ${user.bank.cardExpire}, ${user.bank.cardNumber}
    `);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleSelect = (userId) => {
    setSelectedUserId((prevSelectedId) =>
      prevSelectedId === userId ? null : userId
    );
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value.toLowerCase());
    setPage(0);
  };

  const filteredUsers = users.filter((user) =>
    `${user.firstName} ${user.maidenName} ${user.lastName}`
      .toLowerCase()
      .includes(searchQuery)
  );

  const paginatedUsers = filteredUsers.slice(
    page * rowsPerPage,
    page * rowsPerPage + rowsPerPage
  );

  return (
    <TableContainer component={Paper}>
       <Button variant="contained" color="primary" component="a" href="/">
                Go Back
              </Button>
      <Box
        display="flex"
        flexDirection={{ xs: "column", sm: "row" }}
        justifyContent="space-between"
        alignItems={{ xs: "stretch", sm: "center" }}
        gap={2}
        p={2}
      >
        
        <div className="search-bar">
          <TextField
          className="search-input"
            placeholder="Search by name"
            variant="outlined"
            size="small"
            value={searchQuery}
            onChange={handleSearchChange}
            fullWidth
            sx={{ maxWidth: 1300 }}
          />

          <Stack direction="row" spacing={2}>
            <Button
              variant="contained"
              color="primary"
              component="a"
              href="/create"
            >
              Create User
            </Button>
          </Stack>
        
        <Box>
          {selectedUserId ? (
            <>
              <Tooltip title="Edit">
                <Button>Edit</Button>
              </Tooltip>
              <Tooltip title="View">
                <Button>View</Button>
              </Tooltip>
              <Tooltip title="Delete">
                <Button color="error">Delete</Button>
              </Tooltip>
            </>
          ) : (
            <Tooltip title="Filter list">
              <IconButton></IconButton>
            </Tooltip>
          )}
        </Box>
        </div>

      </Box>

      <Table sx={{ minWidth: 650 }} aria-label="user table">
        <TableHead>
          <TableRow>
            <TableCell></TableCell>
            <TableCell>Profile</TableCell>
            <TableCell>Phone</TableCell>
            <TableCell>Gender</TableCell>
            <TableCell>DOB</TableCell>
            <TableCell>Personal Details</TableCell>
            <TableCell>Education</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {paginatedUsers.map((user) => (
            <TableRow key={user._id} hover>
              <TableCell padding="checkbox">
                <Checkbox
                  checked={selectedUserId === user._id}
                  onChange={() => handleSelect(user._id)}
                />
              </TableCell>
              <TableCell>
                <Stack direction="row" spacing={2} alignItems="center">
                  <Avatar
                    src={`http://localhost:5002/${user.image}`}
                    alt={user.firstName}
                  />
                  <div>
                    <Typography>
                      {user.firstName} {user.maidenName} {user.lastName}
                    </Typography>
                    <Typography variant="caption">{user.email}</Typography>
                  </div>
                </Stack>
              </TableCell>
              <TableCell>{user.phone}</TableCell>
              <TableCell>{user.gender}</TableCell>
              <TableCell>{user.birthDate}</TableCell>
              <TableCell>
                {user.bloodGroup} <br />
                <button onClick={() => onShow(user)}>Show</button>
              </TableCell>
              <TableCell>{user.university}</TableCell>
            </TableRow>
          ))}
        </TableBody>

        <TableFooter>
          <TableRow>
            <TablePagination
              rowsPerPageOptions={[5, 10, 20]}
              count={filteredUsers.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
              labelRowsPerPage="Rows per page"
            />
          </TableRow>
        </TableFooter>
      </Table>
    </TableContainer>
  );
}

export default UserTable;
