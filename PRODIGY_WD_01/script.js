const scrollElements = document.querySelectorAll('.animate-on-scroll');
const observerOptions = 
{
    threshold: 0.3, 
};
const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => 
        {
        if (entry.isIntersecting) 
        {
            entry.target.classList.add('animate');
            observer.unobserve(entry.target); 
        }
    });
}, observerOptions);
scrollElements.forEach(el => 
{
    observer.observe(el);
});
