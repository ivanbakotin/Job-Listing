allData = [
  {
    "id": 1,
    "company": "Photosnap",
    "logo": "./images/photosnap.svg",
    "new": true,
    "featured": true,
    "position": "Senior Frontend Developer",
    "role": "Frontend",
    "level": "Senior",
    "postedAt": "1d ago",
    "contract": "Full Time",
    "location": "USA Only",
    "languages": ["HTML", "CSS", "JavaScript"],
    "tools": []
  },
  {
    "id": 2,
    "company": "Manage",
    "logo": "./images/manage.svg",
    "new": true,
    "featured": true,
    "position": "Fullstack Developer",
    "role": "Fullstack",
    "level": "Midweight",
    "postedAt": "1d ago",
    "contract": "Part Time",
    "location": "Remote",
    "languages": ["Python"],
    "tools": ["React"]
  },
  {
    "id": 3,
    "company": "Account",
    "logo": "./images/account.svg",
    "new": true,
    "featured": false,
    "position": "Junior Frontend Developer",
    "role": "Frontend",
    "level": "Junior",
    "postedAt": "2d ago",
    "contract": "Part Time",
    "location": "USA Only",
    "languages": ["JavaScript"],
    "tools": ["React", "Sass"]
  },
  {
    "id": 4,
    "company": "MyHome",
    "logo": "./images/myhome.svg",
    "new": false,
    "featured": false,
    "position": "Junior Frontend Developer",
    "role": "Frontend",
    "level": "Junior",
    "postedAt": "5d ago",
    "contract": "Contract",
    "location": "USA Only",
    "languages": ["CSS", "JavaScript"],
    "tools": []
  },
  {
    "id": 5,
    "company": "Loop Studios",
    "logo": "./images/loop-studios.svg",
    "new": false,
    "featured": false,
    "position": "Software Engineer",
    "role": "Fullstack",
    "level": "Midweight",
    "postedAt": "1w ago",
    "contract": "Full Time",
    "location": "Worldwide",
    "languages": ["JavaScript"],
    "tools": ["Ruby", "Sass"]
  },
  {
    "id": 6,
    "company": "FaceIt",
    "logo": "./images/faceit.svg",
    "new": false,
    "featured": false,
    "position": "Junior Backend Developer",
    "role": "Backend",
    "level": "Junior",
    "postedAt": "2w ago",
    "contract": "Full Time",
    "location": "UK Only",
    "languages": ["Ruby"],
    "tools": ["RoR"]
  },
  {
    "id": 7,
    "company": "Shortly",
    "logo": "./images/shortly.svg",
    "new": false,
    "featured": false,
    "position": "Junior Developer",
    "role": "Frontend",
    "level": "Junior",
    "postedAt": "2w ago",
    "contract": "Full Time",
    "location": "Worldwide",
    "languages": ["HTML", "JavaScript"],
    "tools": ["Sass"]
  },
  {
    "id": 8,
    "company": "Insure",
    "logo": "./images/insure.svg",
    "new": false,
    "featured": false,
    "position": "Junior Frontend Developer",
    "role": "Frontend",
    "level": "Junior",
    "postedAt": "2w ago",
    "contract": "Full Time",
    "location": "USA Only",
    "languages": ["JavaScript"],
    "tools": ["Vue", "Sass"]
  },
  {
    "id": 9,
    "company": "Eyecam Co.",
    "logo": "./images/eyecam-co.svg",
    "new": false,
    "featured": false,
    "position": "Full Stack Engineer",
    "role": "Fullstack",
    "level": "Midweight",
    "postedAt": "3w ago",
    "contract": "Full Time",
    "location": "Worldwide",
    "languages": ["JavaScript", "Python"],
    "tools": ["Django"]
  },
  {
    "id": 10,
    "company": "The Air Filter Company",
    "logo": "./images/the-air-filter-company.svg",
    "new": false,
    "featured": false,
    "position": "Front-end Dev",
    "role": "Frontend",
    "level": "Junior",
    "postedAt": "1mo ago",
    "contract": "Part Time",
    "location": "Worldwide",
    "languages": ["JavaScript"],
    "tools": ["React", "Sass"]
  }
]

const filteredData = [...allData];
const filters = [];

const body = document.querySelector("body");

function filterFromJson(filter) {
  if (!filters.includes(job[filter])) {
    filters.push(job[filter]);
    displayData(filteredData.filter(fake => fake[filter] != job[filter]));
  }
}

function unFilterFromJson(filter) {
  
}

displayData(allData);

function displayData(data) {

    const mainDelete = document.querySelector("main");

    if (mainDelete) {
      mainDelete.remove();
    }

    const main = document.createElement("main");
    body.appendChild(main);

    data.forEach(job => {
      
      const divMain = document.createElement("article");
      main.appendChild(divMain);

      const divLeft = document.createElement("section");
      divLeft.classList = "section-left";
      divMain.appendChild(divLeft);
      
        const img = document.createElement("img");
        img.src = job.logo;
        divLeft.appendChild(img);

        const divText = document.createElement("div");
        divText.classList = "text"
        divLeft.appendChild(divText);

          const divTop = document.createElement("div");
          divTop.classList = "text-top"
          divText.appendChild(divTop);

            const companyName = document.createElement("span");
            companyName.innerText = job.company;
            companyName.classList = "company-name"
            divTop.appendChild(companyName);

            if (job.new) {
              const jobNew = document.createElement("span") 
              jobNew.innerText = "NEW!";
              jobNew.classList = "new"
              divTop.appendChild(jobNew);
            }

            if (job.featured) {
              const jobFeatured = document.createElement("span") 
              jobFeatured.innerText = "FEATURED";
              jobFeatured.classList = "featured"
              divTop.appendChild(jobFeatured);
            }

          const divMiddle = document.createElement("div");
          divMiddle.classList = "text-middle"
          divText.appendChild(divMiddle);

            const jobPosition = document.createElement("span");
            jobPosition.innerText = job.position;
            divMiddle.appendChild(jobPosition);

          const divBot = document.createElement("div");
          divBot.classList = "text-bot"
          divText.appendChild(divBot);

            const jobPostedAt = document.createElement("span");
            jobPostedAt.innerText = job.postedAt;
            divBot.appendChild(jobPostedAt);
            
            const jobContract= document.createElement("span");
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
        jobRole.addEventListener("click", () => filterFromJson(job.role))
        divRight.appendChild(jobRole);

        const jobLevel = document.createElement("span");
        jobLevel.innerText = job.level;
        jobRole.addEventListener("click", () => filterFromJson(job.level))
        divRight.appendChild(jobLevel);

        job.tools.forEach(tool => {
          const jobTool = document.createElement("span");
          jobTool.innerText = tool;
          jobRole.addEventListener("click", () => filterFromJson(tool))
          divRight.appendChild(jobTool);
        })

        job.languages.forEach(language => {
          const jobLanguage = document.createElement("span");
          jobLanguage.innerText = language;
          jobRole.addEventListener("click", () => filterFromJson(language))
          divRight.appendChild(jobLanguage);
        })
    }) 
}