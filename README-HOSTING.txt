MCPL STATIC WEBSITE - HOSTING INSTRUCTIONS
==========================================

This folder is ready for standard Windows/Linux shared hosting.
No Node.js, npm, database, or server.js is required.

UPLOAD STEPS
1. Sign in to the hosting control panel.
2. Open File Manager or connect using FTP.
3. Open the website root folder, usually public_html, httpdocs, or wwwroot.
4. Upload the CONTENTS of this folder. index.html must be directly inside the website root.
5. Open https://www.mcplsoftware.com and refresh with Ctrl+F5.

FORM BEHAVIOUR
- Enquiry, AMC, and support forms create a reference and open the visitor's email application.
- The visitor must press Send to email tallysupport@mcplmail.com.
- Static hosting cannot maintain a central admin database or live ticket tracking.

DNS
- Keep the existing email MX, SPF, DKIM, and TXT records unchanged.
- Point only the website A/CNAME records to the web-hosting values supplied by the hosting provider.

MAIN FILES
- index.html: home page
- contact.html: contact/enquiry page
- support.html: support request page
- amc.html: AMC request page
- assets/: CSS, JavaScript, images, and product images

