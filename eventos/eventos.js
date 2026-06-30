function detalhes(evento){

    let texto = "";

    switch(evento){

        case "Rock in Rio":
            texto = "Festival realizado no Rio de Janeiro com grandes artistas internacionais.";
            break;

        case "Monsters of Rock":
            texto = "Festival tradicional voltado ao Hard Rock e Heavy Metal.";
            break;

        case "Bangers Open Air":
            texto = "Evento brasileiro com bandas de Heavy Metal do mundo inteiro.";
            break;

        case "João Rock":
            texto = "Maior festival dedicado ao rock nacional.";
            break;

        case "Best of Blues and Rock":
            texto = "Festival que reúne grandes nomes do blues e do rock.";
            break;
    }

    alert(texto);
}