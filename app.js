let author = location.search.slice(1);
    privateEntrepreneurFullName = document.querySelector('input[name="privateEntrepreneurFullName"]'),//ФИО
    privateEntrepreneurName = document.querySelector('input[name="privateEntrepreneurName"]'),//Наименование ИП
    privateEntrepreneurInn = document.querySelector('input[name="privateEntrepreneurInn"]'),//ИНН
    privateEntrepreneurOgrn = document.querySelector('input[name="privateEntrepreneurOgrn"]'),//ОГРНИП
    phone = document.querySelector('input[name="phone"]'),//Телефон
    email = document.querySelector('input[name="email"]'),//Емаил
    representative = document.querySelector('input[name="representative"]'),//Представитель правообладателя
    materials = document.querySelector('input[name="materials"]');//Ссылки на объявления

 document.querySelector('.js-user-fields-individual').style.display='none';
 document.querySelector('.js-user-fields-legal-entity').style.display='none'; 
 document.querySelector('.js-user-fields-self-employed').style.display='block';

 if (author == 'melannett') {
  privateEntrepreneurFullName.value = 'МЕЛАНЕТ';
  privateEntrepreneurName.value = 'ИП Мельникова';
  privateEntrepreneurInn.value = 'ИНН 7868743';
  privateEntrepreneurOgrn.value = 'ОГРНИП';
  phone.value = '89193045395';
  phone.disabled = true;
  email.value = 'aartiv09@gmail.com';
  representative.value = 'Рязанова Анна';

  function catCheckTry() {
    taxCheckTry.checked = true;
    taxCheckTry.click();
  }
  //сделать эмитацию клика
}
