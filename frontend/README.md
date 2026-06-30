# Folder Structure:
src/
├── assets/ 
├── components/ 
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
├── App.jsx 
├── index.css 
└── main.jsx 



# Account Schema: 
[ 
    { 
        "id": "QUYG1872TSUH98SK", 
        "public_id": "198WDYH1", 
        "username": "The Chosen", 
        "email": "", 
        "password": "", 
        "profile_url": "", 
        "banner_url": "", 
        "bio": "", 
    }
]



# Event Schema: 
[ 
    { 
        "id": "DQ09WDJIASJD9009", 
        "host_id": "198WDYH1", 
        "host_name: "The Chosen"
        "title": "Project Mooner", 
        "date": "3037-13-30", 
        "location": "Mars, Marala, L12P", 
        "description": "Annual end-of-year awards ceremony for longest breather.", 
        "budget": 6789, 
        "attendees": ["John", "BOB", "Thor"], 
        "stages": [ 
            { "id": "1", "description": "This is a stage 1", "isCompleted": true }, 
            { "id": "2", "description": "And this is stage 2", "isCompleted": false }, 
            { "id": "3", "description": "More stage that is 3", "isCompleted": false } 
        ]
    }
]



# Styling Required (High To Low Priorities): 
1. pages/Login.jsx 
2. pages/Home.jsx 
3. components/NavigationHeader.jsx 
4. pages/About.jsx 
5. pages/Contact.jsx 
6. components/ErrorToast.jsx # This is like when there's error, it will pop up, if you cannot do it, Seng will 
7. components/Loading.jsx 
8. components/Profile/jsx # Seng will edit this 