const showEventBackdrop = () => {
    let eventDiv = document.querySelector(".upcoming-events")

    eventDiv.classList.add("active")
}

const showEditEventModal = (event) => {
    const button = event.target

    document.querySelector(".eventImg").src = button.parentElement.parentElement.children[3].src;
    document.querySelector("#titleInput").value = button.parentElement.parentElement.children[2].textContent;
    document.querySelector("#dateInput").value = button.parentElement.parentElement.children[4].textContent;
}

const showDeleteEventModal = (event) => {
    const button = event.target

    document.querySelector(".deleteEventButton").id = button.id
    //console.log(document.querySelector(".deleteEventButton").id)
}