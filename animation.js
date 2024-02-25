// Get the elements you want to animate
const elements = document.querySelectorAll('.container,.space1,.space2,.visible');

// Function to check if an element is in the viewport
function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

// Function to handle scroll event
function handleScroll() {
  elements.forEach(element => {
    if (isInViewport(element)) {
      element.classList.add('visible');
    }
  });
}

// Add scroll event listener
window.addEventListener('scroll', handleScroll);

// Initial check in case elements are already in the viewport when the page loads
handleScroll();
