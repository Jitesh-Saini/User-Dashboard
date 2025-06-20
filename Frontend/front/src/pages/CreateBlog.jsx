// import React from "react";
// import { useForm } from "react-hook-form";
// import "./createUser.css";
// import axios from "axios";

// const CreateBlog = () => {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors, isSubmitting },
//   } = useForm();

//   const onSubmit = async (data) => {
//     const formData = new FormData();

//     // Handle file upload
//     if (data.image && data.image[0]) {
//       formData.append("image", data.image[0]);
//     }

//     // Append all other fields
//     for (let key in data) {
//       if (key !== "image") {
//         if (typeof data[key] === "object" && data[key] !== null) {
//           // Handle nested objects
//           for (let subKey in data[key]) {
//             if (typeof data[key][subKey] === "object" && data[key][subKey] !== null) {
//               // Handle doubly nested objects (like address.coordinates)
//               for (let subSubKey in data[key][subKey]) {
//                 formData.append(`${key}.${subKey}.${subSubKey}`, data[key][subKey][subSubKey]);
//               }
//             } else {
//               formData.append(`${key}.${subKey}`, data[key][subKey]);
//             }
//           }
//         } else {
//           formData.append(key, data[key]);
//         }
//       }
//     }

//     try {
//       const response = await axios.post("http://localhost:5002/blogs", formData, {
//         headers: {
//           "Content-Type": "multipart/form-data",
//         },
//       });
//       alert("User created successfully!");
//       console.log(response.data);
//     } catch (error) {
//       console.error("Error:", error);
//       alert("Failed to create user.");
//     }
//   };

//   return (
//     <div className="container">
//       <form onSubmit={handleSubmit(onSubmit)} encType="multipart/form-data">
//         <h1>Create Blog</h1>

//         <label>Blog Images:</label>
//         <input type="file" {...register("image")} />

//         <label>Title:</label>
//         <input {...register("title", { required: "Title is required" })} />
//         {errors.title && <span className="error">{errors.title.message}</span>}

//         <label>Description:</label>
//         <textarea {...register("description", { required: "Description is required" })} />
//         {errors.description && <span className="error">{errors.description.message}</span>}

//         <label>Author:</label>
//         <select {...register("role", { required: "Role is required" })}>
//           <option value="">Select role</option>
//           <option value="user">User</option>
//           <option value="admin">Admin</option>
//           <option value="moderator">Moderator</option>
//         </select>
//         {errors.role && <span className="error">{errors.role.message}</span>}

//         <label>Created At:</label>
//         <input type="date" {...register("createdAt", { required: "Created At is required" })} />
//         {errors.createdAt && <span className="error">{errors.createdAt.message}</span>}

//         <label>Updated At:</label>
//         <input type="date" {...register("updatedAt", { required: "Updated At is required" })} />
//         {errors.updatedAt && <span className="error">{errors.updatedAt.message}</span>}

//         <button type="submit" disabled={isSubmitting}>
//           {isSubmitting ? "Submitting..." : "Submit"}
//         </button>
//       </form>
//     </div>
//   );
// };

// export default CreateBlog;

// import React, { useEffect, useState } from "react";
// import "./createUser.css";
// import axios from "axios";
// import Categories from "./Categories";
// import Tags from "./Tags";
// import { useForm } from "react-hook-form";

// const CreateBlog = () => {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors, isSubmitting },
//   } = useForm();

//   const [users, setUsers] = useState([]);
//   const [Categories, setCategories] = useState([]); // ✅ Initialize as array
//   const [Tags, setTags] = useState([]); // ✅ Initialize as array

//   useEffect(() => {
//     axios
//       .get("http://localhost:5002/")
//       .then((res) => {
//         setUsers(res.data.users || []);
//       })
//       .catch((err) => {
//         console.error("Error fetching users:", err);
//       });

//     // Fetch categories and tags
//     axios
//       .get("http://localhost:5002/categories")
//       .then((res) => {
//         setCategories(res.data.categories || []);
//       })
//       .catch((err) => {
//         console.error("Error fetching categories:", err);
//       });

//     axios
//       .get("http://localhost:5002/tags")
//       .then((res) => {
//         setTags(res.data.tags || []);
//       })
//       .catch((err) => {
//         console.error("Error fetching tags:", err);
//       });
//   }, []);

//   const onSubmit = async (data) => {
//     const formData = new FormData();

//     if (data.image && data.image[0]) {
//       formData.append("image", data.image[0]);
//     }

//     for (let key in data) {
//       if (key === "tags" && Array.isArray(data.tags)) {
//         data.tags.forEach((tag) => formData.append("tags[]", tag)); // ✅ loop through selected tags
//       } else if (key !== "image") {
//         formData.append(key, data[key]);
//       }
//     }

//     try {
//       const response = await axios.post(
//         "http://localhost:5002/blogs",
//         formData,
//         {
//           headers: { "Content-Type": "multipart/form-data" },
//         }
//       );
//       alert("Blog created successfully!");
//       console.log(response.data);
//     } catch (error) {
//       console.error("Error:", error);
//       alert("Failed to create blog.");
//     }
//   };

//   return (
//     <>
//       <a href="/blogs" className="back">
//         Go Back
//       </a>
//       <div className="container">
//         <form onSubmit={handleSubmit(onSubmit)} encType="multipart/form-data">
//           <h1>Create Blog</h1>

//           <label>Blog Images:</label>
//           <input type="file" {...register("image")} />

//           <label>Title:</label>
//           <input {...register("title", { required: "Title is required" })} />
//           {errors.title && (
//             <span className="error">{errors.title.message}</span>
//           )}

//           <label>Description:</label>
//           <textarea
//             {...register("description", {
//               required: "Description is required",
//             })}
//           />
//           {errors.description && (
//             <span className="error">{errors.description.message}</span>
//           )}

//           <label>Author:</label>
//           <select {...register("author", { required: "Author is required" })}>
//             <option value="">Select author</option>
//             {users.map((user) => (
//               <option
//                 key={user.id}
//                 value={`${user.firstName} ${user.maidenName} ${user.lastName} `}
//               >
//                 {user.firstName} {user.maidenName} {user.lastName}
//               </option>
//             ))}
//           </select>
//           {errors.author && (
//             <span className="error">{errors.author.message}</span>
//           )}

//           <label>Category</label>
//           <select
//             {...register("category", { required: "Category is required" })}
//           >
//             <option value="">Select category</option>
//             {Categories.map((category) => (
//               <option key={category.id} value={category.name}>
//                 {category.name}
//               </option>
//             ))}
//           </select>
//           {errors.category && (
//             <span className="error">{errors.category.message}</span>
//           )}

//           <label>Tags</label>
//           <select
//             multiple
//             {...register("tags", {
//               required: "Please select at least one tag",
//             })}
//           >
//             {Tags.map((tag) => (
//               <option key={tag.id} value={tag.name}>
//                 {tag.name}
//               </option>
//             ))}
//           </select>
//           {errors.tags && <span className="error">{errors.tags.message}</span>}

//           <button type="submit" disabled={isSubmitting}>
//             {isSubmitting ? "Submitting..." : "Submit"}
//           </button>
//         </form>
//       </div>
//     </>
//   );
// };

// export default CreateBlog;






import React, { useEffect, useState } from "react";
import "./createUser.css";
import axios from "axios";
import { useForm } from "react-hook-form";

// ✅ MUI imports
import { useTheme } from "@mui/material/styles";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const getStyles = (name, selectedNames, theme) => {
  return {
    fontWeight:
      selectedNames.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
};

const CreateBlog = () => {
  const theme = useTheme();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  const [users, setUsers] = useState([]);
  const [Categories, setCategories] = useState([]);
  const [Tags, setTags] = useState([]);
  const [selectedTags, setSelectedTags] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5002/")
      .then((res) => {
        setUsers(res.data.users || []);
      })
      .catch((err) => {
        console.error("Error fetching users:", err);
      });

    axios
      .get("http://localhost:5002/categories")
      .then((res) => {
        setCategories(res.data.categories || []);
      })
      .catch((err) => {
        console.error("Error fetching categories:", err);
      });

    axios
      .get("http://localhost:5002/tags")
      .then((res) => {
        setTags(res.data.tags || []);
      })
      .catch((err) => {
        console.error("Error fetching tags:", err);
      });
  }, []);

  const onSubmit = async (data) => {
    const formData = new FormData();

    if (data.image && data.image[0]) {
      formData.append("image", data.image[0]);
    }

    for (let key in data) {
      if (key !== "image" && key !== "tags") {
        formData.append(key, data[key]);
      }
    }

    selectedTags.forEach((tag) => formData.append("tags[]", tag));

    try {
      const response = await axios.post(
        "http://localhost:5002/blogs",
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );
      alert("Blog created successfully!");
      console.log(response.data);
    } catch (error) {
      console.error("Error:", error);
      alert("Failed to create blog.");
    }
  };

  return (
    <>
      <a href="/blogs" className="back">
        Go Back
      </a>
      <div className="container">
        <form onSubmit={handleSubmit(onSubmit)} encType="multipart/form-data">
          <h1>Create Blog</h1>

          <label>Blog Images:</label>
          <input type="file" {...register("image")} />

          <label>Title:</label>
          <input {...register("title", { required: "Title is required" })} />
          {errors.title && (
            <span className="error">{errors.title.message}</span>
          )}

          <label>Description:</label>
          <textarea
            {...register("description", {
              required: "Description is required",
            })}
          />
          {errors.description && (
            <span className="error">{errors.description.message}</span>
          )}

          <label>Author:</label>
          <select {...register("author", { required: "Author is required" })}>
            <option value="">Select author</option>
            {users.map((user) => (
              <option
                key={user.id}
                value={`${user.firstName} ${user.maidenName} ${user.lastName}`}
              >
                {user.firstName} {user.maidenName} {user.lastName}
              </option>
            ))}
          </select>
          {errors.author && (
            <span className="error">{errors.author.message}</span>
          )}

          <label>Category</label>
          <select
            {...register("category", { required: "Category is required" })}
          >
            <option value="">Select category</option>
            {Categories.map((category) => (
              <option key={category.id} value={category.name}>
                {category.name}
              </option>
            ))}
          </select>
          {errors.category && (
            <span className="error">{errors.category.message}</span>
          )}

          <label>Tags</label>
          <FormControl sx={{ m: 1, width: 300 }}>
            <InputLabel id="tags-label">Tags</InputLabel>
            <Select
              labelId="tags-label"
              id="tags"
              multiple
              value={selectedTags}
              onChange={(e) =>
                setSelectedTags(
                  typeof e.target.value === "string"
                    ? e.target.value.split(",")
                    : e.target.value
                )
              }
              input={<OutlinedInput label="Tags" />}
              MenuProps={MenuProps}
            >
              {Tags.map((tag) => (
                <MenuItem
                  key={tag.id}
                  value={tag.name}
                  style={getStyles(tag.name, selectedTags, theme)}
                >
                  {tag.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          {errors.tags && <span className="error">{errors.tags.message}</span>}

          <button type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Submitting..." : "Submit"}
          </button>
        </form>
      </div>
    </>
  );
};

export default CreateBlog;
