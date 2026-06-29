# Folder Structure:
src/
├── assets/ 
├── components/ 
│   ├── Navbar.jsx
│   ├── EventCard.jsx
│   └── ProtectedRoute.jsx
├── context/ 
│   ├── AuthContext.jsx
│   └── EventContext.jsx
├── pages/ 
│   ├── About.jsx
│   ├── AllEvents.jsx
│   ├── Contact.jsx
│   ├── Dashboard.jsx
│   ├── Home.jsx
│   └── Login.jsx
├── utils/ 
│   └── helpers.js
├── App.jsx 
├── index.css 
└── main.jsx 

# Schema: 
[ 
    { 
        "id": "QUYG1872TSUH98SK", 
        "userId": "user_12345", 
        "title": "Project Mooner", 
        "date": "3037-13-30", 
        "location": "Mars, Marala, L12P", 
        "description": "Annual end-of-year awards ceremony for longest breather.", 
        "budget": 6789, 
        "attendees": ["John", "BOB", "Thor"], 
        "tasks": [ 
            { "id": "1", "stage_text": "This is a stage 1", "isCompleted": true }, 
            { "id": "2", "stage_text": "And this is stage 2", "isCompleted": false }, 
            { "id": "3", "stage_text": "More stage that is 3", "isCompleted": false } 
        ]
    }
]
