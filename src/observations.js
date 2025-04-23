// 35 observations
const myArray = [
  {
    authType: "osha",
    imgFileName: "frayedSling",

    observations: [
      {text: "Sling is frayed"},
      {text: "Manufacturer's label is illegible"}
    ],

    recommendations: [
      {text: "Tag & isolate sling"},
      {
        text: "Replace sling",
        url: "https://www.uline.com/BL_4023/Slings"
      },
    ],

    references: [
      {
        text: "29 CFR 1910.184(c)(1)",
        url: "https://www.ecfr.gov/current/title-29/part-1910/section-1910.184#p-1910.184(c)(1)"
      },
      {
        text: "29 CFR 1910.184(c)(14)",
        url: "https://www.ecfr.gov/current/title-29/part-1910/section-1910.184#p-1910.184(c)(14)"
      },
    ]
  },

  {
    authType: "osha",
    imgFileName: "flammableCabinet",

    observations: [
      {text: "Flammable cabinet not labeled"},
    ],
    recommendations: [
      {
        text: "Purchase label",
        url: "https://www.amazon.com/SmartSign-Magnetic-Legend-Flammable-Yellow/dp/B00HK9XMH2?th=1"
      },
      {
        text: "DIY with stencils and red paint",
        url: "https://www.uline.com/BL_2659/Brass-Stencils"
      }
    ],
    references: [
      {
        text: "29 CFR 1910.106(d)(3)(ii)",
        url: "https://www.ecfr.gov/current/title-29/part-1910/section-1910.106#p-1910.106(d)(3)(ii)",
      }
    ]
  },

  {
    authType: "osha",
    imgFileName: "cartCylinders",

    observations: [{
      text: "Oxy-fuel cylider carts do not have a fire barrier installed",
      url: "https://www.osha.gov/laws-regs/standardinterpretations/1998-12-31-0"
    }],
    references: [
      {
        text: "29 CFR 1910.253(b)(4)(iii)",
        url: "https://www.ecfr.gov/current/title-29/part-1910/section-1910.253#p-1910.253(b)(4)(iii)",
      }],

      recommendations: [
        {
          text: "Purchase or DIY",
          url: "https://www.airgas.com/product/Gas-Equipment/Cylinder-Carts-and-Storage/Cylinder-Carts/p/STCFW-12"
        }],
    },

  {
    authType: "osha",
    imgFileName: "electricalSurface",
    observations: [
      { text: "Electrical box used as a storage surface"}
    ],
    references: [
      {
        url: "https://www.ecfr.gov/current/title-29/part-1910/section-1910.303#p-1910.303(g)(1)(ii)",
        text: "29 CFR 1910.303(g)(1)(ii)"
      }
    ],
    recommendations: [
      { text: 'Keep space about electrical equipment clear'}
    ]
  },

  {
    authType: "osha",
    imgFileName: "fireExtinguisherClearance",
    observations: [{text: "Space around fire extinguishers is cluttered"}],
    references: [{
      url: "https://www.ecfr.gov/current/title-29/part-1910/section-1910.157#p-1910.157(c)(1)",
      text: "29 CFR 1910.157(c)(1)"
    }],
    recommendations: [{text:'Maintain clearance around fire extinguishers'}],
  },

  {
    authType: "osha",
    imgFileName: "forkliftForks",
    observations: [{text:"Forklift forks have been cut through"}],
    references: [{
      url: "https://www.ecfr.gov/current/title-29/part-1910/section-1910.178#p-1910.178(q)(6)",
      text: "29 CFR 1910.178(q)(6)"
    }],
    recommendations: [{
      url: "https://www.grainger.com/product/19ND78?gucid=N:N:PS:Paid:GGL:CSM-2295:4P7A1P:20501231&gad_source=1&gclid=EAIaIQobChMI4o3wlaKGhAMVGx6tBh1vEAJOEAQYAiABEgJM6PD_BwE&gclsrc=aw.ds",
      text: "Replace forks",
    }]
  },

  {
    authType: "osha",
    imgFileName: "ladderLabel",
    observations: [{text:"Manufacturer's label on ladder is illegible"}],
    references: [{url: "https://www.ecfr.gov/current/title-29/part-1910/section-1910.23#p-1910.23(b)(9)",
      text: "29 CFR 1910.23(b)(9)",}],
    recommendations: [{url: "https://www.grainger.com/product/24HW02?gucid=N:N:PS:Paid:GGL:CSM-2295:4P7A1P:20501231&gad_source=1&gclid=EAIaIQobChMI1feopZ7qgwMVrtXCBB2VLAXsEAQYASABEgKQYPD_BwE&gclsrc=aw.ds",
      text: "Replace worn labels"}]
  },

  {
    authType: "osha",
    imgFileName: 'exposedWire',
    observations: [{text:"Exposed conducting cable in SMAW area"}],
    references: [
      {
        text: "29 CFR 1910.254(d)(9)(iii)",
        url: "https://www.ecfr.gov/current/title-29/part-1910/section-1910.254#p-1910.254(d)(9)(iii)"
      },
      {
        url: "https://www.ecfr.gov/current/title-29/part-1910/section-1910.305#p-1910.305(f)(1)",
        text: "29 CFR 1910.305(f)(1)"
      }
    ],
    recommendations: [{text:"Insulate conductors"}]
  },

  {
    authType: "osha",
    imgFileName: 'tapedTool',
    observations: [{
      url: "https://www.osha.gov/laws-regs/standardinterpretations/1998-12-16",
      text: "Power tool cable has electrical tape covering"
    }],
    references: [{
      url: "https://www.ecfr.gov/current/title-29/part-1926/section-1926.403#p-1926.403(b)(1)(iii)",
      text: "29 CFR 1926.403(b)(1)(iii)"
    }],
    recommendations: [{text:"Tag and isolate tool until repaired"}]
  },

  {
    authType: "osha",
    observations: [{text: "Fire extinguisher inspection tag not filled out for December, January, February"}],
    references: [{
      url: "https://www.ecfr.gov/current/title-29/part-1910/section-1910.157#p-1910.157(e)(2)",
      text: "29 CFR 1910.157(e)(2)"
    }],
    recommendations: [{text:""}],
    imgFileName: 'fireExtinguisherTag',
  },

  {
    authType: "osha",
    observations: [{text:"Student uses personal Milwaukee angle grinder with guard removed"}],
    references: [{url: "https://www.ecfr.gov/current/title-29/part-1910/subpart-P#p-1910.243(c)(4)",
      text: "29 CFR 1910.243(c)(4)"}],
    recommendations: [{text:"Tool-specific student safety training checklist"}]
  },

  { 
    authType: "state",
    imgFileName: "eyewashStationTag",

    observations: [
      {
        text: "Eyewash station inspection tag not filled out",
        url: "https://oag.ca.gov/sites/all/files/agweb/pdfs/cci/safety/eyewashes.pdf"
      }
    ],

    references: [
      {
        text:"Ca Labor code Title 8 Article 109 §5162",
        url: "https://www.dir.ca.gov/title8/5162.html"
      }
    ],

    recommendations: [
      {
        url: "https://webstore.ansi.org/standards/isea/ansiiseaz3582014r2020",
        text: "Purchase copy of ANSI Z358.1",
      }
    ]
  },

  {
    authType: "ANSI",
    observations: [{
      text: '"My girlfriend\'s pants caught on fire"'}],
    recommendations: [{text:"Discuss clothing flammability"}],
    references: [{
      url: "https://www.aws.org/Standards-and-Publications/Free-Resources/",
      text: "ANSI Z49.1 4.3",
    }]
  },

  {
    authType: "anecdote",
    observations: [{
      text: '"The arc is almost too bright to look at, I\'m messing with my helmet\'s auto-darkening settings"'
    }],
    recommendations: [
      {
        text:"Discuss arc-flash protection"
      },
      {
        text: "Reference posted shade table"
      }
    ],
    references: [{text:"Anecdote"}]
  },

  {
    authType: "anecdote",
    observations: [{text: '"And then you get the black boogers at the end of the day"'}],
    recommendations: [{text: "Discuss respiratory protection past fume avoidance"}],
    references: [{text: "Anecdote"}],
  },

  {
    authType: "ANSI",
    references: [{ 
      url: "https://www.aws.org/Standards-and-Publications/Free-Resources/",
      text: "ANSI Z49.1 10.8.3.1",
    }],
    observations: [{text: "Gas cylinder company employee overloads a 2-cylinder cart with a third cylinder, that subsequently falls from the cart and audibly depressurizes"}],
    recommendations: [{text:""}]
  },

  {
    authType: "observation",
    references: [{text:"Observation"}],
    observations: [{text:"Wash station could use some TLC"}],
    recommendations:  [{text:"Optimize wash station"}],
    imgFileName: "washStation"
  },

  {
    authType: "observation",
    references: [{text: "Observation"}],
    observations: [{text: "Students wearing a combination of no respiratory protection, balaclavas, and half-mask respirators with both organic and particulate filters attached"}],
    recommendations: [{text: "Discuss respiratory protection"}]
  },

  {
    authType: "ANSI",
    references: [{url: "https://www.aws.org/Standards-and-Publications/Free-Resources/",
      text: "ANSI Z49.1 3.2.3.4"
    }],
    observations: [{text: "Students DIY hot warning label"}],
    recommendations: [{ text: "Designate hot material area"}],
    imgFileName: "hotArea",
  },

  {
    authType: "ANSI",
    references: [{url: "https://www.aws.org/Standards-and-Publications/Free-Resources/",
      text: "ANSI Z49.1 E11.4.9.2",}],
    observations: [{text: "Student arc-welding while standing in running water"}],
    imgFileName: "puddleBoots",
    recommendations: [{text: ""}],
    serious: "yes",
  },

  // {
  //   authType: "observation",
  //   references: "Observation",
  //   observations: "&ge;3 students show up to class on a school holiday",
  //   recommendations:"Use e-mail notification for days off"
  // },

  // {
  //   type: "textbook",
  //   references: '"Modern Welding" 12th ed. G.W., Section 1.2 page 6',
  //   observations: "Textbook mentions welder&apos;s ability to douse entire body using emergency shower",
  //   recommendations: "Consider emergency shower Discuss fire blanket usage", 
  // },

  {
    authType: "textbook",

    references: [
      {text: '"Modern Welding" 12th ed. G.W., Section 1.5.1 page 20'},
    ],
    observations: [
      {text: "Textbook mentions areas where > 220 V is present must be marked"}
    ],
    recommendations: [{text: 'Add signage "Danger: High Voltage"'}]
  },

  // {
  //   type: "ANSI",
  //   references: "'https://www.aws.org/Standards-and-Publications/Free-Resources/'>ANSI Z49.1 E4.3</a>",
  //   observations: "Students trousers do not overlap with boot top",
  //   recommendations: "PPE signage",
  // },

  // {
  //   type: "ANSI",
  //   reference: "'https://www.aws.org/Standards-and-Publications/Free-Resources/'>ANSI Z49.1 11.4.9.4</a>",
  //   observation: "Electrode holders are not in good repair",
  //   recommendation: "Replace electrode holders",
  //   media: "electrodeHolder"
  // },

  // {
  //   type: "observation",
  //   reference: "Observation",
  //   observation: "Signage deteriorated",
  //   recommendation: "Replace signage",
  //   media: "deterioratedSignage"
  // },

  // {
  //   type: "osha",
  //   reference: "'https://www.ecfr.gov/current/title-29/part-1910/section-1910.147#p-1910.147(a)(3)(i)'>29 CFR 1910.147(a)(3)(i)</a>",
  //   observation: "Duct tape and paper used to mark malfunctioning equipment",
  //   recommendation: "Document LOTO procedures",
  //   media: "SMAWmachineLOTO"
  // },

  // {
  //   type: "observation",
  //   reference: "Observation",
  //   observation: "Leather jackets dumped in container develop smell during wet weather",
  //   recommendation: "DIY coat rack for leather jacket storage",
  //   media: "leatherJacketDump"
  // },

  // {
  //   type: "observation",
  //   reference: "Observation",
  //   observation: "Students eat in the shop and near metal cutting areas",
  //   recommendation: "",
  // },

  // {

  //   type: "ANSI",
  //   reference: "'https://www.aws.org/Standards-and-Publications/Free-Resources/'>ANSI Z49.1 4.2.1.4</a>",
  //   observation: "College administrative staff perform media & walkthrough in working area during hot work without PPE",
  //   recommendation: "",
  // },

  // {
  //   type: "observation",
  //   reference: "Observation",
  //   observation: "Curriculum does not include coverage of AWS ANSI standards, OSHA standards, safety data sheets, technical data sheets, user manuals",
  //   recommendation: "",
  // },

  // {
  //   type: "observation",
  //   reference: "Observation",
  //   observation: "No anonymous institutional feedback mechanism promoted",
  //   recommendation: "",
  // },

  // {
  //   type: "observation",
  //   reference: 'Observation',
  //   observation: "Majority of new students fail safety quiz",
  //   recommendation: "Add to controlled documents: safety exam, safety exam answer key",
  // },

  // {
  //   type: "observation",
  //   reference: 'Observation',
  //   observation: "Introductory class using mixed metal stock",
  //   recommendation: "Document consumible life cycle"
  // },

  {
    authType: "anecdote",
    observations: [{text:'"What am I supposed to do, just fix everything?"'}],
    recommendations: [{text:"Empower teaching staff with confidence to implement a safety education system"}],
    references: [{text:"Anecdote"}],
  },
]
export default myArray;