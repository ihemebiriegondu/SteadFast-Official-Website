const hideAllEventBackdrop = (event) => {
    let allCanvases = document.querySelectorAll(".myoffcanvases");
    let navLinks = document.querySelectorAll(".nav-link")

    navLinks.forEach(link => {
        link.classList.remove("active")
    });
    allCanvases.forEach(canvas => {
        canvas.classList.remove("active")
    });
    event.target.classList.add("active")
}

const showEventBackdrop = (event) => {
    let offcanvasTarget = event.target
    let offcanvasTargetData = offcanvasTarget.dataset.myoffcanvas
    let navLinks = document.querySelectorAll(".nav-link")

    //console.log(offcanvasTarget)
    //console.log(offcanvasTargetData)
    hideAllEventBackdrop(event)

    navLinks.forEach(link => {
        link.classList.remove("active")
    });

    let eventDiv = document.getElementById(offcanvasTargetData)

    eventDiv.classList.add("active")
    offcanvasTarget.classList.add("active")
}

const showEditEventModal = (event) => {
    const button = event.target
    const eventInputs = document.querySelectorAll(".eventInput");
    const allInputs = document.querySelectorAll(".allInputs");
    const editEventForm = document.querySelector(".editEventForm")

    allInputs.forEach(input => {
        input.classList.add("d-none")
    })
    eventInputs.forEach(input => {
        input.classList.remove("d-none")
    });

    document.querySelector(".eventImg").src = button.parentElement.parentElement.children[3].src;
    document.querySelector("#titleInput").value = button.parentElement.parentElement.children[2].textContent;
    document.querySelector("#dateInput").value = button.parentElement.parentElement.children[4].textContent;
    document.getElementById("staticBackdropLabel").textContent = "Edit Event"

    document.querySelector(".editEventForm").id = button.id
    if (editEventForm.classList.contains("adminz") || editEventForm.classList.contains("staffz")) {
        editEventForm.classList.remove("adminz")
        editEventForm.classList.remove("staffz")
        editEventForm.classList.add("eventz")
    } else {
        editEventForm.classList.add("eventz")
    }
}

const showEditAdminModal = (event) => {
    const button = event.target
    const adminInputs = document.querySelectorAll(".adminInput");
    const allInputs = document.querySelectorAll(".allInputs");
    const editEventForm = document.querySelector(".editEventForm")

    allInputs.forEach(input => {
        input.classList.add("d-none")
    })
    adminInputs.forEach(input => {
        input.classList.remove("d-none")
    });

    document.querySelector(".eventImg").src = button.parentElement.parentElement.children[4].src;
    document.querySelector("#nameInput").value = button.parentElement.parentElement.children[1].textContent;
    document.querySelector("#positionInput").value = button.parentElement.parentElement.children[2].textContent;
    document.getElementById("staticBackdropLabel").textContent = "Edit Admin Info"

    document.querySelector(".editEventForm").id = button.id
    if (editEventForm.classList.contains("eventz") || editEventForm.classList.contains("staffz")) {
        editEventForm.classList.remove("eventz")
        editEventForm.classList.remove("staffz")
        editEventForm.classList.add("adminz")
    } else {
        editEventForm.classList.add("adminz")
    }
}

const showEditStaffModal = (event) => {
    const button = event.target
    const staffInputs = document.querySelectorAll(".staffInput");
    const allInputs = document.querySelectorAll(".allInputs");
    const editEventForm = document.querySelector(".editEventForm")

    allInputs.forEach(input => {
        input.classList.add("d-none")
    })
    staffInputs.forEach(input => {
        input.classList.remove("d-none")
    });

    document.querySelector(".eventImg").src = button.parentElement.parentElement.children[5].src;
    document.querySelector("#nameInput").value = button.parentElement.parentElement.children[0].textContent;
    document.querySelector("#phoneInput").value = button.parentElement.parentElement.children[1].textContent;
    document.querySelector("#emailInput").value = button.parentElement.parentElement.children[2].textContent;
    document.getElementById("staticBackdropLabel").textContent = "Edit Staff Info"

    document.querySelector(".editEventForm").id = button.id
    if (editEventForm.classList.contains("eventz") || editEventForm.classList.contains("adminz")) {
        editEventForm.classList.remove("eventz")
        editEventForm.classList.remove("adminz")
        editEventForm.classList.add("staffz")
    } else {
        editEventForm.classList.add("staffz")
    }
}

const showDeleteEventModal = (event) => {
    const button = event.target

    document.querySelector(".deleteEventButton").id = button.id
    //console.log(document.querySelector(".deleteEventButton").id)
}