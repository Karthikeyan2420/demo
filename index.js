const data=document.querySelector("#box")

function clickbtn(op)
{
    let option
    switch(op)
    {
        case "1":
            option="1"
            break

        case "2":
            option="2"
            break

        case "+":
            option ="+"
            break

    }
    data.value=data.value+option
}

function submitdata()
{
    data.value=eval(data.value)
}