function toggleDropdown(id) {
  var dropdownMenu = document.getElementById(id);
  dropdownMenu.classList.toggle('show');
}

document.addEventListener('click', function(e) {
  var dropdowns = document.querySelectorAll('.drop-menu');
  dropdowns.forEach(function(dropdown) {
      if (!dropdown.contains(e.target) && !dropdown.previousElementSibling.contains(e.target)) {
          dropdown.classList.remove('show');
      }
  });
});