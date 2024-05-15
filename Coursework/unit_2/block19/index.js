const freelancers = [
  { name: "Alice", occupation: "Writer", price: "$30" },
  { name: "Bob", occupation: "Teacher", price: "$50" },
  { name: "Carol", occupation: "Programmer", price: "$70" },
];

const newFreelancers = [
  { name: "Jesus", occupation: "Carpenter", price: "$75" },
  { name: "Everado", occupation: "Welder", price: "$35" },
  { name: "Carson", occupation: "Warehouser", price: "$45" },
  { name: "Noah", occupation: "Chauffeur", price: "$55" },
  { name: "Kaitlyn", occupation: "Veterinarian", price: "$65" },
  { name: "Justin", occupation: "Agent", price: "$85" },
  { name: "Chance", occupation: "Blogger", price: "$95" },
];

function init() {

/**
 * 👉 STEP 1: Grab the div with the id of "root"
 */
  const root = document.querySelector("#root");

  /**
   * 👉 STEP 2:
   *    Create a new h1 element that says "freelancers"
   *    Add the new h1 to the root div
   */
  const freelancersTitle = document.createElement("h1");
  freelancersTitle.innerText = "Freelancer Forum";
  root.append(freelancersTitle);

  let freelancersBody = document.createElement("p");
  freelancersBody.innerText = "The average starting price is $30.";
  root.append(freelancersBody);

  const freelancersTitle2 = document.createElement("h2");
  freelancersTitle2.innerText = "Available Freelancers";
  root.append(freelancersTitle2);

  /**
   * 👉 STEP 3:
   *    Create a table to hold our freelancers in
   */
  const freelancersTable = document.createElement("table");
  const thead = document.createElement("thead");
  const tbody = document.createElement("tbody");

  for (let key of Object.keys(freelancers[0])) {
    const th = document.createElement("th");
    const header = document.createTextNode(key);
    thead.appendChild(th).appendChild(header);
  }

  //add thead to freelancers table
  freelancersTable.appendChild(thead);

  //add tbody to freelancers table
  freelancersTable.appendChild(tbody);

  //add table to root div
  root.appendChild(freelancersTable);

  /**
   * 👉 STEP 5:
   *    Call the function you created in step 4
   */
  renderFreelancers();
}

/**
 * 👉 STEP 4:
 *    Create a function to render the freelancers in our freelancers array
 */
function renderFreelancers() {

  //select the tbody
  const freelancersTable = document.querySelector("tbody");

  //go through freelancers and get freelancerElements returned in new array
  const freelancersElements = freelancers.map((freelancer) => {

    //tr --> table row, td --> cell
    //create row for freelancer
    const row = document.createElement("tr");

    const f_name = document.createElement("td");
    f_name.innerText = freelancer.name;

    const f_occupation = document.createElement("td");
    f_occupation.innerText = freelancer.occupation;

    const f_price = document.createElement("td");
    f_price.innerText = freelancer.price;

    //add f_name, f_occupation and f_price to row
    row.appendChild(f_name);
    row.appendChild(f_occupation);
    row.appendChild(f_price);

    return row;
  });

  freelancersTable.replaceChildren(...freelancersElements);

  //get average price
  const total = freelancers.reduce(
    (acc, freelancer) => acc + parseInt(freelancer.price.slice(1)),
    0
  );

  const average = total / freelancers.length;

  //replace average price text
  const p = document.querySelector("p");
  p.innerText = "";
  p.innerText = "The average starting price is $" + average + ".";
}

/**
 * 👉 STEP 6:
 *    Create a function to add a new freelancer to the freelancers array
 */
function addFreelancer() {

  //stop when freelancers array has 10 freelancers
  if (freelancers.length >= 10) {
    return;
  }

  //get random freelancer from newFreelancers array
  const newFreelancer =
    newFreelancers[Math.floor(Math.random() * newFreelancers.length)];

  //add newFreelancer to freelancers array
  freelancers.push(newFreelancer);

  //re-render the freelancers table in the body
  renderFreelancers();
}

/**
 * 👉 STEP 7:
 *    Add an interval to add a new freelancer every second
 */
setInterval(addFreelancer, 2000);

//call init function
init();