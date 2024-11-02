---
layout: default
---

# Home Lab

## Description
Established a foundational home lab environment utilizing VMware to simulate a hypothetical attack scenario between 2 VMs: Kali Linux and Windows. This setup demonstrates essential optimization and hardening techniques, custom script implementation within Metasploit, and real-time incident monitoring through Splunk.

## Pre-requisites

### VMware Setup
VMware is a type 2 hypervisor which serves to isolate and create a dedicated communication channel between the lab environments. The installation is as follows:

1. Download the VMware Workstation Pro found at: [https://www.vmware.com/products/desktop-hypervisor/workstation-and-fusion](https://www.vmware.com/products/desktop-hypervisor/workstation-and-fusion).

2. Verify the executable's integrity through the File Checksums. In this case, the SHA-256 and MD5 checksums are found at the installer page.

3. Open a PowerShell terminal within the same download's location and execute:
    ```bash
    Get-FileHash <file-name>
    ```

    ![PowerShell Hash Generation](./images/home-lab-02.png)

    Therefore, the hash can be matched with the provided list.

    ![SHA256 List](./images/home-lab-03.png)

5. Install VMware and mark `Install Windows Hypervisor Platform (WHP) automatically` to avoid conflicts in virtualization when Hyper-V or Device/Credential Guard are enabled.

    ![VBox Types](./images/home-lab-04.png)

    In addition, select `Use VMware Workstation 17 for Personal Use` to execute VMware without a license.

    ![VBox Types](./images/home-lab-05.png)

## Windows Setup
Windows 11 is the most recent Operating System developed by Microsoft. This is the host machine which will be targeted by Kali Linux.

1. Download the Windows Installation Media found at: [https://www.microsoft.com/en-us/software-download/windows11](https://www.microsoft.com/en-us/software-download/windows11).

2. During the install process, at the `Choose which media to use` section, select `ISO file`.

    ![VBox Types](./images/home-lab-06.png)

3. In VMware, click on `Create a New Virtual Machine`, then the `Typical` configuration and load the `Windows.iso` image.

    ![VBox Types](./images/home-lab-07.png)

4. At the `Encryption Information` section, choose to encrypt all the files and set a password that you store in a safe place, such a password manager, in the host machine.

    ![VBox Types](./images/home-lab-08.png)

    Also, select `Store virtual disk as a single file` in the Specify Disk Capacity section.

    ![VBox Types](./images/home-lab-09.png)

    **Note:** By default, the 64 GB of storage is not pre-allocated.

5. The summary will show the recommended hardware settings. Then, proceed to finish the creation.

    ![VBox Types](./images/home-lab-10.png)

6. The machine is ready to run, so click on `Power on this virtual machine`.

7. During the configuration process, make sure to select `I don't have a product key`.

    ![VBox Types](./images/home-lab-11.png)

    In addition, select Windows 11 Pro, because of the `RDP` feature explained here: [https://learn.microsoft.com/en-us/windows-server/remote/remote-desktop-services/clients/remote-desktop-supported-config](https://learn.microsoft.com/en-us/windows-server/remote/remote-desktop-services/clients/remote-desktop-supported-config).

    ![VBox Types](./images/home-lab-12.png)

8. During the setup, it will try to download the latest Windows updates. Since network settings were not configured manually, it is using `NAT` to share the host's internet connection, and so it will eventually require a Windows Account to finish the process.

    Therefore, power off the machine, go to `edit the VM settings` and at the `Network Adapter` section select `Host-only`, which will be helpful to bypass the remaining setup.

    ![VBox Types](./images/home-lab-13.png)

9. At the Network section, select the `I don't have internet` option and finish the setup.

    ![VBox Types](./images/home-lab-14.png)