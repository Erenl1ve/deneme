
// Testimonial verisi
const testimonials = [
    {
        image: "https://i.pravatar.cc/150?img=1",
        text: "Çok hızlı teslimat yapıldı, kesinlikle güvenilir!",
        name: "Ahmet Y.",
        rating: 5
    },
    {
        image: "https://i.pravatar.cc/150?img=2",
        text: "En uygun fiyata en kaliteli hizmet",
        name: "Mehmet K.",
        rating: 5
    },
    {
        image: "https://i.pravatar.cc/150?img=3",
        text: "7/24 destek ile sorunsuz alışveriş",
        name: "Ayşe M.",
        rating: 5
    }
];

// Testimonial Slider
let currentSlide = 0;
const testimonialContainer = document.querySelector('.testimonial-container');
const dotsContainer = document.querySelector('.slider-dots');

function createTestimonials() {
    testimonials.forEach((t, i) => {
        const testimonial = document.createElement('div');
        testimonial.className = `testimonial ${i === 0 ? 'active' : ''}`;
        testimonial.innerHTML = `
            <img src="${t.image}" alt="${t.name}">
            <p>${t.text}</p>
            <div class="rating">
                ${'★'.repeat(t.rating)}${'☆'.repeat(5-t.rating)}
            </div>
            <h4>${t.name}</h4>
        `;
        testimonialContainer.appendChild(testimonial);

        const dot = document.createElement('div');
        dot.className = `dot ${i === 0 ? 'active' : ''}`;
        dot.addEventListener('click', () => goToSlide(i));
        dotsContainer.appendChild(dot);
    });
}

function updateSlider() {
    const testimonials = document.querySelectorAll('.testimonial');
    const dots = document.querySelectorAll('.dot');
    
    testimonials.forEach(t => t.classList.remove('active'));
    dots.forEach(d => d.classList.remove('active'));
    
    testimonials[currentSlide].classList.add('active');
    dots[currentSlide].classList.add('active');
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % testimonials.length;
    updateSlider();
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + testimonials.length) % testimonials.length;
    updateSlider();
}

function goToSlide(idx) {
    currentSlide = idx;
    updateSlider();
}

// FAQ Accordion
document.querySelectorAll('.faq-question').forEach(question => {
    question.addEventListener('click', () => {
        const faqItem = question.parentElement;
        faqItem.classList.toggle('active');
    });
});

// Satın Alma Modal
function satinAl(paket, fiyat) {
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.innerHTML = `
        <div class="modal-content">
            <h3>${paket} Satın Al</h3>
            <p>Toplam Tutar: ${fiyat} TL</p>
            <div class="payment-options">
                <button onclick="selectPayment('Papara')">
                    <i class="fas fa-wallet"></i> Papara
                </button>
                <button onclick="selectPayment('Banka')">
                    <i class="fas fa-university"></i> Banka Transferi
                </button>
                <button onclick="selectPayment('Havale')">
                    <i class="fas fa-exchange-alt"></i> Havale/EFT
                </button>
            </div>
            <button class="close-modal" onclick="closeModal()">
                <i class="fas fa-times"></i>
            </button>
        </div>
    `;
    document.body.appendChild(modal);
    setTimeout(() => modal.classList.add('show'), 10);
}

function selectPayment(method) {
    alert(`${method} ile ödeme seçildi. Detaylar için yönlendiriliyorsunuz...`);
    closeModal();
}

function closeModal() {
    const modal = document.querySelector('.modal');
    if (modal) {
        modal.classList.remove('show');
        setTimeout(() => modal.remove(), 300);
    }
}

// Sayfa yüklendiğinde
document.addEventListener('DOMContentLoaded', () => {
    createTestimonials();
    setInterval(nextSlide, 5000);
});

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
