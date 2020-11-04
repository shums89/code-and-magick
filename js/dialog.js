'use strict';
(function () {

  const userDialog = document.querySelector(`.setup`);

  const setupOpen = document.querySelector(`.setup-open`);
  const setupClose = userDialog.querySelector(`.setup-close`);
  const setupPlayer = userDialog.querySelector(`.setup-player`);
  const coatInput = setupPlayer.querySelector(`input[name="coat-color"]`);
  const eyesInput = setupPlayer.querySelector(`input[name="eyes-color"]`);
  const setupPlayerFireballWrap = setupPlayer.querySelector(`.setup-fireball-wrap`);
  const fireballInput = setupPlayerFireballWrap.querySelector(`input[name="fireball-color"]`);

  // Настройка персонажа и фаербола
  function onWizardPropertyClick(evt) {
    let color = ``;

    if (evt.target.matches(`.wizard-coat`)) {
      color = window.utils.getRandonArrElement(WIZARDS_DATA.COAT_COLORS);

      evt.target.style.fill = color;
      coatInput.value = color;

    } else if (evt.target.matches(`.wizard-eyes`)) {
      color = window.utils.getRandonArrElement(WIZARDS_DATA.EYES_COLORS);

      evt.target.style.fill = color;
      eyesInput.value = color;

    } else if (evt.target.matches(`.setup-fireball`)) {
      color = window.utils.getRandonArrElement(WIZARDS_DATA.FIREBALL_COLORS);

      setupPlayerFireballWrap.style.background = color;
      fireballInput.value = color;
    }
  }

  function onPopupKeyPress(evt) {
    if ((evt.key === `Escape` || evt.key === `Enter`) && !evt.target.matches(`.setup-user-name`)) {
      evt.preventDefault();
      closePopup();
    }
  }

  function onPopupCloseClick() {
    closePopup();
  }

  function openPopup() {
    userDialog.classList.remove(`hidden`);
    document.addEventListener(`keydown`, onPopupKeyPress);
    setupClose.addEventListener(`click`, onPopupCloseClick);
    setupPlayer.addEventListener(`click`, onWizardPropertyClick);
  }

  function closePopup() {
    userDialog.classList.add(`hidden`);
    document.removeEventListener(`keydown`, onPopupKeyPress);
    setupClose.removeEventListener(`click`, onPopupCloseClick);
    setupPlayer.removeEventListener(`click`, onWizardPropertyClick);
  }

  setupOpen.addEventListener(`click`, function () {
    openPopup();
  });

  setupOpen.addEventListener(`keydown`, function (evt) {
    if (evt.key === `Enter`) {
      openPopup();
    }
  });

})();

