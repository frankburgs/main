CompTIA 3 hour video | min : 33
- Netacad : cisc181Pearson@!

# Questions
- Can instructor see each student module progress.
- iso 9000:2001
- VS code .md no-wrap option locked FS.
- Computer plugged during work for ground but not power.
- Do smartphones have touchpad input function?
- Student e-mails not used.
- College IT admin.
- Weld fiasco.

# Safety
- 1.3.2 Lab Safety & disassembly

## Electrostatic discharge (ESD)
- 3 kV, a person feels, 10 kV, makes a sound.
- < 30 V can damage computer component.
- Use floor mats, bench mats, anti-static bags, anti-static wrist-straps.

## Temperature
- Cooling systems : Active solutions (case fan) require power while passive (reducing speeds, adding heat sinks) do not.
- Case fan : case size, fan speed, qty components, physical environment, mounting spaces (qty & locations), connections.
- Intel max heat 185 F 85 C, Good processor 90-110 F (32-43 C)


# 1 Parts
- Central Processing Unit (CPU) : Small microchip within a CPU package (has many different ff), interprets & executes commands, handles instructions from other hardware (keyboard) and software.
- Orient CPU to socket, place, lock, apply thermal paste, install heatsink & secure.
- Motherboard socket & chipset must be compatible with the CPU.
- chipset enables connection types (USB ports, eSATA, surround sound, video)

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


## Monitors
- Liquid Crystal Display (LCD) : Two polarizing filters with a LC solution between them. Electronic current aligns the crystals so light can pass through or not.

- have two types:
- Twisted Nematic (TN) the liquid crystals twist (been around for decades, used in watches)
- In-plane switching (IPS) use more transistors, consume more power, stay in place and align in parallel with the glass, better quality.

- Light-emitting diode (LED) : LCD display that uses LED backlighting, lower power consumption than LCD, thinner, lighter, brighter, better contrast.

- Some use florescent lamps for backlighting (emits UV light when mercury vapor inside lamp is ionized)

- Modern uses multiple LED's in a pattern.
- Both are LCD but call the 2nd LED.

- Organic LED (OLED) : uses layer of organic material which responds to organic stimulus to emit light. Each pixel lights individually resulting in deeper black levels than LED.

- LCD highest resolution = native resolution

- Extended Graphics Array (XGA) 1028 x 768
- Super Extended Graphics Array (SXGA) 1280 x 1024
- SXGA+ 1400 x 1050
- Ultra Extended Graphics Array (UXGA) 1600 x 1200
- Wide Screen Ultra Extended Graphics Array (WUXGA) 1920 x 1200

- Contrast ratio is ratio black/white. Higher = better.

# Projector
- LCD projectors usually have higher lumens than DLP. 
- Digital Light Processing (DLP) - spinning color wheel with array of mirrors each corresponding to a pixel and reflects light up to 1024 shades of grey. Color wheel then adds color data.
- ANSI has standardized projector testing procedure.
- Brightness (white light output) measures total light projected in lumens, color brightness spec measures red, green & blue using same approach.

## Video ports & cables
- Digital or analog or both. Computers are digital devices that create digital signals that are sent to the grfx card where they are transmitted through a cable to a display.
- Digital Visual Interface (DVI) : white, 24 pins (3 rows of 8) for digital signals, 4 pins for analog signals, flat pin (ground bar)
- 5 types of DVI available for digital & analog and also single link & dual link (extra bandwidth)(DVI-I & D are current two main types)
- DVI-D only supports digital devices & outputs.
- DVI-A analog
- DVI-I supports digital outputs & analog devices (disappearing)


- DisplayPort : interface tech designed to connect high-end grfx-capable PCs, displays, & home theaters.
- High-Definition Multimedia Interface (HDMI) : developed for HDTV, digital features make it good for computers.
- Thunderbolt 1 or 2 : high-speed connection of peripherals such as hard drives, RAID arrays, network interfaces, can transmit HD video using DisplayPort protocol.
- Thunderbolt 3 : Same connector as USB-C, twice bandwidth as 2, less power, can provide 2x 4x monitors with video.
- Video Graphics Array (VGA) : Analog video connector, 3 rows & 15 pins, (alias DE-15 or HD-15 connector)
- Radio Corporation of America (RCA) : connectors have central plug with ring around it used to carry video or audio. (yellow video, red & white are L & R audio channels)

## Printers
- Inkjet : places small dots, can smudge.
- Use printer sotware to try to troubleshoot streaks (clean printheads)
- May need to manually clean with a lint-free cloth.
- Faded or blank images, may be low ink or something else.
- Laser : toner in a drum adheres to where laser touches it and is passed on to paper.
- Ghosting : faint image of previously printed page (drum or fuser, has a lifespan)
- Thermal : another non-impact printer, uses thermal paper with wax based ink, turns black with heat (used for barcodes due to high tolerances)
- Dot matrix : old tech, impact printer, can print multi-copy (carbon-copy) documents, very durable.

### Troubleshooting
- Paper jam could be caused by debris or faulty pickup rollers (older printers, get worn out, inspect)
- Check printer display for error msg

## Adapter cards
- Increase functionality of a computer by adding controllers for specific devices or by replacing malfunctioning ports.
- Sound adapter, Network Interface Card (NIC), eSATA card adds additional internal and external SATA ports to a computer through a single PCI express slot, & video adapter.
- Wireless NIC, capture cards send a video signal to a computer so so the video can be recorded to storage using video capture software.
- TV tuner, USB, Accelerated Graphics Port (AGP, high speed slot for attaching an AGP video card, superceded by PCI), SCSI adapter etc.

## Expansion slots
- Riser card : provides additional expansion slots.
- Peripheral Component Interconnect (PCI) is an obsolete 32 or 64-bit expansion slot.
- Mini-PCI (smaller version of PCI found in laptops) has form factors Type I, II, III.
- PCI-X (PCI eXtended) : Updated version of standard PCI, uses 32-bit bus with higher bandwidth than PCI bus. 4x faster than PCI, mostly obsolete.
- PCIe (Express) is a 64-bit parallel interface that is backwards compatible with 32-bit PCI devices. Serial point-to-point connection with different physical interface designed to supersede PCI & PCI-X. PCIe x1, x4, x8, x16 (x qty of data lanes)
- Every version of PCIe is backwards compatible. Up to 25 W per slot, 75 for a grfx card, additional 75 W for very powerful grfx card.

Version --- GB/s for x1 --- GB/s for x8
2 .5 8
3 .985 8
4 1.969 31.508
5 3.938 63.015

## Memory
- Primary memory is temporary, secondary memory is permanent.
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

### Memory errors
- Nonparity memory does not check for errors in memory. Nonparity RAM is most common RAM used for home & business (bz) workstations (ws)
- Parity memory contains 8 bits for data and one (parity bit) for error checking.
- Error correction code (ECC) can detect multiple bit errors in memory and correct single bit errors in memory. On servers of financial or data analytics ECC memory modules may be required.

### RAM modules
- Open slot lever, orient stick to slot, insert, lock.
- Early computers had RAM installed on motherboard as individual chips. Dual inline package (DIP) chips were difficult to install and often become loose.
- Single Inline Memory Module (SIMM) is a small circuit board that holds several memory chips, 30-pin or 72-pin configs.
- Dual Inline Memory Module (DIMM) holds SDRAM, DDR SDRAM, DDR2 SDRAM, DDR3 SDRAM, and DDR4 SDRAM chips. There are 168-pin SDRAM DIMMs, 184-pin DDR DIMMs, 240-pin DDR2 and DDR3 DIMMs, and 288-pin DDR4 DIMMs.
- Small Outline (SO)DIMM has a 72-pin and 100-pin configurations for support of 32-bit transfers or a 144-pin, 200-pin, 204-pin, and 260-pin configurations for support of 64-bit transfers. This smaller, more condensed version of DIMM provides random access data storage that is ideal for use in laptops, printers, and other devices where conserving space is desirable.
- Single-sided memory modules contain RAM only on one side of the module. Double-sided on both.
- Speed of memory affects how much data a processor can process in a given amount of time. As processor speed increases memory speed must also increase. Multichannel technology increases memory throughput.
- Standard RAM is a single channel, all RAM slots are accessed simultaneously. Dual channel RAM adds a 2nd channel to be able to access a 2nd module simultaneously.
- Triple channel technology does the same, quadruple channel adds channel for memory controller for higher bandwidth. Chipset architecture must support it and is only able to use as many channels as memory slots populated.

### Hard disk drive (HDD)
- Storage from GB's to TB's 
- FF's come in 1.8" (portable media players et al. but seldom used in new), 2.5" (mobile devices), 3.5" (standard for PC)
- Traditional magnetic disks typically @ 5400, 7200(desktops), 10k, 15k RPM
- Non-volatile (can retain & store data when not connected to a power source)
- Use Serial ATA (SATA) interface, newer than Parallel ATA.

### Solid State Drives (SSD, semiconductor storage)
- Non-Volatile Memory Express (NVMe) spec was developed to provide standard interface between SSD, PCIe bus, and OS (not require special drivers)
- No moving parts, uses flash memory chips to store data, fast data transfer.
- 120 GB to many TB.
- No moving parts, thus considered more reliable.
- Disc drive form factor : similar to HDD in which the semiconductor memory is in a closed package that can be mounted in a computer case. 2.5, 3.5, and 1.8" (rare)
- Expansion card form factor, plugs directly into motherboard & mounts in computer case.
- mSata or M.2 modules (special socket, standard for computer expansion cards)
- Solid State Hybrid Drives (SSHD) : Faster than HDD but cheaper than SSD. Auto-caches frequently accessed data. Magnetic HDD with onboard flash memory as non-volatile cache.

### Hybrid drives
- Magnetic & SSD
- Takes advantage of large capacity/ low cost of magnetic disks, speed of SSD.
- Magnetic disks store, flash memory used for caching.

### Optical drives
- Use lasers to read & write. Developed to overcome storage capacity limitations of magnetic media (floppy discs & magnetic storage cartridges)
- CD (audio & data), DVD (digital video & data), BD (Blu-ray Disc, HD digital video & data)
- Pre-recorded (read ony), recordable (write once), or re-recordable. DVD & BD can be single layer (SL) or dual layer (DL, double capacity of single disc)
- CD, 700 MB, CD-ROM (pre-recorded read-only media), CD-R (one-time recordable), CD-RW (rewritable)
- DVD, 4.7 GB SL, 85 GB DL, -ROM, -RAM (recorded, erased, re-recorded), +/-R (one-time recordable), +/-RW (same as RAM)
- BD, 25 GB SL, 50 GB DL, -ROM, -R, -RE (same as RAM)

### Small Computer System Interface (SCSI)
- Another interface between motherboards and data storage device.
- Older standard that used parallel instead of serial data transfers.
- Serially Attached SCSI (SAS) supercedes this, popular interface for server storage.


## Connectors
- I/O ports : 
- Audio & game port : analog ports typically include a line in port to connect to an external source (stereo system), mic port, line out ports, game port connects to joystick or MIDI-interfaced device.
- Audio card has an amplifier to power headphones & external speakers.
- Network port (RJ-45 or 8P8C port) has 8 pins, max length of ethernet network cable is 100 m (328 ft)
- Personal System 2 (PS/2) : 6-pin mini-DIN female connector connecting a keyboard or mouse to computer. Color-coded or marked.
- 4-pin slotted connector [image]
- SATA keyed connector : connects disk drives, wider & thinner than a Molex. 7-pin data cable, L-shaped keyed slot, does not provide power.
- Molex keyed connector : connects hard drives, optical drives, et al.
- Berg keyed connector : connects to legacy floppy, smaller than Molex.
- 4-pin to 8-pin auxiliary power connector : supplies power to different areas of the motherboard.
- 6/8-pin PCIe power connector : connects power to internal components.

### Serial Advanced Technology Attachment (SATA)
- disk drive interface used for connecting optical, hard, and solid-state drives to the motherboard. Supports hot swapping which is replacing devices without turning off the computer.
- Internal storage connects to motherboard with SATA (1 is 1.5 GB/s, 2 is 3, 3 is 6)
- PATA, IDE is 8.3 Mb/s and EIDE is 16.6 Mb/s
- Integrated Drive Electronics (IDE) : older interface for connecting disk drives to the motherboard, uses a 40-pin connector for hard & optical drives, supports maximum 2 devices. Ribbon cable 34-pin cable for floppy drives.

### Adapters & converters
- Adapter : component that physically connects one tech to another (ie DVI to HDMI adapter)
- Converter : Same as adapter + translates the signals (ie USB 3.0 to SATA converter enables a hard disk drive to be used as a flash drive)
- DVI to VGA adapter, USB to ethernet converter, USB to PS/2 adapter, DVI to HDMI adapter, Molex to SATA adapter, HDMI to VGA converter. 

### USB
- A 19-pin connector is used to connect the external USB 3 ports to the motherboard. USB 1.1 and 2 connectors have 9 pins.
- Hot swappable, connects peripherals.

### Chipsets
- Consists of integrated circuits (IC) on the motherboard that control how system hardware interacts with CPU & motherboard, how much memory can be added and type of connects used.
- Northbridge (NB) : connects high speed access to RAM & video card, speed at which CPU communicates to other components, video capability is sometimes integrated into the Northbridge.
- Southbridge (SB) : allows CPU to communicate with slower devices including hard drives, USB ports, and expansion slots.

## Motherboard
- Advanced Technology eXtended (ATX) 12" x 9.6" : most common ff, ATX power supply connects to motherboard via a single 20-pin connector.
- Micro-ATX 9.6" x 9.6" : Smaller ff backwards compatible with ATX. Often have same NB & SB chipsets & power connectors as full sized ATX. Much smaller and have fewer expansion slots.
- ITX 8.5" x 7.5": popular due to small size, there are many types but mini-ITX (6.7" x 6.7") is most popular, it uses very little power thus no fans needed, only one PCI slot for expansion card.
- Align motherboard in correct direction facing adapters out back of case, locate standoffs, remove motherboard and screw in standoffs, align/install i/o plate, place motherboard, install screws loosely into standoffs.

### Basic Input Output System (BIOS)
- Firmware (program) built into motherboard.
- Initializes computer's hardware as computer is being booted, then searches for a boot device such as optical drive or storage device to boot software such as OS.
- Stored on BIOS chip on motherboard.
- Nonvolatile.
#### Complementary Metal-oxide Semiconductor (CMOS)
- Date & time, boot sequence, hardware (fan) settings must be saved, stored in CMOS chip (volatile).
- CMOS powered by small button cell battery, if removed BIOS reverts to default settings.
- In modern motherboards CMOS chip is integrated into RTC on south bridge chipset.
### Power On Self Test (POST)
- Run by the BIOS, self check before computer starts the OS.
- BEEP chart.
### Unified Extinsible Firmware Interface (UEFI)
- Newer type of BIOS, supercedes old.


### CPU socket
- Each package requires a particular socket on the motherboard.
- Pin Grid Array (PGA) : Pins are on underside of processor package and are inserted using Zero Insertion Force (ZIF)
- Land Grid Array (LGA) : Pins are in the socket instead of on the processor.


# Disassembly
- Press & hold power button for 3 seconds (drains PS, excess system power)
- Disconnect power cable
- Remove peripherals
- Open case
- ESD bracelet
- Remove connectors first then components:
- hard drive > optical drive > PS > adapter cards > memory modules, data cables, 

# Assembly
- Wires to ports on the front case panel, 



# 3 Advanced Computer Hardware


# 4 PM & Troubleshooting


# 5 


# 10 Windows Installation


# 14 The IT Professional
