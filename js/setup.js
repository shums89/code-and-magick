'use strict';

const WIZARDS_DATA = {
  NUMBER_OF_WIZARDS: 4,
  NAMES: [`Иван`, `Хуан Себастьян`, `Мария`, `Кристоф`, `Виктор`, `Юлия`, `Люпита`, `Вашингтон`],
  SURNAMES: [`да Марья`, `Верон`, `Мирабелла`, `Вальц`, `Онопко`, `Топольницкая`, `Нионго`, `Ирвинг`],
  COAT_COLORS: [`rgb(101, 137, 164)`, `rgb(241, 43, 107)`, `rgb(146, 100, 161)`, `rgb(56, 159, 117)`, `rgb(215, 210, 55)`, `rgb(0, 0, 0)`],
  EYES_COLORS: [`black`, `red`, `blue`, `yellow`, `green`],
  FIREBALL_COLORS: [`#ee4830`, `#30a8ee`, `#5ce6c0`, `#e848d5`, `#e6e848`]
};


// Получение имени персонажа
function getWizardName(names, surnames) {
  return window.utils.getRandomNumber(2) ? `${window.utils.getRandonArrElement(names)} ${window.utils.getRandonArrElement(surnames)}` : `${window.utils.getRandonArrElement(surnames)} ${window.utils.getRandonArrElement(names)}`;
}

// Получение массива похожих персонажей
function getWizards(wizardData) {
  const wizards = [];
  for (let i = 0; i < wizardData.NUMBER_OF_WIZARDS; i++) {
    const wizard = {};
    wizard.name = getWizardName(WIZARDS_DATA.NAMES, WIZARDS_DATA.SURNAMES);
    wizard.coatColor = window.utils.getRandonArrElement(wizardData.COAT_COLORS);
    wizard.eyesColor = window.utils.getRandonArrElement(wizardData.EYES_COLORS);
    wizards.push(wizard);
  }
  return wizards;
}

// Отрисовка похожего персонажа
function renderWizard(wizard, wizardTemplate) {
  const wizardElement = wizardTemplate.cloneNode(true);
  wizardElement.querySelector(`.setup-similar-label`).textContent = wizard.name;
  wizardElement.querySelector(`.wizard-coat`).style.fill = wizard.coatColor;
  wizardElement.querySelector(`.wizard-eyes`).style.fill = wizard.eyesColor;
  return wizardElement;
}


const userDialog = document.querySelector(`.setup`);
const similarListElement = userDialog.querySelector(`.setup-similar-list`);
const similarWizardTemplate = document.querySelector(`#similar-wizard-template`).content.querySelector(`.setup-similar-item`);

// Генерация массива похожих персонажей
const wizards = getWizards(WIZARDS_DATA);

// Добавление похожих персонажей на форму
const fragment = document.createDocumentFragment();
for (let i = 0; i < wizards.length; i++) {
  fragment.appendChild(renderWizard(wizards[i], similarWizardTemplate));
}
similarListElement.appendChild(fragment);

// Вывод на экран блока похожих персонажей
userDialog.querySelector(`.setup-similar`).classList.remove(`hidden`);


