# 🏢 Dream OS Ultimate

**A Complete School Facility Management System for SIF Al Fikri**  
*"From Vision to Reality - Built with ❤️ for Education"*

![Dream OS Banner](https://via.placeholder.com/1200x400/006400/FFFFFF?text=DREAM+OS+ULTIMATE+-+Facility+Booking+System)

## 🌐 Live Deployment
🚀 **Production URL:** https://giel4n9stud10-a11y.github.io/Dream-Os/

📱 **Mobile QR Code:**
![QR Code](https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://giel4n9stud10-a11y.github.io/Dream-Os/)

---

## ✨ Features Overview

### 📅 **Booking Management**
✅ **Smart Booking System** - Intuitive form with real-time validation  
✅ **Double Booking Prevention** - Auto-check for schedule conflicts  
✅ **7-Day Calendar View** - Live updates with color-coded events  
✅ **Admin Approval Workflow** - Request → Review → Approve/Reject  

### 🔐 **Security & Control**
✅ **Password-Protected Admin Panel** - Role-based access control  
✅ **Row Level Security (RLS)** - Database-level protection  
✅ **Phone Number Validation** - Indonesian format (62xxxx)  
✅ **Audit Logging** - Track all system activities  

### 📱 **User Experience**
✅ **Mobile-First Design** - Optimized for Redmi Note 9 Pro & Samsung A15  
✅ **Offline Mode** - Works without internet connection  
✅ **PWA Ready** - Install as native app on mobile devices  
✅ **Real-time Updates** - Live sync across all devices  

### 🔔 **Notifications**
✅ **WhatsApp Integration** - Instant alerts to Pak Erwin  
✅ **In-App Notifications** - Real-time status updates  
✅ **Email Ready** - SMTP configured for future expansion  

### 📊 **Reporting & Analytics**
✅ **K3 Incident Reporting** - Safety management system  
✅ **Dashboard Analytics** - Real-time statistics & insights  
✅ **Data Export** - JSON export for backup & analysis  

---

## 🛠️ Technology Stack

### **Frontend Layer**
- **HTML5** - Semantic markup for accessibility
- **CSS3** - Custom design system with CSS variables
- **Vanilla JavaScript** - No framework dependencies
- **Supabase JS Client** - Real-time database integration

### **Backend & Database**
- **Supabase** - PostgreSQL database with Realtime API
- **6 Optimized Tables** - Normalized schema with relationships
- **Row Level Security** - Granular access control
- **Storage** - File upload ready for K3 photos

### **Infrastructure**
- **GitHub Pages** - Free, global CDN hosting
- **Supabase Cloud** - Managed database & authentication
- **WhatsApp API** - Notification gateway

---

## 🗃️ Database Schema

```sql
-- Core Tables
1. dream_bookings         # Facility booking transactions
2. dream_facilities       # Master facility data
3. dream_users            # User profiles & admin accounts
4. dream_k3_reports       # Safety incident reports
5. dream_notifications    # System notifications
6. dream_audit_logs       # Activity audit trail
