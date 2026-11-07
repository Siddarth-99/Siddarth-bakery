```javascript
// MOBILE NAVIGATION

function toggleMenu() {
    const nav = document.querySelector(".nav-links");
    nav.classList.toggle("show");
}

// MENU PRODUCT FILTER

function filterProducts(category, button) {

    const products = document.querySelectorAll(".product-card");
    const buttons = document.querySelectorAll(".filter-btn");

    buttons.forEach(btn => btn.classList.remove("active"));
    button.classList.add("active");

    products.forEach(product => {

        const productCategory = product.dataset.category;

        if (category === "all" || productCategory === category) {
            product.classList.remove("hide");
        } else {
            product.classList.add("hide");
        }

    });
}

// ORDER FORM

const orderForm = document.getElementById("orderForm");

if (orderForm) {

    orderForm.addEventListener("submit", function(event) {

        event.preventDefault();

        const name = document.getElementById("customerName").value.trim();
        const phone = document.getElementById("phone").value.trim();
        const product = document.getElementById("product").value;
        const quantity = document.getElementById("quantity").value;
        const address = document.getElementById("address").value.trim();

        const message = document.getElementById("orderMessage");

        if (name.length < 2) {
            message.style.color = "red";
            message.textContent = "Please enter a valid name.";
            return;
        }

        if (!/^[6-9][0-9]{9}$/.test(phone)) {
            message.style.color = "red";
            message.textContent = "Please enter a valid 10-digit mobile number.";
            return;
        }

        if (!product || quantity < 1 || quantity > 50 || !address) {
            message.style.color = "red";
            message.textContent = "Please complete all required fields.";
            return;
        }

        message.style.color = "green";
        message.textContent =
            "Thank you, " + name +
            "! Your order enquiry for " + quantity +
            " x " + product + " has been submitted successfully.";

        orderForm.reset();

    });

}

// CONTACT FORM

const contactForm = document.getElementById("contactForm");

if (contactForm) {

    contactForm.addEventListener("submit", function(event) {

        event.preventDefault();

        const message = document.getElementById("contactMessage");

        message.style.color = "green";
        message.textContent =
            "Thank you! Your message has been received in this demo.";

        contactForm.reset();

    });

}

// SIMPLE SCROLL REVEAL

const revealElements = document.querySelectorAll(
    ".product-card, .feature, .about-image, .about-content"
);

if ("IntersectionObserver" in window) {

    const observer = new IntersectionObserver(entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";

                observer.unobserve(entry.target);

            }

        });

    }, {
        threshold: 0.12
    });

    revealElements.forEach(element => {

        element.style.opacity = "0";
        element.style.transform = "translateY(25px)";
        element.style.transition = "opacity .7s ease, transform .7s ease";

        observer.observe(element);

    });

}
```