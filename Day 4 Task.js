 1. For In loop

  var obj = { "name": "raja" ,"age": 26,"gender":"male"}
  for( var a in obj){
    console.log(a,obj[a]);
  }
  
  2. Create a own Resume in JSON Format 

  {
    "basics": {
      "name": "ATHISTA RAJA",
      "label": "",
      "picture": "",
      "email": "athisraja45@gmail.com",
      "phone": "+91 1234567890",
      "degree": "BE",
      "website": "https://www.luckyraja.net",
      "summary": "A one-sentence to one-paragraph overview text. Do not include any line-breaks.",
      "location": {
        "address": "Your street address or mailing address",
        "pincode": "620004",
        "city": "chennai",
        "country": "India",
        "region": "Tamilnadu"
      },
  
    "education": [
      {
        "institution": "PSN institute of technology and science",
        "area": "Tirunelveli",
        "studyType": "BE",
        "startDate": "1-08-2014",
        "endDate": "14-07-2018",
        "Department": "civil"
      }
    ],
    "skills": [
      {
        "name": " Programming Languages",
        "level": "mediator",
        "keywords": "Java"
      }
    ],
    "languages": [
      {
        "language": "Tamil","english",
        "fluency": "Both"
      }
    ],
    "interests": [
      {
        "name": "A category of interests (e.g. 'Sports')",
        "keywords": [
          "Cricket","kabadi"
        ]
      }
    ]
  }
