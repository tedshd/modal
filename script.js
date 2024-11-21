(function () {
  var modal = function (arg) {
    if (!arg.dom) {
      console.error("dom is required");
      return;
    }
    var modal = arg.dom;
    var w = arg.width;
    var h = arg.height;
    var closeShow = arg.closeShow || true;
    var openModal = (doSomething) => {
      if (doSomething && doSomething.beforeOpen) {
        doSomething.beforeOpen();
      }
      modal.classList.add("modal_open");
      if (doSomething && doSomething.afterOpen) {
        doSomething.afterOpen();
      }
    };
    var closeModal = (doSomething) => {
      if (doSomething && doSomething.beforeClose) {
        doSomething.beforeClose();
      }
      modal.querySelector(".modal_close").click();
      if (doSomething && doSomething.afterClose) {
        doSomething.afterClose();
      }
    };

    // modal.style.width = w;
    // modal.style.height = h;

    if (w) {
      modal.querySelector(".modal_container").style.width = w;
    }
    if (h) {
      modal.querySelector(".modal_container").style.height = h;
    }

    // modal.addEventListener("click", () => {
    //   modal.classList.remove("modal_open");
    // });

    // modal.querySelector(".modal_container").addEventListener("click", (e) => {
    //   e.stopPropagation();
    // });

    if (closeShow) {
      modal.querySelector(".modal_close").classList.remove("modal_hide");
    } else {
      modal.querySelector(".modal_close").classList.add("modal_hide");
    }

    if (modal.querySelector(".modal_close")) {
      modal.querySelector(".modal_close").addEventListener("click", () => {
        modal.classList.remove("modal_open");
      });
    }

    if (modal.querySelector(".modal_cancel")) {
      modal.querySelector(".modal_cancel").addEventListener("click", () => {
        modal.classList.remove("modal_open");
      });
    }

    this.open = openModal;
    this.close = closeModal;
  };

  window.modal = modal;
})();
