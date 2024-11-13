document.addEventListener('DOMContentLoaded', () => {
  const formSteps = document.querySelectorAll('.form-step');
  const nextBtns = document.querySelectorAll('.next-btn');
  const prevBtns = document.querySelectorAll('.prev-btn');

  let currentStep = 0;

  nextBtns.forEach((button, index) => {
    button.addEventListener('click', () => {
      formSteps[currentStep].classList.remove('active');
      currentStep++;
      formSteps[currentStep].classList.add('active');
    });
  });

  prevBtns.forEach((button, index) => {
    button.addEventListener('click', () => {
      formSteps[currentStep].classList.remove('active');
      currentStep--;
      formSteps[currentStep].classList.add('active');
    });
  });

  const form = document.getElementById('multiStepForm');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Cadastro finalizado com sucesso!');
  });
});
