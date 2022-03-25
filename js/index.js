import { allData } from "./constants.js";

let filteredData = [...allData];
let currentFilters = [];

const body = document.querySelector("body");
const filterSection = document.querySelector(".filters-section");
const subFilterSection = document.querySelector(".filters");
const clearFilters = document.querySelector(".clear");

clearFilters.addEventListener("click", () => {
  let child = subFilterSection.firstElementChild;

  while (child) {
    subFilterSection.removeChild(child);
    child = subFilterSection.firstElementChild;
  }

  filterSection.style.display = "none";

  filteredData = [...allData];
  currentFilters = [];

  displayData(filteredData);
});

displayData(allData);

function filterIncludes(filterValue) {
  for (let i = 0; i < currentFilters.length; i++) {
    if (currentFilters[i].filterValue == filterValue) {
      return true;
    }
  }

  return false;
}

function createFilterSection(filterValue) {
  filterSection.style.display = "flex";

  const filterDiv = document.createElement("div");
  filterDiv.classList = "filter";
  filterDiv.setAttribute("data-name", filterValue);
  subFilterSection.appendChild(filterDiv);

  const filter_name = document.createElement("div");
  filter_name.innerText = filterValue;
  filter_name.classList = "filter-name";
  filterDiv.appendChild(filter_name);

  const filterClose = document.createElement("div");
  filterClose.innerHTML =
    '<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14"><path fillFFF" fill-rule="evenodd" d="M11.314 0l2.121 2.121-4.596 4.596 4.596 4.597-2.121 2.121-4.597-4.596-4.596 4.596L0 11.314l4.596-4.597L0 2.121 2.121 0l4.596 4.596L11.314 0z"/></svg>';
  filterClose.classList = "filter-close";
  filterClose.addEventListener("click", () => unFilterFromJson(filterValue));
  filterDiv.appendChild(filterClose);
}

function removeFilterSection(filterValue) {
  const search = "[data-name=" + "'" + filterValue + "']";
  document.querySelector(search).remove();

  if (!document.querySelectorAll(".filter").length) {
    filterSection.style.display = "none";
  }
}

function rebalanceFilteredData(filterValue) {
  currentFilters = currentFilters.filter(
    (filter) => filter.filterValue !== filterValue
  );

  filteredData = [...allData];

  currentFilters.forEach((filter) => {
    filteredData = filteredData.filter((filterData) => {
      return filterData[filter.filterKey].includes(filter.filterValue);
    });
  });

  filteredData = filteredData.sort((a, b) => a.id - b.id);
}

function filterFromJson(filterValue, filterKey) {
  if (!filterIncludes(filterValue)) {
    currentFilters.push({ filterValue, filterKey });
    createFilterSection(filterValue);
    filteredData = filteredData.filter((fake) =>
      fake[filterKey].includes(filterValue)
    );
    displayData(filteredData);
  }
}

function unFilterFromJson(filterValue) {
  removeFilterSection(filterValue);
  rebalanceFilteredData(filterValue);
  displayData(filteredData);
}

function displayData(data) {
  const mainDelete = document.querySelector("main");

  if (mainDelete) {
    mainDelete.remove();
  }

  const main = document.createElement("main");
  body.appendChild(main);

  data.forEach((job) => {
    const divMain = document.createElement("article");
    main.appendChild(divMain);

    const divLeft = document.createElement("section");
    divLeft.classList = "section-left";
    divMain.appendChild(divLeft);

    const img = document.createElement("img");
    img.src = job.logo;
    divLeft.appendChild(img);

    const divText = document.createElement("div");
    divText.classList = "text";
    divLeft.appendChild(divText);

    const divTop = document.createElement("div");
    divTop.classList = "text-top";
    divText.appendChild(divTop);

    const companyName = document.createElement("span");
    companyName.innerText = job.company;
    companyName.classList = "company-name";
    divTop.appendChild(companyName);

    if (job.new) {
      const jobNew = document.createElement("span");
      jobNew.innerText = "NEW!";
      jobNew.classList = "new";
      divTop.appendChild(jobNew);
    }

    if (job.featured) {
      const jobFeatured = document.createElement("span");
      jobFeatured.innerText = "FEATURED";
      jobFeatured.classList = "featured";
      divTop.appendChild(jobFeatured);
    }

    const divMiddle = document.createElement("div");
    divMiddle.classList = "text-middle";
    divText.appendChild(divMiddle);

    const jobPosition = document.createElement("span");
    jobPosition.innerText = job.position;
    divMiddle.appendChild(jobPosition);

    const divBot = document.createElement("div");
    divBot.classList = "text-bot";
    divText.appendChild(divBot);

    const jobPostedAt = document.createElement("span");
    jobPostedAt.innerText = job.postedAt;
    divBot.appendChild(jobPostedAt);

    const jobContract = document.createElement("span");
    jobContract.innerText = job.contract;
    jobContract.classList = "span-bullet-point";
    divBot.appendChild(jobContract);

    const jobLocation = document.createElement("span");
    jobLocation.innerText = job.location;
    jobLocation.classList = "span-bullet-point";
    divBot.appendChild(jobLocation);

    const divRight = document.createElement("section");
    divRight.classList = "section-right";
    divMain.appendChild(divRight);

    const jobRole = document.createElement("span");
    jobRole.innerText = job.role;
    jobRole.addEventListener("click", () => filterFromJson(job.role, "role"));
    divRight.appendChild(jobRole);

    const jobLevel = document.createElement("span");
    jobLevel.innerText = job.level;
    jobLevel.addEventListener("click", () =>
      filterFromJson(job.level, "level")
    );
    divRight.appendChild(jobLevel);

    job.tools.forEach((tool) => {
      const jobTool = document.createElement("span");
      jobTool.innerText = tool;
      jobTool.addEventListener("click", () => filterFromJson(tool, "tools"));
      divRight.appendChild(jobTool);
    });

    job.languages.forEach((language) => {
      const jobLanguage = document.createElement("span");
      jobLanguage.innerText = language;
      jobLanguage.addEventListener("click", () =>
        filterFromJson(language, "languages")
      );
      divRight.appendChild(jobLanguage);
    });
  });
}
