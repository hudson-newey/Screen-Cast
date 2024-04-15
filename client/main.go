package main

import (
	"fmt"
	"net/http"

	"github.com/a-h/templ"
)

func main() {
	const port string = ":3000"

	component := website()

	http.Handle("/", templ.Handler(component))

	fmt.Println("Listening on", port)
	if err := http.ListenAndServe(port, nil); err != nil {
		panic(err)
	}
}
