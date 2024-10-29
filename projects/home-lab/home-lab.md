---
layout: default
---

# Description
Established a foundational home lab environment utilizing VirtualBox to simulate a hypothetical attack scenario between 2 VMs: Kali Linux and Windows. This setup demonstrates essential hardening techniques, custom script implementation within Metasploit, and real-time incident monitoring through Splunk.

# Pre-requisites

## VirtualBox Setup
VirtualBox is a general-purpose virtualization software which serves to isolate and create a dedicated communication channel between the lab environments. The installation is as follows:

1. Download the VirtualBox Platform Package found at: https://www.virtualbox.org/wiki/Downloads.

2. Verify the executable's integrity through the File Checksums. In this case, the SHA-256 checksums are found at: https://www.virtualbox.org/download/hashes/7.1.4/SHA256SUMS.

3. Open a PowerShell terminal within the same download's location and execute:
    ```bash
    Get-FileHash <file-name>
    ```

    ![PowerShell Hash Generation](./images/home-lab-02.png)

    Therefore, the hash can be matched with the provided list.

    ![SHA256 List](./images/home-lab-03.png)

4. If the execution requires the Microsoft Visual C++ 2019 Redistributable Package.

    ![C++ Package](./images/home-lab-04.png)

    Go to: https://aka.ms/vs/17/release/vc_redist.x64.exe and install it by clicking next in every step.

5. Install VirtualBox and make sure to mark `Register file associations` in order to open specific VirtualBox file types within the application.

    ![VBox Types](./images/home-lab-05.png)

## Windows Setup