const contactListElement = document.querySelector(".contact-list");
const contactForm = document.querySelector("form.add-contact-form");
const searchInput = document.querySelector(".search-box input");
const nameInput = document.querySelector("form.add-contact-form #name");
const phoneInput = document.querySelector("form.add-contact-form #phone");
const searchButton = document.querySelector("#search-button");
const deleteButton = document.querySelector("#delete-button");

const contacts = [
  {
    name: "Bob",
    phone: "(572)-566-2397",
  },
  {
    name: "Alice",
    phone: "(816)-403-5456",
  },
];

function sortContactList() {
  return contacts.sort((c1, c2) => {
    return c1.name.localeCompare(c2.name);
  });
}

function renderContactList(displayContacts) {
  let contactsListHTML = "";
  displayContacts.forEach((contact) => {
    contactsListHTML += `
        <li class="contact-item">
            <div>${contact.name}</div>
            <div>${contact.phone}</div>
        </li>`;
  });

  contactListElement.innerHTML = contactsListHTML;
}

function addContact() {
  contacts.unshift({ name: nameInput.value, phone: phoneInput.value });
  nameInput.value = "";
  phoneInput.value = "";
  nameInput.focus();

  const displayContacts = sortContactList();
  renderContactList(displayContacts);
}

function findContact() {
  const searchText = searchInput.value;
  if (searchText) {
    let displayContacts = contacts.filter(
      (contact) =>
        contact.name.includes(searchText) || contact.phone.includes(searchText)
    );

    renderContactList(displayContacts);
  } else {
    renderContactList(contacts);
  }
}

function deleteDuplicate() {
  const entities = {};
  contacts.forEach((c) => {
    if (!entities[c.phone]) {
      entities[c.phone] = c;
    }
  });

  const displayContacts = Object.keys(entities).map((k) => entities[k]);
  renderContactList(displayContacts);
}

contactForm.addEventListener("submit", (event) => {
  event.preventDefault();
  addContact();
});

searchButton.addEventListener("click", findContact);
deleteButton.addEventListener("click", deleteDuplicate);

function main() {
  const displayContacts = sortContactList();
  renderContactList(displayContacts);
}

main();
