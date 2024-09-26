# General
- Most security software is open source so other security professionals can quickly contribute ❔
- Sandboxing is giving an application its own block of memory that other programs cannot access (on its own VM).
- Non-malicious threats include hardware failures, software downtime, network bandwidth issues.
- Data analytics leads to information leads to insight.
- Active malware in computer's memory, all files and running programs on hard disk, Windows Registry entries commonly used by malware to execute upon start-up, common malware locations (Windows directory, temp files).
- 3 2 1 rule, 3 backups of all critical data, 1 primary and 2 more, on premises with 2 storage types, 1 offsite backup.
# Attack vectors
- Buffer is a block of memory for storing data. Always test length of input before copying it into a buffer (bounds checking). Programs also randomly use memory locations so hackers dont know what memory they are writing to. Spaces in memory after password buffers that are monitored for intrusion are known as "canaries".
- Code injections, control what characters can be accepted.
- NAND mirroring, attaching wires to a device's memory chip and perfectly copying all its contents. Then trying passwords until the device makes you wait, and you reflash the memory with the copy you made and keep trying.
- Data breach DNE secrecy or confidentiality.
- Denial of service DNE availability.
- Phishing DNE integrity.
- Eavesdropping (packet-sniffing), occurs on wireless, wired, & phone connections. Packet sniffer can view anything sent on an unencrypted network. On an encrypted network it can only see origin and destination.
- Man in the middle (MITM), can be physical (nearby, same wifi network) or logical (emails or texts with fake links and malware-infected websites). Also spoofing, hijacking, and theft of browser cookies. Also on-path attacks.
- Replay attack is type of MITM which intercepts & retransmits, requires trusted entities with an access token (obtained after verification), by sniffing network traffic between trusted entities and hijack a session and get a token and impersonate an entity.
- Cross-site scripting (XSS), attacker attaches malicious code onto a trusted site. To prevent, validate inputs, set cookie rules, apply web application firewall (WAF) rules.
- SQLi (injection) to bypass security protections, returns syntax error if doesn't work. Parameterize queries, use an allowlist, store procedures ❔, escape user input.
- Buffer overflow, a site gets more internet traffic than it can handle, ICMP flood, diagnostic pings are sent to every computer on a network causing a crash, SYN flood, rapid series of incomplete connection requests floods a site until server crash.
# Encryption
- Advanced encryption standard (AES) is symmetric encryption.
- Cipher (substitutional, columnar transposition) is an algorithm that converts plain text into ciphertext.
- Diffie-Helman key exchange.
- Key unlocks the cipher.
- Rivest–Shamir–Adleman (RSA) encryption is a public-key cryptographic algorithm (asymmetric encryption).
- Modern encryption standards replaced Data Encryption Standard (DES), they authenticate a message to verify origin, options are digital certificates, passwords, or biometrics. They check integrity (Message Authentication Codes (MAC)). They confirm non-repudiation, where sender sends proof of delivery and receiver receives proof of sender's identity.

# Authentication
- What you know (Safe internal location ❔)
- What you have, physical token (lock and key).
- What you are, biometric.
# Multifactor authentication (MFA)
- Web app, e-mail, phone...
# Permissions or Access Control List (ACL)
- Describes what access each user has for every file, folder, and program on a computer.
- Read, write, and execute (files).
- Can read down, but cannot write down to reduce risk of something top secret finding its way down (Bell-LaPadula model, others are Chinese Wall and Biba models).
# Firewall
- Controls incoming and outgoing network traffic.
- Typically forms a barrier between a trusted internal network and an untrusted external network (like the internet).
- Can be either software or hardware.
- Wireless routers and OS's often have built in firewalls.
# Proxy server
- Acts as an intermediary between a LAN and the internet.
- Evaluates client requests and forwards them to appropriate server if they meet security requirements.
- Hide IP addresses.
- Save bandwidth by downloading files or updates for the first user then storing them for any future users who needs them
# Intrusion detection system (IDS)
- Monitors network traffic & reports malicious activity.
# Intrusion protection system (IPS)
- Inspects network traffic and removes, details or redirects malicious items.

# Technologies

- Security kernel or trusted computing base is a minimal set of operating system software that's close to provably secure.

# Bureaucracies
- DEFCON, annual Las Vegas meetup.

# Definitions

- AICPA : American Institute of Certified Public Accountants.
- CCI : Company confidential information, plans, employee knowledge, etc.
- Confidential : Proprietary, source code, private customer records, employee records, purchase history, personally identifiable information (PII), protected health information (PHI). Both PII and PHI are private as well.
- FIM : File integrity monitoring, ensures activity is authorized.
- GAPP : Generally Accepted Privacy Principles, developed by AICP A & CICA.  
Management, compliance specialist.  
Notice, informing people.  
Choice & consent, updates, statistics.  
Collection, obtaining the required transactional data and no extra.  
Use, retention, & disposal, by consent, laws & regs.  
Access, provide people with access to their personal info upon request.  
Third party disclosure.  
Security.  
Quality, complete, accurate, valid, correctly formatted.  
Monitoring & enforcement.  
- GDPR : General Data Protection Regulation, EU digital privacy regulations.

