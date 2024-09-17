# Networking
- There exists traditional and cloud IT infrastructures (not in one spot).
- Secure access service edge (SASE).
- Older internet is dial up, integrated services digital network (ISDN), digital subscriber line (DSL).
- Newer internet is cable, fiber optic, satellite, and cellular 🗼.
- Wireless internet service providers (WISP, cellphone companies).
- Topology defines a network's structure.
- Logical topology describes data flow across physical connections.
- A device that accesses the server is known as a client.
- A node that accesses the server to get on the network is known as a client.
- All devices that can send, receive, & create info on a network are nodes.
- Packets are also called frames, blocks, cells, or segments.
## Data transmission flow
### Simplex
- Unidirectional communication between two devices, one can only send and the other only receive.
### Half-duplex
- Both stations can transmit and receive asynchronously.
### Full-duplex
- Both stations can transmit and receive simultaneously.
## Routers
- Connect to modems.
- Interconnect different networks or subnetworks.
- Manage traffic between networks by forwarding data packets.
- Allow multiple devices to use the same internet connection.
- Reads a packet's header to determine path.
- Uses internal routing table which is a list of paths to various network destinations.
- Forwards the packet to the next network in the path.
## Modem
- Modulator-demodulator, converts data into an easily network-transmittable format.
- When data arrives @ destination the receiving modem converts it back to original form.
- Cable and DSL are most common modems in use today.
## Bridge
- Joins two separate networks so they can work as a single network.
- Wireless bridges can support wifi to wifi, wifi to ethernet, and bluetooth to wifi.
## Gateway
- Hardware or software that allows data to flow from one network to another.
- Gateways can use multiple protocols to connect multiple networks.
## Repeater
- Receivs & retransmits a signal.
- Used to extend a wireless signal (past brick, metal, or concrete).
- Connect to wireless routers.
## Wireless access point (WAP)
- Allows wifi devices to connect to a wired network.
- Usually connects to a wired router as a standalone device.
- Acts as central wireless connection point for computers equipped with wireless network adapters.
- Plugged into a wired network switch.
- Reads each computers MAC address and forwards to wired switch.
- If wired network is connected to router with internet access, the wireless network will also have internet access.
## Network interface card (NIC)
- Connect device to a network.
- Can be wired or wireless, most computers have built-in wireless NICs.
- Most include ports for network cables.
## Client-server
- File transfer protocol (FTP) sites.
- Web servers & web browsers.
## Peer-to-peer
- File sharing sites, discussion forums, media streaming, and VoIP.
## Hub
- When hub receives data it broadcasts it to all connected devices.
- A switch is similar to a hub except it keeps a table of MAC addresses, and when it receives data it sends to specific address(es ?), which makes them more efficient than hubs.
- Switches and hubs connect to modems.
- If a switch or a hub fails it brings the entire network down.
## Physical topology
### Star
- Features a central computer that acts as a hub.
### ring
- All devices are connected in a circle where data only flows clockwise 🤔
### bus
- Connect all devices with a single cable or transmission line.
- Mainly suited for small networks such as lan.
### tree
- Combines bus & star, all devices connected in a hierarchical fashion.
- Example is a university campus with each building has it's own star network and all central computers are linked in a campus-wide system.
### mesh
- Connect all devices together, using dynamic routing, used in WAN, not in LAN.
- The internet is mesh.

## Wireless Personal area network (WPAN)
- USB, Firewire, Infrared, ZigBee, Bluetooth
- RFID uses electromagnetic or electrostatic coupling.
- Near field communication (NFC)
- Infrared data association (IrDA) provides LOS connectivity.
- Range from a few cm to m.

## Wireless Local area network (WLAN)
- Standards 802.11 a/b/g/n/ac
- ac is Wi-Fi5 introduced in 2013.
- Wifi6 (Standard 802.11 ax)
- Single site or building.
- Requires cables, switches, and routers to communicate to other LANs.
## Wireless Metropolitan area network (WMAN)
- Also Campus area network (CAN).
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
### VLAN 
- Network made up of locations from other networks.
- Separate networks into smaller groups, users can be located anywhere.
- When you want to share data securely.
