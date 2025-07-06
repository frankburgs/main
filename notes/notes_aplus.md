
https://www.youtube.com/watch?v=2eLe7uz-7CM : 1:10

# Computer parts
## Expansion slots
## Video cards

# Memory

# Connectors

# Motherboard

# Storage

# Questions !1x
## ez
- Can instructor see each student module progress & long-term lessons learned ?
- Computer plugged during work for ground but not power, component in path?
- Ultra HD : 3840 x 2160>, 16 : 9, alias 4k.
- How integrate YT vids into curriculum ?

## technical
- If a power supply does not have this switch, it automatically detects and sets the correct voltage ?
- 5.1.1.4 vlan setup pseudocode

## bureau
- itf before a+
- ITIL 
- Module 1 of the ITE 8.0 curriculum
- iso 9000:2001
- Student e-mails not used
- College IT admin
- Weld fiasco

## long
- Some application layer protocols use only UDP. true
- Some application layer protocols can use both TCP and UDP. true
- Some application layer protocols use neither TCP nor UDP. false


# Safety
- 1.3.2 Lab Safety & disassembly
- Tape sharp corners.
- CRT monitors potential residual high voltage.
- ID problem, theorize, test, plan & implement sln, verify & implement PM, document.

## Electrostatic discharge (ESD)
- 3 kV, a person feels, 10 kV, makes a sound.
- < 30 V can damage computer component.
- Use floor mats, bench mats, anti-static bags, anti-static wrist-straps.

## Temperature
- Cooling systems : Active solutions (case fan) require power while passive (reducing speeds, adding heat sinks) do not.
- Case fan : case size, fan speed, qty components, physical environment, mounting spaces (qty & locations), connections.
- Intel max heat 185 F 85 C, Good processor 90-110 F (32-43 C)

# Security
- Execute Disable Bit (EDB) : alias NX or XD bit, hardware-based security feature in Intel processors that prevents malicious code from executing in certain areas of memory.
## Access levels
- Full access : all screens & settings, except supervisor password setting.
- Limited access : certain settings, ie time & date.
- View only access : all screens, no change allowed.
- No access : no access to the BIOS utility.
- Hard drive encryption changes the data into code, without correct password computer cannot boot and hard drive cannot be understood.
- LoJack : Consists of Persistence Module (embedded in bios) & Application Agent (installed by user). When installed this activates the Persistence Module which does not turn off and contacts a monitoring center routinely over internet with device info (location, can lock & delete remotely)

# Bullshit
- RAM, SSD, CPU most common upgrades.


# Computer Parts
- Serial bus : transmits data one bit at a time.
- RAID 5 : data storage configuration using disk striping with parity.
- System bus : connects CPU to main memory.
- Expansion bus connects peripherals.
- Front-Side Bus (FSB) : connects CPU to northbridge.

## Drive bays
- 5.25" used for optical drives, most full-size tower cases will have 2 or more bays.
- 3.5" most common, used for 3.5" HDD, provide addition USB ports or smart card readers, most full-size towers will have 2 or more internal bays.
- 2.5" intended for smaller HDD's and SSD's, smallest width, becoming ncreasingly popular.

## Bus
- Data bus carries data between components, address bus carries memory addresses of locations where data is read or written by CPU.
- size determines data transmission rate. 32-bit bus transmits 32 bits of data @ one time from processor to RAM, or to other motherboard components (64-bit bus similarly), measured in clock speed (MHz or GHz)
- PCI expansion slots connect to a parallel bus, 

## Case form factors
- Form factors can be horizontal case (home theater PC's (HTPC)), full-size tower, compact tower (small form factor (SFF)), all-in-one (super, full, mini, cube etc.)
- Model type, size, power supply, appearance, status display, vents.

## Computer desktop power supply (PS)
- Advanced Technology (AT) original PS for legacy computer systems now obsolete.
- AT Extended (ATX) updated AT also obsolete.
- ATX12V | most common PS on market, several versions available, includes 2nd motherboard connector to provide dedicated power to CPU.
- EPS12V | originall designed for network servers now commonly used in high-end desktops.
- Motherboard type, required wattage (add each component wattage, P = IV, assume higher if various), wattage + 25%, connector types, case mountings.
- Common voltages are 3.3 & 5 (typically used by digital circuits) & 12 (motors in disk drives and fans)
- PS can be single, dual, or multi rail (PCB inside PS to which external cables are connected, dual has two PCB's etc)

### Connectors, PS
- P1, 20 or 24 pins, main power connector.
- P4, 4-pin, supplies power to CPU.
- Molex, connecting hard drives & optical drives.

## Monitors

- Interlaced monitors create image by scanning image twice, first covers odd lines top to bottom second scan covers even lines. Non-interlaced one line at a time top to bottom.
- Dot pitch : distance between pixels on screen.
- Brightness : candelas per meter squared.

- Liquid Crystal Display (LCD) : Two polarizing filters with a LC solution between them. Electronic current aligns the crystals so light can pass through or not.
- have two types:
- Twisted Nematic (TN) the liquid crystals twist light (been around for decades, used in watches, calculators)
- In-plane switching (IPS) use more transistors, consume more power, stay in place and align in parallel with the glass, better quality.

- Light-emitting diode (LED) : LCD display that uses LED backlighting, lower power consumption than LCD, thinner, lighter, brighter, better contrast.

- Some use florescent lamps for backlighting (emits UV light when mercury vapor inside lamp is ionized)
- Modern uses multiple LED's in a pattern (most modern)

- Both are LCD but call the 2nd LED.
- Organic LED (OLED) : uses layer of organic material which responds to organic stimulus to emit light. Each pixel lights individually resulting in deeper black levels than LED.
- LCD highest resolution = native resolution = best quality
- Native mode : when image sent to monitor by video card matches native monitor resolution.
- Extended Graphics Array (XGA) 1028 x 768
- Super Extended Graphics Array (SXGA) 1280 x 1024
- SXGA+ 1400 x 1050
- Ultra Extended Graphics Array (UXGA) 1600 x 1200
- Wide Screen Ultra Extended Graphics Array (WUXGA) 1920 x 1200
- Contrast ratio is ratio black/white. Higher = better.

### Thin Film Transistor (TFT)
- Higher image quality, each pixel has its own transistor.
- All LCD's sold today have TFT tech.

### LCD ?
- Color Graphics Adapter (CGA) : 360x200, 16:10, IBM 1981, obsolete.

- Super Video Graphics Array (SVGA) : 800x600, 4:3, 1989, still supported.
- High Definition (HD) : 1280 x 720, 16:9, alias 720p.
- Full HD (FHD) : 1920 x 1080, 16:9, alias 1080p, good setting.
- Quad HD : 2560 x 1440, 16:9, alias 1440p, high-end users & gaming.
- Ultra HD : 3840 x 2160>, 16 : 9, alias 4k.

## Projectors
- LCD projectors usually have higher lumens than DLP. 
- Digital Light Processing (DLP) - spinning color wheel with array of mirrors each corresponding to a pixel and reflects light up to 1024 shades of grey. Color wheel then adds color data.
- ANSI has standardized projector testing procedure.
- Brightness (white light output) measures total light projected in lumens, color brightness spec measures red, green & blue using same approach.

## Video ports & cables
- Digital or analog or both. Computers are digital devices that create digital signals that are sent to the grfx card where they are transmitted through a cable to a display.
- DisplayPort : interface tech designed to connect high-end grfx-capable PCs, displays, & home theaters. Replaces both DVI & VGA for computer monitors. 20-pin connector for high-bandwidth video & audio. The mini is used in Apple. 20 Gbps on V2.0. Can connect multiple monitors to single source with 1 cable.
- Thunderbolt 1 or 2 : high-speed connection of peripherals such as hard drives, RAID arrays, network interfaces, can transmit HD video using DisplayPort protocol.
- Thunderbolt 3 : Same connector as USB-C, twice bandwidth as 2, less power, can provide 2x 4x monitors with video.
- Radio Corporation of America (RCA) : connectors have central plug with ring around it used to carry video or audio. (yellow video, red & white are L & R audio channels)

### High-Definition Multimedia Interface (HDMI)
- 1 : standard
- 2 : high-speed, 19-pin (can be smaller 19-pin Mini-HDMI port), developed for HDTV, digital features make it good for computers. Capable of high resolutions & capable of changing refresh rate to match the rate of source device input. 2.0 Premium High Speed 18 Gbps and 2.1 Ultri High Speed up to 48 Gbps. 1.4 required for 4k (& 8 k ?) signals. Type A standard, C mini, D micro.

### Digital Visual Interface (DVI, 1999)
- white, 24 pins (3 rows of 8) for digital signals, 4 pins for analog signals, flat pin (ground bar)
- To deliver uncompressed HQV to LCD.
- 5 types of DVI available for digital & analog and also single link & dual link (extra bandwidth)(DVI-I & D are current two main types)
- DVI-D only supports digital devices & outputs.
- DVI-A analog only
- DVI-I (integrated) supports digital outputs & analog devices (disappearing), single-link connections use a single Transition Minimized Differential Signaling (TMDS) transmitter, and dual-link that uses 2 TMDS transmitters (higher res to larger monitors)

## Printers
- Non-impact : laser, inkjet, thermal.
- Inkjet : places small dots, can smudge.
- Laser : toner in a drum adheres to where laser touches it and is passed on to paper.
- Thermal : another non-impact printer, uses thermal paper with wax based ink, turns black with heat (used for barcodes due to high tolerances)
- Dot matrix : old tech, impact printer, can print multi-copy (carbon-copy) documents, very durable.

### Troubleshooting
- Paper jam could be caused by debris or faulty pickup rollers (older printers, get worn out, inspect)
- Check printer display for error msg
- Streaks could be ink cartridges
- Use printer sotware to try to troubleshoot streaks (clean printheads)
- May need to manually clean with a lint-free cloth.
- Faded or blank images, may be low ink or something else.
- Ghosting : faint image of previously printed page (drum or fuser, has a lifespan)

## Adapter cards
- Increase functionality of a computer by adding controllers for specific devices or by replacing malfunctioning ports.
- Sound adapter, eSATA card adds additional internal and external SATA ports to a computer through a single PCI express slot, & video adapter.
- Wireless NIC (can be built-in), capture cards send a video signal to a computer so so the video can be recorded to storage using video capture software.
- TV tuner, USB, Accelerated Graphics Port (AGP, high speed slot for attaching an AGP video card, superceded by PCI), SCSI adapter etc.
- Network Interface Card (NIC) designed for ethernet cable with RJ-45 connector, has its own unique identifier (MAC address)

## Sound card
- Slot type, Digital signal processor, SNR.

## Storage controller card
- Connector quantity, internal or external connectors, card size, card RAM, card processor, RAID type.

## Expansion slots
- Riser card : provides additional expansion slots.
- Peripheral Component Interconnect (PCI) is an obsolete 32 or 64-bit expansion slot.
- Mini-PCI (smaller version of PCI found in laptops) has form factors Type I, II, III.
- PCI-X (PCI eXtended) : Updated version of standard PCI, uses 32-bit bus with higher bandwidth than PCI bus. 4x faster than PCI, mostly obsolete.

### PCIe (Express)
- 64-bit parallel interface that is backwards compatible with 32-bit PCI devices. Serial point-to-point connection with different physical interface designed to supersede PCI & PCI-X. PCIe x1, x4, x8, x16 (x qty of data lanes). Modern high-speed bus commonly used for expansion cards.
- Every version of PCIe is backwards compatible. Up to 25 W per slot, 75 for a grfx card, additional 75 W for very powerful grfx card.
- Sends one data bit @ a time @ a much faster rate than older PCI that uses parallel bus.

Version --- GB/s for x1 --- GB/s for x8
2 .5 8
3 .985 8
4 1.969 31.508
5 3.938 63.015

## Video cards (graphics cards/adapters)
- Consider slot type, max resolution, speed & VRAM, GPU.
- Video ports, memory, GPU, bus type.
- Generates images from the computer to the monitor.
- S-video (Separate or Super), analog transmit 2 signals (color & brightness) over 1 cable.

# Memory
- embedded Multi-Media Controller (eMMC, 16 GB) embedded memory in smartphones & tablets.
- Primary memory is temporary, secondary memory is permanent.
- Tape drive : sequentially backup data via USB.
- Dynamic RAM (DRAM) : Popular until mid 1990's, used for main memory, gradually discharges energy so must be constantly charged to maintain stored data in the chip.
- Static RAM : Requires constant (lower) power, often used for cache memory, much faster & more $ than DRAM. Typically fastest memory, useful for storing the most recently used data and instructions by the CPU. Provides processor with faster access to the data than retrieving it from the slower DRAM or main memory.
- L1 cache is internal and integrated into CPU, different models can have different amounts.
- L2 cache is external cache originally mounted onto the motherboard near the CPU, now is integrated into CPU.
- L3 cache is used on high-end workstations and server CPU's.
- Read-Only Memory (ROM) : Located on motherboard and other circuit boards and contain instructions that can be directly accessed by a CPU (booting computer, loading OS) 
- ROM is nonvolatile meaning contents are not erased when memory is turned off.
- Data is written to a ROM chip upon manufacture. A ROM chip that cannot be re-written or erased is now obsolete, term used for generic read-only memory chip type
- Programmable Read-Only Memory Chip (PROM) : written after manufacture, generally cannot be erased and can only be programmed once.
- EPROM (erasable) : non-volatile but can be erased by strong UV light exposure. Usually has transparent quartz window on top of chip. Constant erasing & reprogramming can render chip useless
- EEPROM (electrically erasable) : information is written to a EEPROM chip after manufacture without removing it from the device. Also called Flash ROMS since contents can be flashed for deletion. Often used to store a computer system's BIOS
- Random Access Memory (RAM) : Temporary working storage for data and programs that are being accessed by the CPU. Volatile. Increases memory capacity of the computer to hold and process programs and files. Less RAM means computer must swap data between RAM and much slower hard drive
- SDRAM is DRAM that operates synchronously with the memory bus, is able to process overlapping instructions in // (ie can process a read before a write has been completed) and has higher transfer rates.
- Double Data Rate Synchronous Dynamic RAM (DDR SDRAM) : double data rate transfer as SDRAM, able to support 2 writes & reads per CPU clock cycle, connector has 184 pins and 1 notch, uses lower voltage (2.5 V), family DDR2,3,4.
- DDR2 SDRAM runs @ higher clock speeds than DDR (533 MHz vs DDR @ 200 MHz), decreases noise & crosstalk between signal wires, connector has 240 pins, 1.8 V.
- DDR3 SDRAM doubles clock rate of DDR2, 1.5 V, less heat, up to 800 MHz, 240-pin connector.
- DDR4 SDRAM quadruples DDR3 max storage capacity, 1.2 V, up to 1600 MHz, 288-pin connector, advanced error correction features such as error-correcting code (ECC) memory to detect multiple bit errors.
- Graphics (G)DDR Synchronous Dynamic RAM : specifically designed for graphix, used with a dedicated GPU, family GDDR, GDDR2, GDDR3, GDDR4, GDDR5, each improves performance and lowers power consumption.
- GDDR SDRAM processes massive amounts of data but not necessarily at the fastest speeds.
- DDR5 more than double speed of DDR4 modules. Quadruples DDR4 max storage capacity. 1.1 V, 288-pin connector different pattern than DDR4. Max module size is 128 GB.

## Media, portable ?
- Secure Digital (SD card, 2-512 GB, 2 TB, flash) popular, used in digital cameras for images & video, designed for use in portable devices such as cameras, MP3 players, and laptops.
- MicroSD (32 GB) This is a much smaller version of SD, commonly used in smartphones and tablets.
- MiniSD (2 GB) A version of SD between the size of an SD card and a microSD card. The format was developed for mobile phones.
- CompactFlash (16 GB, 128 GB) is an older format, but still in wide use because of its high speed and high capacity. CompactFlash is often used as storage for video cameras. (DSLR)
- Memory Stick : Created by Sony Corporation, Memory Stick is a proprietary flash memory used in cameras, MP3 players, hand-held video game systems, mobile phones, cameras, and other portable electronics.
- xD : Also known as Picture Card, it was used in some digital cameras.
- Thumb drive (500 MB - 256 GB)

### Media reader factors
- Media cards supported, internal or external, size, connector type.
- External storage devices connect to an external port using USB, eSATA, or Thunderbolt ports.

### External storage factors
- Port type, storage capacity, speed, portability, power requirements.
- Digital Signal Processor (DSP) : audio card, capture sound ?

## Memory errors
- Nonparity memory does not check for errors in memory. Nonparity RAM is most common RAM used for home & business (bz) workstations (ws)
- Parity memory contains 8 bits for data and one (parity bit) for error checking.
- Error correction code (ECC) can detect multiple bit errors in memory and correct single bit errors in memory. On servers of financial or data analytics ECC memory modules may be required.

## RAM modules
- Unbuffered memory : regular memory read directly from memory banks making it faster than buffered memory. There is a limit to how much can be installed.
- Buffered memory : specialized memory for servers and high-end workstations that use large amount of RAM. A control chip is built into the module of these memory chips. Control chip assists memory controller in managing large quantities of RAM. Avoid buffered RAM for gaming computer and average workstation due to reduced RAM speed from controller chip.
- Open slot lever, orient stick to slot, insert, lock.
- Early computers had RAM installed on motherboard as individual chips. Dual inline package (DIP) chips were difficult to install and often become loose.
- Single Inline Memory Module (SIMM) is a small circuit board that holds several memory chips, 30-pin or 72-pin configs.
- Dual Inline Memory Module (DIMM) holds SDRAM, DDR SDRAM, DDR2 SDRAM, DDR3 SDRAM, and DDR4 SDRAM chips. There are 168-pin SDRAM DIMMs, 184-pin DDR DIMMs, 240-pin DDR2 and DDR3 DIMMs, and 288-pin DDR4 DIMMs.
- Small Outline (SO)DIMM has a 72-pin and 100-pin configurations for support of 32-bit transfers or a 144-pin, 200-pin, 204-pin, and 260-pin configurations for support of 64-bit transfers. This smaller, more condensed version of DIMM provides random access data storage that is ideal for use in laptops, printers, and other devices where conserving space is desirable.
- Single-sided memory modules contain RAM only on one side of the module. Double-sided on both.
- Speed of memory affects how much data a processor can process in a given amount of time. As processor speed increases memory speed must also increase. Multichannel technology increases memory throughput.
- Standard RAM is a single channel, all RAM slots are accessed simultaneously. Dual channel RAM adds a 2nd channel to be able to access a 2nd module simultaneously.
- Triple channel technology does the same, quadruple channel adds channel for memory controller for higher bandwidth. Chipset architecture must support it and is only able to use as many channels as memory slots populated.

## Hard disk drive (HDD)
- Storage from GB's to TB's 
- FF's come in 1.8" (portable media players et al. but seldom used in new), 2.5" (mobile devices), 3.5" (standard for PC)
- Traditional magnetic disks typically @ 5400, 7200(desktops), 10k, 15k RPM
- Non-volatile (can retain & store data when not connected to a power source)
- Use Serial ATA (SATA) interface, newer than Parallel ATA.

## Solid State Drives (SSD, semiconductor storage)
- Non-Volatile Memory Express (NVMe) spec was developed to provide standard interface between SSD, PCIe bus, and OS (not require special drivers)
- No moving parts, uses flash memory chips to store data, fast data transfer.
- 120 GB to many TB.
- No moving parts, thus considered more reliable.
- Disc drive form factor : similar to HDD in which the semiconductor memory is in a closed package that can be mounted in a computer case. 2.5, 3.5, and 1.8" (rare)
- Expansion card form factor, plugs directly into motherboard & mounts in computer case.
- mSata or M.2 modules (special socket, standard for computer expansion cards)
- Solid State Hybrid Drives (SSHD) : Faster than HDD but cheaper than SSD. Auto-caches frequently accessed data. Magnetic HDD with onboard flash memory as non-volatile cache.

## Hybrid drives
- Magnetic & SSD
- Takes advantage of large capacity/ low cost of magnetic disks, speed of SSD.
- Magnetic disks store, flash memory used for caching.

## Optical drives
- Use lasers to read & write. Developed to overcome storage capacity limitations of magnetic media (floppy discs & magnetic storage cartridges)
- CD (audio & data), DVD (digital video & data), BD (Blu-ray Disc, HD digital video & data)
- Pre-recorded (read ony), recordable (write once), or re-recordable. DVD & BD can be single layer (SL) or dual layer (DL, double capacity of single disc)
- CD, 700 MB, CD-ROM (pre-recorded read-only media), CD-R (one-time recordable), CD-RW (rewritable)
- DVD, 4.7 GB SL, 8.5 GB DL, -ROM, -RAM (recorded, erased, re-recorded), +/-R (one-time recordable), +/-RW (same as RAM)
- BD, 25 GB SL, 50 GB DL, -ROM, -R, -RE (erase & overwrite)


# Connectors
- I/O ports : 
- Audio & game port : analog ports typically include a line in port to connect to an external source (stereo system), mic port, line out ports, game port connects to joystick or MIDI-interfaced device.
- Audio card has an amplifier to power headphones & external speakers.
- Network port (RJ-45 (replaces RJ-11, smaller) or 8P8C port) has 8 pins, max length of ethernet network cable is 100 m (328 ft)
- Personal System 2 (PS/2) : 6-pin mini(multi ?)-DIN female connector connecting a keyboard or mouse to computer. Color-coded or marked.
- 4-pin slotted connector : auxiliary power connector to motherboard.
- Molex keyed connector : connects hard drives, optical drives, et al.
- Berg keyed connector : connects (power ?) to legacy floppy, smaller than Molex.
- 4-pin to 8-pin auxiliary power connector : supplies power to different areas of the motherboard.
- 6/8-pin PCIe power connector : connects power to internal components.

## Serial Advanced Technology Attachment (SATA)
- SATA keyed connector : connects disk drives, wider & thinner than a Molex. 7-pin data cable, L-shaped keyed slot, does not provide power.
- Cables can be up to 1 meter, thin & flat, 7-pin connector.
- Sata side is L shaped connector.
- disk drive interface used for connecting optical, hard, and solid-state drives to the motherboard. Supports hot swapping.
- Internal storage connects to motherboard with SATA (v1 is 1.5 GB/s, v2 is 3 GB/s, v3 is 6 GB/s)
- PATA, IDE is 8.3 Mb/s and EIDE is 16.6 Mb/s
- external (eSATA) connect external hard drives, key feature to prevent USB connection which is similar.
- eSATA adapter/expansion card installed to provide eSATA ports, requires separate power plug. eSATAp combines power.

## Integrated Drive Electronics (IDE)
- Older interface for connecting disk drives to the motherboard, uses a 40-pin connector for hard & optical drives.
- Supports maximum 2 devices. Ribbon cable 34-pin cable for floppy drives.
- Used to connect some hard dives and optical drives to each other and to the motherboard.
- Typically 3 connecors (1 motherboard 2 IDE drives)

## USB
- A 19-pin connector is used to connect the external USB 3 ports to the motherboard. USB 1.1 and 2 connectors have 9 pins.
- Hot swappable, connects peripherals.
- Can have 4 or 5 pins.
- 1.0 (1996, 1.5 Mbps) for keyboards & mice and a full-speed channel @ 2 Mbps (1.1 in 1998)
- 2.0 (2001, High Speed at 480 Mbps) 3.0 SuperSpeed 5 Gbps, 3.1 10 Gbps, 3.2 (USB-C) 20 Gbps.
- Supplies power as well.

## Small Computer System Interface (SCSI)
- Another interface between motherboards and storage device, connecting peripherals.
- bus technology, all devices connected to a central bus are daisy-chained together.
- Older standard that used parallel instead of serial data transfers.
- Serially Attached SCSI (SAS) supercedes this, popular interface for server storage.
- Centronics connector used for older SCSI devices such as scanners or printers. 36 or 50-pin versions, pins in 2 rows with plastic bar thru center holding contact pins, uses squeeze latches or bail locks.

## Adapters & converters
- Adapter : component that physically connects one tech to another (ie DVI to HDMI adapter)
- Converter : Same as adapter + translates the signals (ie USB 3.0 to SATA converter enables a hard disk drive to be used as a flash drive)
- DVI to VGA adapter, USB to ethernet converter, USB to PS/2 adapter, DVI to HDMI adapter, Molex to SATA adapter, HDMI to VGA converter. 

## Coax
- RG-6 : heavy gauge, insulation & shielding tuned for high bandwidth/frequency applications like internet, cable & satellite TV, commonly uses F-type connector.
- RG-59 : thinner/less shielding than RG-6. Low bandwidth/power applications (analog video, CCTV) uses BNC connector (quarter turn connection scheme, digital or analog audio or video)

## Legacy
- Most of these replaced by USB.
- Serial ports were used to connect peripherals, today used to make console connections to network devices for initial config (9-pin DB-9 port and 25-pin port)
- Most common interface of serial port is RS-232 standard using DB-9 (still widely used in industrial communication devices)
- Parallel ports have a 25-pin to connect peripherals (alias is printer port)
- Game ports : 15-pin used for joystick input, originally located on dedicated game controller expansion card, later integrated with sound card and on motherboards.
- PS/2 : 6-pin din connector for keyboard (purple) and mouse (green)

# Motherboard
- Trusted Platform Module (TPM) : chip designed to secure hardware by storing encryption keys, digital certificates, passwords, & data. Used by Windows to support BitLock full-disk encryption.
- If it has a video adapter alias integrated video (has a video port)
- IEEE 1394 Firewire, 400 Mb/s, D-shape, digital cameras and printers, replaced by USB.

- Video Graphics Array (VGA, 640x480, 4:3, 1987, legacy) : analog video connector, 3 rows & 15 pins, (alias DE-15 or HD-15 connector, blue), direct to motherboard.

## Chipsets
- Consists of integrated circuits (IC) on the motherboard that control how system hardware interacts with CPU & motherboard, how much memory can be added and type of connects used.
- Northbridge (NB) : connects high speed access to RAM & video card, speed at which CPU communicates to other components, video capability is sometimes integrated into the Northbridge.
- Southbridge (SB) : allows CPU to communicate with slower devices including hard drives, USB ports, and expansion slots.

## Form factors
- AT 12" x 13.8" is deprecated.
- Advanced Technology eXtended (ATX) 12" x 9.6" : most common ff, ATX power supply connects to motherboard via a single 20-pin (P1 ?) connector.
- Micro-ATX 9.6" x 9.6" : Smaller ff backwards compatible with ATX. Often have same NB & SB chipsets & power connectors as full sized ATX. Much smaller and have fewer expansion slots & less features, consume less power.
- ITX (2001, VIA Technologies, 8.5" x 7.5") popular due to small size, there are many types but mini-ITX (6.7" x 6.7") is most popular, it uses very little power thus no fans needed, only heatsinks, only one PCI slot for expansion card, also Nano-ITX (2005), Pico-ITX,Mobile-ITX (6cm x 6cm)
- Align motherboard in correct direction facing adapters out back of case, locate standoffs, remove motherboard and screw in standoffs, align/install i/o plate, place motherboard, install screws loosely into standoffs.
- BTX, Intel, improved ATX, more in-line air flow.
- NLX (Intel) low-end low-profile, uses riser cards. Slim-line computer cases.

## Central Processing Unit (CPU)
- CPU virtualization is sometimes disabled by default in the BIOS.
- CPU powered measured by speed and amount of data processed.
- Amount of data depends on size of the front side bus (FSB, also called CPU bus or processor data bus)
- The width of an FSB is measured in bits (smallest unit of data in a computer, current processors use either 32 or 64 bit FSB)
- Small microchip within a CPU package (has many different ff), interprets & executes commands, handles instructions from other hardware (keyboard) and software.
- Orient CPU to socket, place, lock, apply thermal paste, install heatsink & secure.
- Motherboard socket & chipset must be compatible with the CPU.
- chipset enables connection types (USB ports, eSATA, surround sound, video)
- Transmission delay : processor chip is a collection of transistors connected by wires, transmitting data thru this creates delays.
- Heat generation : transistors changing state from on to off generates heat. Excess heat produces errors.

### Architectures
- CPU executes a program (stored set of instructions) by following a specific instruction set.
- While the CPU executes a step of a program, remaining instructions and the data are stored in a special, high-speed memory called cache.
- Reduced Instruction Set Computer (RISC) : Uses relatively small set of instructions. RISC chips (PowerPC, ARM) execute these instructions very rapidly.
- Complex Instruction Set Computer (CISC) : uses a broad set of instructions, resulting in fewer steps per operation (Intel x86, Motorola 68k)
- Hyper-Threading : Intel, multiple pieces of code (threads) are executed simultaneously in the CPU. A single CPU with this performs as though there are 2 CPU's when multiple threads are being processed. Two pieces of code can be processed simultaneously by a single core.
- HyperTransport (AMD processors, high-speed) : connection between CPU & the Northbridge chip.

### Socket
- Each CPU package requires a particular socket on the motherboard.
- Pin Grid Array (PGA) : Pins are on underside of processor package and are inserted using Zero Insertion Force (ZIF)
- Land Grid Array (LGA) : Pins are in the socket instead of on the processor.
- Intel LGA sockets 775, 1155, 1156, 1150, 1366, 2011
- AMD PGA sockets AM3, AM3+, FM1, FM2, FM2+

## Basic Input Output System (BIOS)
- When computer boots, BIOS software reads configs stored in CMOS to determine how to config HW.
- ROM chip or firmware (small program) built into motherboard.
- Controls communication between OS & hardware.
- Initializes computer's hardware as computer is being booted, then searches for a boot device such as optical drive or storage device to boot software such as OS.
- Stored on BIOS chip on motherboard, nonvolatile.
- Motherboard manufacturers may provide BIOS updates for stability, performance, and compatibility, but upgrading firmware is risky.
- Modern BIOS chips are EEPROM.

### Power On Self Test (POST)
- Run by the BIOS, self check before computer starts the OS.
- To check POST, remove RAM and check beep code emitted.
- Checks which drives are available then bootable, memory config and how to ues, pci/e slots config, SATA & USB config, motherboard power management features.

| Beeps | Meaning | Cause |
| --- | --- | --- |
| 1 | Memory refresh failure | Bad memory |
| 2 | Memory parity error | Bad memory
| 3 | Base 64 mem failure | Bad memory |
| 4 | Timer not operational | Bad motherboard |
| 5 | Processor error | Bad processor |
| 6 | 8042 Gate A20 failure | Bad CPU or motherboard |
| 7 | Processor exception | Bad processor |
| 8 | Video memory error | Bad video card or memory |
| 9 | ROM checksum error | Bad BIOS |
| 10 | CMOS checksum error | Bad motherboard |
| 11 | Cache memory bad | Bad CPU or motherboard |

### Complementary Metal-oxide Semiconductor (CMOS)
- Saves motherboard BIOS settings.
- Date & time, boot sequence, hardware (fan) settings must be saved, stored in CMOS chip (volatile).
- CMOS powered by small button cell battery, if removed BIOS reverts to default settings.
- In modern motherboards CMOS chip is integrated into RTC on south bridge chipset.

## Unified Extinsible Firmware Interface (UEFI)
- Newer type of BIOS, supercedes old, animations & mouse use.
- Intel chips support backwards compatibility with legacy BIOS systems.
- Can drag and drop components to set boot sequence.
- Secure Boot : UEFI security standard that ensures only OS trusted by motherboard manufacturer boots.


# Storage
## Raid types
- Striping : Enables data to be distributed across multiple drives. This provides a significant performance increase. However, since the data is distributed across multiple drives, the failure of a single drive means that all data is lost.
- Mirroring : Stores duplicate data on one or more other drives. This provides redundancy so that the failure of a drive does not cause the loss of data. The Mirror can be recreated by replacing the drive and restoring the data from the good drive.
- Parity : Provides basic error checking and fault tolerance by storing checksums separately from data. This enables the reconstruction of lost data without sacrificing speed and capacity, like mirroring.
- Double parity provides fault tolerance up to two failed drives.

# Disassembly
- Press & hold power button for 3 seconds (drains PS, excess system power)
- Disconnect power cable
- Remove peripherals
- Open case
- ESD bracelet
- Remove connectors first then components:
- hard drive > optical drive > PS > adapter cards > memory modules, data cables, 

<table> <tr> <th> <b>Optical Device</b> </th> <th> <b>Read CD</b> </th> <th> <b>Write CD</b> </th> <th> <b>Read DVD</b> </th> <th> <b>Write DVD</b> </th> <th> <b>Read<br>Blu-ray</b> </th> <th> <b>Write<br>Blu-ray</b> </th> <th> <b>Rewrite<br>Blu-ray</b> </th> </tr> <tr> <td> CD-ROM </td> <td> <p>Yes</p> </td> <td> <p>No</p> </td> <td> <p>No</p> </td> <td> <p>No</p> </td> <td> <p>No</p> </td> <td> <p>No</p> </td> <td> <p>No</p> </td> </tr> <tr> <td> CD-RW </td> <td> <p>Yes</p> </td> <td> <p>Yes</p> </td> <td> <p>No</p> </td> <td> <p>No</p> </td> <td> <p>No</p> </td> <td> <p>No</p> </td> <td> <p>No</p> </td> </tr> <tr> <td> DVD-ROM </td> <td> <p>Yes</p> </td> <td> <p>No</p> </td> <td> <p>Yes</p> </td> <td> <p>No</p> </td> <td> <p>No</p> </td> <td> <p>No</p> </td> <td> <p>No</p> </td> </tr> <tr> <td> DVD-RW </td> <td> <p>Yes</p> </td> <td> <p>Yes</p> </td> <td> <p>Yes</p> </td> <td> <p>Yes</p> </td> <td> <p>No</p> </td> <td> <p>No</p> </td> <td> <p>No</p> </td> </tr> <tr> <td> BD-ROM </td> <td> <p>Yes</p> </td> <td> <p>No</p> </td> <td> <p>Yes</p> </td> <td> <p>No</p> </td> <td> <p>Yes</p> </td> <td> <p>No</p> </td> <td> <p>No</p> </td> </tr> <tr> <td> BD-R </td> <td> <p>Yes</p> </td> <td> <p>Yes</p> </td> <td> <p>Yes</p> </td> <td> <p>Yes</p> </td> <td> <p>Yes</p> </td> <td> <p>Yes</p> </td> <td> <p>No</p> </td> </tr> <tr> <td> BD-RE </td> <td> <p>Yes</p> </td> <td> <p>Yes</p> </td> <td> <p>Yes</p> </td> <td> <p>Yes</p> </td> <td> <p>Yes</p> </td> <td> <p>Yes</p> </td> <td> <p>Yes</p> </td> </tr> </table>
<table> <tr> <th> <b>RAID Level</b> </th> <th> <b>Minimum Number of Drives</b> </th> <th> <b>Features</b> </th> <th> <b>Advantages</b> </th> <th> <b>Disadvantages</b> </th> </tr> <tr> <td> 0 </td> <td> 2 </td> <td> Striping </td> <td> Performance and Capacity. </td> <td> All data is lost if one drive fails. </td> </tr> <tr> <td> 1 </td> <td> 2 </td> <td> Mirroring </td> <td> Performance and Reliability. </td> <td> Capacity is half of total drive size. </td> </tr> <tr> <td> 5 </td> <td> 3 </td> <td> Striping with parity </td> <td> Performance, Reliability, and Capacity. </td> <td> It takes time to rebuild array if a drive fails. </td> </tr> <tr> <td> 6 </td> <td> 4 </td> <td> Striping with double parity </td> <td> Same as RAID 5 but can tolerate the loss of two drives. </td> <td> It takes time to rebuild array if one or more drives fails. </td> </tr> <tr> <td> 10<br>(0+1) </td> <td> 4 </td> <td> Mirroring and Striping </td> <td> Performance, Capacity, and High Reliability. </td> <td> Capacity is half of total drive size. </td> </tr> </table>
