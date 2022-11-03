package main

import (
	"io"
	"log"
	"net/http"
	"io/ioutil"
)
func main() {
        // Set routing rules
        http.HandleFunc("/", home)

        //Use the default DefaultServeMux.
				log.Println("Started Server on Port :8081")
        err := http.ListenAndServe(":8081", nil)
        if err != nil {
					log.Fatal(err)
        }
}

func home(w http.ResponseWriter, r *http.Request) {
	programName := "index.html"
	io.WriteString(w, readFile(programName))
}

func readFile(fileName string) string {
	data, err := ioutil.ReadFile(fileName)
    if err != nil {
        return "Error 404, File not Found!"
    }
    
	return string(data)
}
