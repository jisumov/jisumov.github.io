---
layout: default
---

# Home Lab

## Description
Established a foundational home lab environment utilizing VirtualBox to simulate a hypothetical attack scenario between 2 VMs: Kali Linux and Windows. This setup demonstrates essential hardening techniques, custom script implementation within Metasploit, and real-time incident monitoring through Splunk.

## Pre-requisites

### VirtualBox Setup
VirtualBox is a general-purpose virtualization software which serves to isolate and create a dedicated communication channel between the lab environments. The installation is as follows:

1. Download the VirtualBox Platform Package found at: [https://www.virtualbox.org/wiki/Downloads](https://www.virtualbox.org/wiki/Downloads).

2. Verify the executable's integrity through the File Checksums. In this case, the SHA-256 checksums are found at: [https://www.virtualbox.org/download/hashes/7.1.4/SHA256SUMS](https://www.virtualbox.org/download/hashes/7.1.4/SHA256SUMS).

3. Open a PowerShell terminal within the same download's location and execute:
    ```bash
    Get-FileHash <file-name>
    ```

    ![PowerShell Hash Generation](./images/home-lab-02.png)

    Therefore, the hash can be matched with the provided list.

    ![SHA256 List](./images/home-lab-03.png)

4. If the execution requires the Microsoft Visual C++ 2019 Redistributable Package.

    ![C++ Package](./images/home-lab-04.png)

    Go to: [https://aka.ms/vs/17/release/vc_redist.x64.exe](https://aka.ms/vs/17/release/vc_redist.x64.exe) and install it by clicking next in every step.

5. Install VirtualBox and make sure to mark `Create start menu entries` and `Register file associations` in order to find the executable and open specific VirtualBox file types within the application.

    ![VBox Types](./images/home-lab-05.png)

## Windows Setup
Windows is the most recent Operating System developed by Microsoft. This is the host machine which will be targeted by Kali Linux.

1. Download the Windows Installation Media found at: [https://www.microsoft.com/en-us/software-download/windows11](https://www.microsoft.com/en-us/software-download/windows11).

2. During the install process, at the `Choose which media to use` section, select `ISO file`.

    ![VBox Types](./images/home-lab-06.png)

3. In VirtualBox, click on New and select the `Windows.iso` image.

    ![VBox Types](./images/home-lab-07.png)

4. At the Hardware section, follow the minimum system requirements from Microsoft: [https://www.microsoft.com/en-us/windows/windows-11-specifications](https://www.microsoft.com/en-us/windows/windows-11-specifications).

    ![VBox Types](./images/home-lab-08.png)

    Also, set the recommended storage in the Virtual Hard Disk section.

    ![VBox Types](./images/home-lab-09.png)

    **Note:** In this case, we want that the 64 GB of storage is consumed over the time, so uncheck `Pre-allocate Full Size`.

5. Check the summary and proceed to finish the creation.

    ![VBox Types](./images/home-lab-10.png)

6. The machine is ready to run, so click on `Start`.

7. During the configuration process, make sure to select `I don't have a product key`.

    ![VBox Types](./images/home-lab-11.png)

    In addition, select Windows 11 Pro, because of the `RDP` feature explained here: [https://learn.microsoft.com/en-us/windows-server/remote/remote-desktop-services/clients/remote-desktop-supported-config](https://learn.microsoft.com/en-us/windows-server/remote/remote-desktop-services/clients/remote-desktop-supported-config).

    ![VBox Types](./images/home-lab-12.png)