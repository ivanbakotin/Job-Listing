data = [
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

displayData(data)

function displayData(data) {
    const main = document.getElementsByTagName("main")[0];

    data.forEach(job => {
      
      const divMain = document.createElement("article");
      main.appendChild(divMain);

      const divLeft = document.createElement("section");
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

            const companyName = document.createElement("div");
            companyName.innerText = job.company;
            divTop.appendChild(companyName);

            if (job.new) {
              const jobNew = document.createElement("div") 
              jobNew.innerText = "NEW!";
              divTop.appendChild(jobNew);
            }

            if (job.featured) {
              const jobFeatured = document.createElement("div") 
              jobFeatured.innerText = "FEATURED";
              divTop.appendChild(jobFeatured);
            }

          const divMiddle = document.createElement("div");
          divMiddle.classList = "text-middle"
          divText.appendChild(divMiddle);

            const jobPosition = document.createElement("div");
            jobPosition.innerText = job.position;
            divMiddle.appendChild(jobPosition);

          const divBot = document.createElement("div");
          divBot.classList = "text-bot"
          divText.appendChild(divBot);

            const jobPostedAt = document.createElement("div");
            jobPostedAt.innerText = job.postedAt;
            divBot.appendChild(jobPostedAt);
            
            const jobContract= document.createElement("div");
            jobContract.innerText = job.contract;
            divBot.appendChild(jobContract);
            
            const jobLocation = document.createElement("div");
            jobLocation.innerText = job.location;
            divBot.appendChild(jobLocation);
          
      const divRight = document.createElement("section");
      divMain.appendChild(divRight);         
        
        const jobRole = document.createElement("div");
        jobRole.innerText = job.role;
        divRight.appendChild(jobRole);

        const jobLevel = document.createElement("div");
        jobLevel.innerText = job.level;
        divRight.appendChild(jobLevel);

        job.tools.forEach(tool => {
          const jobTool = document.createElement("div");
          jobTool.innerText = tool;
          divRight.appendChild(jobTool);
        })

        job.languages.forEach(language => {
          const jobLanguage = document.createElement("div");
          jobLanguage.innerText = language;
          divRight.appendChild(jobLanguage);
        })
    }) 
}