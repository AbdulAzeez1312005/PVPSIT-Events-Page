import jwt from 'jsonwebtoken';

export const generateTokenAndSetCookies = (res, userId) => {
    const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
        expiresIn: "7d",
    });

    res.cookie('token', token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production', // Ensure cookie is secure in production (HTTPS)
        sameSite: process.env.NODE_ENV === 'production' ? 'None' : 'Strict', // Use 'None' for cross-origin requests in production
        maxAge: 7 * 24 * 60 * 60 * 1000, // Cookie expires in 7 days
    });

    return token;
};
