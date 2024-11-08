---
layout: default
---

# Home Lab

## Description
Established a foundational home lab environment utilizing VMware to simulate a hypothetical attack scenario between 2 VMs: Kali Linux and Windows. This setup demonstrates essential hardening techniques, custom script implementation within Metasploit, and real-time incident monitoring through Splunk and Sysmon.

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

    ![Windows Hypervisor Platform](./images/home-lab-04.png)

    In addition, select `Use VMware Workstation 17 for Personal Use` to execute VMware without a license.

    ![VMware for Personal Use](./images/home-lab-05.png)

## Windows Setup
Windows 11 is the most recent Operating System developed by Microsoft. This is the host machine which will be targeted by Kali Linux.

1. Download the Windows Installation Media found at: [https://www.microsoft.com/en-us/software-download/windows11](https://www.microsoft.com/en-us/software-download/windows11).

2. During the install process, at the `Choose which media to use` section, select `ISO file`.

    ![ISO File](./images/home-lab-06.png)

3. In VMware, click on `Create a New Virtual Machine`, then the `Typical` configuration and load the `Windows.iso` image.

    ![Windows.iso](./images/home-lab-07.png)

4. At the `Encryption Information` section, choose to encrypt all the files and set a password that you store in a safe place, such a password manager, in the host machine.

    ![Encryption Type](./images/home-lab-08.png)

    Also, select `Store virtual disk as a single file` in the Specify Disk Capacity section.

    ![Disk Capacity](./images/home-lab-09.png)

    **Note:** By default, the 64 GB of storage is not pre-allocated.

5. The summary will show the recommended hardware settings, except for one which must be configured manually, then click on `Customize Hardware...`

    ![Customize Hardware](./images/home-lab-10.png)

    The network adapter is set as `NAT` to share the host's internet connection, and so it will eventually require a Windows Account. Therefore, select `Host-only`, which will be helpful to bypass the remaining setup.

    ![Host-only Network Connection](./images/home-lab-11.png)

6. Finish the machine creation and click on `Power on this virtual machine`.

7. During the configuration process, make sure to select `I don't have a product key`.

    ![Product Key](./images/home-lab-12.png)

    In addition, select Windows 11 Pro, because of the `RDP` feature explained here: [https://learn.microsoft.com/en-us/windows-server/remote/remote-desktop-services/clients/remote-desktop-supported-config](https://learn.microsoft.com/en-us/windows-server/remote/remote-desktop-services/clients/remote-desktop-supported-config).

    ![Windows 11 Pro](./images/home-lab-13.png)

8. During the setup, it will ask to connect to a network. To bypass this step, do `Shift+F10` to open the `CMD` and execute the following command:

    ```bash
    oobe\bypassnro
    ```

    It will restart the machine and enable the `I don't have internet` option, select it and finish the setup.

    ![Network Connection](./images/home-lab-14.png)

9. After the Windows setup, ensure a smoother virtualization experience by going to the `VM` tab and select `Install VMware Tools`.

    ![VMware Tools Plug-in](./images/home-lab-15.png)

    It will load the drive and ask to execute the `Run setup64.exe`, click on it and follow the default options.

    ![VMware Tools Executable](./images/home-lab-16.png)

10. To have internet in the VM, go to the left bar, right click on the machine name and select `Settings...`

    ![VM Settings](./images/home-lab-17.png)

    And, in the `Network Adapter` section choose `NAT` to ensure the VM is not alongside the host network, but has its own through the host `IP`.

    ![NAT Network Connection](./images/home-lab-18.png)

11. Finally, for future recovery of the fresh install, go to the `VM` tab, then click on `Snapshot` and `Take Snapshot...`.

    ![Snapshot Walkthrough](./images/home-lab-19.png)

    Assign a name like "Fresh Install" and click `Take Snapshot`

    ![Snapshot Name](./images/home-lab-20.png)

## Splunk Setup
Splunk is a SIEM to search, monitor and analyze machines' data. This tool will be working on the Windows VM.

1. In the local machine go to: [https://www.splunk.com/en_us/download/splunk-enterprise.html](https://www.splunk.com/en_us/download/splunk-enterprise.html). It requires an account to try the tool for 60 days.
    
    In this case, use a temporary email with: [https://temp-mail.org/](https://temp-mail.org/), which will serve as a workaround everytime Splunk is tested out, and activate the account.

    ![Splunk Account](./images/home-lab-21.png)

2. Now, click on `Download Now` to get the Splunk installer.

    ![Splunk Download Button](./images/home-lab-22.png)

    Also, the integrity of the executable can be checked in the same way as the third step of the VMware Setup. Retrieve the hash by clicking on `More` and then on `Download SHA512 to verify your bits`.

    ![Splunk SHA512](./images/home-lab-23.png)

    It will download a file which can be opened with Notepad, and since the hash algorithm is SHA512, specify that in the PowerShell as follows:

    ```bash
    Get-FileHash <file-name> -Algorithm SHA512
    ```

    ![Splunk Integrity](./images/home-lab-24.png)

3. Execute the Splunk installer and follow the default settings. It will setup Splunk in a `Local System Account`, which is the Windows VM. 

    In case, Splunk needs to oversee data across multiple machines within an Active Directory domain, change to `Domain Account`.

    ![Splunk Local System Account](./images/home-lab-25.png)

4. Splunk is now installed and running on `http://127.0.0.1:8000/`.

    ![Splunk Run](./images/home-lab-26.png)

## Sysmon Setup
Sysmon is a service that monitors and logs system activity. This tool will be working on the Windows VM.

1. In the local machine, go to: [https://learn.microsoft.com/en-us/sysinternals/downloads/sysmon](https://learn.microsoft.com/en-us/sysinternals/downloads/sysmon). Then, click on `Download Sysmon`

    ![Sysmon Download Button](./images/home-lab-27.png)

2. Sysmon can be installed with a configuration file. The one used for future reference is found at: [https://raw.githubusercontent.com/olafhartong/sysmon-modular/refs/heads/master/sysmonconfig.xml](https://raw.githubusercontent.com/olafhartong/sysmon-modular/refs/heads/master/sysmonconfig.xml). Right click and select `Save as`, then keep it on a memorable location.

    ![Sysmon Configuration File](./images/home-lab-28.png)

3. Open the `Downloads` folder and extract the `Sysmon.zip` as follows:

    ![Sysmon Extraction](./images/home-lab-29.png)

    Then, drag and drop the `sysmonconfig.xml` into the generated `sysmon` folder. The content should look like this:

    ![Sysmon Drag and Drop](./images/home-lab-30.png)

4. Open a PowerShell as an administrator within the same folder location and execute the following command to install Sysmon with the configuration file:

    ```json
    .\Sysmon64.exe -i .\sysmonconfig.xml
    ```

    ![Sysmon PowerShell](./images/home-lab-31.png)

    Then, proceed with the default installation process.

5. To check if Sysmon is up and running, press the Windows button to search `Services`, open it and then look for `Sysmon64`.

    ![Sysmon Service](./images/home-lab-32.png)

    Also, at the `Event Viewer`, Sysmon can be found via `Applications and Services Logs` -> `Microsoft` -> `Windows` -> `Sysmon`.

    ![Sysmon Event Viewer](./images/home-lab-33.png)

## Kali Linux Setup
Kali Linux is a Debian-based Linux distribution which is commonly used for penetration testing. Since this scenario is more focused on defense, the VM will be taken from a pre-built configuration.

1. Download the Kali Linux pre-built VM found at: [https://www.kali.org/get-kali/#kali-virtual-machines](https://www.kali.org/get-kali/#kali-virtual-machines).

    ![Kali Linux Pre-built VM](./images/home-lab-34.png)

2. Then, extract the `.7z` into the VMWare folder that hosts all the VMs.

    ![Kali Linux Extraction](./images/home-lab-35.png)

3. Power on the VM and login with the default credentials `kali/kali`.

    ![Kali Linux Login](./images/home-lab-36.png)