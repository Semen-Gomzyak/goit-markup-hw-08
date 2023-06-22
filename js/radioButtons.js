(() => {
  document.addEventListener('DOMContentLoaded', function () {
    const radioButtons = document.querySelectorAll('.portfolio__buttons');
    const projectItems = document.querySelectorAll('.project__item');

    radioButtons.forEach(radioButton => {
      radioButton.addEventListener('click', evt => {
        const selectedCategory = evt.target.getAttribute('data-filter');

        projectItems.forEach(projectItem => {
          const itemCategory = projectItem.getAttribute('data-category');

          if (selectedCategory === 'all' || selectedCategory === itemCategory) {
            projectItem.style.display = 'block';
          } else {
            projectItem.style.display = 'none';
          }
        });

        radioButtons.forEach(button => {
          if (button === radioButton) {
            button.classList.add('buttons__current');
          } else {
            button.classList.remove('buttons__current');
          }
        });
      });
    });
  });
})();
