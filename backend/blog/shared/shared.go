package shared

import (
	"github.com/labstack/echo/v4"
	"tocoteron.com/blog/handler"
)

var EchoServer *echo.Echo

func init() {
	EchoServer = echo.New()

	EchoServer.GET("/", handler.HelloHandler)
	EchoServer.GET("/posts", handler.GetPostsHandler)
	EchoServer.GET("/posts/:id", handler.GetPostHandler)
}
