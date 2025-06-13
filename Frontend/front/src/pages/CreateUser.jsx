// import React from "react";
// import "./createUser.css";

// const CreateUser = () => {
//   const [data, setData] = React.useState({
//     firstName: "Sophia",
//     lastName: "Brown",
//     maidenName: "",
//     age: 42,
//     gender: "female",
//     email: "sophia.brown@x.dummyjson.com",
//     phone: "+81 210-652-2785",
//     username: "sophiab",
//     password: "sophiabpass",
//     birthDate: "1982-11-6",
//     image: "https://dummyjson.com/icon/sophiab/128",
//     bloodGroup: "O-",
//     height: 177.72,
//     weight: 52.6,
//     eyeColor: "Hazel",
//     hair: {
//       color: "White",
//       type: "Wavy",
//     },
//     ip: "214.225.51.195",
//     address: {
//       address: "1642 Ninth Street",
//       city: "Washington",
//       state: "Alabama",
//       stateCode: "AL",
//       postalCode: "32822",
//       coordinates: {
//         lat: 45.289366,
//         lng: 46.832664,
//       },
//       country: "United States",
//     },
//     macAddress: "12:a3:d3:6f:5c:5b",
//     university: "Pepperdine University",
//     bank: {
//       cardExpire: "04/25",
//       cardNumber: "7795895470082859",
//       cardType: "Korean Express",
//       currency: "SEK",
//       iban: "90XYKT83LMM7AARZ8JN958JC",
//     },
//     company: {
//       department: "Research and Development",
//       name: "Schiller - Zieme",
//       title: "Accountant",
//       address: {
//         address: "1896 Washington Street",
//         city: "Dallas",
//         state: "Nevada",
//         stateCode: "NV",
//         postalCode: "88511",
//         coordinates: {
//           lat: 20.086743,
//           lng: -34.577107,
//         },
//         country: "United States",
//       },
//     },
//     ein: "963-113",
//     ssn: "638-461-822",
//     userAgent:
//       "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.45 Safari/537.36",
//     crypto: {
//       coin: "Bitcoin",
//       wallet: "0xb9fc2fe63b2a6c003f1c324c3bfa53259162181a",
//       network: "Ethereum (ERC20)",
//     },
//     role: "admin",
//   });

//   const handleSubmit = (e) => axios.post("http://localhost:5002", data);

//   return (
//     <>
//       <div className="container">
//         <form>
//           <h1>Create User</h1>
//           <label htmlFor="firstName">First Name:</label>
//           <input type="text" id="firstName" name="firstName" required />
//           <br />
//           <label htmlFor="lastName">Last Name:</label>
//           <input type="text" id="lastName" name="lastName" required />
//           <br />
//           <label htmlFor="email">Email: </label>
//           <input type="email" id="email" name="email" required />
//           <br />
//           <label htmlFor="phone">Phone: </label>
//           <input type="tel" id="phone" name="phone" required />
//           <br />
//           <label htmlfor="Gender">Gender: </label>
//           <input type="text" id="gender" name="gender" required />
//           <br />
//           <label htmlFor="dob">DOB: </label>
//           <input type="date" id="dob" name="dob" required />
//           <br />
//           <label htmlFor="bloodGroup">Blood Group:</label>
//           <input type="text" id="bloodGroup" name="bloodGroup" required />
//           <br />
//           <label htmlFor="university">University:</label>
//           <input type="text" id="university" name="university" required />
//           <br />
//           <button
//             className="button"
//             onClick={handleSubmit}
//             style={{ cursor: "pointer" }}
//           >
//             Submit
//           </button>
//         </form>
//       </div>
//     </>
//   );
// };

// export default CreateUser;

// import React, { useState } from "react";
// import "./createUser.css";

// const CreateUser = () => {
//   const [formData, setFormData] = useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     phone: "",
//     gender: "",
//     dob: "",
//     bloodGroup: "",
//     university: ""
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await fetch("http://localhost:3002/send", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(formData)
//       });

//       const result = await response.json();
//       console.log("Server se response:", result);
//       alert("User data sent successfully!");
//     } catch (error) {
//       console.error("Error sending data:", error);
//     }
//   };

//   return (
//     <div className="container">
//       <form onSubmit={handleSubmit}>
//         <h1>Create User</h1>

//         <label>First Name:</label>
//         <input type="text" name="firstName" onChange={handleChange} required />

//         <label>Last Name:</label>
//         <input type="text" name="lastName" onChange={handleChange} required />

//         <label>Email:</label>
//         <input type="email" name="email" onChange={handleChange} required />

//         <label>Phone:</label>
//         <input type="tel" name="phone" onChange={handleChange} required />

//         <label>Gender:</label>
//         <input type="text" name="gender" onChange={handleChange} required />

//         <label>DOB:</label>
//         <input type="date" name="dob" onChange={handleChange} required />

//         <label>Blood Group:</label>
//         <input type="text" name="bloodGroup" onChange={handleChange} required />

//         <label>University:</label>
//         <input type="text" name="university" onChange={handleChange} required />

//         <button type="submit" className="button">Submit</button>
//       </form>
//     </div>
//   );
// };

// export default CreateUser;

// import React, { useState } from "react";
// import "./createUser.css";

// const CreateUser = () => {
//   const [formData, setFormData] = useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     phone: "",
//     gender: "",
//     dob: "",
//     bloodGroup: "",
//     university: ""
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await fetch("http://localhost:3002/users", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(formData)
//       });

//       const result = await response.json();
//       console.log("Server response:", result);
//       alert("User submitted successfully!");
//     } catch (error) {
//       console.error("Error sending data:", error);
//     }
//   };

//   return (
//     <div className="container">
//       <form onSubmit={handleSubmit}>
//         <h1>Create User</h1>

//         <label>First Name:</label>
//         <input type="text" name="firstName" onChange={handleChange} required />

//         <label>Last Name:</label>
//         <input type="text" name="lastName" onChange={handleChange} required />

//         <label>Email:</label>
//         <input type="email" name="email" onChange={handleChange} required />

//         <label>Phone:</label>
//         <input type="tel" name="phone" onChange={handleChange} required />

//         <label>Gender:</label>
//         <input type="text" name="gender" onChange={handleChange} required />

//         <label>DOB:</label>
//         <input type="date" name="dob" onChange={handleChange} required />

//         <label>Blood Group:</label>
//         <input type="text" name="bloodGroup" onChange={handleChange} required />

//         <label>University:</label>
//         <input type="text" name="university" onChange={handleChange} required />

//         <button type="submit" className="button">Submit</button>
//       </form>
//     </div>
//   );
// };

// export default CreateUser;

// // CreateUser.jsx
// import React, { useState } from "react";
// import "./createUser.css";

// const CreateUser = () => {
//   const [formData, setFormData] = useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     phone: "",
//     gender: "",
//     dob: "",
//     bloodGroup: "",
//     university: ""
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await fetch("http://localhost:3002/users", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(formData)
//       });

//       const result = await response.json();
//       console.log("Server response:", result);
//       alert("User submitted successfully!");
//     } catch (error) {
//       console.error("Error sending data:", error);
//       alert("Failed to send data");
//     }
//   };

//   return (
//     <div className="container">
//       <form onSubmit={handleSubmit}>
//         <h1>Create User</h1>

//         <label>First Name:</label>
//         <input type="text" name="firstName" onChange={handleChange} required />

//         <label>Last Name:</label>
//         <input type="text" name="lastName" onChange={handleChange} required />

//         <label>Email:</label>
//         <input type="email" name="email" onChange={handleChange} required />

//         <label>Phone:</label>
//         <input type="tel" name="phone" onChange={handleChange} required />

//         <label>Gender:</label>
//         <input type="text" name="gender" onChange={handleChange} required />

//         <label>DOB:</label>
//         <input type="date" name="dob" onChange={handleChange} required />

//         <label>Blood Group:</label>
//         <input type="text" name="bloodGroup" onChange={handleChange} required />

//         <label>University:</label>
//         <input type="text" name="university" onChange={handleChange} required />

//         <button type="submit" className="button">Submit</button>
//       </form>
//     </div>
//   );
// };

// export default CreateUser;

// import React from "react";
// import { useForm } from "react-hook-form";
// import "./createUser.css";
// import axios from "axios";

// const CreateUser = () => {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors, isSubmitting },
//   } = useForm();

//   const onSubmit = async (data) => {
//     await new Promise((resolve) => setTimeout(resolve, 4000)); // Simulate a delay
//     console.log("Form Data:", data);

//     try {
//       // console.log("Form Data:", data);

//       const response = await axios.post("http://localhost:5002/users", data);
//       console.log("Response:", response.data);
//       alert("User created successfully!");
//     } catch (error) {
//       console.error("Error submitting form:", error);
//       alert("Failed to create user.");
//     }
//   };

//   return (
//     <div className="container">
//       <form onSubmit={handleSubmit(onSubmit)}>
//         <h1>Create User</h1>

//         {/* BASIC FIELDS */}

//         {/* <label>Image:</label>
//         <input type="file" {...register("image", { required: true })} /> */}

//         <label>First Name:</label>
//         <input
//           {...register("firstName", {
//             required: true,
//             type: "text",
//             minLength: { value: 3, message: "At Least 3 characters required" },
//             pattern: {
//               value: /^[A-Za-z]+$/,
//               message: "Only alphabets are allowed",
//             },
//           })}
//         />
//         {errors.firstName && <span>{errors.firstName.message}</span>}

//         <label>Last Name:</label>
//         <input
//           {...register("lastName", {
//             required: true,
//             type: "text",
//             minLength: { value: 3, message: "At Least 3 characters required" },
//             pattern: {
//               value: /^[A-Za-z]+$/,
//               message: "Only alphabets are allowed",
//             },
//           })}
//         />
//         {errors.lastName && <span>{errors.lastName.message}</span>}

//         <label>Maiden Name:</label>
//         <input
//           {...register("maidenName", {
//             required: true,
//             type: "text",
//             minLength: { value: 3, message: "At Least 3 characters required" },
//             pattern: {
//               value: /^[A-Za-z]+$/,
//               message: "Only alphabets are allowed",
//             },
//           })}
//         />
//         {errors.maidenName && <span>{errors.maidenName.message}</span>}

//         <label>Age:</label>
//         <input
//           type="number"
//           {...register("age", {
//             required: true,
//             min: { value: 19, message: "Age must be greater than 18" },
//             max: { value: 39, message: "Age must be less than 40" },
//           })}
//         />
//         {errors.age && <span>{errors.age.message}</span>}

//         <label>Gender:</label>
//         <input {...register("gender", { required: true })} />
//         {errors.gender && <span>Required</span>}

//         <label>Email:</label>
//         <input
//           type="email"
//           {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
//         />
//         {errors.email && <span>Valid email required</span>}

//         <label>Phone:</label>
//         <input {...register("phone", { required: true })} />
//         {errors.phone && <span>Required</span>}

//         <label>Username:</label>
//         <input {...register("username", { required: true })} />
//         {errors.username && <span>Required</span>}

//         <label>Password:</label>
//         <input type="password" {...register("password", { required: true })} />
//         {errors.password && <span>Required</span>}

//         <label>Birth Date:</label>
//         <input type="date" {...register("birthDate", { required: true })} />
//         {errors.birthDate && <span>Required</span>}

//         <label>Blood Group:</label>
//         <input {...register("bloodGroup")} />

//         <label>Height (cm):</label>
//         <input type="number" {...register("height")} />

//         <label>Weight (kg):</label>
//         <input type="number" {...register("weight")} />

//         <label>Eye Color:</label>
//         <input {...register("eyeColor")} />

//         {/* HAIR */}
//         <label>Hair Color:</label>
//         <input {...register("hair.color")} />
//         <label>Hair Type:</label>
//         <input {...register("hair.type")} />

//         {/* ADDRESS */}
//         <label>Street Address:</label>
//         <input {...register("address.address")} />
//         <label>City:</label>
//         <input {...register("address.city")} />
//         <label>State:</label>
//         <input {...register("address.state")} />
//         <label>Postal Code:</label>
//         <input {...register("address.postalCode")} />
//         <label>Country:</label>
//         <input {...register("address.country")} />

//         {/* BANK */}
//         <label>Card Number:</label>
//         <input {...register("bank.cardNumber")} />
//         <label>Card Expire:</label>
//         <input {...register("bank.cardExpire")} />
//         <label>Card Type:</label>
//         <input {...register("bank.cardType")} />

//         {/* COMPANY */}
//         <label>Company Name:</label>
//         <input {...register("company.name")} />
//         <label>Department:</label>
//         <input {...register("company.department")} />
//         <label>Title:</label>
//         <input {...register("company.title")} />

//         {/* CRYPTO */}
//         <label>Crypto Coin:</label>
//         <input {...register("crypto.coin")} />
//         <label>Wallet:</label>
//         <input {...register("crypto.wallet")} />
//         <label>Network:</label>
//         <input {...register("crypto.network")} />

//         {/* OTHERS */}
//         <label>MAC Address:</label>
//         <input {...register("macAddress")} />
//         <label>University:</label>
//         <input {...register("university")} />
//         <label>EIN:</label>
//         <input {...register("ein")} />
//         <label>SSN:</label>
//         <input {...register("ssn")} />
//         <label>User Agent:</label>
//         <input {...register("userAgent")} />
//         <label>Role:</label>
//         <input {...register("role")} />

//         <button type="submit" className="button" disabled={isSubmitting}>
//           {isSubmitting ? "Submitting..." : "Submit"}
//         </button>
//       </form>
//     </div>
//   );
// };

// export default CreateUser;

// import React from "react";
// import { useForm } from "react-hook-form";
// import "./createUser.css";
// import axios from "axios";

// const CreateUser = () => {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors, isSubmitting },
//   } = useForm();

//   const onSubmit = async (data) => {
//     const formData = new FormData();

//     for (let key in data) {
//       if (key === "image") {
//         formData.append("image", data.image[0]);
//       } else if (typeof data[key] === "object" && data[key] !== null) {
//         for (let subKey in data[key]) {
//           formData.append(`${key}.${subKey}`, data[key][subKey]);
//         }
//       } else {
//         formData.append(key, data[key]);
//       }
//     }

//     try {
//       const response = await axios.post("http://localhost:5002/users", formData, {
//         headers: {
//           "Content-Type": "multipart/form-data",
//         },
//       });
//       alert("User created successfully!");
//     } catch (error) {
//       console.error("Error:", error);
//       alert("Failed to create user.");
//     }
//   };

//   return (
//     <div className="container">
//       <form onSubmit={handleSubmit(onSubmit)} encType="multipart/form-data">
//         <h1>Create User</h1>

//         <label>Image:</label>
//         <input type="file" {...register("image", { required: true })} />
//         {errors.image && <span>Image is required</span>}

//         <label>First Name:</label>
//         <input {...register("firstName", { required: "First name is required" })} />
//         {errors.firstName && <span>{errors.firstName.message}</span>}

//         {/* Add the rest of your fields here similar to previous setup */}
//         <button type="submit" disabled={isSubmitting}>
//           {isSubmitting ? "Submitting..." : "Submit"}
//         </button>
//       </form>
//     </div>
//   );
// };

// export default CreateUser;









import React from "react";
import { useForm } from "react-hook-form";
import "./createUser.css";
import axios from "axios";

const CreateUser = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (data) => {
    const formData = new FormData();

    // Handle file upload
    if (data.image && data.image[0]) {
      formData.append("image", data.image[0]);
    }

    // Append all other fields
    for (let key in data) {
      if (key !== "image") {
        if (typeof data[key] === "object" && data[key] !== null) {
          // Handle nested objects
          for (let subKey in data[key]) {
            if (
              typeof data[key][subKey] === "object" &&
              data[key][subKey] !== null
            ) {
              // Handle doubly nested objects (like address.coordinates)
              for (let subSubKey in data[key][subKey]) {
                formData.append(
                  `${key}.${subKey}.${subSubKey}`,
                  data[key][subKey][subSubKey]
                );
              }
            } else {
              formData.append(`${key}.${subKey}`, data[key][subKey]);
            }
          }
        } else {
          formData.append(key, data[key]);
        }
      }
    }

    try {
      const response = await axios.post(
        "http://localhost:5002/users",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      alert("User created successfully!");
      console.log(response.data);
    } catch (error) {
      console.error("Error:", error);
      alert("Failed to create user.");
    }
  };

  return (
    <>
    <a href="/users"  className="back" >Go Back</a>
      <div className="container">
        <form onSubmit={handleSubmit(onSubmit)} encType="multipart/form-data">
          <h1>Create User</h1>

          {/* Basic Information */}
          <h2>Basic Information</h2>
          <label>Image:</label>
          <input type="file" {...register("image")} />

          <label>First Name*:</label>
          <input
            {...register("firstName", { required: "First name is required" })}
          />
          {errors.firstName && (
            <span className="error">{errors.firstName.message}</span>
          )}

          <label>Last Name*:</label>
          <input
            {...register("lastName", { required: "Last name is required" })}
          />
          {errors.lastName && (
            <span className="error">{errors.lastName.message}</span>
          )}

          <label>Maiden Name:</label>
          <input {...register("maidenName")} />

          <label>Age*:</label>
          <input
            type="number"
            {...register("age", { required: "Age is required", min: 1 })}
          />
          {errors.age && <span className="error">{errors.age.message}</span>}

          <label>Gender*:</label>
          <select {...register("gender", { required: "Gender is required" })}>
            <option value="">Select gender</option>
            <option value="male">M</option>
            <option value="female">F</option>
            <option value="other">O</option>
          </select>
          {errors.gender && (
            <span className="error">{errors.gender.message}</span>
          )}

          <label>Email*:</label>
          <input
            type="email"
            {...register("email", { required: "Email is required" })}
          />
          {errors.email && (
            <span className="error">{errors.email.message}</span>
          )}

          <label>Phone*:</label>
          <input {...register("phone", { required: "Phone is required" })} />
          {errors.phone && (
            <span className="error">{errors.phone.message}</span>
          )}

          <label>Username*:</label>
          <input
            {...register("username", { required: "Username is required" })}
          />
          {errors.username && (
            <span className="error">{errors.username.message}</span>
          )}

          <label>Password*:</label>
          <input
            type="password"
            {...register("password", { required: "Password is required" })}
          />
          {errors.password && (
            <span className="error">{errors.password.message}</span>
          )}

          <label>Birth Date*:</label>
          <input
            type="date"
            {...register("birthDate", { required: "Birth date is required" })}
          />
          {errors.birthDate && (
            <span className="error">{errors.birthDate.message}</span>
          )}

          <label>Blood Group:</label>
          <input {...register("bloodGroup")} />

          <label>Height (cm):</label>
          <input type="number" {...register("height")} />

          <label>Weight (kg):</label>
          <input type="number" {...register("weight")} />

          <label>Eye Color:</label>
          <input {...register("eyeColor")} />

          {/* Hair Information */}
          <h2>Hair Information</h2>
          <label>Hair Color:</label>
          <input {...register("hair.color")} />

          <label>Hair Type:</label>
          <input {...register("hair.type")} />

          {/* Address Information */}
          <h2>Address Information</h2>
          <label>Street Address:</label>
          <input {...register("address.address")} />

          <label>City:</label>
          <input {...register("address.city")} />

          <label>State:</label>
          <input {...register("address.state")} />

          <label>Postal Code:</label>
          <input {...register("address.postalCode")} />

          <label>Country:</label>
          <input {...register("address.country")} />

          <label>Latitude:</label>
          <input
            type="number"
            step="any"
            {...register("address.coordinates.lat")}
          />

          <label>Longitude:</label>
          <input
            type="number"
            step="any"
            {...register("address.coordinates.lng")}
          />

          {/* Bank Information */}
          <h2>Bank Information</h2>
          <label>Card Expire:</label>
          <input {...register("bank.cardExpire")} />

          <label>Card Number:</label>
          <input {...register("bank.cardNumber")} />

          <label>Card Type:</label>
          <input {...register("bank.cardType")} />

          <label>Currency:</label>
          <input {...register("bank.currency")} />

          <label>IBAN:</label>
          <input {...register("bank.iban")} />

          {/* Company Information */}
          <h2>Company Information</h2>
          <label>Department:</label>
          <input {...register("company.department")} />

          <label>Company Name:</label>
          <input {...register("company.name")} />

          <label>Title:</label>
          <input {...register("company.title")} />

          {/* Company Address */}
          <h3>Company Address</h3>
          <label>Street Address:</label>
          <input {...register("company.address.address")} />

          <label>City:</label>
          <input {...register("company.address.city")} />

          <label>State:</label>
          <input {...register("company.address.state")} />

          <label>Postal Code:</label>
          <input {...register("company.address.postalCode")} />

          <label>Country:</label>
          <input {...register("company.address.country")} />

          <label>Latitude:</label>
          <input
            type="number"
            step="any"
            {...register("company.address.coordinates.lat")}
          />

          <label>Longitude:</label>
          <input
            type="number"
            step="any"
            {...register("company.address.coordinates.lng")}
          />

          {/* Other Information */}
          <h2>Other Information</h2>
          <label>MAC Address:</label>
          <input {...register("macAddress")} />

          <label>University:</label>
          <input {...register("university")} />

          <label>EIN:</label>
          <input {...register("ein")} />

          <label>SSN:</label>
          <input {...register("ssn")} />

          <label>User Agent:</label>
          <input {...register("userAgent")} />

          {/* Crypto Information */}
          <h2>Crypto Information</h2>
          <label>Coin:</label>
          <input {...register("crypto.coin")} />

          <label>Wallet:</label>
          <input {...register("crypto.wallet")} />

          <label>Network:</label>
          <input {...register("crypto.network")} />

          <label>Role*:</label>
          <select {...register("role", { required: "Role is required" })}>
            <option value="">Select role</option>
            <option value="user">User</option>
            <option value="admin">Admin</option>
            <option value="moderator">Moderator</option>
          </select>
          {errors.role && <span className="error">{errors.role.message}</span>}

          <button type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Submitting..." : "Submit"}
          </button>
        </form>
      </div>
    </>
  );
};

export default CreateUser;













// import React, { useState, useEffect } from "react";
// import { useForm } from "react-hook-form";
// import "./createUser.css";
// import axios from "axios";
// import CircularProgress from "@mui/material/CircularProgress";
// import Typography from "@mui/material/Typography";
// import Box from "@mui/material/Box";

// function CircularProgressWithLabel(props) {
//   return (
//     <Box sx={{ position: 'relative', display: 'inline-flex' }}>
//       <CircularProgress variant="determinate" {...props} />
//       <Box
//         sx={{
//           top: 0,
//           left: 0,
//           bottom: 0,
//           right: 0,
//           position: 'absolute',
//           display: 'flex',
//           alignItems: 'center',
//           justifyContent: 'center',
//         }}
//       >
//         <Typography
//           variant="caption"
//           component="div"
//           sx={{ color: 'text.secondary' }}
//         >
//           {`${Math.round(props.value)}%`}
//         </Typography>
//       </Box>
//     </Box>
//   );
// }

// function CircularWithValueLabel() {
//   const [progress, setProgress] = useState(10);

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setProgress((prevProgress) =>
//         prevProgress >= 100 ? 10 : prevProgress + 10
//       );
//     }, 800);
//     return () => {
//       clearInterval(timer);
//     };
//   }, []);

//   return <CircularProgressWithLabel value={progress} />;
// }

// const CreateUser = () => {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm();

//   const [loading, setLoading] = useState(false);

//   const onSubmit = async (data) => {
//     setLoading(true);
//     try {
//       const response = await axios.post("http://localhost:5002/users", data);
//       console.log("Response:", response.data);
//       alert("User created successfully!");
//     } catch (error) {
//       console.error("Error submitting form:", error);
//       alert("Failed to create user.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="container">
//       {loading ? (
//         <div style={{ display: "flex", justifyContent: "center", marginTop: 40 }}>
//           <CircularWithValueLabel />
//         </div>
//       ) : (
//         <form onSubmit={handleSubmit(onSubmit)}>
//           <h1>Create User</h1>

//           <label>Profile Image:</label>
//           <input type="file" {...register("image", { required: true })} />

//           <label>First Name:</label>
//           <input {...register("firstName", { required: true })} />
//           {errors.firstName && <span>FirstName Required</span>}

//           <label>Last Name:</label>
//           <input {...register("lastName", { required: true })} />
//           {errors.lastName && <span>LastName Required</span>}

//           <label>Maiden Name:</label>
//           <input {...register("maidenName")} />

//           <label>Age:</label>
//           <input
//             type="number"
//             {...register("age", {
//               required: true,
//               min: { value: 19, message: "Age must be greater than 18" },
//               max: { value: 39, message: "Age must be less than 40" },
//             })}
//           />
//           {errors.age && <span>{errors.age.message}</span>}

//           <label>Gender:</label>
//           <input {...register("gender", { required: true })} />
//           {errors.gender && <span>Required</span>}

//           <label>Email:</label>
//           <input
//             type="email"
//             {...register("email", {
//               required: true,
//               pattern: /^\S+@\S+$/i,
//             })}
//           />
//           {errors.email && <span>Valid email required</span>}

//           <label>Phone:</label>
//           <input {...register("phone", { required: true })} />
//           {errors.phone && <span>Required</span>}

//           <label>Username:</label>
//           <input {...register("username", { required: true })} />
//           {errors.username && <span>Required</span>}

//           <label>Password:</label>
//           <input
//             type="password"
//             {...register("password", { required: true })}
//           />
//           {errors.password && <span>Required</span>}

//           <label>Birth Date:</label>
//           <input type="date" {...register("birthDate", { required: true })} />
//           {errors.birthDate && <span>Required</span>}

//           <label>Blood Group:</label>
//           <input {...register("bloodGroup")} />

//           <label>Height (cm):</label>
//           <input type="number" {...register("height")} />

//           <label>Weight (kg):</label>
//           <input type="number" {...register("weight")} />

//           <label>Eye Color:</label>
//           <input {...register("eyeColor")} />

//           {/* HAIR */}
//           <label>Hair Color:</label>
//           <input {...register("hair.color")} />
//           <label>Hair Type:</label>
//           <input {...register("hair.type")} />

//           {/* ADDRESS */}
//           <label>Street Address:</label>
//           <input {...register("address.address")} />
//           <label>City:</label>
//           <input {...register("address.city")} />
//           <label>State:</label>
//           <input {...register("address.state")} />
//           <label>Postal Code:</label>
//           <input {...register("address.postalCode")} />
//           <label>Country:</label>
//           <input {...register("address.country")} />

//           {/* BANK */}
//           <label>Card Number:</label>
//           <input {...register("bank.cardNumber")} />
//           <label>Card Expire:</label>
//           <input {...register("bank.cardExpire")} />
//           <label>Card Type:</label>
//           <input {...register("bank.cardType")} />

//           {/* COMPANY */}
//           <label>Company Name:</label>
//           <input {...register("company.name")} />
//           <label>Department:</label>
//           <input {...register("company.department")} />
//           <label>Title:</label>
//           <input {...register("company.title")} />

//           {/* CRYPTO */}
//           <label>Crypto Coin:</label>
//           <input {...register("crypto.coin")} />
//           <label>Wallet:</label>
//           <input {...register("crypto.wallet")} />
//           <label>Network:</label>
//           <input {...register("crypto.network")} />

//           {/* OTHERS */}
//           <label>MAC Address:</label>
//           <input {...register("macAddress")} />
//           <label>University:</label>
//           <input {...register("university")} />
//           <label>EIN:</label>
//           <input {...register("ein")} />
//           <label>SSN:</label>
//           <input {...register("ssn")} />
//           <label>User Agent:</label>
//           <input {...register("userAgent")} />
//           <label>Role:</label>
//           <input {...register("role")} />

//           <button type="submit" className="button">
//             Submit
//           </button>
//         </form>
//       )}
//     </div>
//   );
// };

// export default CreateUser;
