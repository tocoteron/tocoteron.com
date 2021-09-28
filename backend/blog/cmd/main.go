package main

import (
	"log"

	"tocoteron.com/blog/shared"
)

// For local test
func main() {
	log.Fatalln(shared.EchoServer.Start(":8080"))
}
