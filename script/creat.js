document.addEventListener('DOMContentLoaded', () => {
    const createPostForm = document.querySelector('#create-post-form');

    const handleCreatePost = async (e) => {
        e.preventDefault();

        const title = document.querySelector('#post-title').value;
        const image = document.querySelector('#post-image').value;
        const tag = document.querySelector('#post-tag').value;
        const description = document.querySelector('#post-description').value;

        const newPost = {
            title,
            image,
            tag,
            description
        };

        const token = localStorage.getItem('token');
        console.log('Token:', token); 

        try {
            const response = await fetch('https://blog-post-production-b61c.up.railway.app/api/v1/blogs', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}` 
                },
                body: JSON.stringify(newPost)
            });

            const data = await response.json();
            
            if (response.ok) {
                alert('Post created successfully!');
                createPostForm.reset();
            } else {
                alert('Failed to create post: ' + data.message);
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    createPostForm.addEventListener('submit', handleCreatePost);
});
