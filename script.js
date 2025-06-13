function toggleContent(contentId) {
    var content = document.getElementById(contentId);
    content.style.display = (content.style.display === "none") ? "block" : "none";
}

function filterStories() {
    const search = document.getElementById("search").value.toLowerCase();
    const stories = document.getElementsByClassName("story");
    for (let story of stories) {
        const text = story.innerText.toLowerCase();
        story.style.display = text.includes(search) ? "block" : "none";
    }
}

document.getElementById("search").addEventListener("input", filterStories);

document.getElementById("story-form").addEventListener("submit", function(event) {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const storyText = document.getElementById("story").value;

    const storyHTML = '<div class="story"><h3>' + name + '</h3><p><strong>Email:</strong> ' + email + '</p><p><strong>Story:</strong> ' + storyText + '</p></div>';
    const container = document.getElementById("impact-stories");
    container.insertAdjacentHTML('beforeend', storyHTML);
    document.getElementById("submission-feedback").textContent = "Thank you for sharing your story!";

    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("story").value = "";

    // Firebase integration point (stub)
    // Example: firebase.database().ref("stories").push({ name, email, storyText });
});
