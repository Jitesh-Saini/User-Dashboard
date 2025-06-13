
// import Fastify from 'fastify';
// import cors from '@fastify/cors';
// import multipart from '@fastify/multipart';
// import fastifyStatic from '@fastify/static';
// import dbConnector from './db.js';
// import fs from 'fs';
// import path from 'path';

// const fastify = Fastify({ logger: true });

// await fastify.register(cors);
// await fastify.register(dbConnector);
// await fastify.register(multipart);

// // Serve static files from /uploads
// const uploadDir = path.join(process.cwd(), 'uploads');
// if (!fs.existsSync(uploadDir)) {
//   fs.mkdirSync(uploadDir);
// }

// await fastify.register(fastifyStatic, {
//   root: uploadDir,
//   prefix: '/uploads/',
// });

// const collection = fastify.mongo.db.collection('users');
// const blogsCollection = fastify.mongo.db.collection('blogs');


// fastify.get("/", async function (req, reply) {
//   const result = await collection.find().toArray();
//   reply.send({
//     users: result,
//     total: result.length,
//     skip: 0,
//     limit: 30,
//   });
// });

// fastify.get("/user/:userId", async function (req, reply) {
//   const { ObjectId } = fastify.mongo;
//   const id = new ObjectId(req.params.userId);
//   const result = await collection.findOne({ _id: id });
//   if (!result) {
//     reply.status(404).send({ message: "User Not Found" });
//     return;
//   }
//   reply.send({ data: result, message: "User Found" });
// });

// fastify.post("/users", async function (req, reply) {
//   const parts = req.parts();
//   const user = {};
//   let imagePath = "";

//   for await (const part of parts) {
//     if (part.file) {
//       const filename = Date.now() + "-" + part.filename;
//       const filePath = path.join(uploadDir, filename);
//       await part.file.pipe(fs.createWriteStream(filePath));
//       imagePath = `uploads/${filename}`;
//     } else {
//       const keys = part.fieldname.split('.');
//       let obj = user;
//       while (keys.length > 1) {
//         const key = keys.shift();
//         obj[key] = obj[key] || {};
//         obj = obj[key];
//       }
//       obj[keys[0]] = part.value;
//     }
//   }

//   user.image = imagePath;
//   user.createdAt = new Date();
//   user.updatedAt = new Date();

//   const result = await collection.insertOne(user);
//   reply.send({ data: result, message: "User Added Successfully" });
// });





// fastify.get("/blogs", async function (req, reply) {
//   const blogs = await blogsCollection.find().toArray();
//   reply.send({ blogs });
// });

// fastify.get("/blogs/:blogId", async function (req, reply) {
//   const { ObjectId } = fastify.mongo;
//   const id = new ObjectId(req.params.blogId);
//   const blog = await blogsCollection.findOne({ _id: id });
//   if (!blog) return reply.status(404).send({ message: "Blog not found" });
//   reply.send({ blog });
// });

// fastify.post("/blogs", async function (req, reply) {
//   const parts = req.parts();
//   const blog = {};
//   let imagePath = "";

//   for await (const part of parts) {
//     if (part.file) {
//       const filename = Date.now() + "-" + part.filename;
//       const filePath = path.join(uploadDir, filename);
//       await part.file.pipe(fs.createWriteStream(filePath));
//       imagePath = `uploads/${filename}`;
//     } else {
//       const keys = part.fieldname.split('.');
//       let obj = blog;
//       while (keys.length > 1) {
//         const key = keys.shift();
//         obj[key] = obj[key] || {};
//         obj = obj[key];
//       }
//       obj[keys[0]] = part.value;
//     }
//   }

//   blog.image = imagePath;
//   const result = await blogsCollection.insertOne(blog);
//   reply.send({ data: result, message: "Blog Added Successfully" });
// });





// fastify.listen({ port: 5002 }, function (err, address) {
//   if (err) {
//     fastify.log.error(err);
//     process.exit(1);
//   }
//   fastify.log.info(`Server listening on ${address}`);
// });









// // server.js
// import Fastify from 'fastify';
// import cors from '@fastify/cors';
// import multipart from '@fastify/multipart';
// import fastifyStatic from '@fastify/static';
// import dbConnector from './db.js';
// import fs from 'fs';
// import path from 'path';

// const fastify = Fastify({ logger: true });

// // ✅ Register plugins
// await fastify.register(cors, {
//   origin: '*',
//   methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS']
// });
// await fastify.register(dbConnector);
// await fastify.register(multipart);

// // ✅ Setup uploads directory
// const uploadDir = path.join(process.cwd(), 'uploads');
// if (!fs.existsSync(uploadDir)) {
//   fs.mkdirSync(uploadDir);
// }

// await fastify.register(fastifyStatic, {
//   root: uploadDir,
//   prefix: '/uploads/',
// });

// // ✅ MongoDB collections
// const usersCollection = fastify.mongo.db.collection('users');
// const blogsCollection = fastify.mongo.db.collection('blogs');
// const tagsCollection = fastify.mongo.db.collection('tags');

// // ---------------------- USERS ----------------------

// fastify.get("/", async function (req, reply) {
//   const users = await usersCollection.find().toArray();
//   reply.send({ users, total: users.length, skip: 0, limit: 30 });
// });

// fastify.get("/user/:userId", async function (req, reply) {
//   const { ObjectId } = fastify.mongo;
//   const id = new ObjectId(req.params.userId);
//   const user = await usersCollection.findOne({ _id: id });

//   if (!user) return reply.status(404).send({ message: "User Not Found" });
//   reply.send({ data: user, message: "User Found" });
// });

// fastify.post("/users", async function (req, reply) {
//   const parts = req.parts();
//   const user = {};
//   let imagePath = "";

//   for await (const part of parts) {
//     if (part.file) {
//       const filename = Date.now() + "-" + part.filename;
//       const filePath = path.join(uploadDir, filename);
//       await part.file.pipe(fs.createWriteStream(filePath));
//       imagePath = `uploads/${filename}`;
//     } else {
//       const keys = part.fieldname.split('.');
//       let obj = user;
//       while (keys.length > 1) {
//         const key = keys.shift();
//         obj[key] = obj[key] || {};
//         obj = obj[key];
//       }
//       obj[keys[0]] = part.value;
//     }
//   }

//   user.image = imagePath;
//   user.createdAt = new Date();
//   user.updatedAt = new Date();

//   const result = await usersCollection.insertOne(user);
//   reply.send({ data: result, message: "User Added Successfully" });
// });

// // ---------------------- BLOGS ----------------------

// fastify.get("/blogs", async function (req, reply) {
//   const blogs = await blogsCollection.find().toArray();
//   reply.send({ blogs });
// });

// fastify.get("/blogs/:blogId", async function (req, reply) {
//   const { ObjectId } = fastify.mongo;
//   const id = new ObjectId(req.params.blogId);
//   const blog = await blogsCollection.findOne({ _id: id });
//   if (!blog) return reply.status(404).send({ message: "Blog not found" });
//   reply.send({ blog });
// });

// fastify.post("/blogs", async function (req, reply) {
//   const parts = req.parts();
//   const blog = {};
//   let imagePath = "";

//   for await (const part of parts) {
//     if (part.file) {
//       const filename = Date.now() + "-" + part.filename;
//       const filePath = path.join(uploadDir, filename);
//       await part.file.pipe(fs.createWriteStream(filePath));
//       imagePath = `uploads/${filename}`;
//     } else {
//       const keys = part.fieldname.split('.');
//       let obj = blog;
//       while (keys.length > 1) {
//         const key = keys.shift();
//         obj[key] = obj[key] || {};
//         obj = obj[key];
//       }
//       obj[keys[0]] = part.value;
//     }
//   }

//   blog.image = imagePath;
//   const result = await blogsCollection.insertOne(blog);
//   reply.send({ data: result, message: "Blog Added Successfully" });
// });

// // ---------------------- TAGS ----------------------

// fastify.get("/tags", async function (req, reply) {
//   const tags = await tagsCollection.find().toArray();
//   reply.send({ tags });
// });

// fastify.post("/tags", async function (req, reply) {
//   const { name } = await req.body;
//   if (!name) {
//     return reply.status(400).send({ message: "Tag name is required" });
//   }

//   const tag = {
//     name: name.trim(),
//     createdAt: new Date(),
//     updatedAt: new Date()
//   };

//   const result = await tagsCollection.insertOne(tag);
//   reply.send({ tag: { _id: result.insertedId, ...tag }, message: "Tag created successfully" });
// });
// fastify.put("/tags/:id", async function (req, reply) {
//   const { ObjectId } = fastify.mongo;
//   const id = req.params.id;
//   const { name } = await req.body;

//   if (!ObjectId.isValid(id)) {
//     return reply.status(400).send({ message: "Invalid tag ID format" });
//   }

//   if (!name) {
//     return reply.status(400).send({ message: "Tag name is required" });
//   }

//   const updatedTag = await tagsCollection.findOneAndUpdate(
//     { _id: new ObjectId(id) },
//     { $set: { name: name.trim(), updatedAt: new Date() } },
//     { returnDocument: "after" }
//   );

//   if (!updatedTag.value) {
//     return reply.status(404).send({ message: "Tag not found" });
//   }

//   reply.send({ tag: updatedTag.value, message: "Tag updated successfully" });
// });


// fastify.delete("/tags/:id", async function (req, reply) {
//   const { ObjectId } = fastify.mongo;
//   const id = req.params.id;

//   if (!ObjectId.isValid(id)) {
//     return reply.status(400).send({ message: "Invalid tag ID format" });
//   }

//   const deleted = await tagsCollection.deleteOne({ _id: new ObjectId(id) });

//   if (deleted.deletedCount === 0) {
//     return reply.status(404).send({ message: "Tag not found" });
//   }

//   reply.send({ message: "Tag deleted successfully" });
// });

// // ---------------------- SERVER ----------------------

// fastify.listen({ port: 5002 }, function (err, address) {
//   if (err) {
//     fastify.log.error(err);
//     process.exit(1);
//   }
//   fastify.log.info(`🚀 Server listening on ${address}`);
// });





// // server.js
// import Fastify from 'fastify';
// import cors from '@fastify/cors';
// import multipart from '@fastify/multipart';
// import fastifyStatic from '@fastify/static';
// import dbConnector from './db.js';
// import fs from 'fs';
// import path from 'path';

// const fastify = Fastify({ logger: true });

// // 🔗 CORS Setup
// await fastify.register(cors, {
//   origin: '*',
//   methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS']
// });

// await fastify.register(dbConnector);
// await fastify.register(multipart);

// // 📁 Uploads Directory
// const uploadDir = path.join(process.cwd(), 'uploads');
// if (!fs.existsSync(uploadDir)) fs.mkdirSync(uploadDir);

// await fastify.register(fastifyStatic, {
//   root: uploadDir,
//   prefix: '/uploads/',
// });

// // 🧩 MongoDB Collections
// const users = fastify.mongo.db.collection('users');
// const blogs = fastify.mongo.db.collection('blogs');
// const tags = fastify.mongo.db.collection('tags');

// // ---------------------- USERS ----------------------

// fastify.get("/", async (_, reply) => {
//   const list = await users.find().toArray();
//   reply.send({ users: list, total: list.length });
// });

// fastify.get("/user/:userId", async (req, reply) => {
//   const { ObjectId } = fastify.mongo;
//   const id = new ObjectId(req.params.userId);
//   const user = await users.findOne({ _id: id });

//   if (!user) return reply.status(404).send({ message: "User Not Found" });
//   reply.send({ data: user, message: "User Found" });
// });

// fastify.post("/users", async (req, reply) => {
//   const parts = req.parts();
//   const user = {};
//   let imagePath = "";

//   for await (const part of parts) {
//     if (part.file) {
//       const filename = Date.now() + "-" + part.filename;
//       const filePath = path.join(uploadDir, filename);
//       await part.file.pipe(fs.createWriteStream(filePath));
//       imagePath = `uploads/${filename}`;
//     } else {
//       const keys = part.fieldname.split('.');
//       let obj = user;
//       while (keys.length > 1) {
//         const key = keys.shift();
//         obj[key] = obj[key] || {};
//         obj = obj[key];
//       }
//       obj[keys[0]] = part.value;
//     }
//   }

//   user.image = imagePath;
//   user.createdAt = new Date();
//   user.updatedAt = new Date();

//   const result = await users.insertOne(user);
//   reply.send({ data: result, message: "User Added Successfully" });
// });

// // ---------------------- BLOGS ----------------------

// fastify.get("/blogs", async (_, reply) => {
//   const list = await blogs.find().toArray();
//   reply.send({ blogs: list });
// });

// fastify.get("/blogs/:blogId", async (req, reply) => {
//   const { ObjectId } = fastify.mongo;
//   const id = new ObjectId(req.params.blogId);
//   const blog = await blogs.findOne({ _id: id });

//   if (!blog) return reply.status(404).send({ message: "Blog not found" });
//   reply.send({ blog });
// });

// fastify.post("/blogs", async (req, reply) => {
//   const parts = req.parts();
//   const blog = {};
//   let imagePath = "";

//   for await (const part of parts) {
//     if (part.file) {
//       const filename = Date.now() + "-" + part.filename;
//       const filePath = path.join(uploadDir, filename);
//       await part.file.pipe(fs.createWriteStream(filePath));
//       imagePath = `uploads/${filename}`;
//     } else {
//       const keys = part.fieldname.split('.');
//       let obj = blog;
//       while (keys.length > 1) {
//         const key = keys.shift();
//         obj[key] = obj[key] || {};
//         obj = obj[key];
//       }
//       obj[keys[0]] = part.value;
//     }
//   }

//   blog.image = imagePath;
//   const result = await blogs.insertOne(blog);
//   reply.send({ data: result, message: "Blog Added Successfully" });
// });

// // ---------------------- TAGS ----------------------

// // Get all tags
// fastify.get("/tags", async (_, reply) => {
//   const tagList = await tags.find().toArray();
//   reply.send({ tags: tagList });
// });

// // Create tag
// fastify.post("/tags", async (req, reply) => {
//   const { name } = await req.body;
//   if (!name) return reply.status(400).send({ message: "Tag name is required" });

//   const tag = {
//     name: name.trim(),
//     createdAt: new Date(),
//     updatedAt: new Date(),
//   };

//   const result = await tags.insertOne(tag);
//   reply.send({ tag: { _id: result.insertedId, ...tag }, message: "Tag created successfully" });
// });

// // Update tag
// fastify.put("/tags/:id", async (req, reply) => {
//   const { ObjectId } = fastify.mongo;
//   const { id } = req.params;
//   const { name } = await req.body;

//   if (!ObjectId.isValid(id)) return reply.status(400).send({ message: "Invalid tag ID format" });
//   if (!name) return reply.status(400).send({ message: "Tag name is required" });

//   const updatedTag = await tags.findOneAndUpdate(
//     { _id: new ObjectId(id) },
//     { $set: { name: name.trim(), updatedAt: new Date() } },
//     { returnDocument: 'after' }
//   );

//   if (!updatedTag.value) return reply.status(404).send({ message: "Tag not found" });

//   reply.send({ tag: updatedTag.value, message: "Tag updated successfully" });
// });

// // Delete tag
// fastify.delete("/tags/:id", async (req, reply) => {
//   const { ObjectId } = fastify.mongo;
//   const { id } = req.params;

//   if (!ObjectId.isValid(id)) return reply.status(400).send({ message: "Invalid tag ID format" });

//   const deleted = await tags.deleteOne({ _id: new ObjectId(id) });

//   if (deleted.deletedCount === 0) return reply.status(404).send({ message: "Tag not found" });

//   reply.send({ message: "Tag deleted successfully" });
// });

// // ---------------------- SERVER START ----------------------

// fastify.listen({ port: 5002 }, (err, address) => {
//   if (err) {
//     fastify.log.error(err);
//     process.exit(1);
//   }
//   fastify.log.info(`🚀 Server running at ${address}`);
// });





// server.js
import formbody from '@fastify/formbody'
import Fastify from 'fastify';
import cors from '@fastify/cors';
import multipart from '@fastify/multipart';
import fastifyStatic from '@fastify/static';
import dbConnector from './db.js';
import fs from 'fs';
import path from 'path';

const fastify = Fastify({ logger: true });

// ✅ Add JSON body parser (ye by default hota hai fastify me, lekin safe side me daal dete hain)
fastify.addContentTypeParser('application/json', { parseAs: 'string' }, function (req, body, done) {
  try {
    const json = JSON.parse(body);
    done(null, json);
  } catch (err) {
    done(err, undefined);
  }
});

// 🔗 CORS Setup
await fastify.register(cors, {
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS']
});

await fastify.register(dbConnector);
await fastify.register(formbody);
await fastify.register(multipart);

// 📁 Uploads Directory
const uploadDir = path.join(process.cwd(), 'uploads');
if (!fs.existsSync(uploadDir)) fs.mkdirSync(uploadDir);

await fastify.register(fastifyStatic, {
  root: uploadDir,
  prefix: '/uploads/',
});

// 🧩 MongoDB Collections
const users = fastify.mongo.db.collection('users');
const blogs = fastify.mongo.db.collection('blogs');
const tags = fastify.mongo.db.collection('tags');
const categories = fastify.mongo.db.collection('categories'); 

// ---------------------- USERS ----------------------

fastify.get("/", async (_, reply) => {
  const list = await users.find().toArray();
  reply.send({ users: list, total: list.length });
});

fastify.get("/user/:userId", async (req, reply) => {
  const { ObjectId } = fastify.mongo;
  const id = new ObjectId(req.params.userId);
  const user = await users.findOne({ _id: id });

  if (!user) return reply.status(404).send({ message: "User Not Found" });
  reply.send({ data: user, message: "User Found" });
});

fastify.post("/users", async (req, reply) => {
  const parts = req.parts();
  const user = {};
  let imagePath = "";

  for await (const part of parts) {
    if (part.file) {
      const filename = Date.now() + "-" + part.filename;
      const filePath = path.join(uploadDir, filename);
      await part.file.pipe(fs.createWriteStream(filePath));
      imagePath = `uploads/${filename}`;
    } else {
      const keys = part.fieldname.split('.');
      let obj = user;
      while (keys.length > 1) {
        const key = keys.shift();
        obj[key] = obj[key] || {};
        obj = obj[key];
      }
      obj[keys[0]] = part.value;
    }
  }

  user.image = imagePath;
  user.createdAt = new Date();
  user.updatedAt = new Date();

  const result = await users.insertOne(user);
  reply.send({ data: result, message: "User Added Successfully" });
});

// ---------------------- BLOGS ----------------------

fastify.get("/blogs", async (_, reply) => {
  const list = await blogs.find().toArray();
  reply.send({ blogs: list });
});

fastify.get("/blogs/:blogId", async (req, reply) => {
  const { ObjectId } = fastify.mongo;
  const id = new ObjectId(req.params.blogId);
  const blog = await blogs.findOne({ _id: id });

  if (!blog) return reply.status(404).send({ message: "Blog not found" });
  reply.send({ blog });
});
fastify.post("/blogs", async (req, reply) => {
  const parts = req.parts();
  const blog = {};
  let imagePath = "";

  for await (const part of parts) {
    if (part.file) {
      const filename = Date.now() + "-" + part.filename;
      const filePath = path.join(uploadDir, filename);
      await part.file.pipe(fs.createWriteStream(filePath));
      imagePath = `uploads/${filename}`;
    } else {
      const keys = part.fieldname.split('.');
      let obj = blog;
      while (keys.length > 1) {
        const key = keys.shift();
        obj[key] = obj[key] || {};
        obj = obj[key];
      }
      obj[keys[0]] = part.value;
    }
  }

  // 🕒 Add timestamps
  blog.image = imagePath;
  blog.createdAt = new Date();
  blog.updatedAt = new Date();

  const result = await blogs.insertOne(blog);
  reply.send({ data: result, message: "Blog Added Successfully" });
});


// ---------------------- TAGS ----------------------

// Get all tags
fastify.get("/tags", async (_, reply) => {
  const tagList = await tags.find().toArray();
  reply.send({ tags: tagList });
});

// Create tag
fastify.post("/tags", async (req, reply) => {
  const { name } = req.body;
  if (!name) return reply.status(400).send({ message: "Tag name is required" });

  const tag = {
    name: name.trim(),
    createdAt: new Date(),
    updatedAt: new Date(),
  };

  const result = await tags.insertOne(tag);
  reply.send({ tag: { _id: result.insertedId, ...tag }, message: "Tag created successfully" });
});

// Update tag
fastify.put("/tags/:id", async (req, reply) => {
  const { ObjectId } = fastify.mongo;
  const { id } = req.params;
  const name = req.body?.name;

  if (!ObjectId.isValid(id)) {
    return reply.status(400).send({ message: "Invalid tag ID format" });
  }

  if (!name) {
    return reply.status(400).send({ message: "Tag name is required" });
  }

  const updatedTag = await tags.findOneAndUpdate(
    { _id: new ObjectId(id) },
    { $set: { name: name.trim(), updatedAt: new Date() } },
    { returnDocument: "after" }
  );

  if (!updatedTag.value) {
    return reply.status(404).send({ message: "Tag not found" });
  }

  reply.send({ tag: updatedTag.value, message: "Tag updated successfully" });
});

// Delete tag
fastify.delete("/tags/:id", async (req, reply) => {
  const { ObjectId } = fastify.mongo;
  const { id } = req.params;

  if (!ObjectId.isValid(id)) return reply.status(400).send({ message: "Invalid tag ID format" });

  const deleted = await tags.deleteOne({ _id: new ObjectId(id) });

  if (deleted.deletedCount === 0) return reply.status(404).send({ message: "Tag not found" });

  reply.send({ message: "Tag deleted successfully" });
});



//--------------------------------------------------
// ✅ CATEGORIES ENDPOINTS START HERE
//--------------------------------------------------

// Get all categories
fastify.get("/categories", async (_, reply) => {
  const list = await categories.find().toArray();
  reply.send({ categories: list });
});

// Create new category
fastify.post("/categories", async (req, reply) => {
  const { name } = req.body;

  if (!name) {
    return reply.status(400).send({ message: "Category name is required" });
  }

  const category = {
    name: name.trim(),
    createdAt: new Date(),
    updatedAt: new Date(),
  };

  const result = await categories.insertOne(category);

  reply.send({
    category: { _id: result.insertedId, ...category },
    message: "Category created successfully",
  });
});

// Update category
fastify.put("/categories/:id", async (req, reply) => {
  const { ObjectId } = fastify.mongo;
  const { id } = req.params;
  const name = req.body?.name;

  if (!ObjectId.isValid(id)) {
    return reply.status(400).send({ message: "Invalid category ID" });
  }

  if (!name) {
    return reply.status(400).send({ message: "Category name is required" });
  }

  const updated = await categories.findOneAndUpdate(
    { _id: new ObjectId(id) },
    {
      $set: {
        name: name.trim(),
        updatedAt: new Date(),
      },
    },
    { returnDocument: "after" }
  );

  if (!updated.value) {
    return reply.status(404).send({ message: "Category not found" });
  }

  reply.send({
    category: updated.value,
    message: "Category updated successfully",
  });
});

// Delete category
fastify.delete("/categories/:id", async (req, reply) => {
  const { ObjectId } = fastify.mongo;
  const { id } = req.params;

  if (!ObjectId.isValid(id)) {
    return reply.status(400).send({ message: "Invalid category ID" });
  }

  const deleted = await categories.deleteOne({ _id: new ObjectId(id) });

  if (deleted.deletedCount === 0) {
    return reply.status(404).send({ message: "Category not found" });
  }

  reply.send({ message: "Category deleted successfully" });
});

//--------------------------------------------------
// ✅ CATEGORIES ENDPOINTS END HERE
//--------------------------------------------------


// ---------------------- STATS ----------------------

fastify.get("/api/stats", async (_, reply) => {
  const userCount = await users.countDocuments();
  const blogCount = await blogs.countDocuments();
  const tagCount = await tags.countDocuments();
  const categoryCount = await categories.countDocuments();
  reply.send({
    users: userCount,
    blogs: blogCount,
    tags: tagCount,
    categories: categoryCount,
  });
});


// ---------------------- SERVER START ----------------------

fastify.listen({ port: 5002 }, (err, address) => {
  if (err) {
    fastify.log.error(err);
    process.exit(1);
  }
  fastify.log.info(`🚀 Server running at ${address}`);
});
