'use strict';
function Diak(Neve, Eletkor, FotoURL, SzemelyiSzamElsoKaraktere)
{
    this.Neve = Neve;
    this.Eletkor = Eletkor;
    this.FotoURL = FotoURL;
    this.SzemelyiSzamElsoKaraktere = SzemelyiSzamElsoKaraktere;
    this.getGender = function()
    {
        var result = '';
        if (this.SzemelyiSzamElsoKaraktere %2 == 1)
        {
            result = 'Valószínűleg fiú vagy';
        }
        else
        {
            result = 'Valószínűleg lány vagy';
        }
        return result;
    };
}