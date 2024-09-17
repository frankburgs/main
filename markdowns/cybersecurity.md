# General
- Most security software is open source so other security professionals can quickly contribute ❔
- Sandboxing is giving an application its own block of memory that other programs cannot access (on its own VM).
# Attack vectors
- Buffer is a block of memory for storing data. Always test length of input before copying it into a buffer (bounds checking). Programs also randomly use memory locations so hackers dont know what memory they are writing to. Spaces in memory after password buffers that are monitored for intrusion are known as "canaries".
- Code injections, control what characters can be accepted.
- NAND mirroring, attaching wires to a device's memory chip and perfectly copying all its contents. Then trying passwords until the device makes you wait, and you reflash the memory with the copy you made and keep trying.
- Data breach DNE secrecy or confidentiality.
- Denial of service DNE availability.
- Phishing DNE integrity.
# Encryption (crypt?)
- Advanced encryption standard (AES.)
- Cipher (substitutional, columnar transposition) is an algorithm that converts plain text into ciphertext.
- Diffie-Helman key exchange.
- Key unlocks the cipher.
- Rivest–Shamir–Adleman (RSA) encryption is a public-key cryptographic algorithm 


# Authentication
## What you know
- (Safe internal location ❔)
## What you have
- Physical token (lock and key)
## What you are.
- Biometric
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
# Vocab

- Security kernel or trusted computing base is a minimal set of operating system software that's close to provably secure.
# Bureaucracies
- DEFCON, annual Las Vegas meetup.
