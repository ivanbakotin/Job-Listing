import { allData } from "./constants.js";
import { filterIncludes } from "./utils.js";

let filteredData = [...allData];
let currentFilters = [];

const main = document.querySelector("main");
const jobTemplate = document.querySelector("#job-template");
const filterSection = document.querySelector(".filters-section");
const subFilterSection = document.querySelector(".filters");
const clearFilters = document.querySelector(".clear");

clearFilters.addEventListener("click", () => {
  subFilterSection.innerText = "";

  filterSection.style.display = "none";

  filteredData = [...allData];
  currentFilters = [];

  displayData(filteredData);
});

displayData(allData);

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
  if (!filterIncludes(currentFilters, filterValue)) {
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
  main.innerText = "";

  data.forEach((job) => {
    const clone = jobTemplate.content.cloneNode(true);

    const spans = clone.querySelectorAll("span");
    const lis = clone.querySelectorAll("li");
    const ul = clone.querySelector("ul");
    const img = clone.querySelector("img");

    img.src = job.logo;

    spans[0].textContent = job.company;

    if (job.new) {
      const newDiv = document.createElement("SPAN");
      newDiv.classList.add("new");
      clone.querySelector(".section__left__text__top").appendChild(newDiv);
      newDiv.textContent = "NEW!";
    }

    if (job.featured) {
      const newDiv = document.createElement("SPAN");
      newDiv.classList.add("featured");
      clone.querySelector(".section__left__text__top").appendChild(newDiv);
      newDiv.textContent = "FEATURED!";
    }

    spans[1].textContent = job.position;
    spans[2].textContent = job.postedAt;
    spans[3].textContent = job.contract;
    spans[4].textContent = job.location;

    lis[0].textContent = job.role;
    lis[0].addEventListener("click", () => filterFromJson(job.role, "role"));
    lis[1].textContent = job.level;
    lis[1].addEventListener("click", () => filterFromJson(job.level, "level"));

    job.tools.forEach((tool) => {
      const jobTool = document.createElement("li");
      jobTool.textContent = tool;
      jobTool.addEventListener("click", () => filterFromJson(tool, "tools"));
      ul.appendChild(jobTool);
    });

    job.languages.forEach((language) => {
      const jobLanguage = document.createElement("li");
      jobLanguage.textContent = language;
      jobLanguage.addEventListener("click", () =>
        filterFromJson(language, "languages")
      );
      ul.appendChild(jobLanguage);
    });

    main.appendChild(clone);
  });
}
