# 🏢 Job Posting Site

![PHP](https://img.shields.io/badge/PHP-7.4-blue.svg)
![MySQL](https://img.shields.io/badge/MySQL-Database-orange.svg)
![Bootstrap](https://img.shields.io/badge/Bootstrap-Framework-purple.svg)
![License](https://img.shields.io/github/license/NoorEMobeen/job-posting-site-master)

## 📌 Overview

**Job Posting Site** is a web-based job portal designed to connect **job seekers** with **employers**. It allows recruiters to **post job listings**, while candidates can **apply for jobs** and manage their applications. The platform is built using **PHP, MySQL, and Bootstrap**, ensuring a **responsive, user-friendly experience**.

## 🚀 Features

- 🏢 **Employer Dashboard**: Post and manage job listings.
- 👩‍💻 **Job Seeker Portal**: Browse and apply for jobs.
- 📂 **Resume Upload**: Candidates can submit resumes for job applications.
- 🔎 **Search & Filter**: Find jobs based on categories, locations, and keywords.
- 📧 **Email Notifications**: Automated emails for job postings and applications.
- 🎨 **Responsive UI**: Optimized for both desktop and mobile using Bootstrap.
- 🔑 **User Authentication**: Secure **login & registration** for both recruiters and applicants.

## 🛠 Tech Stack

- **Backend**: PHP (Core PHP / Laravel if applicable)
- **Database**: MySQL
- **Frontend**: HTML, CSS, Bootstrap, JavaScript
- **Authentication**: PHP Sessions / JWT (mention if used)

## 📦 Installation & Setup

To set up and run this project locally, follow these steps:

### 1️⃣ Prerequisites

Ensure you have the following installed:

- **XAMPP / WAMP** (For PHP and MySQL)
- **PHP 7.4+**
- **MySQL**
- **Apache Server**

### 2️⃣ Clone the Repository

```sh
git clone https://github.com/NoorEMobeen/job-posting-site-master.git
cd job-posting-site-master
```

### 3️⃣ Set Up Database

1. Open **phpMyAdmin**.
2. Create a new database (e.g., `job_portal`).
3. Import the database file (`database.sql` if included) from the project.

### 4️⃣ Configure Database Connection

Modify the **database configuration** in `config.php` (or `.env` if using Laravel):

```php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "job_portal";
```

### 5️⃣ Start the Server

If using **XAMPP**, move the project to `htdocs` and start **Apache & MySQL**.

Then, open your browser and go to:

```sh
http://localhost/job-posting-site-master/
```

## 📂 Project Structure

```
job-posting-site-master/
│── assets/              # CSS, JS, images, and Bootstrap files
│── config.php           # Database connection file
│── index.php            # Homepage
│── employer/            # Employer dashboard & job posting features
│── jobseeker/           # Job seeker profile & application management
│── includes/            # Common reusable PHP files
│── database.sql         # MySQL database dump (if provided)
│── README.md            # Project documentation
```

## 🎯 Usage Guide

### 🔹 Employer (Recruiter)
1. Sign up as an **Employer**.
2. Post a **new job listing** with details.
3. Manage **applications** from job seekers.

### 🔹 Job Seeker
1. Register and create a **profile**.
2. Browse **available jobs**.
3. Apply for jobs with an uploaded **resume**.

## 🛠 Troubleshooting

If you face any issues:

- Ensure **Apache & MySQL** are running.
- Verify **database connection** settings in `config.php`.
- If login errors occur, **clear browser cookies** or check session settings.

## 🤝 Contributing

Contributions are welcome! To contribute:

1. **Fork** this repository.
2. **Clone** your forked repo.
3. Create a **new branch** (`feature-branch`).
4. Commit your changes.
5. Push the branch and create a **Pull Request**.

## 📜 License

This project is licensed under the **MIT License** – see the [`LICENSE`](LICENSE) file for details.

## 📧 Contact

For any queries or discussions:

- **Email**: noormobeen123@gmail.com  
- **GitHub**: [NoorEMobeen](https://github.com/NoorEMobeen)
