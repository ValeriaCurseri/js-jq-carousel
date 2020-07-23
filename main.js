$(document).ready(function(){

    // 1. attivo il click sulla freccia next

    $('.next').click(function(){
        nextImage();
    });

    // 3. attivo il click sulla freccia prev

    $('.prev').click(function(){
        // prevImage();
    });

    // ***** funzioni ***** //

    // 2. scrivo la funzione per la freccia next

    function nextImage(){
        var imgActive = $('.images img.active');        // 2a. individuo l'immagine con la classe active con una variabile
        imgActive.removeClass('active');                // 2b. tolgo la classe active
        if(imgActive.hasClass('last')){                 // 2c. aggiungo la classe active all'elemento successivo
            $('.images img.first').addClass('active');      // se l'elemento è l'ultimo, aggiungo active all'elemento con classe first
        } else {
            imgActive.next().addClass('active');            // altrimenti basta usare next()
        }
    }

    // 4. scrivo la funzione per la freccia prev
    // 4a. individuo l'immagine con la classe active con una variabile
    // 4b. tolgo la classe active
    // 4c. aggiungo la classe active all'elemento precedente

    // 5. implemento la funzione della freccia next con le istruzioni per i pallini
    // 5a. individuo il pallino con la classe active con una variabile
    // 5b. tolgo la classe active
    // 5c. aggiungo la classe active all'elemento successivo

    // 6. implemento la funzione della freccia prev con le istruzioni per i pallini
    // 6a. individuo il pallino con la classe active con una variabile
    // 6b. tolgo la classe active
    // 6c. aggiungo la classe active all'elemento precedente

});
