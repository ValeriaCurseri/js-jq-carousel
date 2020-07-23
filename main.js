$(document).ready(function(){

    // 1. attivo il click sulla freccia next

    $('.next').click(function(){
        nextImage();
    });

    // 3. attivo il click sulla freccia prev

    $('.prev').click(function(){
        prevImage();
    });

    // BONUS
    // Clicchiamo sui pallini e mostriamo l’immagine corrispondente
    // Generiamo i pallini con JS

    // A. creo un array delle immagini

    var immagine = $('.images img');                    // A1. identifico la serie di oggetti da trasformare in array
    var immagini = $.makeArray(immagine);               // A2. creo l'array degli oggetti identificati
    console.log(immagini);

    // B. creo un array dei pallini

    var dot = $('.nav .fa-circle');                     // B1. identifico la serie di oggetti da trasformare in array
    var dots = $.makeArray(dot);                        // B2. creo l'array degli oggetti identificati
    console.log(dots);

    // C. al click su un pallino: il pallino cliccato ottiene la class active - l'immagine con lo stesso indice del pallino cliccato ottiene la class active
    // C1. active al pallino cliccato
    // C2. active alla immagine con lo stesso indice


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
        // 5. implemento la funzione della freccia next con le istruzioni per i pallini
        var dotActive = $('.nav .fa-circle.active');    // 5a. individuo il pallino con la classe active con una variabile
        dotActive.removeClass('active');                // 5b. tolgo la classe active
        if(dotActive.hasClass('last')){                 // 5c. aggiungo la classe active all'elemento successivo
            $('.nav .fa-circle.first').addClass('active');  // se l'elemento è l'ultimo, aggiungo active all'elemento con classe first
        } else {
            dotActive.next().addClass('active');            // altrimenti basta usare next()
        }

    }

    // 4. scrivo la funzione per la freccia prev

    function prevImage(){
        var imgActive = $('.images img.active');        // 4a. individuo l'immagine con la classe active con una variabile
        imgActive.removeClass('active');                // 4b. tolgo la classe active
        if(imgActive.hasClass('first')){                // 4c. aggiungo la classe active all'elemento precedente
            $('.images img.last').addClass('active');       // se l'elemento è il primo, aggiungo active all'elemento con classe last
        } else {
            imgActive.prev().addClass('active');            // altrimenti basta usare prev()
        }
        // 6. implemento la funzione della freccia prev con le istruzioni per i pallini
        var dotActive = $('.nav .fa-circle.active');    // 6a. individuo il pallino con la classe active con una variabile
        dotActive.removeClass('active');                // 6b. tolgo la classe active
        if(dotActive.hasClass('first')){                // 6c. aggiungo la classe active all'elemento precedente
            $('.nav .fa-circle.last').addClass('active');   // se l'elemento è il primo, aggiungo active all'elemento con classe last
        } else {
            dotActive.prev().addClass('active');            // altrimenti basta usare prev()
        }
    };

});
