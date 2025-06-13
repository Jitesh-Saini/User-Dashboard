// import React from 'react';

// const Tags = () => {
//   return (
//     <div style={{ padding: '2rem' }}>
//       <h2>Tags Management</h2>
//       <p>CRUD functionality for tags will go here.</p>
//     </div>
//   );
// };

// export default Tags;

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
// } from "@mui/material";

// const Tags = () => {
//   const [tags, setTags] = useState([]);
//   const [loading, setLoading] = useState(false);

//   // For create form
//   const [newTag, setNewTag] = useState("");

//   // For update modal
//   const [openEdit, setOpenEdit] = useState(false);
//   const [editTag, setEditTag] = useState(null);
//   const [editTagName, setEditTagName] = useState("");

//   // For view modal
//   const [openView, setOpenView] = useState(false);
//   const [viewTag, setViewTag] = useState(null);

//   useEffect(() => {
//     fetchTags();
//   }, []);

//   const fetchTags = async () => {
//     try {
//       const res = await axios.get("http://localhost:5002/tags");
//       setTags(res.data.tags || []);
//     } catch (error) {
//       console.error("Error fetching tags:", error);
//     }
//   };

//   const handleCreateTag = async () => {
//     if (!newTag.trim()) return alert("Tag name is required");
//     setLoading(true);
//     try {
//       const res = await axios.post("http://localhost:5002/tags", {
//         name: newTag.trim(),
//       });

//       const createdTag = res.data.tag || res.data; // backend se jo tag aaya

//       // ✅ Optimistically update the tag list
//       setTags((prev) => [...prev, createdTag]);

//       setNewTag("");
//     } catch (error) {
//       console.error("Error creating tag:", error);
//       alert("Failed to create tag");
//     }
//     setLoading(false);
//   };

//   const handleDeleteTag = async (id) => {
//     if (!window.confirm("Are you sure you want to delete this tag?")) return;
//     try {
//       await axios.delete(`http://localhost:5002/tags/${id}`);
//       fetchTags();
//     } catch (error) {
//       console.error("Error deleting tag:", error);
//       alert("Failed to delete tag");
//     }
//   };

//   const handleOpenEdit = (tag) => {
//     setEditTag(tag);
//     setEditTagName(tag.name);
//     setOpenEdit(true);
//   };

//   const handleCloseEdit = () => {
//     setOpenEdit(false);
//     setEditTag(null);
//   };

//   const handleUpdateTag = async () => {
//     if (!editTagName.trim()) return alert("Tag name is required");
//     try {
//       await axios.put(`http://localhost:5002/tags/${editTag._id}`, {
//         name: editTagName.trim(),
//       });
//       handleCloseEdit();
//       fetchTags();
//     } catch (error) {
//       console.error("Error updating tag:", error);
//       alert("Failed to update tag");
//     }
//   };

//   const handleOpenView = (tag) => {
//     setViewTag(tag);
//     setOpenView(true);
//   };

//   const handleCloseView = () => {
//     setOpenView(false);
//     setViewTag(null);
//   };

//   return (
//     <div style={{ maxWidth: 900, margin: "20px auto", padding: 20 }}>
//       <h1>Tags Management</h1>

//       {/* Create tag form */}
//       <div style={{ marginBottom: 20, display: "flex", gap: 10 }}>
//         <TextField
//           label="New Tag"
//           variant="outlined"
//           value={newTag}
//           onChange={(e) => setNewTag(e.target.value)}
//           size="small"
//           style={{ flexGrow: 1 }}
//         />
//         <Button
//           variant="contained"
//           color="primary"
//           onClick={handleCreateTag}
//           disabled={loading}
//         >
//           {loading ? "Adding..." : "Add Tag"}
//         </Button>
//       </div>

//       {/* Tags table */}
//       <TableContainer component={Paper}>
//         <Table>
//           <TableHead>
//             <TableRow>
//               <TableCell>#</TableCell>
//               <TableCell>Tag Name</TableCell>
//               <TableCell align="right">Actions</TableCell>
//             </TableRow>
//           </TableHead>

//           <TableBody>
//             {tags.length === 0 ? (
//               <TableRow>
//                 <TableCell colSpan={3} align="center">
//                   No tags found.
//                 </TableCell>
//               </TableRow>
//             ) : (
//               tags.map((tag, index) => (
//                 <TableRow key={tag._id || tag.id}>
//                   <TableCell>{index + 1}</TableCell>
//                   <TableCell>{tag.name}</TableCell>
//                   <TableCell align="right">
//                     <Button
//                       size="small"
//                       onClick={() => handleOpenView(tag)}
//                       style={{ marginRight: 8 }}
//                     >
//                       View
//                     </Button>
//                     <Button
//                       size="small"
//                       color="primary"
//                       onClick={() => handleOpenEdit(tag)}
//                       style={{ marginRight: 8 }}
//                     >
//                       Update
//                     </Button>
//                     <Button
//                       size="small"
//                       color="error"
//                       onClick={() => handleDeleteTag(tag._id || tag.id)}
//                     >
//                       Delete
//                     </Button>
//                   </TableCell>
//                 </TableRow>
//               ))
//             )}
//           </TableBody>
//         </Table>
//       </TableContainer>

//       {/* Edit dialog */}
//       <Dialog open={openEdit} onClose={handleCloseEdit}>
//         <DialogTitle>Update Tag</DialogTitle>
//         <DialogContent>
//           <TextField
//             label="Tag Name"
//             fullWidth
//             value={editTagName}
//             onChange={(e) => setEditTagName(e.target.value)}
//           />
//         </DialogContent>
//         <DialogActions>
//           <Button onClick={handleCloseEdit}>Cancel</Button>
//           <Button variant="contained" onClick={handleUpdateTag}>
//             Update
//           </Button>
//         </DialogActions>
//       </Dialog>

//       {/* View dialog */}
//       <Dialog open={openView} onClose={handleCloseView}>
//         <DialogTitle>Tag Details</DialogTitle>
//         <DialogContent>
//           <p>
//             <strong>ID:</strong> {viewTag?._id || viewTag?.id}
//           </p>
//           <p>
//             <strong>Name:</strong> {viewTag?.name}
//           </p>
//         </DialogContent>
//         <DialogActions>
//           <Button onClick={handleCloseView}>Close</Button>
//         </DialogActions>
//       </Dialog>
//     </div>
//   );
// };

// export default Tags;

// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import {
//   Table, TableBody, TableCell, TableContainer, TableHead,
//   TableRow, Paper, Button, TextField, Dialog, DialogTitle,
//   DialogContent, DialogActions
// } from "@mui/material";

// const Tags = () => {
//   const [tags, setTags] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [newTag, setNewTag] = useState("");

//   const [openEdit, setOpenEdit] = useState(false);
//   const [editTag, setEditTag] = useState(null);
//   const [editTagName, setEditTagName] = useState("");

//   const [openView, setOpenView] = useState(false);
//   const [viewTag, setViewTag] = useState(null);

//   useEffect(() => {
//     fetchTags();
//   }, []);

//   const fetchTags = async () => {
//     try {
//       const res = await axios.get("http://localhost:5002/tags");
//       setTags(res.data.tags || []);
//     } catch (error) {
//       alert("Failed to fetch tags");
//       console.error(error);
//     }
//   };

//   const handleCreateTag = async () => {
//     if (!newTag.trim()) {
//       alert("Tag name is required");
//       return;
//     }
//     setLoading(true);
//     try {
//       const res = await axios.post("http://localhost:5002/tags", { name: newTag.trim() });
//       setTags(prev => [...prev, res.data.tag]);
//       setNewTag("");
//     } catch (err) {
//       alert("Error creating tag");
//       console.error(err);
//     }
//     setLoading(false);
//   };

//   const handleDeleteTag = async (id) => {
//     if (!window.confirm("Delete this tag?")) return;
//     try {
//       await axios.delete(`http://localhost:5002/tags/${id}`);
//       await fetchTags();
//     } catch (error) {
//       alert("Failed to delete tag");
//       console.error(error);
//     }
//   };

//   const handleOpenEdit = (tag) => {
//     setEditTag(tag);
//     setEditTagName(tag.name);
//     setOpenEdit(true);
//   };

//   const handleUpdateTag = async () => {
//     if (!editTagName.trim()) {
//       alert("Tag name is required");
//       return;
//     }
//     try {
//       await axios.put(`http://localhost:5002/tags/${editTag._id}`, { name: editTagName.trim() });
//       setOpenEdit(false);
//       await fetchTags();
//     } catch (error) {
//       alert("Failed to update tag");
//       console.error(error);
//     }
//   };

//   return (
//     <div style={{ maxWidth: 900, margin: "20px auto" }}>
//       <h2>Tags Management</h2>
//       <div style={{ display: "flex", gap: 10, marginBottom: 20 }}>
//         <TextField
//           label="New Tag"
//           value={newTag}
//           onChange={e => setNewTag(e.target.value)}
//           disabled={loading}
//         />
//         <Button variant="contained" onClick={handleCreateTag} disabled={loading}>
//           {loading ? "Adding..." : "Add Tag"}
//         </Button>
//       </div>

//       <TableContainer component={Paper}>
//         <Table>
//           <TableHead>
//             <TableRow>
//               <TableCell>#</TableCell>
//               <TableCell>Tag</TableCell>
//               <TableCell align="right">Actions</TableCell>
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {tags.map((tag, i) => (
//               <TableRow key={tag._id}>
//                 <TableCell>{i + 1}</TableCell>
//                 <TableCell>{tag.name}</TableCell>
//                 <TableCell align="right">
//                   <Button onClick={() => setViewTag(tag)}>View</Button>
//                   <Button onClick={() => handleOpenEdit(tag)} color="primary">Edit</Button>
//                   <Button onClick={() => handleDeleteTag(tag._id)} color="error">Delete</Button>
//                 </TableCell>
//               </TableRow>
//             ))}
//             {tags.length === 0 && (
//               <TableRow>
//                 <TableCell colSpan={3} align="center">No tags found</TableCell>
//               </TableRow>
//             )}
//           </TableBody>
//         </Table>
//       </TableContainer>

//       {/* Edit Modal */}
//       <Dialog open={openEdit} onClose={() => setOpenEdit(false)}>
//         <DialogTitle>Edit Tag</DialogTitle>
//         <DialogContent>
//           <TextField
//             fullWidth
//             value={editTagName}
//             onChange={e => setEditTagName(e.target.value)}
//             autoFocus
//           />
//         </DialogContent>
//         <DialogActions>
//           <Button onClick={() => setOpenEdit(false)}>Cancel</Button>
//           <Button variant="contained" onClick={handleUpdateTag}>Update</Button>
//         </DialogActions>
//       </Dialog>

//       {/* View Modal */}
//       <Dialog open={!!viewTag} onClose={() => setViewTag(null)}>
//         <DialogTitle>Tag Details</DialogTitle>
//         <DialogContent>
//           <p><strong>ID:</strong> {viewTag?._id}</p>
//           <p><strong>Name:</strong> {viewTag?.name}</p>
//         </DialogContent>
//         <DialogActions>
//           <Button onClick={() => setViewTag(null)}>Close</Button>
//         </DialogActions>
//       </Dialog>
//     </div>
//   );
// };

// export default Tags;

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
// } from "@mui/material";

// const Tags = () => {
//   const [tags, setTags] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [newTag, setNewTag] = useState("");

//   const [openEdit, setOpenEdit] = useState(false);
//   const [editTag, setEditTag] = useState(null);
//   const [editTagName, setEditTagName] = useState("");

//   const [openView, setOpenView] = useState(false);
//   const [viewTag, setViewTag] = useState(null);

//   useEffect(() => {
//     fetchTags();
//   }, []);

//   const fetchTags = async () => {
//     try {
//       const res = await axios.get("http://localhost:5002/tags");
//       setTags(res.data.tags || []);
//     } catch (error) {
//       alert("❌ Failed to fetch tags");
//       console.error(error);
//     }
//   };

// const handleCreateTag = async () => {
//   if (!newTag.trim()) {
//     alert("⚠️ Tag name is required");
//     return;
//   }

//   if (!newTag.startsWith("#")) {
//     alert("⚠️ Tag name must start with #");
//     return;
//   }

//   setLoading(true);
//   try {
//     const res = await axios.post("http://localhost:5002/tags", {
//       name: newTag.trim(),
//     });
//     setTags((prev) => [...prev, res.data.tag]);
//     setNewTag("#"); // Reset to # after adding
//   } catch (err) {
//     alert("❌ Error creating tag");
//     console.error(err);
//   }
//   setLoading(false);
// };

//   const handleDeleteTag = async (id) => {
//     if (!window.confirm("Are you sure you want to delete this tag?")) return;
//     try {
//       await axios.delete(`http://localhost:5002/tags/${id}`);
//       await fetchTags();
//     } catch (error) {
//       alert("❌ Failed to delete tag");
//       console.error(error);
//     }
//   };

//   const handleOpenEdit = (tag) => {
//     setEditTag(tag);
//     setEditTagName(tag.name);
//     setOpenEdit(true);
//   };

//   const handleUpdateTag = async () => {
//     if (!editTagName.trim()) {
//       alert("⚠️ Tag name is required");
//       return;
//     }
//     try {
//       await axios.put(`http://localhost:5002/tags/${editTag._id}`, {
//         name: editTagName.trim(),
//       });
//       setOpenEdit(false);
//       await fetchTags();
//     } catch (error) {
//       alert("❌ Failed to update tag");
//       console.error(error);
//     }
//   };

//   return (
//     <div style={{ maxWidth: 900, margin: "20px auto" }}>
//       <h2>🧷 Tags Management</h2>
//       <div style={{ display: "flex", gap: 10, marginBottom: 20 }}>
//         <TextField
//           label="New Tag"
//           value={newTag}
//           onChange={(e) => setNewTag(e.target.value)}
//           disabled={loading}
//         />
//         <Button
//           variant="contained"
//           onClick={handleCreateTag}
//           disabled={loading}
//         >
//           {loading ? "Adding..." : "Add Tag"}
//         </Button>
//       </div>

//       <TableContainer component={Paper}>
//         <Table>
//           <TableHead>
//             <TableRow>
//               <TableCell>#</TableCell>
//               <TableCell>Tag Name</TableCell>
//               <TableCell>Created At</TableCell>
//               <TableCell>Updated At</TableCell>

//               <TableCell align="right">Actions</TableCell>
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {tags.map((tag, index) => (
//               <TableRow key={tag._id}>
//                 <TableCell>{index + 1}</TableCell>
//                 <TableCell>{tag.name}</TableCell>
//                 <TableCell>
//                   {new Date(tag.createdAt).toLocaleString()}
//                 </TableCell>
//                 <TableCell>
//                   {new Date(tag.updatedAt).toLocaleString()}
//                 </TableCell>
//                 <TableCell align="right">
//                   <Button onClick={() => setViewTag(tag)}>View</Button>
//                   <Button onClick={() => handleOpenEdit(tag)} color="primary">
//                     Edit
//                   </Button>
//                   <Button
//                     onClick={() => handleDeleteTag(tag._id)}
//                     color="error"
//                   >
//                     Delete
//                   </Button>
//                 </TableCell>
//               </TableRow>
//             ))}
//             {tags.length === 0 && (
//               <TableRow>
//                 <TableCell colSpan={3} align="center">
//                   No tags found
//                 </TableCell>
//               </TableRow>
//             )}
//           </TableBody>
//         </Table>
//       </TableContainer>

//       {/* Edit Tag Dialog */}
//       <Dialog open={openEdit} onClose={() => setOpenEdit(false)}>
//         <DialogTitle>Edit Tag</DialogTitle>
//         <DialogContent>
//           <TextField
//             fullWidth
//             label="Tag Name"
//             value={editTagName}
//             onChange={(e) => setEditTagName(e.target.value)}
//             autoFocus
//           />
//         </DialogContent>
//         <DialogActions>
//           <Button onClick={() => setOpenEdit(false)}>Cancel</Button>
//           <Button variant="contained" onClick={handleUpdateTag}>
//             Update
//           </Button>
//         </DialogActions>
//       </Dialog>

//       {/* View Tag Dialog */}
//       <Dialog open={!!viewTag} onClose={() => setViewTag(null)}>
//         <DialogTitle>Tag Details</DialogTitle>
//         <DialogContent>
//           <p>
//             <strong>Tag Name:</strong> {viewTag?.name}
//           </p>
//           <p>
//             <strong>Created At:</strong>{" "}
//             {new Date(viewTag?.createdAt).toLocaleString()}
//           </p>
//           <p>
//             <strong>Updated At:</strong>{" "}
//             {new Date(viewTag?.updatedAt).toLocaleString()}
//           </p>
//         </DialogContent>
//         <DialogActions>
//           <Button onClick={() => setViewTag(null)}>Close</Button>
//         </DialogActions>
//       </Dialog>
//     </div>
//   );
// };

// export default Tags;

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
// } from "@mui/material";

// const Tags = () => {
//   const [tags, setTags] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [newTag, setNewTag] = useState("");

//   const [openEdit, setOpenEdit] = useState(false);
//   const [editTag, setEditTag] = useState(null);
//   const [editTagName, setEditTagName] = useState("");

//   const [openView, setOpenView] = useState(false);
//   const [viewTag, setViewTag] = useState(null);

//   useEffect(() => {
//     fetchTags();
//   }, []);

//   const fetchTags = async () => {
//     try {
//       const res = await axios.get("http://localhost:5002/tags");
//       setTags(res.data.tags || []);
//     } catch (error) {
//       alert("❌ Failed to fetch tags");
//       console.error(error);
//     }
//   };

//   const handleCreateTag = async () => {
//     if (!newTag.trim()) {
//       alert("⚠️ Tag name is required");
//       return;
//     }

//     if (!newTag.startsWith("#")) {
//       alert("⚠️ Tag name must start with #");
//       return;
//     }

//     setLoading(true);
//     try {
//       const res = await axios.post("http://localhost:5002/tags", {
//         name: newTag.trim(),
//       });
//       setTags((prev) => [...prev, res.data.tag]);
//       setNewTag("#"); // Reset to # after adding
//     } catch (err) {
//       alert("❌ Error creating tag");
//       console.error(err);
//     }
//     setLoading(false);
//   };

//   const handleDeleteTag = async (id) => {
//     if (!window.confirm("Are you sure you want to delete this tag?")) return;
//     try {
//       await axios.delete(`http://localhost:5002/tags/${id}`);
//       await fetchTags();
//     } catch (error) {
//       alert("❌ Failed to delete tag");
//       console.error(error);
//     }
//   };

//   const handleOpenEdit = (tag) => {
//     setEditTag({ ...tag }); // Clone object to avoid direct mutation
//     setEditTagName(tag.name);
//     setOpenEdit(true);
//   };

//   const handleCancelEdit = () => {
//     setOpenEdit(false);
//     setEditTag(null);
//     setEditTagName("");
//   };

//   console.log("Tag ID being updated:", editTag._id);

//   const handleUpdateTag = async () => {
//     if (!editTagName.trim()) {
//       alert("⚠️ Tag name is required");
//       return;
//     }
//     try {
//       await axios.put(`http://localhost:5002/tags/${editTag._id}`, {
//         name: editTagName.trim(),
//       });
//       setOpenEdit(false);
//       await fetchTags();
//     } catch (error) {
//       alert("❌ Failed to update tag");
//       console.error(error);
//     }
//   };

//   return (
//     <div style={{ maxWidth: 900, margin: "20px auto" }}>
//       <h2>🧷 Tags Management</h2>
//       <div style={{ display: "flex", gap: 10, marginBottom: 20 }}>
//         <TextField
//           label="New Tag"
//           value={newTag}
//           onChange={(e) => setNewTag(e.target.value)}
//           disabled={loading}
//         />
//         <Button
//           variant="contained"
//           onClick={handleCreateTag}
//           disabled={loading}
//         >
//           {loading ? "Adding..." : "Add Tag"}
//         </Button>
//       </div>

//       <TableContainer component={Paper}>
//         <Table>
//           <TableHead>
//             <TableRow>
//               <TableCell>#</TableCell>
//               <TableCell>Tag Name</TableCell>
//               <TableCell>Created At</TableCell>
//               <TableCell>Updated At</TableCell>
//               <TableCell align="right">Actions</TableCell>
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {tags.map((tag, index) => (
//               <TableRow key={tag._id}>
//                 <TableCell>{index + 1}</TableCell>
//                 <TableCell>{tag.name}</TableCell>
//                 <TableCell>
//                   {new Date(tag.createdAt).toLocaleString()}
//                 </TableCell>
//                 <TableCell>
//                   {new Date(tag.updatedAt).toLocaleString()}
//                 </TableCell>
//                 <TableCell align="right">
//                   <Button onClick={() => setViewTag(tag)}>View</Button>
//                   <Button onClick={() => handleOpenEdit(tag)} color="primary">
//                     Edit
//                   </Button>
//                   <Button
//                     onClick={() => handleDeleteTag(tag._id)}
//                     color="error"
//                   >
//                     Delete
//                   </Button>
//                 </TableCell>
//               </TableRow>
//             ))}
//             {tags.length === 0 && (
//               <TableRow>
//                 <TableCell colSpan={5} align="center">
//                   No tags found
//                 </TableCell>
//               </TableRow>
//             )}
//           </TableBody>
//         </Table>
//       </TableContainer>

//       {/* Edit Tag Dialog */}
//       <Dialog open={openEdit} onClose={handleCancelEdit}>
//         <DialogTitle>Edit Tag</DialogTitle>
//         <DialogContent>
//           <TextField
//             fullWidth
//             label="Tag Name"
//             value={editTagName}
//             onChange={(e) => setEditTagName(e.target.value)}
//             autoFocus
//           />
//         </DialogContent>
//         <DialogActions>
//           <Button onClick={handleCancelEdit}>Cancel</Button>
//           <Button variant="contained" onClick={handleUpdateTag}>
//             Update
//           </Button>
//         </DialogActions>
//       </Dialog>

//       {/* View Tag Dialog */}
//       <Dialog open={!!viewTag} onClose={() => setViewTag(null)}>
//         <DialogTitle>Tag Details</DialogTitle>
//         <DialogContent>
//           <p>
//             <strong>Tag Name:</strong> {viewTag?.name}
//           </p>
//           <p>
//             <strong>Created At:</strong>{" "}
//             {new Date(viewTag?.createdAt).toLocaleString()}
//           </p>
//           <p>
//             <strong>Updated At:</strong>{" "}
//             {new Date(viewTag?.updatedAt).toLocaleString()}
//           </p>
//         </DialogContent>
//         <DialogActions>
//           <Button onClick={() => setViewTag(null)}>Close</Button>
//         </DialogActions>
//       </Dialog>
//     </div>
//   );
// };

// export default Tags;





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
// } from "@mui/material";

// const Tags = () => {
//   const [tags, setTags] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [newTag, setNewTag] = useState("");

//   const [openEdit, setOpenEdit] = useState(false);
//   const [editTag, setEditTag] = useState(null);
//   const [editTagName, setEditTagName] = useState("");

//   const [openView, setOpenView] = useState(false);
//   const [viewTag, setViewTag] = useState(null);

//   useEffect(() => {
//     fetchTags();
//   }, []);

//   const fetchTags = async () => {
//     try {
//       const res = await axios.get("http://localhost:5002/tags");
//       setTags(res.data.tags || []);
//     } catch (error) {
//       alert("❌ Failed to fetch tags");
//       console.error(error);
//     }
//   };

//   const handleCreateTag = async () => {
//     if (!newTag.trim()) {
//       alert("⚠️ Tag name is required");
//       return;
//     }

//     if (!newTag.startsWith("#")) {
//       alert("⚠️ Tag name must start with #");
//       return;
//     }

//     setLoading(true);
//     try {
//       const res = await axios.post("http://localhost:5002/tags", {
//         name: newTag.trim(),
//       });
//       setTags((prev) => [...prev, res.data.tag]);
//       setNewTag("#"); // Reset to # after adding
//     } catch (err) {
//       alert("❌ Error creating tag");
//       console.error(err);
//     }
//     setLoading(false);
//   };

//   const handleDeleteTag = async (id) => {
//     if (!window.confirm("Are you sure you want to delete this tag?")) return;
//     try {
//       await axios.delete(`http://localhost:5002/tags/${id}`);
//       await fetchTags();
//     } catch (error) {
//       alert("❌ Failed to delete tag");
//       console.error(error);
//     }
//   };

//   const handleOpenEdit = (tag) => {
//     setEditTag({ ...tag }); // Clone object to avoid direct mutation
//     setEditTagName(tag.name);
//     setOpenEdit(true);
//   };

//   const handleCancelEdit = () => {
//     setOpenEdit(false);
//     setEditTag(null);
//     setEditTagName("");
//   };

//   // Safe console.log to avoid error when editTag is null
//   console.log("Tag ID being updated:", editTag?._id || "No tag selected");

//   const handleUpdateTag = async () => {
//     if (!editTag || !editTag._id) {
//       alert("⚠️ No tag selected for update");
//       return;
//     }
//     if (!editTagName.trim()) {
//       alert("⚠️ Tag name is required");
//       return;
//     }

//     console.log("Updating tag ID:", editTag?._id);
//     // console.log("New tag name:", editTagName.trim());

//     try {
//       await axios.put(`http://localhost:5002/tags/${editTag._id}`, {
//         name: editTagName.trim(),
//       });
//       setOpenEdit(false);
//       setEditTag(null);
//       setEditTagName("");
//       await fetchTags();
//     } catch (error) {
//       alert("❌ Failed to update tag");
//       console.error(error);
//     }
//   };

//   return (
//     <div style={{ maxWidth: 900, margin: "20px auto" }}>
//       <h2>🧷 Tags Management</h2>
//       <div style={{ display: "flex", gap: 10, marginBottom: 20 }}>
//         <TextField
//           label="New Tag"
//           value={newTag}
//           onChange={(e) => setNewTag(e.target.value)}
//           disabled={loading}
//         />
//         <Button
//           variant="contained"
//           onClick={handleCreateTag}
//           disabled={loading}
//         >
//           {loading ? "Adding..." : "Add Tag"}
//         </Button>
//       </div>

//       <TableContainer component={Paper}>
//         <Table>
//           <TableHead>
//             <TableRow>
//               <TableCell>#</TableCell>
//               <TableCell>Tag Name</TableCell>
//               <TableCell>Created At</TableCell>
//               <TableCell>Updated At</TableCell>
//               <TableCell align="right">Actions</TableCell>
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {tags.map((tag, index) => (
//               <TableRow key={tag._id}>
//                 <TableCell>{index + 1}</TableCell>
//                 <TableCell>{tag.name}</TableCell>
//                 <TableCell>
//                   {new Date(tag.createdAt).toLocaleString()}
//                 </TableCell>
//                 <TableCell>
//                   {new Date(tag.updatedAt).toLocaleString()}
//                 </TableCell>
//                 <TableCell align="right">
//                   <Button onClick={() => setViewTag(tag)}>View</Button>
//                   <Button onClick={() => handleOpenEdit(tag)} color="primary">
//                     Edit
//                   </Button>
//                   <Button
//                     onClick={() => handleDeleteTag(tag._id)}
//                     color="error"
//                   >
//                     Delete
//                   </Button>
//                 </TableCell>
//               </TableRow>
//             ))}
//             {tags.length === 0 && (
//               <TableRow>
//                 <TableCell colSpan={5} align="center">
//                   No tags found
//                 </TableCell>
//               </TableRow>
//             )}
//           </TableBody>
//         </Table>
//       </TableContainer>

//       {/* Edit Tag Dialog */}
//       <Dialog open={openEdit} onClose={handleCancelEdit}>
//         <DialogTitle>Edit Tag</DialogTitle>
//         <DialogContent>
//           <TextField
//             fullWidth
//             label="Tag Name"
//             value={editTagName}
//             onChange={(e) => setEditTagName(e.target.value)}
//             autoFocus
//           />
//         </DialogContent>
//         <DialogActions>
//           <Button onClick={handleCancelEdit}>Cancel</Button>
//           <Button variant="contained" onClick={handleUpdateTag}>
//             Update
//           </Button>
//         </DialogActions>
//       </Dialog>

//       {/* View Tag Dialog */}
//       <Dialog open={!!viewTag} onClose={() => setViewTag(null)}>
//         <DialogTitle>Tag Details</DialogTitle>
//         <DialogContent>
//           <p>
//             <strong>Tag Name:</strong> {viewTag?.name}
//           </p>
//           <p>
//             <strong>Created At:</strong>{" "}
//             {new Date(viewTag?.createdAt).toLocaleString()}
//           </p>
//           <p>
//             <strong>Updated At:</strong>{" "}
//             {new Date(viewTag?.updatedAt).toLocaleString()}
//           </p>
//         </DialogContent>
//         <DialogActions>
//           <Button onClick={() => setViewTag(null)}>Close</Button>
//         </DialogActions>
//       </Dialog>
//     </div>
//   );
// };

// export default Tags;






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
  Checkbox,
  TableFooter,
  TablePagination,
  Box,
  IconButton,
  Tooltip,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import VisibilityIcon from "@mui/icons-material/Visibility";

const Tags = () => {
  const [tags, setTags] = useState([]);
  const [selectedTagId, setSelectedTagId] = useState(null);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const [openEdit, setOpenEdit] = useState(false);
  const [editTagName, setEditTagName] = useState("");
  const [viewTag, setViewTag] = useState(null);
  const [newTag, setNewTag] = useState("#");

  useEffect(() => {
    fetchTags();
  }, []);

  const fetchTags = async () => {
    try {
      const res = await axios.get("http://localhost:5002/tags");
      setTags(res.data.tags || []);
    } catch (err) {
      console.error("Failed to fetch tags:", err);
    }
  };

  const handleCreateTag = async () => {
    if (!newTag.trim()) return alert("Tag name is required");
    if (!newTag.startsWith("#")) return alert("Tag must start with #");

    try {
      const res = await axios.post("http://localhost:5002/tags", {
        name: newTag.trim(),
      });
      setTags((prev) => [...prev, res.data.tag]);
      setNewTag("#");
    } catch (err) {
      alert("Error creating tag");
    }
  };

  const handleDeleteTag = async (id) => {
    if (!window.confirm("Delete this tag?")) return;
    try {
      await axios.delete(`http://localhost:5002/tags/${id}`);
      await fetchTags();
      setSelectedTagId(null);
    } catch (err) {
      alert("Failed to delete tag");
    }
  };

  const handleUpdateTag = async (id) => {
    if (!selectedTagId || !editTagName.trim()) return alert("Tag name required");
    try {
      await axios.put(`http://localhost:5002/tags/${id}`, {
        name: editTagName.trim(),
      });
      setOpenEdit(false);
      await fetchTags();
      setSelectedTagId(null);
    } catch (err) {
      alert("Failed to update tag");
    }
  };

  const paginatedTags = tags.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);

  return (
    <div style={{ maxWidth: 1200, margin: "20px auto" }}>
      <h2>🧷 Tags Management</h2>
      <Box display="flex" gap={2} mb={2}>
        <TextField
          label="New Tag"
          fullWidth
          value={newTag}
          onChange={(e) => setNewTag(e.target.value)}
        />
        <Button variant="contained" onClick={handleCreateTag}>
          Add Tag
        </Button>
      </Box>

      <Box display="flex" justifyContent="flex-end" mb={1}>
        {selectedTagId && (
          <>
            <Tooltip title="View">
              <IconButton onClick={() => setViewTag(tags.find((t) => t._id === selectedTagId))}>
                <VisibilityIcon />
              </IconButton>
            </Tooltip>
            <Tooltip title="Edit">
              <IconButton
                onClick={() => {
                  const tag = tags.find((t) => t._id === selectedTagId);
                  setEditTagName(tag.name);
                  setOpenEdit(true);
                }}
              >
                <EditIcon />
              </IconButton>
            </Tooltip>
            <Tooltip title="Delete">
              <IconButton onClick={() => handleDeleteTag(selectedTagId)}>
                <DeleteIcon />
              </IconButton>
            </Tooltip>
          </>
        )}
      </Box>

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 900 }} aria-label="tags table">
          <TableHead>
            <TableRow>
              <TableCell />
              <TableCell>#</TableCell>
              <TableCell>Tag Name</TableCell>
              <TableCell>Created At</TableCell>
              <TableCell>Updated At</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {paginatedTags.map((tag, index) => (
              <TableRow
                key={tag._id}
                hover
                selected={selectedTagId === tag._id}
                onClick={() =>
                  setSelectedTagId((prev) => (prev === tag._id ? null : tag._id))
                }
              >
                <TableCell padding="checkbox">
                  <Checkbox
                    checked={selectedTagId === tag._id}
                    onClick={(e) => e.stopPropagation()}
                    onChange={() =>
                      setSelectedTagId((prev) => (prev === tag._id ? null : tag._id))
                    }
                  />
                </TableCell>
                <TableCell>{index + 1 + page * rowsPerPage}</TableCell>
                <TableCell>{tag.name}</TableCell>
                <TableCell>{new Date(tag.createdAt).toLocaleString()}</TableCell>
                <TableCell>{new Date(tag.updatedAt).toLocaleString()}</TableCell>
              </TableRow>
            ))}
            {paginatedTags.length === 0 && (
              <TableRow>
                <TableCell colSpan={5} align="center">
                  No tags found
                </TableCell>
              </TableRow>
            )}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TablePagination
                rowsPerPageOptions={[5, 10, 25]}
                count={tags.length}
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
      <Dialog open={!!viewTag} onClose={() => setViewTag(null)}>
        <DialogTitle>Tag Details</DialogTitle>
        <DialogContent>
          <p><strong>Tag Name:</strong> {viewTag?.name}</p>
          <p><strong>Created At:</strong> {new Date(viewTag?.createdAt).toLocaleString()}</p>
          <p><strong>Updated At:</strong> {new Date(viewTag?.updatedAt).toLocaleString()}</p>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setViewTag(null)}>Close</Button>
        </DialogActions>
      </Dialog>

      {/* Edit Dialog */}
      <Dialog open={openEdit} onClose={() => setOpenEdit(false)}>
        <DialogTitle>Edit Tag</DialogTitle>
        <DialogContent>
          <TextField
            fullWidth
            value={editTagName}
            onChange={(e) => setEditTagName(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenEdit(false)}>Cancel</Button>
          <Button variant="contained" onClick={handleUpdateTag}>
            Update
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default Tags;
