function readFromInput()
{
    text = document.getElementById("inputArea").value.toLowerCase();
    console.log(text);
    console.log(readings);
    document.getElementById("resultList").innerHTML = "";

    var symbols = "¬`¦!\"£$€%^&*()-_=+[]{};:'@#~,<.>/?\\|";

    for (var i = 0; i < text.length; i++)
    {
        text.replace(symbols[i], " ");
    }

    text = " " + text + " ";

    for (var i = 0; i < readings.length; i++)
    {
        if (
            text.includes(" " + readings[i][0].toLowerCase() + " ") ||
            text.includes(" " + readings[i][0].toLowerCase() + "s ") ||
            text.includes(" " + readings[i][0].toLowerCase() + "es ")
        ) {
            document.getElementById("resultList").innerHTML +=
                `<li><h3>${readings[i][0]}</h3><p>${readings[i][1].substring(0,1).toUpperCase() + readings[i][1].substring(1)}</p></li>`
            ;
        }
    }
}