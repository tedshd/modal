(() => {
  const modal = (arg) => {
    if (!arg.dom) {
      console.error('dom is required');
      return;
    }
    const modal = arg.dom;
    const w = arg.width || '100%';
    const h = arg.height || '100%';
    const closeShow = arg.closeShow || true;
    const openModal = () => {
      modal.classList.add('custom_modal_open');
    }
    const closeModal = (doSomething) => {
      if (doSomething && doSomething.beforeClose) {
        doSomething.beforeClose();
      }
      modal.querySelector('.custom_modal_close').click();
      if (doSomething && doSomething.afterClose) {
        doSomething.afterClose();
      }
    }

    modal.style.width = w;
    modal.style.height = h;

    if (closeShow) {
      modal.querySelector('.custom_modal_close').classList.remove('custom_modal_hide');
    } else {
      modal.querySelector('.custom_modal_close').classList.add('custom_modal_hide');
    }

    modal.querySelector('.custom_modal_close').addEventListener('click', () => {
      modal.classList.remove('custom_modal_open');
    });

    return {
      open: openModal,
      close: closeModal
    }
  }

  window.modal = modal
})()