function display(data)
{
    // console.log(data) to print the button value in the inspect
    let inp1=document.getElementById("inp1")
    // to target the inp1 display
    
    // inp1.value=data; the data will be displayed when we clicked on the button ,the data will be replaced after clicking of another btn.
    // for dispalying more than one data we use assignment operator +=
    inp1.value+=data
}
function evaluation()
{
    let a=document.getElementById("inp1").value
    console.log(a)
    let b=eval(a)
    console.log(b)
    document.getElementById("inp1").value=b
}
function ac()
{
    document.getElementById("inp1").value=""
}
function del()
{
    let num=document.getElementById("inp1")
    num.value =num.value.slice(0,-1);
    if(num.value=="")
    {
        num.value="0"
    }
}