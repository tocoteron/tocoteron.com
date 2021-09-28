package function

import (
	"net/http"

	"tocoteron.com/blog/shared"
)

// For Cloud Functions
func Blog(w http.ResponseWriter, r *http.Request) {
	shared.EchoServer.ServeHTTP(w, r)
}
