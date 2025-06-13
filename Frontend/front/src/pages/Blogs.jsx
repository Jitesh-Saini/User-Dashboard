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
} from "@mui/material";
import FilterListIcon from "@mui/icons-material/FilterList";
import DeleteIcon from "@mui/icons-material/Delete";

function Blog() {
  const [blogs, setBlogs] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [selectedBlogId, setSelectedBlogId] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:5002/blogs")
      .then((res) => {
        setBlogs(res.data.blogs || []);
      })
      .catch((err) => {
        console.error("Error fetching blogs:", err);
      });
  }, []);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const paginatedBlogs = blogs.slice(
    page * rowsPerPage,
    page * rowsPerPage + rowsPerPage
  );

  const handleSelect = (blogId) => {
    setSelectedBlogId((prevSelectedId) =>
      prevSelectedId === blogId ? null : blogId
    );
  };

  return (
    <TableContainer component={Paper}>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        p={2}
      >
        <Button variant="contained" color="primary" component="a" href="/">
          Go Back
        </Button>

        <Button
          variant="contained"
          color="primary"
          component="a"
          href="/create_blog"
        >
          Create Blog
        </Button>
        <Box>
          {selectedBlogId ? (
            <>
              <Tooltip title="Edit">
                <IconButton>
                  <Button>Edit</Button>
                </IconButton>
              </Tooltip>
              <Tooltip title="View">
                <IconButton>
                  <Button>View</Button>
                </IconButton>
              </Tooltip>
              <Tooltip title="Delete">
                <IconButton>
                  <Button>Delete</Button>
                </IconButton>
              </Tooltip>
            </>
          ) : (
            <Tooltip title="Filter list">
              <IconButton></IconButton>
            </Tooltip>
          )}
        </Box>
      </Box>

      <Table sx={{ minWidth: 650 }} aria-label="blog table">
        <TableHead>
          <TableRow>
            <TableCell></TableCell>

            <TableCell>S.NO.</TableCell>
            <TableCell>Title</TableCell>
            <TableCell>Description</TableCell>
            <TableCell></TableCell>
            <TableCell>Author</TableCell>
            <TableCell>Category</TableCell>
                        <TableCell>Tag</TableCell>

            <TableCell>Created Date</TableCell>
            <TableCell>Updated Date</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {paginatedBlogs.map((blog, index) => (
            <TableRow
              key={blog._id}
              hover
              onClick={() => handleSelect(blog._id)}
            >
              <TableCell padding="checkbox">
                <Checkbox
                  checked={selectedBlogId === blog._id}
                  onChange={() => handleSelect(blog._id)}
                  onClick={(e) => e.stopPropagation()} // prevent TableRow click
                />
              </TableCell>

              <TableCell>{index + 1 + page * rowsPerPage}</TableCell>
              <TableCell>{blog.title}</TableCell>
              <TableCell>{blog.description}</TableCell>

              <TableCell>
                {blog.image ? (
                  <Avatar
                    src={`http://localhost:5002/${blog.image}`}
                    alt={blog.title}
                  />
                ) : (
                  "No image"
                )}
              </TableCell>

              <TableCell>{blog.author || "Unknown"}</TableCell>
              <TableCell>{blog.category || "Uncategorized"}</TableCell>
              <TableCell>
                {blog.tags ? blog.tags : "No tag"}
              </TableCell>
              <TableCell>{new Date(blog.createdAt).toLocaleString()}</TableCell>
              <TableCell>{new Date(blog.updatedAt).toLocaleString()}</TableCell>
            </TableRow>
          ))}
        </TableBody>

        <TableFooter>
          <TableRow>
            <TablePagination
              rowsPerPageOptions={[5, 10, 20]}
              count={blogs.length}
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

export default Blog;
