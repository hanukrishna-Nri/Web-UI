document.addEventListener("DOMContentLoaded", () => {

    const buttons =
        document.querySelectorAll("button");

    buttons.forEach(button => {

        button.addEventListener("click", () => {

            alert(
                "Full blog article page can be added here."
            );

        });

    });

});