function toggleSenha() {
  const input = document.getElementById('senha');
  const icon = document.getElementById('toggleIcon');
  const isHidden = input.type === 'password';
  input.type = isHidden ? 'text' : 'password';
  icon.classList.toggle('bi-eye');
  icon.classList.toggle('bi-eye-slash');
}