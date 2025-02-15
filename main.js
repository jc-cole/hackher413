import { DatabaseHandler } from "./databaseHandler.js"

const mockData = {"majors": [
      {
        "majorId": "cics",
        "classes": [
          {
            "classId": "cics101",
            "className": "Introduction to Computer Science",
            "comments": [
              {
                "userId": "u001",
                "username": "studentA",
                "comment": "Great intro for newbies, workload is moderate."
              },
              {
                "userId": "u002",
                "username": "studentB",
                "comment": "Would recommend a bit of Python background."
              }
            ]
          },
          {
            "classId": "cics201",
            "className": "Data Structures",
            "comments": [
              {
                "userId": "u003",
                "username": "studentC",
                "comment": "Challenging but extremely useful."
              }
            ]
          }
        ]
      },
      {
        "majorId": "info-sci",
        "classes": [
          {
            "classId": "info101",
            "className": "Intro to Information Systems",
            "comments": [
              {
                "userId": "u004",
                "username": "studentD",
                "comment": "Lots of group projects."
              }
            ]
          }
        ]
      }
    ]
}


let db = new DatabaseHandler("data")

db.setData(mockData)

db.save()

db.load()

let jsonContainer = document.createElement("div")

jsonContainer.textContent = JSON.stringify(db.data)

document.querySelector("body").appendChild(jsonContainer)




