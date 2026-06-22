function showMessage(){
    alert("Thank you for choosing Secure Bank! Our representative will contact you soon.");
}

document.addEventListener("DOMContentLoaded", () => {

    const form = document.getElementById("contactForm");

    if(form){
        form.addEventListener("submit", (e) => {

            e.preventDefault();

            alert("Your message has been submitted successfully!");

            form.reset();
        });
    }

});