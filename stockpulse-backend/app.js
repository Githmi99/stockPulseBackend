const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const connectDB = require('./config/db'); // Import the database connection function

const componentRoutes = require('./routes/components');
const purchaseRoutes = require('./routes/purchaseRoutes');
const usersRoutes = require('./routes/users');
const authRoutes = require('./routes/auth');

const app = express();

// Connect to Database
connectDB();

app.use(bodyParser.json());
app.use(cors());
app.use('/api/purchases', purchaseRoutes);
app.use('/api/users', usersRoutes);
app.use('/api/components', componentRoutes);
app.use('/api/auth', authRoutes);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
