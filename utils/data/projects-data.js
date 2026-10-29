export const projectsData = [
    {
        id: 1,
        name: 'Real-Time Collaborative Sync Engine',
        description: "Building a Java/Spring Boot backend system designed to support real-time shared-data synchronization across multiple connected clients using WebSocket-based communication. Developing MySQL-backed persistence and version-based update validation to detect concurrent modifications and reduce data inconsistency during simultaneous requests. Planned features include Redis Pub/Sub integration for multi-instance event distribution and advanced conflict-resolution workflows.",
        tools: ['Java', 'Spring Boot', 'WebSockets', 'MySQL', 'REST APIs', 'Redis (Planned)'],
        role: 'Backend Developer',
        code: '',
        demo: '',
        status: 'In Progress',
        period: 'October 2026',
        highlights: [
            'WebSocket-based client synchronization (in development)',
            'MySQL-backed persistence design',
            'Version-based update validation to reduce data conflicts',
            'Conflict-resolution workflows (planned)',
            'Redis Pub/Sub for multi-instance events (planned)',
        ]
    },
    {
        id: 2,
        name: 'Employee Management System',
        description: "RESTful Employee Management System built with Spring Boot, featuring complete CRUD operations and a clean layered architecture using Controller, Service, Repository, DTO, and Mapper components. Integrates Spring Data JPA and Hibernate with MySQL for persistent storage. Implements DTO-based data transfer, custom RuntimeException handling for employee-not-found scenarios, and REST API validation with Postman.",
        tools: ['Java', 'Spring Boot', 'REST API', 'MySQL', 'Spring Data JPA', 'Hibernate', 'Maven', 'Postman'],
        role: 'Backend Developer',
        code: '',
        demo: '',
        status: 'Completed',
        period: 'August 2026',
        highlights: [
            'Full CRUD REST API with Spring Boot',
            'Layered architecture: Controller → Service → Repository → DTO',
            'Spring Data JPA + Hibernate + MySQL integration',
            'DTO-based data transfer pattern',
            'Custom RuntimeException for not-found scenarios',
            'Tested with Postman',
        ]
    },
    {
        id: 3,
        name: 'Multithreaded File Downloader',
        description: "Java application that splits file downloads into multiple segments and processes them concurrently using separate threads. Uses Java Thread and Runnable, coordinates threads with join() and synchronization to maintain data integrity during concurrent operations. Implements structured exception handling for download errors and reliable file processing under varying runtime conditions.",
        tools: ['Java', 'Multithreading', 'Exception Handling', 'File I/O'],
        role: 'Backend Developer',
        code: '',
        demo: '',
        status: 'Completed',
        period: 'May 2026',
        highlights: [
            'Concurrent download segment processing',
            'Java Thread and Runnable implementation',
            'Thread coordination via join() and synchronization',
            'Data integrity during concurrent operations',
            'Structured exception handling for runtime errors',
        ]
    },
];


// Do not remove any property.
// Leave it blank instead as shown below

// {
//     id: 1,
//     name: '',
//     description: "",
//     tools: [],
//     role: '',
//     code: '',
//     demo: '',
// },
