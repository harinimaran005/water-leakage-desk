# 💧 Water Leakage & Maintenance Issue Desk

A responsive web application for reporting, tracking, and managing
water leakage and maintenance issues.

## 📌 Project Overview

The Water Leakage & Maintenance Issue Desk helps residents report
water leakage problems and allows maintenance administrators to
manage those issues efficiently.

The system provides separate access for Residents and Maintenance
Admins using role-based access control.

## 👥 User Roles

### 🏠 Resident

Residents can:

- Login as a Resident
- Report water leakage or maintenance issues
- Select the issue location
- Select severity
- Add a detailed description
- View their reported issues
- Track issue status
- See the assigned technician

### 🛠️ Maintenance Admin

Maintenance Admins can:

- Login as a Maintenance Admin
- View all reported issues
- Filter issues by severity
- Filter issues by location
- Assign technicians
- Change issue status
- Mark issues as resolved
- View issue statistics

## 🔄 Issue Workflow

```text
Resident Reports Issue
        ↓
      Pending
        ↓
Technician Assigned
        ↓
    In Progress
        ↓
      Resolved