const express = require('express');
require('dotenv').config({ path: './config/.env' })
const cors = require('cors');
require('../config/database');
const UserRoutes = require('./routes/User.routes');
const AuthentificationRoutes = require('./routes/Authentification.routes');
const CommentRoutes = require('./routes/Comment.routes');

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.use('/api/user', UserRoutes);
app.use('/api/auth', AuthentificationRoutes);
app.use('/api/:post_id/comments', CommentRoutes);

app.listen(process.env.PORT, () => console.log(`server listenig on http://localhost:${process.env.PORT}`));