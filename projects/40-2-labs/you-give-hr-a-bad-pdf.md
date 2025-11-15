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

1. Download VMware Workstation Pro, that is hosted at: [https://www.vmware.com/products/desktop-hypervisor/workstation-and-fusion](https://www.vmware.com/products/desktop-hypervisor/workstation-and-fusion).

2. Verify the executable's integrity through the File Checksums. In this case, the SHA-256 and MD5 checksums are found at the installer page.
    
3. Open a PowerShell terminal within the same download's location and execute:
    ```powershell
    Get-FileHash <file-name>
    ```

    ![PowerShell Hash Generation](../../images/40-2-labs/you-give-hr-a-bad-pdf/001.png){: .popup-img }

    Therefore, the hash can be matched with the provided list.

    ![SHA256 List](../../images/40-2-labs/you-give-hr-a-bad-pdf/002.png){: .popup-img }

4. Proceed with the installation of VMware Workstation Pro by accepting the `End-User License Agreement`.

    ![End-User License Agreement](../../images/40-2-labs/you-give-hr-a-bad-pdf/003.png){: .popup-img }

5. There is a compatible setup, referring to Hyper-V or Device/Credential Guard being enabled. 

    Hence, the virtual machines will be launched using the Windows Hypervisor Platform (WHP).

    ![Compatible Setup](../../images/40-2-labs/you-give-hr-a-bad-pdf/004.png){: .popup-img }

6. After setting the installation folder, tick the box `Check for product updates on startup`, to always ensure an up-to-date app version and mitigate risks like VM Escape. 

    Also, joining the `VMware Customer Experience Improvement Program` is optional.

    ![User Experience Settings](../../images/40-2-labs/you-give-hr-a-bad-pdf/005.png){: .popup-img }

7. Finally, choose whether to create the shortcuts, then click `Install`. The VMware Workstation Pro interface should look like this:

    ![VMware Workstation Pro Interface](../../images/40-2-labs/you-give-hr-a-bad-pdf/006.png){: .popup-img }

