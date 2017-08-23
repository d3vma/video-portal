const PROXY_CONFIG = [
    {
        context: [
            "/user",
            "/videos",
            "/video",
        ],
        target: "http://localhost:3000",
        secure: false,
        logLevel: "debug",
    }
]

module.exports = PROXY_CONFIG;
