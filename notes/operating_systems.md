- File  management, add, delete, rename.
- Application support, memory management, file swap.
- i/o support
- OS config & mgt tools.
- 32 or 64-bit hardware drivers are specific to the OS.
- 32-bit (x86), 64-bit (x64) operating systems.
- Device drivers one of most important aspects of OS.
- Virtual memory is stored on the boot partition of the hard drive.
- Power options are in the Windows Control Panel applet.
- If a device has a boot partition when the computer gets to it on boot it will load it ❔

# Device manager
- A red x on a device means it has been administratively disabled.


# File System
- OS foundation, FAT & FAT32 is popular.
- File Allocation Table (FAT, 1980's) one of first PC-based file systems.
- FAT32 : Native support in Windows 2000 & newer, older windows provide limited support, larger (2 TB) volume sizes, max file size 4 GB.
- Many FS can read and sometimes write multiple file system types (NTFS)
- New Technology File System (NTFS, Microsoft, 1990's) Windows NT, 2000, XP, Server 2003 & 2008, Vista & 7.
- NTFS improved quotas, file compression, encryption, symbolic links, LFS, security, recoverability, extended file attributes. Many different versions.
- Resilient File System (ReFS) Microsoft's newest FS, high data availability, scalability, integrity.


# Installation
- Backing up
- Hardware compatibility verification, minimum requirements, plan for FS type
- Methods
- Options
## Upgrade
- Existing OS, preserve files, applications, profiles.
## Clean install
- Repartition, reformat


# Files & folders !1x
- Read-only, archive bit, system attribute, hidden bit, 
- Full control, modify, read & execute, read, write
- Full control, modify, read & execute, list folder contents, read & write


# Troubleshooting
- Event Viewer shows when system, user, or software errors occur records what, when, severity, source, ID#, which user.
- Device manager displays all configured devices, yellow question mark indicates the system does not know which driver to install for the hardware.

## Windows
- Separate partitions for dual-boot support.
- 255 character max filename.
- backslash is drive/network address, forwardslash is everything else.
- 7, Server 2003, Server 2008, Mobile, Tablet PC (XP, Vista, 7 variants)
- Before installing, confirm base Windows OS is available on the computer's hard drive.
- Power computer.
- Custom advanced install.
- Generally use FAT32, NTFS, or HPFS configuration.
- All files are either binary or text.
- Virtual memory is a thing and might run low.
- Memory diagnostics, performance monitor, event viewer, registry editor, task manager.

## 2000
- Emergency Repair Disk
- Professional, Server, Advanced Server, Datacenter Server

## xp
- Professional, Automated System Recovery, remote desktop, offline files & folders, multi-processor support, NTFS encryption
- Home, entry level 
- Media Center, record TV, internet media, images
- 64-bit

## Vista
- Home Basic, Home Premium.
- Business, Windows Backup & Restore, fax & scan, remote desktop connection.
- Ultimate, BitLocker.

# Network config
- Computer name, workgroup/ domain

# Terms
- User Account Control (UAC)
- Preboot eXecution environment (PXE) standardized client-server env that enables a computer to boot from a network interface instead of local storage device.

``` shell
cmd # starts command line
dir # lists directory contents
mkdir fileName # or md, make directory
```