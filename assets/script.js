
const checkLength = (element,errorMessage = "This field is required", minLength =2) => {
    console.log(element.target.id)
    if (element.target.value.length < minLength) {
        document.getElementById(element.target.id).classList.add('error')
        document.getElementById(`${element.target.id}ErrorMessage`).innerText = "errorMessage"
    } else {
        document.getElementById(element.target.id).classList.remove('error')
        document.getElementById(`${element.target.id}ErrorMessage`).innerText = ""

    }
}

const validate = (e) => {
    switch(e.target.type) {
        case "text":
            checkLength(e)
            break;
        case "email":
            break;
        case "textarea":
            checkLength(e, 5)
            break;
    }
}