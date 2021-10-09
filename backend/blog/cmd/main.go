package main

import (
	"fmt"
	"log"
	"os"
	"strconv"

	"tocoteron.com/blog/shared"
)

// For local test
func main() {
	portEnv := os.Getenv("PORT")
	if portEnv == "" {
		fmt.Println("Specify the port by $PORT environment variable")
		os.Exit(1)
	}

	port, err := strconv.ParseUint(portEnv, 10, 16)
	if err != nil {
		fmt.Println(err)
		os.Exit(1)
	}

	log.Fatalln(shared.EchoServer.Start(fmt.Sprintf(":%d", port)))
}
