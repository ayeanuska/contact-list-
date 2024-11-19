const apiURL = "https://randomuser.me/api?results=10";

//unlock slider
const slider = document.getElementById("slider");

const searchInputField = document.getElementById("search");

//initial contact list array
let contactList = [];

//add change event trigger for slider value change
slider.addEventListener("change", (e) => {
  const { value } = e.target;

  if (value < 100) {
    slider.value = 0;
  } else {
    displayAppScreen();
  }
});

searchInputField.addEventListener("keyup", (e) => {
  console.log(e.target.value);
  //check if the input value is the users full name

  const filtereContactList = contactList.filter((item) => {
    const fullName =
      item.name.first.toLowerCase() + " " + item.name.last.toLowerCase();

    return fullName.includes(e.target.value.toLowerCase());
  });
  console.log(filtereContactList);
  displaycontactList(filtereContactList);
});

//general function to display screen
const displayScreen = (screenName) => {
  const screens = document.getElementsByClassName("screen");

  for (screen of screens) {
    screen.style.display = "none";

    const mainScreen = document.getElementById(screenName);
    mainScreen.style.display = "block";
  }
};

//display contact contact list

const displaycontactList = (userList) => {
  const userNumber = userList.length;
  const userCountElement = document.getElementById("userCount");

  userCountElement.innerText = userNumber;

  //update the contact accordium

  const cA = document.getElementById("contactAccordian");
  cA.innerHTML = "";

  userList.map((item, index) => {
    console.log(item);
    const accItem = `
      <div class="accordion-item">
        <h2 class="accordion-header">
          <button
            class="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#contact-${index}"
            aria-expanded="false"
            aria-controls="collapseOne"
          >
            <img
              src="${item.picture.thumbnail}"
              alt=""
              width="50px"
              height="50px"
              class="rounded-circle"
            />
            <div class="ms-2">
              <div class="fw-bolder">${item.name.title} ${item.name.first} ${item.name.last}</div>
              <small>${item.location.street.number} ${item.location.street.name}</small>
            </div>
          </button>
        </h2>

        <div
          id="contact-${index}"
          class="accordion-collapse collapse"
          data-bs-parent="#accordionExample"
        >
          <div class="accordion-body d-flex justify-content-center flex-column align-items-center">
            <div>
              <img
                src="${item.picture.medium}"
                alt=""
                width="100px"
                height="100px"
                class="rounded-circle"
              />
            </div>

            <div class="d-flex flex-column">
              <div class="fw-bolder">${item.name.title} ${item.name.first} ${item.name.last}</div>
              <small>${item.location.street.number} ${item.location.street.name} ${item.location.city} ${item.location.country}  </small>
              <div>
                <i class="bi bi-phone-fill"></i>
                <span>${item.cell}</span>
              </div>
              <div>
                <i class="bi bi-envelope-at"> ${item.email}</i>
              </div>
            </div>
          </div>
        </div>
      </div>`;

    cA.innerHTML += accItem;
  });
};

// display contact list screen

const displayAppScreen = () => {
  displayScreen("appScreen");
};

// to display conatct list

const displayContactListScreen = async () => {
  displayScreen("contactListScreen");

  //before fetching

  //general function to display spinner and contact list.
  const spinnerElement = document.getElementById("spinner");

  const contactListElement = document.getElementById("contactList");

  // 2.show spinner and hide contact list

  spinnerElement.style.display = "block";
  contactListElement.style.display = "none";

  //fetching contact data
  const response = await fetch(apiURL);

  const data = await response.json();
  console.log(1000, data.results);
  contactList = data.results;

  //after fetching
  // 1.hide spinner
  // 2.show contact list

  spinnerElement.style.display = "none";
  contactListElement.style.display = "block";

  // populate contact list

  displaycontactList(contactList);
};

// displayScreen("contactListScreen");
// displaycontactList(contactList);
