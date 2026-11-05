document.addEventListener("DOMContentLoaded", () => {
   
    const form = document.getElementById("feedback-form");
    const formMessage = document.getElementById("form-message");

    if (form) {
        form.addEventListener("submit", (e) => {
            e.preventDefault();
            const username = document.getElementById("username").value.trim();
            if (username) {
                formMessage.textContent = `Thank you, ${username}! Your table has been successfully booked at Zoha Restaurant.`;
                formMessage.style.color = "green";
            } else {
                formMessage.textContent = "Please enter your full name before booking.";
                formMessage.style.color = "red";
            }
        });
    }

    
    const themeButton = document.getElementById("theme-button");
    if (themeButton) {
        themeButton.addEventListener("click", () => {
            document.body.classList.toggle("dark-mode");
        });
    }

    
    const menuItemsCheckboxes = document.querySelectorAll(".menu-item");
    const totalDisplay = document.getElementById("total");

    menuItemsCheckboxes.forEach((checkbox) => {
        checkbox.addEventListener("change", () => {
            let currentTotal = 0;
            menuItemsCheckboxes.forEach((box) => {
                if (box.checked) {
                    currentTotal += Number(box.value);
                }
            });
            if (totalDisplay) {
                totalDisplay.textContent = `Total: Rs. ${currentTotal}`;
            }
        });
    });

   
    const birthYearInput = document.getElementById("birth-year");
    const discountMessage = document.getElementById("discount-message");

    if (birthYearInput && discountMessage) {
        birthYearInput.addEventListener("input", () => {
            const year = parseInt(birthYearInput.value, 10);
            const currentYear = new Date().getFullYear();
            
            if (!isNaN(year) && birthYearInput.value.length === 4) {
                const age = currentYear - year;
                if (age > 50) {
                    discountMessage.textContent = `Special Senior Discount: You qualify for a 15% discount! (Age: ${age})`;
                    discountMessage.style.color = "purple";
                } else {
                    discountMessage.textContent = `Standard pricing applies. (Age: ${age})`;
                    discountMessage.style.color = "gray";
                }
            } else {
                discountMessage.textContent = "";
            }
        });
    }

   
    const readMoreButton = document.getElementById("read-more-button");
    const extraStory = document.getElementById("extra-story");

    if (readMoreButton && extraStory) {
        readMoreButton.addEventListener("click", () => {
            extraStory.classList.toggle("hidden");
            if (extraStory.classList.contains("hidden")) {
                readMoreButton.textContent = "Read More";
            } else {
                readMoreButton.textContent = "Read Less";
            }
        });
    }

   
    const filterButtons = document.querySelectorAll(".filter-button");
    const menuRows = document.querySelectorAll("#menu-table tbody tr");

    filterButtons.forEach((button) => {
        button.addEventListener("click", () => {
            const category = button.getAttribute("data-category");

            menuRows.forEach((row) => {
                const rowCategory = row.getAttribute("data-category");
                if (category === "All" || rowCategory === category) {
                    row.style.display = "";
                } else {
                    row.style.display = "none";
                }
            });
        });
    });

    
    const openingStatus = document.getElementById("opening-status");
    if (openingStatus) {
        const currentHour = new Date().getHours();
        
        if (currentHour >= 11 && currentHour < 23) {
            openingStatus.textContent = "We are Open!";
            openingStatus.style.color = "green";
        } else {
            openingStatus.textContent = "We are Currently Closed. (Hours: 11:00 AM - 11:00 PM)";
            openingStatus.style.color = "red";
        }
    }

    
    const specialNotes = document.getElementById("special-notes");
    const characterCount = document.getElementById("character-count");

    if (specialNotes && characterCount) {
        const maxLength = specialNotes.getAttribute("maxlength") || 100;
        specialNotes.addEventListener("input", () => {
            const currentLength = specialNotes.value.length;
            const remaining = maxLength - currentLength;
            characterCount.textContent = `${remaining} characters remaining`;
        });
    }
});