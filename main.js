function selection(){
    var select = document.getElementById("cars");
    var value = select.value;

    switch (value){
        case "all":
            var divs = document.getElementsByClassName("cars");
                for (i = 0; i < divs.length; i++){
                    divs[i].style.display = "block";
                }
            break

            case "volkswagen":
                var divs = document.getElementsByClassName("cars");
                for (i = 0; i < divs.length; i++){
                    if (divs[i].classList.contains("volkswagen")) divs[i].style.display = "block";
                    else divs[i].style.display = "none";
                }
                break

            case "opel":
                var divs = document.getElementsByClassName("cars");
                for (i = 0; i < divs.length; i++){
                    if (divs[i].classList.contains("opel")) divs[i].style.display = "block";
                    else divs[i].style.display = "none";
                }
                break

            case "renault":
                var divs = document.getElementsByClassName("cars");
                for (i = 0; i < divs.length; i++){
                    if (divs[i].classList.contains("renault")) divs[i].style.display = "block";
                    else divs[i].style.display = "none";
                }
                break

            case "audi":
                var divs = document.getElementsByClassName("cars");
                for (i = 0; i < divs.length; i++){
                    if (divs[i].classList.contains("audi")) divs[i].style.display = "block";
                    else divs[i].style.display = "none";
                }
                break

            case "skoda":
                var divs = document.getElementsByClassName("cars");
                for (i = 0; i < divs.length; i++){
                    if (divs[i].classList.contains("skoda")) divs[i].style.display = "block";
                    else divs[i].style.display = "none";
                }
                break

                case "bmw":
                    var divs = document.getElementsByClassName("cars");
                    for (i = 0; i < divs.length; i++){
                        if (divs[i].classList.contains("bmw")) divs[i].style.display = "block";
                        else divs[i].style.display = "none";
                    }
                    break
            }
}
