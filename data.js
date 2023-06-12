function kupAuto()
{
    var dzisiaj = new Date();
    var dataPrzyjazdu = new Date(dzisiaj.getTime() + 7 * 24 * 60 * 60 * 1000);
    var dataPrzyjazduFormatted = dataPrzyjazdu.toLocaleDateString();

    var komunikat = "Auto zakupione, przyjedzie ono dnia " + dataPrzyjazduFormatted +", na wskazany adres. Dziękujemy za zakup!";
    alert(komunikat);
}
