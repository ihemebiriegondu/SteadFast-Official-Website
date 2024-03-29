//backdrops
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


//modals
const showAddEventFunction = () => {
    let addForm = document.getElementById("addEventForm");
    const eventInputs = document.querySelectorAll(".eventInput");
    const allInputs = document.querySelectorAll(".allInputs");

    document.getElementById('staticBackdropLabel2').textContent = "Add New Event"

    allInputs.forEach(input => {
        input.classList.add("d-none")
    })
    eventInputs.forEach(input => {
        input.classList.remove("d-none")
    });

    if (document.querySelector(".img-div").classList.contains("d-none")) {
        document.querySelector(".img-div").classList.remove("d-none")
    }

    if (addForm.classList.contains("addStaff") || addForm.classList.contains("addStudent") || addForm.classList.contains('addNews')) {
        addForm.classList.remove("addStaff")
        addForm.classList.remove("addStudent")
        addForm.classList.remove('addNews')
        addForm.classList.add("addEvent")
    } else {
        addForm.classList.add("addEvent")
    }
}

const showAddStaffFunction = () => {
    let addForm = document.getElementById("addEventForm");
    const staffInputs = document.querySelectorAll(".staffInput");
    const allInputs = document.querySelectorAll(".allInputs");

    document.getElementById('staticBackdropLabel2').textContent = "Add Staff"

    allInputs.forEach(input => {
        input.classList.add("d-none")
    })
    staffInputs.forEach(input => {
        input.classList.remove("d-none")
    });

    if (document.querySelector(".img-div").classList.contains("d-none")) {
        document.querySelector(".img-div").classList.remove("d-none")
    }

    if (addForm.classList.contains("addEvent") || addForm.classList.contains("addStudent") || addForm.classList.contains('addNews')) {
        addForm.classList.remove("addEvent")
        addForm.classList.remove("addStudent")
        addForm.classList.remove('addNews')
        addForm.classList.add("addStaff")
    } else {
        addForm.classList.add("addStaff")
    }
}

const showAddStudentFunction = () => {
    let addForm = document.getElementById("addEventForm");
    const studentInputs = document.querySelectorAll(".studentInput");
    const allInputs = document.querySelectorAll(".allInputs");

    document.getElementById('staticBackdropLabel2').textContent = "Add Student"

    allInputs.forEach(input => {
        input.classList.add("d-none")
    })
    studentInputs.forEach(input => {
        input.classList.remove("d-none")
    });

    document.querySelector(".img-div").classList.add("d-none")

    if (addForm.classList.contains("addEvent") || addForm.classList.contains("addStaff") || addForm.classList.contains('addNews')) {
        addForm.classList.remove("addEvent")
        addForm.classList.remove("addStaff")
        addForm.classList.remove('addNews')
        addForm.classList.add("addStudent")
    } else {
        addForm.classList.add("addStudent")
    }
}

const showAddNewsFunction = () => {
    let addForm = document.getElementById("addEventForm");
    const newsInputs = document.querySelectorAll(".newsInput");
    const allInputs = document.querySelectorAll(".allInputs");

    document.getElementById('staticBackdropLabel2').textContent = "Add News"

    allInputs.forEach(input => {
        input.classList.add("d-none")
    })
    newsInputs.forEach(input => {
        input.classList.remove("d-none")
    });

    if (document.querySelector(".img-div").classList.contains("d-none")) {
        document.querySelector(".img-div").classList.remove("d-none")
    }

    if (addForm.classList.contains("addStaff") || addForm.classList.contains("addStudent") || addForm.classList.contains('addEvent')) {
        addForm.classList.remove("addStaff")
        addForm.classList.remove("addStudent")
        addForm.classList.remove("addEvent")
        addForm.classList.add('addNews')
    } else {
        addForm.classList.add('addNews')
    }
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
    if (editEventForm.classList.contains("eventz") || editEventForm.classList.contains("staffz") || editEventForm.classList.contains("newz")) {
        editEventForm.classList.remove("eventz")
        editEventForm.classList.remove("staffz")
        editEventForm.classList.remove("newz")
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
    if (editEventForm.classList.contains("eventz") || editEventForm.classList.contains("adminz") || editEventForm.classList.contains("newz")) {
        editEventForm.classList.remove("eventz")
        editEventForm.classList.remove("adminz")
        editEventForm.classList.remove("newz")
        editEventForm.classList.add("staffz")
    } else {
        editEventForm.classList.add("staffz")
    }
}

const showEditNewsModal = (event) => {
    const button = event.target
    const newsInputs = document.querySelectorAll(".newsInput");
    const allInputs = document.querySelectorAll(".allInputs");
    const editEventForm = document.querySelector(".editEventForm")

    allInputs.forEach(input => {
        input.classList.add("d-none")
    })
    newsInputs.forEach(input => {
        input.classList.remove("d-none")
    });

    document.querySelector(".eventImg").src = button.parentElement.parentElement.children[0].children[0].src;
    document.querySelector("#headlineInput").value = button.parentElement.parentElement.children[0].children[1].children[0].textContent;
    document.querySelector("#contentInput").value = button.parentElement.parentElement.children[0].children[1].children[2].textContent;
    document.getElementById("staticBackdropLabel").textContent = "Edit News"

    document.querySelector(".editEventForm").id = button.id
    if (editEventForm.classList.contains("adminz") || editEventForm.classList.contains("staffz") || editEventForm.classList.contains("eventz")) {
        editEventForm.classList.remove("adminz")
        editEventForm.classList.remove("staffz")
        editEventForm.classList.remove("eventz")
        editEventForm.classList.add("newz")
    } else {
        editEventForm.classList.add("newz")
    }
}

const showDeleteEventModal = (event) => {
    const button = event.target

    document.querySelector(".deleteEventButton").id = button.id
    //console.log(document.querySelector(".deleteEventButton").id)

    let deleteQuestion = document.querySelector(".deleteQuestion");
    deleteQuestion.textContent = "Are you sure you want to delete this event?"

    let deleteEventButton = document.querySelector(".deleteEventButton");
    if (deleteEventButton.classList.contains("setStaff") || deleteEventButton.classList.contains("setStudent") || deleteEventButton.classList.contains("setNews")) {
        deleteEventButton.classList.remove("setStaff")
        deleteEventButton.classList.remove("setStudent")
        deleteEventButton.classList.remove("setNews")
        deleteEventButton.classList.add("setEvent")
    } else {
        deleteEventButton.classList.add("setEvent")
    }
}

const showDeleteStaffModal = (event) => {
    const button = event.target

    document.querySelector(".deleteEventButton").id = button.id
    //console.log(document.querySelector(".deleteEventButton").id)

    let deleteQuestion = document.querySelector(".deleteQuestion");
    deleteQuestion.textContent = "Are you sure you want to delete this staff info?"

    let deleteEventButton = document.querySelector(".deleteEventButton");
    if (deleteEventButton.classList.contains("setEvent") || deleteEventButton.classList.contains("setStudent") || deleteEventButton.classList.contains("setNews")) {
        deleteEventButton.classList.remove("setEvent")
        deleteEventButton.classList.remove("setStudent")
        deleteEventButton.classList.remove("setNews")
        deleteEventButton.classList.add("setStaff")
    } else {
        deleteEventButton.classList.add("setStaff")
    }
}

const showDeleteStudentModal = (event) => {
    const button = event.target

    document.querySelector(".deleteEventButton").id = button.id
    //console.log(document.querySelector(".deleteEventButton").id)

    let deleteQuestion = document.querySelector(".deleteQuestion");
    deleteQuestion.textContent = "Are you sure you want to delete this student info?"

    let deleteEventButton = document.querySelector(".deleteEventButton");
    if (deleteEventButton.classList.contains("setEvent") || deleteEventButton.classList.contains("setStaff") || deleteEventButton.classList.contains("setNews")) {
        deleteEventButton.classList.remove("setEvent")
        deleteEventButton.classList.remove("setStaff")
        deleteEventButton.classList.remove("setNews")
        deleteEventButton.classList.add("setStudent")
    } else {
        deleteEventButton.classList.add("setStudent")
    }
}

const showDeleteNewsModal = (event) => {
    const button = event.target

    document.querySelector(".deleteEventButton").id = button.id
    //console.log(document.querySelector(".deleteEventButton").id)

    let deleteQuestion = document.querySelector(".deleteQuestion");
    deleteQuestion.textContent = "Are you sure you want to delete this news?"

    let deleteEventButton = document.querySelector(".deleteEventButton");
    if (deleteEventButton.classList.contains("setEvent") || deleteEventButton.classList.contains("setStaff") || deleteEventButton.classList.contains("setStudent")) {
        deleteEventButton.classList.remove("setEvent")
        deleteEventButton.classList.remove("setStaff")
        deleteEventButton.classList.remove("setStudent")
        deleteEventButton.classList.add("setNews")
    } else {
        deleteEventButton.classList.add("setNews")
    }
}