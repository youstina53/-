// نموذج الاشتراك: إظهار رسالة تأكيد بعد الإرسال
document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('joinForm');
  const success = document.getElementById('formSuccess');

  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();

      // هنا ممكن تحطي كود لإرسال البيانات لسيرفر أو واتساب أو إيميل
      success.classList.add('show');
      form.reset();
    });
  }
});
