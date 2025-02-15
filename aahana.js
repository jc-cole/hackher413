console.log("test")

function searchCourse() {
    let input = document.getElementById("search").value.toLowerCase();
    let courses = document.getElementsByClassName("course");
    for (let course of courses) {
        let title = course.getElementsByTagName("h3")[0].innerText.toLowerCase();
        course.style.display = title.includes(input) ? "block" : "none";
    }
}

function addComment(button) {
    let comment = prompt("Enter your comment:");
    if (comment) {
        let p = document.createElement("p");
        p.innerText = "Comment: " + comment;
        button.parentElement.appendChild(p);
    }
}