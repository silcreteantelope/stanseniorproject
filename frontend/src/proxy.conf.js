const PROXY_CONFIG = [
    {
        context: [
            "/login",
            "/addffile",
	    "/pullffile"
        ],
        target: "http://localhost:3000",
        secure: false
    }
]

module.exports = PROXY_CONFIG;