function TanuloSzovegesErtekelese(erdemjegy)
{
    var SzovegesErtekeles;

    switch(erdemjegy)
    {
        case 1:
        SzovegesErtekeles='Elégtelen';
        break;
        case 2:
        SzovegesErtekeles='Elégséges';
        break;
        case 3:
        SzovegesErtekeles='Közepes';
        break;
        case 4:
        SzovegesErtekeles='Jó';
        break;
        case 5:
        SzovegesErtekeles='Jeles';
        break;
        default:
        SzovegesErtekeles='Hibás paramétert adott meg';
        break;
    }
    return SzovegesErtekeles;
}