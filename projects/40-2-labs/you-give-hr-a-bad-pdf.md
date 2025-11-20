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

### Windows Setup
Windows 11 is the most recent Operating System developed by Microsoft. This is the host machine which will be targeted by Kali Linux.

1. Download the Windows Installation Media found at: [https://www.microsoft.com/en-us/software-download/windows11](https://www.microsoft.com/en-us/software-download/windows11).

2. During the install process, at the `Choose which media to use` section, select `ISO file`.

    ![ISO File](../../images/40-2-labs/you-give-hr-a-bad-pdf/007.png){: .popup-img }

3. In VMware, click on `Create a New Virtual Machine`, then the `Typical` configuration and load the `Windows.iso` image.

    ![Windows.iso](../../images/40-2-labs/you-give-hr-a-bad-pdf/008.png){: .popup-img }

4. At the `Encryption Information` section, choose to encrypt all the files and set a password that you store in a safe place, such a password manager, in the host machine.

    ![Encryption Type](../../images/40-2-labs/you-give-hr-a-bad-pdf/009.png){: .popup-img }

    Also, select `Store virtual disk as a single file` in the Specify Disk Capacity section.

    ![Disk Capacity](../../images/40-2-labs/you-give-hr-a-bad-pdf/010.png){: .popup-img }

    **Note:** By default, the 64 GB of storage is not pre-allocated.

5. The summary will show the recommended hardware settings, except for one which must be configured manually, then click on `Customize Hardware...`

    ![Customize Hardware](../../images/40-2-labs/you-give-hr-a-bad-pdf/011.png){: .popup-img }

    The network adapter is set as `NAT` to share the host's internet connection, and so it will eventually require a Windows Account. Therefore, select `Host-only`, which will be helpful to bypass the remaining setup.

    ![Host-only Network Connection](../../images/40-2-labs/you-give-hr-a-bad-pdf/012.png){: .popup-img }

6. Finish the machine creation and click on `Power on this virtual machine`.

7. During the configuration process, make sure to select `I don't have a product key`.

    ![Product Key](../../images/40-2-labs/you-give-hr-a-bad-pdf/013.png){: .popup-img }

    In addition, select Windows 11 Pro, because of the `RDP` feature explained here: [https://learn.microsoft.com/en-us/windows-server/remote/remote-desktop-services/clients/remote-desktop-supported-config](https://learn.microsoft.com/en-us/windows-server/remote/remote-desktop-services/clients/remote-desktop-supported-config).

    ![Windows 11 Pro](../../images/40-2-labs/you-give-hr-a-bad-pdf/014.png){: .popup-img }

8. During the setup, it will ask to connect to a network. To bypass this step, do `Shift+F10` to open the `CMD` and execute the following command:

    ```powershell
    oobe\bypassnro
    ```

    It will restart the machine and enable the `I don't have internet` option, select it and finish the setup.

    ![Network Connection](../../images/40-2-labs/you-give-hr-a-bad-pdf/015.png){: .popup-img }

9. After the Windows setup, ensure a smoother virtualization experience by going to the `VM` tab and select `Install VMware Tools`.

    ![VMware Tools Plug-in](../../images/40-2-labs/you-give-hr-a-bad-pdf/016.png){: .popup-img }

    It will load the drive and ask to execute the `Run setup64.exe`, click on it and follow the default options.

    ![VMware Tools Executable](../../images/40-2-labs/you-give-hr-a-bad-pdf/017.png){: .popup-img }

10. To have internet in the VM, go to the left bar, right click on the machine name and select `Settings...`

    ![VM Settings](../../images/40-2-labs/you-give-hr-a-bad-pdf/018.png){: .popup-img }

    And, in the `Network Adapter` section choose `NAT` to ensure the VM is not alongside the host network, but has its own through the host `IP`.

    ![NAT Network Connection](../../images/40-2-labs/you-give-hr-a-bad-pdf/019.png){: .popup-img }

11. Finally, for future recovery of the fresh install, go to the `VM` tab, then click on `Snapshot` and `Take Snapshot...`

    ![Snapshot Walkthrough](../../images/40-2-labs/you-give-hr-a-bad-pdf/020.png){: .popup-img }

    Assign a name like "Fresh Install" and click `Take Snapshot`

    ![Snapshot Name](../../images/40-2-labs/you-give-hr-a-bad-pdf/021.png){: .popup-img }
