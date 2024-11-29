
function openModel(){
    const overlayElement = document.getElementById('overlay');
    overlayElement.style.display = 'flex';


    document.getElementById('bookingForm').addEventListener('submit', function(event) {
        event.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const date = document.getElementById('date').value;
        const time = document.getElementById('time').value;

    
        document.getElementById('confirmation').innerHTML = `
            <p>Thank you, ${name}!</p>
            <p>Your booking is confirmed for ${date} at ${time}.</p>
            <p>A confirmation email has been sent to ${email}.</p>
        `;
        document.getElementById('bookingForm').reset();
    });
    
}

function closeModel(){
    const overlayElement = document.getElementById('overlay');
    overlayElement.style.display = 'none';

}