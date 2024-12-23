import cors from 'cors'

const accepted_origins = [
    'http://localhost:8080',
    'http://localhost:5173',
]

export const corsMiddleware = ({ acceptedOrigins = accepted_origins } = {}) => cors({
    origin: (origin, callback) => {
        if(acceptedOrigins.includes(origin)) {
            return callback(null, true)
        }

        if(!origin) {
            return callback(null, true)
        }

        return callback(new Error('Not allowed by CORS'))
    }
})