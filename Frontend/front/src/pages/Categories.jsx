// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import {
//   Table,
//   TableBody,
//   TableCell,
//   TableContainer,
//   TableHead,
//   TableRow,
//   Paper,
//   Button,
//   TextField,
//   Dialog,
//   DialogTitle,
//   DialogContent,
//   DialogActions,
//   Checkbox,
//   TableFooter,
//   TablePagination,
//   Box,
//   IconButton,
//   Tooltip,
// } from "@mui/material";
// import FilterListIcon from "@mui/icons-material/FilterList";
// import DeleteIcon from "@mui/icons-material/Delete";

// const Categories = () => {
//   const [categories, setCategories] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [newCategory, setNewCategory] = useState("");

//   const [openEdit, setOpenEdit] = useState(false);
//   const [editCategory, setEditCategory] = useState(null);
//   const [editCategoryName, setEditCategoryName] = useState("");

//   const [openView, setOpenView] = useState(false);
//   const [viewCategory, setViewCategory] = useState(null);

//   // Pagination and selection state like in Blog component
//   const [page, setPage] = useState(0);
//   const [rowsPerPage, setRowsPerPage] = useState(5);
//   const [selectedCategoryId, setSelectedCategoryId] = useState(null);

//   useEffect(() => {
//     fetchCategories();
//   }, []);

//   const fetchCategories = async () => {
//     try {
//       const res = await axios.get("http://localhost:5002/categories");
//       setCategories(res.data.categories || []);
//     } catch (error) {
//       alert("❌ Failed to fetch categories");
//       console.error(error);
//     }
//   };

//   const handleCreateCategory = async () => {
//     if (!newCategory.trim()) {
//       alert("⚠️ Category name is required");
//       return;
//     }

//     setLoading(true);
//     try {
//       const res = await axios.post("http://localhost:5002/categories", {
//         name: newCategory.trim(),
//       });
//       setCategories((prev) => [...prev, res.data.category]);
//       setNewCategory(""); // Reset input
//     } catch (err) {
//       alert("❌ Error creating category");
//       console.error(err);
//     }
//     setLoading(false);
//   };

//   const handleDeleteCategory = async (id) => {
//     if (!window.confirm("Are you sure you want to delete this category?")) return;
//     try {
//       await axios.delete(`http://localhost:5002/categories/${id}`);
//       await fetchCategories();
//       if (selectedCategoryId === id) setSelectedCategoryId(null);
//     } catch (error) {
//       alert("❌ Failed to delete category");
//       console.error(error);
//     }
//   };

//   const handleOpenEdit = (category) => {
//     setEditCategory({ ...category });
//     setEditCategoryName(category.name);
//     setOpenEdit(true);
//   };

//   const handleCancelEdit = () => {
//     setOpenEdit(false);
//     setEditCategory(null);
//     setEditCategoryName("");
//   };

//   const handleUpdateCategory = async () => {
//     if (!editCategory || !editCategory._id) {
//       alert("⚠️ No category selected for update");
//       return;
//     }
//     if (!editCategoryName.trim()) {
//       alert("⚠️ Category name is required");
//       return;
//     }

//     try {
//       await axios.put(`http://localhost:5002/categories/${editCategory._id}`, {
//         name: editCategoryName.trim(),
//       });
//       setOpenEdit(false);
//       setEditCategory(null);
//       setEditCategoryName("");
//       await fetchCategories();
//     } catch (error) {
//       alert("❌ Failed to update category");
//       console.error(error);
//     }
//   };

//   // Pagination handlers like Blog component
//   const handleChangePage = (event, newPage) => {
//     setPage(newPage);
//   };

//   const handleChangeRowsPerPage = (event) => {
//     setRowsPerPage(parseInt(event.target.value, 10));
//     setPage(0);
//   };

//   const paginatedCategories = categories.slice(
//     page * rowsPerPage,
//     page * rowsPerPage + rowsPerPage
//   );

//   // Selection handler like Blog component
//   const handleSelect = (categoryId) => {
//     setSelectedCategoryId((prevSelectedId) =>
//       prevSelectedId === categoryId ? null : categoryId
//     );
//   };

//   return (
//     <div style={{ maxWidth: 1200, margin: "20px auto" }}>
//       <h2>📁 Categories Management</h2>
//       <Box display="flex" gap={2} mb={2}>
//         <TextField
//           label="New Category"
//           fullWidth
//           value={newCategory}
//           onChange={(e) => setNewCategory(e.target.value)}
//           disabled={loading}
//         />
//         <Button variant="contained" onClick={handleCreateCategory} disabled={loading}>
//           {loading ? "Adding..." : "Add Category"}
//         </Button>

//         <Box flexGrow={1} />

//         {selectedCategoryId ? (
//           <>
//             <Tooltip title="Edit">
//               <IconButton onClick={() => handleOpenEdit(categories.find(c => c._id === selectedCategoryId))}>
//                 Edit
//               </IconButton>
//             </Tooltip>
//             <Tooltip title="View">
//               <IconButton onClick={() => setViewCategory(categories.find(c => c._id === selectedCategoryId))}>
//                 View
//               </IconButton>
//             </Tooltip>
//             <Tooltip title="Delete">
//               <IconButton onClick={() => handleDeleteCategory(selectedCategoryId)}>
//                 Delete
//               </IconButton>
//             </Tooltip>
//           </>
//         ) : (
//           <Tooltip title="Filter list">
//             <IconButton>
//               <FilterListIcon />
//             </IconButton>
//           </Tooltip>
//         )}
//       </Box>

//       <TableContainer component={Paper}>
//         <Table sx={{ minWidth: 650 }} aria-label="categories table">
//           <TableHead>
//             <TableRow>
//               <TableCell padding="checkbox"></TableCell>
//               <TableCell>S No.</TableCell>
//               <TableCell>Category Name</TableCell>
//               <TableCell>Created At</TableCell>
//               <TableCell>Updated At</TableCell>
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {paginatedCategories.length > 0 ? (
//               paginatedCategories.map((category, index) => (
//                 <TableRow
//                   key={category._id}
//                   hover
//                   onClick={() => handleSelect(category._id)}
//                   selected={selectedCategoryId === category._id}
//                 >
//                   <TableCell padding="checkbox">
//                     <Checkbox
//                       checked={selectedCategoryId === category._id}
//                       onChange={() => handleSelect(category._id)}
//                       onClick={(e) => e.stopPropagation()}
//                     />
//                   </TableCell>
//                   <TableCell>{index + 1 + page * rowsPerPage}</TableCell>
//                   <TableCell>{category.name}</TableCell>
//                   <TableCell>{new Date(category.createdAt).toLocaleString()}</TableCell>
//                   <TableCell>{new Date(category.updatedAt).toLocaleString()}</TableCell>
//                 </TableRow>
//               ))
//             ) : (
//               <TableRow>
//                 <TableCell colSpan={5} align="center">
//                   No categories found
//                 </TableCell>
//               </TableRow>
//             )}
//           </TableBody>
//           <TableFooter>
//             <TableRow>
//               <TablePagination
//                 rowsPerPageOptions={[5, 10, 20]}
//                 count={categories.length}
//                 rowsPerPage={rowsPerPage}
//                 page={page}
//                 onPageChange={handleChangePage}
//                 onRowsPerPageChange={handleChangeRowsPerPage}
//                 labelRowsPerPage="Rows per page"
//               />
//             </TableRow>
//           </TableFooter>
//         </Table>
//       </TableContainer>

//       {/* Edit Dialog */}
//       <Dialog open={openEdit} onClose={handleCancelEdit}>
//         <DialogTitle>Edit Category</DialogTitle>
//         <DialogContent>
//           <TextField
//             fullWidth
//             label="Category Name"
//             value={editCategoryName}
//             onChange={(e) => setEditCategoryName(e.target.value)}
//             autoFocus
//           />
//         </DialogContent>
//         <DialogActions>
//           <Button onClick={handleCancelEdit}>Cancel</Button>
//           <Button variant="contained" onClick={handleUpdateCategory}>
//             Update
//           </Button>
//         </DialogActions>
//       </Dialog>

//       {/* View Dialog */}
//       <Dialog open={!!viewCategory} onClose={() => setViewCategory(null)}>
//         <DialogTitle>Category Details</DialogTitle>
//         <DialogContent>
//           <p>
//             <strong>Category Name:</strong> {viewCategory?.name}
//           </p>
//           <p>
//             <strong>Created At:</strong> {new Date(viewCategory?.createdAt).toLocaleString()}
//           </p>
//           <p>
//             <strong>Updated At:</strong> {new Date(viewCategory?.updatedAt).toLocaleString()}
//           </p>
//         </DialogContent>
//         <DialogActions>
//           <Button onClick={() => setViewCategory(null)}>Close</Button>
//         </DialogActions>
//       </Dialog>
//     </div>
//   );
// };

// export default Categories;

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
  Button,
  TextField,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Checkbox,
  TableFooter,
  TablePagination,
  Box,
  IconButton,
  Tooltip,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import VisibilityIcon from "@mui/icons-material/Visibility";

const Categories = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);
  const [newCategory, setNewCategory] = useState("");

  const [selectedCategoryId, setSelectedCategoryId] = useState(null);
  const [openEdit, setOpenEdit] = useState(false);
  const [editCategoryName, setEditCategoryName] = useState("");
  const [viewCategory, setViewCategory] = useState(null);

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      const res = await axios.get("http://localhost:5002/categories");
      setCategories(res.data.categories || []);
    } catch (error) {
      alert("❌ Failed to fetch categories");
      console.error(error);
    }
  };

  const handleCreateCategory = async () => {
    if (!newCategory.trim()) return alert("⚠️ Category name is required");
    setLoading(true);

    const categoryExists = categories.some(
      (cat) => cat.name.toLowerCase() === newCategory.trim().toLowerCase()
    );
    if (categoryExists) {
      setLoading(false);
      return alert("⚠️ Category already exists");
    }

    try {
      const res = await axios.post("http://localhost:5002/categories", {
        name: newCategory.trim(),
      });
      setCategories((prev) => [...prev, res.data.category]);
      setNewCategory("");
    } catch (err) {
      alert("❌ Error creating category");
      console.error(err);
    }
    setLoading(false);
  };

  const handleDeleteCategory = async (id) => {
    if (!window.confirm("Delete this category?")) return;
    try {
      await axios.delete(`http://localhost:5002/categories/${id}`);
      await fetchCategories();
      if (selectedCategoryId === id) setSelectedCategoryId(null);
    } catch (err) {
      alert("❌ Failed to delete category");
      console.error(err);
    }
  };

  const handleUpdateCategory = async () => {
    if (!selectedCategoryId || !editCategoryName.trim()) {
      return alert("⚠️ Category name is required");
    }
    try {
      await axios.put(
        `http://localhost:5002/categories/${selectedCategoryId}`,
        {
          name: editCategoryName.trim(),
        }
      );
      setOpenEdit(false);
      setEditCategoryName("");
      setSelectedCategoryId(null);
      await fetchCategories();
    } catch (err) {
      alert("❌ Failed to update category");
    }
  };

  const paginatedCategories = categories.slice(
    page * rowsPerPage,
    page * rowsPerPage + rowsPerPage
  );

  return (
    <div style={{ maxWidth: 1200, margin: "20px auto" }}>
      
      <Button variant="contained" color="primary" component="a" href="/">
        Go Back
      </Button>
      <h2>📁 Categories Management</h2>

      <Box display="flex" gap={2} mb={2}>
        <TextField
          label="New Category"
          fullWidth
          value={newCategory}
          onChange={(e) => setNewCategory(e.target.value)}
          disabled={loading}
        />
        <Button
          variant="contained"
          onClick={handleCreateCategory}
          disabled={loading}
        >
          {loading ? "Adding..." : "Add Category"}
        </Button>
      </Box>

      <Box display="flex" justifyContent="flex-end" mb={1}>
        {selectedCategoryId && (
          <>
            <Tooltip title="View">
              <IconButton
                onClick={() =>
                  setViewCategory(
                    categories.find((c) => c._id === selectedCategoryId)
                  )
                }
              >
                <VisibilityIcon />
              </IconButton>
            </Tooltip>
            <Tooltip title="Edit">
              <IconButton
                onClick={() => {
                  const cat = categories.find(
                    (c) => c._id === selectedCategoryId
                  );
                  setEditCategoryName(cat.name);
                  setOpenEdit(true);
                }}
              >
                <EditIcon />
              </IconButton>
            </Tooltip>
            <Tooltip title="Delete">
              <IconButton
                onClick={() => handleDeleteCategory(selectedCategoryId)}
              >
                <DeleteIcon />
              </IconButton>
            </Tooltip>
          </>
        )}
      </Box>

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 900 }}>
          <TableHead>
            <TableRow>
              <TableCell />
              <TableCell>S No.</TableCell>
              <TableCell>Category Name</TableCell>
              <TableCell>Created At</TableCell>
              <TableCell>Updated At</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {paginatedCategories.length > 0 ? (
              paginatedCategories.map((cat, index) => (
                <TableRow
                  key={cat._id}
                  hover
                  selected={selectedCategoryId === cat._id}
                  onClick={() =>
                    setSelectedCategoryId((prev) =>
                      prev === cat._id ? null : cat._id
                    )
                  }
                >
                  <TableCell padding="checkbox">
                    <Checkbox
                      checked={selectedCategoryId === cat._id}
                      onChange={() =>
                        setSelectedCategoryId((prev) =>
                          prev === cat._id ? null : cat._id
                        )
                      }
                      onClick={(e) => e.stopPropagation()}
                    />
                  </TableCell>
                  <TableCell>{index + 1 + page * rowsPerPage}</TableCell>
                  <TableCell>{cat.name}</TableCell>
                  <TableCell>
                    {new Date(cat.createdAt).toLocaleString()}
                  </TableCell>
                  <TableCell>
                    {new Date(cat.updatedAt).toLocaleString()}
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={5} align="center">
                  No categories found
                </TableCell>
              </TableRow>
            )}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TablePagination
                rowsPerPageOptions={[5, 10, 20]}
                count={categories.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={(e, newPage) => setPage(newPage)}
                onRowsPerPageChange={(e) => {
                  setRowsPerPage(parseInt(e.target.value, 10));
                  setPage(0);
                }}
              />
            </TableRow>
          </TableFooter>
        </Table>
      </TableContainer>

      {/* View Dialog */}
      <Dialog open={!!viewCategory} onClose={() => setViewCategory(null)}>
        <DialogTitle>Category Details</DialogTitle>
        <DialogContent>
          <p>
            <strong>Category Name:</strong> {viewCategory?.name}
          </p>
          <p>
            <strong>Created At:</strong>{" "}
            {new Date(viewCategory?.createdAt).toLocaleString()}
          </p>
          <p>
            <strong>Updated At:</strong>{" "}
            {new Date(viewCategory?.updatedAt).toLocaleString()}
          </p>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setViewCategory(null)}>Close</Button>
        </DialogActions>
      </Dialog>

      {/* Edit Dialog */}
      <Dialog open={openEdit} onClose={() => setOpenEdit(false)}>
        <DialogTitle>Edit Category</DialogTitle>
        <DialogContent>
          <TextField
            fullWidth
            value={editCategoryName}
            onChange={(e) => setEditCategoryName(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenEdit(false)}>Cancel</Button>
          <Button variant="contained" onClick={handleUpdateCategory}>
            Update
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default Categories;
3;
