import express from 'express';
import userRoutes from '../routes/User';
import TaskRoutes from '../routes/Task';
import CheckRoutes from '../routes/Check';
import IntegrationRoutes from '../routes/Integration';
import Auth from '../routes/Auth';
import Dashboard from '../routes/Dashboard';

// Initialization
let router = express.Router();

// Routes
router.use('/users', userRoutes);
router.use('/tasks', TaskRoutes);
router.use('/checks', CheckRoutes);
router.use('/auth', Auth);
router.use('/integrations', IntegrationRoutes);
router.use('/dashboard', Dashboard);

export default router;