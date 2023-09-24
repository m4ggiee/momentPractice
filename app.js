document.querySelector('div').textContent = moment().format('23-04-2006');

function convertDate() {
    const inputDate = document.getElementById("inputDate").value;
    const regex = /^\d{4}-\d{2}-\d{2}$/; 

    if (regex.test(inputDate)) {
        const formattedDate = moment(inputDate).format("DD/MM/YYYY");
        document.getElementById("outputDate").innerText = `Ваша дата народження у форматі DD/MM/YYYY: ${formattedDate}`;
        document.getElementById("error").style.display = "none";
    } else {
        document.getElementById("outputDate").innerText = "";
        document.getElementById("error").style.display = "block";
    }
}