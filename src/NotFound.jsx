import React from 'react';
import { motion } from 'framer-motion';
import './NotFound.css'; // للاستايلات

const NotFound = () => {
    return (
        <motion.div
            className="not-found-container"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
        >
            <motion.h1
                className="not-found-title"
                initial={{ x: '-100vw' }}
                animate={{ x: 0 }}
                transition={{ type: 'spring', stiffness: 120 }}
            >
                404
            </motion.h1>
            <motion.h2
                className="not-found-message"
                initial={{ x: '100vw' }}
                animate={{ x: 0 }}
                transition={{ type: 'spring', stiffness: 120, delay: 0.2 }}
            >
                Oops! Page Not Found
            </motion.h2>
            <motion.p
                className="not-found-description"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
            >
                The page you're looking for might have been removed or is temporarily unavailable.
            </motion.p>
            <motion.a
                href="/"
                className="back-home-btn"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
            >
                Back to Home
            </motion.a>
        </motion.div>
    );
};

export default NotFound;
