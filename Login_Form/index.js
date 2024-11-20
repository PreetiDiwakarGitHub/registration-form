document.getElementById('addPostBtn').addEventListener('click', function() {
    const blogSection = document.getElementById('blog-posts');

    // Create a new blog post
    const newPost = document.createElement('div');
    newPost.classList.add('blog-post');

    // Add title and content to the blog post
    const title = prompt("Enter post title:");
    const content = prompt("Enter post content:");

    // If title and content are provided, add them to the new post
    if (title && content) {
        newPost.innerHTML = `<h2>${title}</h2><p>${content}</p>`;
        blogSection.appendChild(newPost);
    } else {
        alert("Please provide both title and content.");
    }
});
