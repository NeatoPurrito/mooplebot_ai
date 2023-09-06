async function sendMessage() {
    const password = document.getElementById("password").value;
    const message = document.getElementById("message").value;
    
    const response = await fetch('/chat', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({password, message})
    });
    
    const data = await response.json();
    
    // Update chat box with AI response
}
