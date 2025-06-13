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
// import Select from "react-select";
// import { useForm, Controller } from "react-hook-form";


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
//       if (key !== "image") {
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
import Select from "react-select";
import { useForm, Controller } from "react-hook-form";

const CreateBlog = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
  } = useForm();

  const [users, setUsers] = useState([]);
  const [Categories, setCategories] = useState([]);
  const [Tags, setTags] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5002/").then((res) => {
      setUsers(res.data.users || []);
    });

    axios.get("http://localhost:5002/categories").then((res) => {
      setCategories(res.data.categories || []);
    });

    axios.get("http://localhost:5002/tags").then((res) => {
      setTags(res.data.tags || []);
    });
  }, []);

  const onSubmit = async (data) => {
    const formData = new FormData();

    if (data.image && data.image[0]) {
      formData.append("image", data.image[0]);
    }

    for (let key in data) {
      if (key === "tags") {
        // tags is an array of objects { label, value } → send only values
        data[key].forEach((tagValue, index) => {
          formData.append(`tags[${index}]`, tagValue.value);
        });
      } else if (key !== "image") {
        formData.append(key, data[key]);
      }
    }

    try {
      const response = await axios.post("http://localhost:5002/blogs", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      alert("Blog created successfully!");
      console.log(response.data);
    } catch (error) {
      console.error("Error:", error);
      alert("Failed to create blog.");
    }
  };

  const tagOptions = Tags.map((tag) => ({
    value: tag.id,
    label: tag.name,
  }));

  return (
    <>
      <a href="/blogs" className="back">Go Back</a>
      <div className="container">
        <form onSubmit={handleSubmit(onSubmit)} encType="multipart/form-data">
          <h1>Create Blog</h1>

          <label>Blog Images:</label>
          <input type="file" {...register("image")} />

          <label>Title:</label>
          <input {...register("title", { required: "Title is required" })} />
          {errors.title && <span className="error">{errors.title.message}</span>}

          <label>Description:</label>
          <textarea {...register("description", { required: "Description is required" })} />
          {errors.description && <span className="error">{errors.description.message}</span>}

          <label>Author:</label>
          <select {...register("author", { required: "Author is required" })}>
            <option value="">Select author</option>
            {users.map((user) => (
              <option key={user.id} value={`${user.firstName} ${user.maidenName} ${user.lastName}`}>
                {user.firstName} {user.maidenName} {user.lastName}
              </option>
            ))}
          </select>
          {errors.author && <span className="error">{errors.author.message}</span>}

          <label>Category:</label>
          <select {...register("category", { required: "Category is required" })}>
            <option value="">Select category</option>
            {Categories.map((category) => (
              <option key={category.id} value={category.name}>
                {category.name}
              </option>
            ))}
          </select>
          {errors.category && <span className="error">{errors.category.message}</span>}

          {/* ✅ React-Select Multiselect for Tags */}
          <label>Tags:</label>
          <Controller
            name="tags"
            control={control}
            rules={{ required: "Please select at least one tag" }}
            render={({ field }) => (
              <Select
                {...field}
                options={tagOptions}
                isMulti
                classNamePrefix="select"
              />
            )}
          />
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
