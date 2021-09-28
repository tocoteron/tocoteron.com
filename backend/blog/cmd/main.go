package main

import (
	"log"

	"tocoteron.com/blog/shared"
)

func main() {
	log.Fatalln(shared.EchoServer.Start(":8080"))
}
