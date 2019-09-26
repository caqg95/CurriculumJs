function printDiv() 
{

    var divToPrint=document.getElementById('printJS-form');

    var newWin=window.open('','Print-Window');

    newWin.document.open();

    newWin.document.write('<html><head><link rel="stylesheet" href="Style/cv.css"></head><body onload="window.print()">'+divToPrint.innerHTML+'</body></html>');

    newWin.document.close();

    setTimeout(function(){newWin.close();},10);

}