function load_sub_nav(url, button) {
    // Remove 'active' class from all buttons in nav
    var buttons = document.querySelectorAll('.nav button');
    buttons.forEach(function(btn) {
        btn.classList.remove('active');
    });

    // Add 'active' class to the clicked button in nav
    button.classList.add('active');

    // Fetch and load the sub_nav buttons
    fetch(url)
        .then(response => response.json())
        .then(data => {
            const nav2 = document.getElementById('sub_nav');
            nav2.innerHTML = ''; // Clear existing buttons

            // Create buttons for sub_nav
            data.buttons.forEach((btnData, index) => {
                const btn = document.createElement('button');
                btn.textContent = btnData.text;
                btn.onclick = function() {
                    loadContent(btnData.contentUrl, btnData.content2Url, this);
                };
                nav2.appendChild(btn);

                // Automatically click the first button
                if (index === 0) {
                    btn.classList.add('active'); // Make the first button active by default
                    loadContent(btnData.contentUrl, btnData.content2Url, btn); // Load content for the first button
                }
            });
        })
        .catch(error => console.error('Error loading sub_nav content:', error));
}

function loadContent(url1, url2, button) {
    // Remove 'active' class from all buttons in sub_nav
    var buttons = document.querySelectorAll('.sub_nav button');
    buttons.forEach(function(btn) {
        btn.classList.remove('active');
    });

    // Add 'active' class to the clicked button in sub_nav
    button.classList.add('active');

    // Fetch and load the content
    fetch(url1)
        .then(response => response.text())
        .then(data => {
            document.getElementById('content').innerHTML = data;
        })
        .catch(error => console.error('Error loading content:', error));

    // Fetch and load the second content
    fetch(url2)
        .then(response => response.text())
        .then(data => {
            document.getElementById('content-2').innerHTML = data;
        })
        .catch(error => console.error('Error loading content 2:', error));
}

            // Add event listener to simulate click on first button after page load
    window.addEventListener('DOMContentLoaded', function() {
        const firstButton = document.getElementById('btn1');
        firstButton.click();
    });