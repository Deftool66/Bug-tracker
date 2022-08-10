import bugModel from '../../Models/bugModel.js';

export function retrieveBugs() {
  let data = [];

  data.push(new bugModel({
    _id:23456789,
    name:"crash on Load",
    details:"crashes after 3 seconds",
    steps:"open application and it will crash",
    version:"V2.0",
    assigned:"Tarik Azale",
    creator:"Joe Bloggs",
    priority:1,
    time:"23:37",
  }));

  data.push(new bugModel({
      _id: 23456789 ,
      name: "wont Load",
      details: "crashes after 3 seconds",
      steps: "open application and it will crash",
      version: "V2.0",
      assigned: "Tarik Azale",
      creator: "Joe Bloggs",
      priority:3,
      time: "23:38 ",
    })
  );

  let sorted = data.sort((a,b)=>{return a.priority - b.priority});
  return sorted;
}
