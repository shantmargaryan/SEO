"use strict"

const formValidate = class {
  constructor(formElem) {
    this.form = document.querySelector(formElem);
    this.formImage = this.form.querySelector(`[data-form="${formElem}"]`);
    this.formPreview = this.form.querySelector('.form__preview');
    this.form.addEventListener('submit', this.formSend.bind(this));
    this.formImage?.addEventListener('change', this.uploadFile.bind(this));
  }

  async formSend(e) {
    e.preventDefault();

    const error = this.formValidate();

    const formData = new FormData(this.form);
    // formData.append('image', this.formImage.files[0]);

    if (error === 0) {
      this.form.classList.add('sending');
      // Uncomment the following lines when you want to use fetch
      // try {
      //   const response = await fetch('sendmail.php', { method: 'POST', body: formData });
      //   if (response.ok) {
      //     const result = await response.json();
      //     alert(result.message);
      //     this.formPreview.innerHTML = '';
      //     this.form.reset();
      //   } else {
      //     throw new Error('Error in form submission');
      //   }
      // } catch (error) {
      //   alert('Error in form submission');
      // } finally {
      //   this.form.classList.remove('sending');
      // }
    } else {
      // alert('Required field(s) are empty or invalid.');
    }
  }

  formAddError(requiredEl) {
    const formRequired = requiredEl.parentElement;
    formRequired.parentElement.classList.add('error');
    formRequired.classList.add('error');
    requiredEl.classList.add('error');
  }

  formRemoveError(requiredEl) {
    requiredEl.addEventListener('input', function () {
      const formRequired = requiredEl.parentElement;
      formRequired.parentElement.classList.remove('error');
      formRequired.classList.remove('error');
      requiredEl.classList.remove('error');
    })
  }

  emailTest(requiredEl) {
    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(requiredEl.value);
  }

  formValidate() {
    let error = 0;
    const requiredElements = this.form.querySelectorAll('.required');

    requiredElements.forEach((requiredEl) => {
      this.formRemoveError(requiredEl);

      if (requiredEl.getAttribute('data-email')) {
        if (!this.emailTest(requiredEl)) {
          this.formAddError(requiredEl);
          error++;
        }

      } else if (requiredEl.type === 'checkbox' && !requiredEl.checked) {
        this.formAddError(requiredEl);
        error++;
      } else {

        if (requiredEl.value.trim() === '') {
          this.formAddError(requiredEl);
          error++;
        }

      }

    });

    return error;
  }

  // uploadFile() {
  //   const file = this.formImage.files[0];

  //   if (!['image/jpeg', 'image/png', 'image/gif'].includes(file.type)) {
  //     alert('Download image file.');
  //     this.formImage.value = '';
  //     return;
  //   }

  //   if (file.size > 2 * 1024 * 1024) {
  //     alert('Download file less than 2MB.');
  //     return;
  //   }

  //   const reader = new FileReader();

  //   reader.onload = (e) => {
  //     this.formPreview.innerHTML = `<img src="${e.target.result}" alt="image">`;
  //   };

  //   reader.onerror = () => {
  //     alert('Error reading file.');
  //   };

  //   reader.readAsDataURL(file);
  // }
}

const ff = new formValidate('form')
