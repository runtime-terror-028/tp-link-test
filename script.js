document.addEventListener("DOMContentLoaded", function() {
    const contentDiv = document.getElementById("content");

    // HTML structure as a string
    const htmlContent = `
        <header>
            <nav>
                <div class="logo">MyWebsite</div>
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#features">Features</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
        </header>

        <section class="hero" id="home">
            <h1>Welcome to MyWebsite</h1>
            <p>Your one-stop solution for all things awesome.</p>
            <button onclick="learnMore()">Learn More</button>
        </section>

        <section class="features" id="features">
            <h2>Features</h2>
            <div class="feature-grid">
                <div class="feature-item">
                    <h3>Feature One</h3>
                    <p>Short description of feature one.</p>
                </div>
                <div class="feature-item">
                    <h3>Feature Two</h3>
                    <p>Short description of feature two.</p>
                </div>
                <div class="feature-item">
                    <h3>Feature Three</h3>
                    <p>Short description of feature three.</p>
                </div>
            </div>
        </section>

        <footer id="contact">
            <p>&copy; 2024 MyWebsite. All rights reserved.</p>
        </footer>
    `;

    // Inserting the HTML content into the content div
    contentDiv.innerHTML = htmlContent;
});

function learnMore() {
    window.location.href = "#features";
}
