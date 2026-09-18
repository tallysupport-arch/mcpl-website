'use strict';

const STATIC_FORM_EMAIL = 'tallysupport@mcplmail.com';

function formToObject(form) {
  return Object.fromEntries(new FormData(form).entries());
}

function showMessage(form, type, text) {
  const box = form.querySelector('.form-message');
  if (!box) return;
  box.className = `form-message show ${type}`;
  box.textContent = text;
}

function createReference(prefix) {
  const stamp = new Date().toISOString().slice(0, 10).replace(/-/g, '');
  const random = Math.random().toString(36).slice(2, 8).toUpperCase();
  return `${prefix}-${stamp}-${random}`;
}

function labelFor(key) {
  return key.replace(/([A-Z])/g, ' $1').replace(/^./, value => value.toUpperCase());
}

function submitStaticForm(form) {
  if (!form.reportValidity()) return;

  const endpoint = form.dataset.apiForm || '';
  const data = formToObject(form);
  const isTicket = endpoint.includes('complaints');
  const isAmc = endpoint.includes('amc');
  const reference = createReference(isTicket ? 'TKT' : isAmc ? 'AMC' : 'ENQ');
  const subject = isTicket
    ? `MCPL Support Request - ${reference}`
    : isAmc
      ? `MCPL AMC Request - ${reference}`
      : `MCPL Website Enquiry - ${reference}`;

  const body = [
    `Reference: ${reference}`,
    `Submitted: ${new Date().toLocaleString('en-IN')}`,
    '',
    ...Object.entries(data).map(([key, value]) => `${labelFor(key)}: ${value || '-'}`)
  ].join('\n');

  showMessage(form, 'success', `Reference ${reference} created. Your email application will open—please press Send to complete the request.`);
  window.location.href = `mailto:${STATIC_FORM_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

document.addEventListener('submit', event => {
  const form = event.target.closest('[data-api-form]');
  if (!form) return;
  event.preventDefault();
  submitStaticForm(form);
});
