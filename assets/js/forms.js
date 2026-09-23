'use strict';

const FORM_EMAILS = {
  sales: 'sales@mcplmail.com',
  support: 'tallysupport@mcplmail.com'
};

function createReference(prefix) {
  const date = new Date().toISOString().slice(0, 10).replace(/-/g, '');
  const random = Math.random().toString(36).slice(2, 8).toUpperCase();
  return `${prefix}-${date}-${random}`;
}

function showMessage(form, type, text) {
  const box = form.querySelector('.form-message');
  if (!box) return;

  box.className = `form-message show ${type}`;
  box.textContent = text;
}

document.addEventListener('submit', async event => {
  const form = event.target.closest('[data-api-form]');
  if (!form) return;

  event.preventDefault();

  if (!form.reportValidity()) return;

  const button = form.querySelector('[type="submit"]');
  const originalText = button.textContent;
  const endpoint = form.dataset.apiForm || '';

  const isTicket = endpoint.includes('complaints');
  const isAmc = endpoint.includes('amc');

  // Support tickets go to the support team. All product, service, AMC and
  // general enquiries go to the sales team.
  const recipientEmail = isTicket
    ? FORM_EMAILS.support
    : FORM_EMAILS.sales;

  const formEndpoint = `https://formsubmit.co/ajax/${recipientEmail}`;

  const reference = createReference(
    isTicket ? 'TKT' : isAmc ? 'AMC' : 'ENQ'
  );

  const subject = isTicket
    ? `MCPL Support Request - ${reference}`
    : isAmc
      ? `MCPL AMC Request - ${reference}`
      : `MCPL Website Enquiry - ${reference}`;

  const formData = Object.fromEntries(new FormData(form).entries());

  const submissionData = {
    ...formData,
    reference,
    submittedAt: new Date().toLocaleString('en-IN'),
    _subject: subject,
    _template: 'table',
    _captcha: 'false'
  };

  try {
    button.disabled = true;
    button.textContent = 'Sending...';

    const response = await fetch(formEndpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify(submissionData)
    });

    if (!response.ok) {
      throw new Error('Submission failed');
    }

    form.reset();

    showMessage(
      form,
      'success',
      `Thank you! Your request has been submitted. Reference: ${reference}`
    );
  } catch (error) {
    showMessage(
      form,
      'error',
      `Unable to submit the form. Please call +91 93227 94646 or email ${recipientEmail}.`
    );
  } finally {
    button.disabled = false;
    button.textContent = originalText;
  }
});
