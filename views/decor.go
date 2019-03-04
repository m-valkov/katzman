package views

import (
	"html/template"
	"net/http"

	mobiledetect "github.com/Shaked/gomobiledetect"
	"github.com/meehalkoff/loggi"
)

func DecorHandler(w http.ResponseWriter, r *http.Request) {

	tmpl := template.New("decor")

	detect := mobiledetect.NewMobileDetect(r, nil)
	if detect.IsMobile() {
		tmpl.ParseFiles(
			"mobile/templates/decor.html",
			"mobile/templates/header.html",
			"mobile/templates/footer.html",
			"mobile/templates/top-panel.html",
			"mobile/templates/calc.html",
			"mobile/templates/call.html",
			"mobile/templates/about.html",
		)
	} else {
		tmpl.ParseFiles(
			"templates/header.html",
			"templates/footer.html",
			"templates/top-panel/top-panel.html",
			"templates/top-panel/about.html",
			"templates/top-panel/calc.html",
			"templates/top-panel/call.html",
			"templates/top-panel/main-menu.html",
			"templates/control-panel.html",
			"templates/decor/index.html",
			"templates/decor/summary.html",
			"templates/decor/palitra.html",
			"templates/decor/kachestva.html",
			"templates/decor/schema.html",
			"templates/decor/portfolio.html",
			"templates/decor/video.html",
			"templates/decor/promo.html",
		)
	}

	if err := tmpl.Execute(w, nil); err != nil {
		loggi.Fatal(err)
	}
}
