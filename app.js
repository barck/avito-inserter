let author = location.search.slice(1),
    ufferText = ''
    privateEntrepreneurFullName = document.querySelector('input[name="privateEntrepreneurFullName"]'),//ФИО
    privateEntrepreneurName = document.querySelector('input[name="privateEntrepreneurName"]'),//Наименование ИП
    privateEntrepreneurInn = document.querySelector('input[name="privateEntrepreneurInn"]'),//ИНН
    privateEntrepreneurOgrn = document.querySelector('input[name="privateEntrepreneurOgrn"]'),//ОГРНИП
    phone = document.querySelector('input[name="phone"]'),//Телефон
    email = document.querySelector('input[name="email"]'),//Емаил
    representative = document.querySelector('input[name="representative"]'),//Представитель правообладателя
    isRightholder = document.querySelector('input[name="isRightholder"]'),//Чекбокс 1
    disagreeOnUsing = document.querySelector('input[name="disagreeOnUsing"]'),//Чекбокс 2
    agreeToProcessingData = document.querySelector('input[name="agreeToProcessingData"]'),//Чекбокс 3
    acceptRules = document.querySelector('input[name="acceptRules"]'),//Чекбокс 4
    materials = document.querySelector('textarea[name="materials"]');//Ссылки на объявления

//  document.querySelector('.js-user-fields-individual').style.display='none';
//  document.querySelector('.js-user-fields-legal-entity').style.display='none'; 
//  document.querySelector('.js-user-fields-self-employed').style.display='block';
let tab = document.querySelectorAll('.form-radio-group__label')[1];

phone.value = '8 919 304-53-95';
email.value = 'support@it-pravo.com';
representative.value = 'Рязанова Анна Васильевна';

 if (author == 'melannett') {
  privateEntrepreneurFullName.value = 'Мельникова Анна Игоревна';
  privateEntrepreneurName.value = 'ИП Мельникова Анна Игоревна';
  privateEntrepreneurInn.value = '771708551917';
  privateEntrepreneurOgrn.value = '316774600493152';
}


function catCheckTry() {
  tab.click();
  isRightholder.click();
  disagreeOnUsing.click();
  agreeToProcessingData.click();
  acceptRules.click();
  
  navigator.clipboard.readText()
  .then(text => {
    bufferText = `Индивидуальный предприниматель Мельникова Анна Игоревна (ИНН 771708551917, ОГРНИП 316774600493152) является правообладателем товарного знака (знака обслуживания) № 656699 «Melannett» и автором объектов авторских прав под маркетинговым наименованием видеоматериалов: «Марафоны красоты и здоровья». Согласно положениям гражданского законодательства РФ правообладателю принадлежит исключительное право использовать произведение в любой форме и любым не противоречащим закону способом. Правообладатель может по своему усмотрению разрешать или запрещать другим лицам использование произведения. Отсутствие запрета не считается согласием (разрешением). Мельникова А.И. не давала свое согласие Вам на распространение нелегальных копий-контента, на сайте https://www.avito.ru, в частности на веб-страницах:
    ${text}В целях своевременного прекращения нарушения интеллектуальных прав Мельниковой А. И. прошу заблокировать указанные объявления, нарушающие Правила сайта Avito.`
    materials.value = bufferText;
  })
  .catch(err => {
    console.log('Something went wrong', err);
  })
}
catCheckTry();