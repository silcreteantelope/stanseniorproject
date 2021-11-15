const PROXY_CONFIG = [
    {
        context: [
		"/login",
		"/addffile",
		"/pullffile",
		"/editffile"
        ],
        target: "http://localhost:3000",
        secure: false
    }
]

module.exports = PROXY_CONFIG;