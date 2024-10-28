//mmenu
    document.addEventListener(
        "DOMContentLoaded", () => {
            const menu = new MmenuLight(
                document.querySelector( "#menu" )
            );

            const navigator = menu.navigation();
            const drawer = menu.offcanvas();

            document.querySelector( 'a[href="#menu"]' )
                .addEventListener( 'click', ( evnt ) => {
                    evnt.preventDefault();
                    drawer.open();
                });
        }
    );

    // swiper
    var swiper = new Swiper(".mySwiper", {
        spaceBetween: 30,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      });


