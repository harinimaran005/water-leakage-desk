# 💧 Water Leakage & Maintenance Issue Desk

A responsive web application for reporting, tracking, and managing water leakage and maintenance issues.

## 📌 Project Overview

The Water Leakage & Maintenance Issue Desk helps residents report water leakage problems and allows maintenance administrators to manage and resolve those issues efficiently.

The system provides separate access for **Residents** and **Maintenance Admins** using Role-Based Access Control (RBAC).

## 👥 User Roles

### 🏠 Resident

Residents can:

* Login as a Resident
* Report water leakage or maintenance issues
* Select issue location
* Select severity
* Add a detailed description
* View their reported issues
* Track issue status
* See the assigned technician

### 🛠️ Maintenance Admin

Maintenance Admins can:

* Login as a Maintenance Admin
* View all reported issues
* Filter issues by severity
* Filter issues by location
* Assign technicians
* Update issue status
* Mark issues as resolved
* View issue statistics

## 🔐 Mock Login / Role Switcher

The application uses a mock role-based login for demonstration.

Select the required role from the login page:

* **Resident** – Accesses the Resident Dashboard
* **Maintenance Admin** – Accesses the Maintenance Dashboard

Unauthorized users are prevented from accessing role-restricted pages.

## 🔄 Issue Workflow

Resident Reports Issue
        ↓
      Pending
        ↓
Technician Assigned
        ↓
   In Progress
        ↓
     Resolved


## 💡 Innovation – Smart Issue Prioritization

The Maintenance Dashboard includes a **Smart Issue Prioritization** feature to help administrators identify important maintenance requests quickly.

Issues are organized based on workflow:


Unassigned
    ↓
In Progress
    ↓
Resolved


Within each workflow group, issues are prioritized by severity:


High → Medium → Low


An **Unassigned + High Severity** issue is identified as:


🚨 Urgent Priority


This helps maintenance staff quickly identify high-priority issues that have not yet been assigned to a technician.

## 🎬 Bonus Feature – Smooth UI Micro-Interactions

Smooth UI micro-interactions are implemented using **Framer Motion**.

Implemented interactions include:

* Smooth entrance animations
* Dashboard card hover effects
* Issue card animations
* Button hover and tap animations
* Smooth visual transitions

## 🛠️ Tech Stack

* React.js
* Vite
* Tailwind CSS
* Axios
* React Router
* Framer Motion
* JSON Server
* REST API

## ⚙️ Setup Instructions

Clone the repository:

```bash
git clone https://github.com/harinimaran005/water-leakage-desk.git
```

Navigate to the project folder:

```bash
cd water-leakage-desk
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

The application will be available at the local URL shown in the terminal.

## 🧪 Test Instructions

Run the application using:

```bash
npm run dev
```

The following features were manually tested:

* Resident login and dashboard access
* Resident issue reporting
* Viewing reported issues
* Maintenance Admin dashboard
* Severity filtering
* Location filtering
* Technician assignment
* Issue status updates
* Issue resolution
* Role-based access control
* Unauthorized access handling
* Smart issue prioritization
* Smooth UI interactions


## 🌐 Live Demo

**Frontend:**
https://water-leakage-desk.vercel.app/

**Backend API:**
https://water-leakage-api-cxcg.onrender.com/
