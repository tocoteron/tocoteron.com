// For Cloud Functions
package function

import (
	"net/http"

	"tocoteron.com/blog/shared"
)

func Blog(w http.ResponseWriter, r *http.Request) {
	shared.EchoServer.ServeHTTP(w, r)
}
