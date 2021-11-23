const PROXY_CONFIG = [
    {
        context: [
		"/login",
        "/signout",
		"/addffile",
		"/pullffile",
        "/getffile",
		"/editffile"
        ],
        target: "http://localhost:3000",
        secure: false
    }
]

module.exports = PROXY_CONFIG;