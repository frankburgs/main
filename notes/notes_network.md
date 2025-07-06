# Notes x1!
- Domain name system (DNS) : Phonebook of the internet, DNS cache is a record of all the queries made to a DNS server by a browser.
- Interfaces need IP addresses, subnets, security groups, ACL's, VLAN's, VPC's, & VPN's.
- Firewalls, load balancers, gateways, and traffic analyzers can be virtualized.

- Newer internet is cable, fiber optic, satellite, and cellular.
- Wireless internet service providers (WISP, cellphone companies)


- You can replatform an application to make it cloud native to eliminate need for virtualization.
- A device can have up to 65,536 ports.

- Host (end) devices : Located at end or edge of network. Typically host network applications (web, e-mail)
- Network protocols : There are thousands but they all do the same 3 things,security, encryption, authentication, transportation.

- Network management: connection, link aggregation, troubleshooting.
- Lower Ghz better over longer distance for wifi.
- There exists traditional and cloud IT infrastructures (not in one spot).
- Secure access service edge (SASE).
- Topology defines a network's structure.
- Logical topology describes data flow across physical connections.
- A device that accesses the server is known as a client.
- A node that accesses the server to get on the network is known as a client.
- All devices that can send, receive, & create info on a network are nodes.
# FTP (File Transfer Protocol)
- tcp/20 active mode data, tcp/21 control
- Authenticates with username & password, some systems use generic logins.
- 

# Connection types
- Hybrid Fiber Coaxial (HFC) : Broadband network architecture.
- Fiber to the curb (FTTC) : HFC network where fiber runs last mile to home then network switches back to coax.
- Splitter in street cabinet has Optical Line Terminal (OLT)
- Building is connected to Optical Network Terminal (ONT), optical signals converted to electrical then connect to router through ethernet patch chord.

## Satellite 
- download up to 10 Mbps, upload is 1/10th of download speeds, bad latency (no gaming, voice, video conferencing)
- LEO 100 Mbps, 100 - 200 ms latency, satellite dish contains a motor to realign.

## Line of sight wireless internet
- always-on service using radio signals for transmitting internet access.
- 900 MHz < 40 miles, 5.7 GHz < 2 miles.

## Integrated services digital network (ISDN)
- Multiple channels to send voice, video, data over normal telephone wires, larger bandwidth than traditional dialup.

## Broadband
- Different kinds of services, DSL, ISDN, satellite, cell.
- Different frequencies to send multiple signals over the same medium. ie coax.
- Coax can carry computer network transmissions & many TV channels. Cell phone can receive voice while using browser.

### cable Digital subscriber line (DSL, broadband)
- DSL modem connects user's network directly to phone company digital infrastructure.
- Always-on service, voice & data signals are on different frequencies on the copper telephone wires.
- Filter prevents DSL signals from interfering with phone signals.
- Very high-speed (VDS) much higher bit rate, symmetric link < 26 Mbps both directions, asymmetric < 52 Mbps DL & 6 Mbps UL. VDSL2 < 100 Mbps both directions.

## Cable
- Does not use telephone lines, uses TV coax, connects to the cable company.
- Cable modem connects user's network to a cable service provider.

## Fiber
- Fiber optic cables made of glass or plastic, very high bandwidth.
- Used in backbone networks (internet backbone is many networks owned by numerous companies)
- Uses optical fiber trunk lines (bundled)



## Cell, mobile
- Relies on cell towers, 3G allowed internet access.
- Product release instruction (PRI) device network configuration settings.
- Preferred roaming list (PRL) sets which cell towers to use whilst roaming.
- Radio firmware is softwre that manages wireless connections.
- E-mail on mobile is POP3 (removes downloaded emails from server) or IMAP4 (saves emails on server).
- Use SSL or S/MIME to encrypt emails for security & authentication.
- International Mobile Equipment Identity (IMEI, unique # for phones on GSM, UMTS, LTE, and iDEN networks) and international mobile subscriber identity (IMSI, stored on device's sim card) are used to identify cell devices and users.


# Hardware
- Socket : Made up of a source IP address, a protocol, a port #, a desination IP address.
- Access point (AP) : connects to a wireless router and is used to extend the reach of a wireless network.

## Routers
- Connect to modems, forwards traffic between networks.
- Interconnect different networks or subnetworks.
- Manage traffic between networks by forwarding data packets.
- Allow multiple devices to use the same internet connection.
- Reads a packet's header to determine path.
- Uses internal routing table which is a list of paths to various network destinations.
- Forwards the packet to the next network in the path.
- Wireless router : connects multiple wireless devices to the network and may include a switch to connect wired hosts.

## Modem
- Take a digital signal coming from a digital node and convert it to analog (modulating) to be placed on the wire. Accepts an analog wire signal and converts it (demodulate) to digital.
- 1 model 1 connection, layer 1 device.
- Modem dial-up port is connected to phone socket (RJ-11), modem connects to computer's software COM ports.
- Modulator-demodulator, converts data into an easily network-transmittable format.
- When data arrives @ destination the receiving modem converts it back to original form.
- Cable and DSL are most common modems in use today.
- (Point to point protocol over ethernet) PPPoE used in DSL connections in areas that don't have newer options.
- Developed to create connections between network segments via the public switched telephone network (PSTN) using plain old telephone system (POTS)

# Cloud
- Cloud computing : Shared pool of computing resources (networks, servers, storage, applications, services).
- Providers will have cloud regions named like US South or NA East, also named availability zones (AZ).
- Public (several customers), private (one), hybrid.
- IaaS, can access networking, storage, and networking space without having to operate or manage.
- PaaS, can access the specific tools on the platform.
- SaaS, software licensing and delivery model on subscription basis.
- Virtual desktop infrastructure (VDI) used to access their enterprise apps.
- Community cloud is used by group(s) who want to share secrets.
- DaaS allows users to access desktops and apps from anywhere.
- DaaS is implemented using VDI.
- Linux based containers, Kubernetes, Istio, multicluster management tools, message queues, brokers.

## Hypervisors
- Type 1 installed directly on top of the physical server (bare-metal hypervisors, most frequently used, most secure, lower latency)
- Type 2 there is a layer of host OS between it and the server (hosted, end-user virtualization)

## VM's
- ie virtual servers (instances).
- Specify region, OS, multi or single-tenant, hourly or monthly billing.
- Pre-defined config, virtual cores, memory.
- Compute or memory-intensive, or high-performance I/O.
- Dedicated hosts offer single-tenant isolation.


# Types of storage
- Information can consist of files, code, documents, images, videos, backups, snapshots, and databases.
- Bare-metal servers and virtual servers are provisioned with default storage in local drives.
## Object Storage
- Object supports large backups, uses metadata for fast keyword search, is AI scalable, & stores log files.
## Block storage
- Block is fast, reliable, across environments, and updates large data amounts frequenty and supports email servers.
## File Storage
- has familiar interface, subfolder management, supports ZIP and USB transfers, low scalability.
- File gateway is a file server in the cloud, S3, NFS, SMB.
- File storage appliances can provide encryption in transit.
- Is mounted to computer nodes via ethernet cables.
- Speeds vary under load.
- Can be mounted onto 1 or more compute nodes at a time.


# Services
- Infrastructure is the physical resources, as well as the virtualization (hypervisor) layer.
- Platform is more like operating system (runtime environments), high level of abstraction, middleware, includes databases, API's.
- Software is like Netsuite etc, multitenant.


# Definitions
- Bare metal server : single-tenant, dedicated, physical server, dedicated to a single customer. Server physically mounted in a data center. Cloud provider manages server up to the operating system.
- Input/Output Operations per Second (IOPS) : Speed at which disks can read & write data.
- Network attached storage (NAS) : Local file server.
- Serverless computing resources are an abstraction on top of virtual machines.
- Software-defined networking (SDN) : 
- Storage area network (SAN) : Combines servers, storage systems, switches, software, services to provide secure, robust, data transfer.
- Tape gateway : Tape cloud backups, S3, glacier, glacier deep archive.
- Total cost of ownership (TCO).
- Virtual Server Instances (VSI's) :
- Virtual switch interface (VSI) : protocol allowing a network control application to manage a switch. Useful for networking applications like multiprotocol label switching (MPLS) and private network-to-network interface (PNNI) routing.
- Volume gateway : Data transfers between cloud and on-premises, iSCSI, cached (frequently used only) or stored (everything).

# sync or async
- RAM, ns, sync.
- Disk, 1 ms, async/sync.
- Network, 100 ms - 2 sec, async.

# Notes
- Non-ephemeral ports (usually 0 - 1023) are permanent port numbers for a server or service
- Pinging an IP address with no port specified defaults to port 80 ❔

- Obtain an IP address automatically: When a device is configured to obtain an IP address automatically, it will use the Dynamic Host Configuration Protocol (DHCP) to obtain an IP address from a DHCP server on the network.  

- The DHCP server will assign an IP address to the device, along with other network settings, such as the subnet mask and default gateway. This can simplify network management and reduce the likelihood of address conflicts.  

- When a device is configured to obtain a DNS server address automatically, it will use the DHCP protocol to obtain the address of a DNS server on the network.  

- The DNS server address will be provided by the same DHCP server that assigns the IP address to the device. This can simplify network management by automatically providing the DNS server address to devices on the network  

- Primary DNS server address: The IP address of the first DNS server that a device will use to resolve domain names to IP addresses. When a device receives a request to resolve a domain name, it will first send the request to the primary DNS server.  

- Secondary DNS server address: The the IP address of a backup DNS server that a device can use if the primary DNS server is unavailable. If the primary DNS server is unable to resolve a domain name, the device will then send the request to the secondary DNS server.

# Active directory domain services (ADDS)
- Microsoft tech manages domain structure, network access (auth, encr), connects to external domains, can be remotely managed.

``` shell
ipconfig
ping
nslookup
tracert

```

# Open Systems Interconnection (OSI)
- Set by ISO.
- 1 Physical layer transmits raw bit stream over physical medium (the "wire" data is transmitted over)
- 2 Data link layer defines data format on network, corrects errors.
- 3 Network layer decides which physical path the data will take, interpreting addresses.
- 4 Transport layer transmits data using transmission protocols, manages delivery and error checking of packets (TCP, UDP)
- 5 Session layer maintains connections and controls ports & sessions, authentication and reconnections, ensure communication between devices.
- 6 Presentation layer ensures data is in usable format and is where encryption occurs.
- 7 Application layer : Human-computer interaction layer, where applications can access the network's services.


## Small office home office (SOHO) network
- LAN with less than 10 computers for a small physical space.
- Typically includes a router with software based firewall, switch with 4-8 LAN ethernet ports, printer, several desktops or laptops.
- Switch acts as network hub but is substituted for router when internet is desired.
- 100 m max run for ethernet cable.
- Servers and hardware have built-in DHCP and NAT actions.
- DHCP servers use IP addresses to provide network hosts.
- NAT maps a public IPv4 address to private IP addresses.

## Bitcoin protocol
- P2p network operating ona cryptogrpahic protocol used for bitcoin transactions and internet transactions.
## Blockchain protocol
- Open, distributed ledger

## Model
- Describes architecture, components, and design of communication.
- Open system interconnection (OCI) is a conceptual framework to describe functions of a networking system.
- TCP/IP (based on OSI)

## Subnet
- Subnetting is the process of taking a large, single network and splitting it up into many individual smaller subnetworks (subnets).
- A subnet masks identify the boundary between the IP network and the IP host.
- A subnet is like an IP address but for only internal network usage.
- Routers use subnet masks to route data to the right place.

## Automatic private IP addressing (APIPA)
- OS feature like Windows that lets computers self-configure an IP address and subnet mas automatically when the DHCP server isn't available (use ipconfig in the prompt if this causes no connectivity)

## Network address translation (NAT)
- Maps multiple local private addresses to a public one before transferring information.
- Organizations that want their traffic to originate from a single IP address use NAT as do most home routers.

## Dynamic host configuration protocol (DHCP)
- Easiest broadband type to use but others available.
- Most common broadband type, used in cable modem connections.
- Automates configuration of IP network devices.
- Uses a pool of reserved IP addresses to automatically assign dynamic IP addresses or allocate a permanent IP address to a device.
- In static allocation the server uses a manually assigned "permanent" IP address for a device.
- Static IP is more common in business.
- Dynamic allocation the server chooses which IP address to assign a device each time it connects to the network.
- Automatic allocation is the server assigning a "permanent" IP address for a device automatically.

## IP packets transmission modes
- Packets are also called frames, blocks, cells, or segments.
### Unicast
- Transmission to a single destination, this is most internet traffic (HTTP, FTP).
### Anycast
- Transmission to any of the closest multiple nodes that has the correct unicast address.
### Multicast
- Transmission to all nodes that have subscribed to the multicast group or address.
- Limited to UDP protocol.
### Broadcast
- Transmission to all other nodes on the subnet.
- i.e. to find a DHCPv4 server broadcast transmission is limited to UDP protocol over IPv4 only.

## Data transmission flow
- Simplex : Unidirectional communication between two devices, one can only send and the other only receive.
- Half-duplex : Both stations can transmit and receive asynchronously.
- Full-duplex : Both stations can transmit and receive simultaneously.

## Bridge
- Joins two separate networks so they can work as a single network.
- Wireless bridges can support wifi to wifi, wifi to ethernet, and bluetooth to wifi.

## Gateway
- Hardware or software that allows data to flow from one network to another.
- Gateways can use multiple protocols to connect multiple networks.

## Repeater
- Receives & retransmits a signal.
- Used to extend a wireless signal (past brick, metal, or concrete).
- Connect to wireless routers.

## Wireless access point (WAP)
- Allows wifi devices to connect to a wired network.
- Usually connects to a wired router as a standalone device.
- Acts as central wireless connection point for computers equipped with wireless network adapters.
- Plugged into a wired network switch.
- Reads each computers MAC address and forwards to wired switch.
- If wired network is connected to router with internet access, the wireless network will also have internet access.

## Client-server
- File transfer protocol (FTP) sites.
- Web servers & web browsers.

## Peer-to-peer
- File sharing sites, discussion forums, media streaming, and VoIP.

## Hub
- When it receives data it broadcasts it to all connected devices.
- Functions as concentrator/repeater, replicates electrical signal from 1 port and replicates out all other ports.
- May have few or many ports, not common.

## Switch
- Connects multiple devices to the network, similar to a hub except it keeps a table of MAC addresses, and when it receives data it sends to specific address(es ?), which makes them more efficient than hubs.
- Switches and hubs connect to modems.
- If a switch or a hub fails it brings the entire network down.
- Utilizes Application Specific Integrated Circuit (ASIC) chip.


## Physical topology
- Star : Features a central computer that acts as a hub.
- Ring : All devices are connected in a circle where data only flows clockwise 🤔
- bus : Connect all devices with a single cable or transmission line, mainly suited for small networks such as lan.
- Tree : Combines bus & star, all devices connected in a hierarchical fashion, ie university campus with each building has it's own star network and all central computers are linked in a campus-wide system.

## Wireless Mesh Network (WMN)
- Mesh : Connect all devices together, using dynamic routing, used in WAN, not in LAN.
- Each node acts as a router, the internet is mesh.

## Metropolitan Area Network (MAN)
- Computer network connecting multiple LANs within a city or large campus.

## Wireless Personal area network (WPAN)
- USB, Firewire, Infrared, ZigBee, Bluetooth
- RFID uses electromagnetic or electrostatic coupling.
- Near field communication (NFC)
- Infrared data association (IrDA) provides LOS connectivity.
- Range from a few cm to m.
- Usually Bluetooth, peripherals, smartphones, tablets.

## Wireless Local area network (WLAN)
- Standards 802.11 a/b/g/n/ac
- ac is Wi-Fi5 introduced in 2013.
- Wifi6 (Standard 802.11 ax)
- Single site or building.
- Requires cables, switches, and routers to communicate to other LANs.

## Wireless Metropolitan area network (WMAN)
- Alias Campus area network (CAN).
- Spans a city, campus or small region.
- Formed by connecting multiple LANs.
- Cable TV, telephone, public wifi or TV.
- Example is a vendor-specific with proprietary standards & equipment.
- IEEE 802.16, OFDM, quality of service.
- Worldwide interoperability for microwave access (WIMAX)

## Wireless Wide area network (WWAN)
- Long Term evolution (LTE) a converged 4G standard supported by GSM & CDMA network providers, theoretical max downlink of 150 Mbps.
- Leased telecommunications circuits often.
- Used by businesses, schools, and governments.
- The internet is a WAN.
- LoRaWaN is a standard network that balances low power with low-range communication requirements.

## Cellular (4G/5G)
- Provides consistent speeds, reliability, and efficiency.

## Wireless LAN (WLAN)
- Links 2 or more devices via wireless communication.
- Can provide connection to the wider internet through a gateway device.

## Virtual private network (VPN)
- Software based, control and direct communication across existing physical networks.
- Make network administration easier, increase efficiency, and improve security.
- A VPN is a private (or protected) network connection across a public connection.
- VPN's encrypt traffic, disguise identity, and safeguard data.

## Virtual LAN (VLAN)
- Provide segmentation and organizational flexibility in a switched network.
- Group of devices within a VLAN communicate as if each device was attached to the same switch.
- Network made up of locations from other networks.
- Separate networks into smaller groups, users can be located anywhere.
- Helps reduce eksessive broadcast traffic and implement access and security policies between groups of users.


# Protocols
- Internet Protocol (IP) adds addressing so data can be routed to intended destination.

## IP addresses
- Static are manually assigned.
- Network servers or devices that have specific protocol settings often use static.
- Dynamic are automatically assigned.
- Public is used to communicate publicly, it connects to the internet.
- Private is uesd to connect securely to an internal private network.
- Loopback is the range of IP addresses reserved for the local host.
- Reserved have been reserved by the IETF and the IANA.
## IPv4 Sockets
- Server IP address, protocol, server application port #.
- Client IP address, protocol, client port #.
- Core protocol for the internet.
- Developed to provide identification for every network device.
- Only allows ~4.3B IP addresses.
- IP addresses are 32 bit (4 bytes) binary value, separated into 4 8-character binary values called octets. Each octet has a value between 0 and 255. An octet with a value over 255 does not constitute a valid IP address.
## IPv6
- Newest internet protocol version.
- Allows for 340UD IP addressses.
- 128-bit binary value broken into 8 fields each separated by a colon.


## Transmission Control Protocol (TCP)
- HTTPS, SSH, 
- Connection oriented, reliable delivery.
- Flow control, receiver manages how much data is sent.
- Guarantees data gets sent to intended recipient.
- Slower and requires more resources.
- FTP, web browsing, e-mail.
- Reliable guaranteed delivery, proper order of data assembly.
- Responsible for tracking all the network connections between a user’s device and multiple destinations.
- HTTP via TCP uses sequence numbers is segments of information to know if data is missing.
- Delivers data in sequenced order and resends lost data.

## Secure Shell (SSH)
- tcp/22 encrypted communication link
- Looks and acts same as Telnet (tcp/23 no encryption)

## Secure Mail Transfer Protocol (tcp/25 SMTP)
- 


## User datagram protocol (UDP)
- No flow control, sender determines data transmit amount.
- Connectionless, no formal open or close to connection.
- Fewer resources, does not guarantee every packet arrives (calls, live streaming).
- Fast with loss tolerance.
- Low overhead, does not require acknowledgements.
- Unreliable delivery, does not resend lost data, delivers data as it arrives.

## TCP & UDP
- Ports can be any # between 0 & 65,535.
- Multiplex : send and receive unrelated data, across multiple devices.

### Connectionless
- DHCP, TFTP



# Bureaucracies
- De-jure or formal standards have gone through a formal process to obtain consensus.
- Examples are HTTP, HTML, IP, ethernet 802.3d, publicly available documentation.
- De-facto standards are accepted in practice i.e. MS windows or qwerty keyboard.
- ITU set international telecom and fair use in radio frequency, DARPA did TCP/IP,  
