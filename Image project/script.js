document.getElementById('search-button').addEventListener('click', function() {
    const feeling = document.getElementById('feeling-input').value;
    if (feeling) {
        fetchImages(feeling);
    }
});

function fetchImages(query) {
    const apiKey = 'GLr4K8EkAHuxF6Pqhl-hO45qLtezDSRbyVFv0Bnnozw';
    const url = `https://api.unsplash.com/search/photos?query=${encodeURIComponent(query)}&client_id=${apiKey}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            const imagesContainer = document.getElementById('images-container');
            imagesContainer.innerHTML = '';

            if (data.results.length > 0) {
                data.results.forEach(image => {
                    const imgElement = document.createElement('img');
                    imgElement.src = image.urls.small;
                    imagesContainer.appendChild(imgElement);
                });
            } else {
                imagesContainer.innerHTML = '<p>No images found for this feeling.</p>';
            }
        })
        .catch(error => {
            console.error('Error fetching images:', error);
        });
}
