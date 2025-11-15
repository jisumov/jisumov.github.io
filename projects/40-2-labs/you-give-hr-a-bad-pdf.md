---
layout: default
youtube_id: Aqc3VTpz9HQ
music_title: "You Give Love A Bad Name - Bon Jovi"
---

# You Give HR A Bad PDF

## Description
Established a home lab environment utilizing VMware to simulate an attack scenario between Windows and Kali Linux VMs. This setup shows scripts usage within Metasploit and real-time event monitoring through Sysmon and Splunk.

## Prerequisites

### VMware Workstation Pro Setup
VMware Workstation Pro is a type 2 hypervisor which serves to isolate and create a dedicated communication channel between the lab environments. The installation is as follows:

1. Download the VMware Workstation Pro found at: [https://www.vmware.com/products/desktop-hypervisor/workstation-and-fusion](https://www.vmware.com/products/desktop-hypervisor/workstation-and-fusion).

2. Verify the executable's integrity through the File Checksums. In this case, the SHA-256 and MD5 checksums are found at the installer page.
    
3. Open a PowerShell terminal within the same download's location and execute:
    ```bash
    Get-FileHash <file-name>
    ```

    ![PowerShell Hash Generation](../../images/40-2-labs/you-give-hr-a-bad-pdf/001.png)

    Therefore, the hash can be matched with the provided list.

    ![SHA256 List](../../images/40-2-labs/you-give-hr-a-bad-pdf/002.png)

4. Proceed with the installation of VMware Workstation Pro by accepting the End-User License Agreement.

    ![End-User License Agreement](../../images/40-2-labs/you-give-hr-a-bad-pdf/003.png)

5. Note that there is a compatible setup, referring to Hyper-V or Device/Credential Guard being enabled. The virtual machines will be launched using the Windows Hypervisor Platform (WHP).

    ![Compatible Setup](../../images/40-2-labs/you-give-hr-a-bad-pdf/004.png)