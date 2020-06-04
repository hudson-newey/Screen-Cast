package main

import (
	"fmt"
	"bufio"
	"net/http"
	"os"
	"io/ioutil"
)

func main() {
	fmt.Println("Screen-Cast server IP,")
	server := input()
	clearScreen()

	fmt.Println("Website to Send to Screen-Cast,")
	for {
		sendMessage(server, input())
	}
}

func input() string {
	scanner := bufio.NewScanner(os.Stdin)
	var text string
	scanner.Scan()
	text = scanner.Text()

	return text
}

func sendMessage(server string, content string) {
	url := server + "/?q=" + content
	resp, err := http.Get(url)
	// handle the error if there is one
	if err != nil {
		panic(err)
	}
	defer resp.Body.Close()

	// reads html as a slice of bytes
	ioutil.ReadAll(resp.Body)
}

func clearScreen() {print("\033[H\033[2J")}