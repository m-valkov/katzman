package views

import (
	"html/template"
	"net/http"

	mobiledetect "github.com/Shaked/gomobiledetect"
	"github.com/meehalkoff/loggi"
	"gitlab.com/mvalkov/katzman/lib"
)

func KlinkerHandler(w http.ResponseWriter, r *http.Request) {

	tmpl := template.New("klinker")

	detect := mobiledetect.NewMobileDetect(r, nil)
	if detect.IsMobile() {
		tmpl.ParseFiles(
			"mobile/templates/klinker.html",
			"mobile/templates/header.html",
			"mobile/templates/footer.html",
			"mobile/templates/top-panel.html",
			"mobile/templates/calc.html",
			"mobile/templates/call.html",
			"mobile/templates/about.html",
			"mobile/templates/firstPromoBlock.html",
			"mobile/templates/creditPromoBlock.html",
			"mobile/templates/lastPromoBlock.html",
			"mobile/templates/how-we-work.html",
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
			"templates/klinker/index.html",
			"templates/firstPromoBlock.html",
			"templates/klinker/summary.html",
			"templates/klinker/palitra.html",
			"templates/klinker/kachestva.html",
			"templates/klinker/schema.html",
			"templates/klinker/otkos.html",
			"templates/howWeWork.html",
			"templates/klinker/portfolio.html",
			"templates/shared/video.html",
			"templates/klinker/promo.html",
			"templates/lastPromoBlock.html",
			"templates/creditPromoBlock.html",
		)
	}
	data := lib.FirstPromoBlock{
		MaterialName: `Клинкерная плитка`,
		ID:           "klinkerPrice",
		PictureURL:   "/assets/img/promo/klinker.jpg",
		UnitName:     "кв.м.",
		YoutubeID:    "CHrMu9JZ_aY",
	}
	if err := tmpl.Execute(w, data); err != nil {
		loggi.Fatal(err)
	}
}
