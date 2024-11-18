const slider = document.getElementById("slider");

const contactList = [
  {
    gender: "male",
    name: { title: "Mr", first: "Ryder", last: "Mitchell" },
    location: {
      street: { number: 4696, name: "3rd St" },
      city: "Borden",
      state: "Saskatchewan",
      country: "Canada",
      postcode: "I0J 6E1",
      coordinates: { latitude: "-70.3394", longitude: "-17.7147" },
      timezone: { offset: "+9:30", description: "Adelaide, Darwin" },
    },
    email: "ryder.mitchell@example.com",
    login: {
      uuid: "dae711e4-a50e-4c3f-8927-da048ab94703",
      username: "blackladybug838",
      password: "munch",
      salt: "Qwb3Vp7r",
      md5: "0bc06407daa1583e4f7e0ce70d69090f",
      sha1: "cb4d7c6671e0490fbef17803c81f1d967aca919b",
      sha256:
        "ebcdc6b7acd192f58aaa4c4aa713754e2b635ee971f2d2ed95a754a409a7777e",
    },
    dob: { date: "1982-06-05T01:44:34.053Z", age: 42 },
    registered: { date: "2002-10-19T05:06:11.886Z", age: 22 },
    phone: "O67 P24-0234",
    cell: "U95 D06-4566",
    id: { name: "SIN", value: "992675397" },
    picture: {
      large: "https://randomuser.me/api/portraits/men/30.jpg",
      medium: "https://randomuser.me/api/portraits/med/men/30.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/men/30.jpg",
    },
    nat: "CA",
  },
  {
    gender: "female",
    name: { title: "Ms", first: "Magdalena", last: "Cvejić" },
    location: {
      street: { number: 9365, name: "Mažićka" },
      city: "Kraljevo",
      state: "Podunavlje",
      country: "Serbia",
      postcode: 19806,
      coordinates: { latitude: "-27.4618", longitude: "-19.1072" },
      timezone: { offset: "-10:00", description: "Hawaii" },
    },
    email: "magdalena.cvejic@example.com",
    login: {
      uuid: "ce810b69-abff-43ab-85fc-505b31c871f1",
      username: "goldenswan976",
      password: "louie",
      salt: "PQ1CmpWD",
      md5: "a39d30dd73218552fa040c7af6e4d539",
      sha1: "fc9ff9ec6e0a3fbdcf2d0ab4fc471444fc505faf",
      sha256:
        "106c8c73d591e2f083236cb4eb932dca81fdb4bf06b8f25853f2f63a2b488fe0",
    },
    dob: { date: "1972-04-01T01:35:41.966Z", age: 52 },
    registered: { date: "2014-03-21T11:55:36.395Z", age: 10 },
    phone: "024-7330-550",
    cell: "065-6145-251",
    id: { name: "SID", value: "494404828" },
    picture: {
      large: "https://randomuser.me/api/portraits/women/10.jpg",
      medium: "https://randomuser.me/api/portraits/med/women/10.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/women/10.jpg",
    },
    nat: "RS",
  },
];

slider.addEventListener("change", (e) => {
  const { value } = e.target;

  if (value < 100) {
    slider.value = 0;
  } else {
    displayAppScreen();
  }
});

const displayScreen = (screenName) => {
  const screens = document.getElementsByClassName("screen");

  for (screen of screens) {
    screen.style.display = "none";

    const mainScreen = document.getElementById(screenName);
    mainScreen.style.display = "block";
  }
};

//display contact count

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
const displayAppScreen = () => {
  displayScreen("appScreen");
};

displayScreen("contactListScreen");

displaycontactList(contactList);
