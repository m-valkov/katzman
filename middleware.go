// advanced-middleware.go
package main

import (
	"net/http"
	"time"

	"fmt"

	"github.com/meehalkoff/loggi"
)

type Middleware func(http.HandlerFunc) http.HandlerFunc

// Logging logs all requests with its path and the time it took to process
func Logging() Middleware {

	// Create a new Middleware
	return func(f http.HandlerFunc) http.HandlerFunc {

		// Define the http.HandlerFunc
		return func(w http.ResponseWriter, r *http.Request) {

			// Do middleware things
			start := time.Now()

			remoteAddr := r.RemoteAddr
			forwarded := r.Header.Get("X-Forwarded-For")
			if forwarded != "" {
				remoteAddr = forwarded
			}

			defer func() {
				fmt.Printf("{\"path\":\"%s\", \"remote_ip\":\"%s\", \"user_agent\":\"%s\", \"req_time\":\"%s\"}\n", r.URL.Path, remoteAddr, r.UserAgent(), time.Since(start))
			}()

			f(w, r)
		}
	}
}

// Logging logs all requests with its path and the time it took to process
func SessionChecker() Middleware {

	// Create a new Middleware
	return func(f http.HandlerFunc) http.HandlerFunc {

		// Define the http.HandlerFunc
		return func(w http.ResponseWriter, r *http.Request) {

			// Do middleware things
			// start := time.Now()
			// defer func() { loggi.Info(r.URL.Path, r.RemoteAddr, time.Since(start)) }()
			loggi.Debug("session checker")

			// Call the next middleware/handler in chain
			f(w, r)
		}
	}
}

// Method ensures that url can only be requested with a specific method, else returns a 400 Bad Request
func Method(m string) Middleware {

	// Create a new Middleware
	return func(f http.HandlerFunc) http.HandlerFunc {

		// Define the http.HandlerFunc
		return func(w http.ResponseWriter, r *http.Request) {

			// Do middleware things
			if r.Method != m {
				http.Error(w, http.StatusText(http.StatusBadRequest), http.StatusBadRequest)
				return
			}

			// Call the next middleware/handler in chain
			f(w, r)
		}
	}
}

// Chain applies middlewares to a http.HandlerFunc
func Chain(f http.HandlerFunc, middlewares ...Middleware) http.HandlerFunc {
	for _, m := range middlewares {
		f = m(f)
	}
	return f
}
