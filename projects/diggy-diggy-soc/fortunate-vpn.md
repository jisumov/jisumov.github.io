---
layout: post
youtube_id: r5NzAksjfDI
music_title: "Fortunate Son - Creedence Clearwater Revival"
---

# Fortunate VPN

## Description
This Let's Defend's alert was triggered from the Rule Name `SOC257 - VPN Connection Detected from Unauthorized Country`, with Event ID **225**. Suspicious signin attempts from Vietnam, were they successful?

## Case Workflow

The case will be handled in accordance with the **NIST 800-61** Incident Response Framework. The following is an overview of the generated alert:

![Alert Overview](../../images/diggy-diggy-soc/fortunate-vpn/001.png){: .popup-img }

Some attributes to highlight are:

1. This is a `Low` severity alert of type `Unauthorized Access`
2. The event was generated on `02-13-2024 02:04:00 [UTC]`
3. The source address (VPN) is `113[.]161[.]158[.]12`
4. The affected user is `monica@letsdefend[.]io`
5. The attempted website is `hxxps[:]//vpn-letsdefend[.]io`

**Note:** Dates follow the US format, and timestamps are presented in UTC. Additionally, all indicators are defanged to prevent accidental interaction.

### Detection & Analysis

The detection occurred once the logs matched the rule `SOC257 - VPN Connection Detected from Unauthorized Country`. In this case, it may be due to the logon was performed from a non-standard business operations location, or due to the source IP is reported in Threat Intelligence feeds.

Now, the analysis may proceed based on the provided `playbook`

![Playbook Step 01](../../images/diggy-diggy-soc/fortunate-vpn/002.png){: .popup-img }

The machine is called `Monica`. Then, it can be searched in the **Endpoint Security** section as:

![Endpoint Security Overview](../../images/diggy-diggy-soc/fortunate-vpn/003.png){: .popup-img }

It turns out that the host is running Windows 10 and the private IP is `172[.]16[.]17[.]163`

Also, there are four telemetry categories: _Processes_, _Network Action_, _Terminal History_ and _Browser History._

- **Processes:** The logs do not suggest a suspicious behavior but normal system processes execution. Also, the earliest event occurred on `02-13-2024 05:25:00 [UTC]`, over 3 hours after the alert generation, which in a context of `near-real-time (NRT)` detection, should have spawned the alert at least around `05:25:00 [UTC]`

    ![Endpoint Processes](../../images/diggy-diggy-soc/fortunate-vpn/004.png){: .popup-img }

- **Network Action:** The list of IPs is overwhelming and may delay the investigation. However, the earliest event does not match the alert date, as the records are from `02-13-2024 05:20:29 [UTC]`, so this tab could be ignored in favor of a better IP lookup approach.

    ![Endpoint Network Action](../../images/diggy-diggy-soc/fortunate-vpn/005.png){: .popup-img }

- **Terminal History:** The observed command-lines look suspicious, as they seem to be related to multiple techniques including `T1082 (System Information Discovery)`, `T1016 (System Network Configuration Discovery)` and `T1087 (Account Discovery)`

    Although, the timestamps are in a scheduled way, meaning that every 15 minutes a command-line is executed, this behavior is inconclusive. In some cases, these scheduled tasks may come from a legitimate administrative setup, or in the worst case scenario, there is an automated malware activity.

    In addition, the commands started their execution on `02-13-2024 08:00:00 [UTC]`, approximately 6 hours later from the alert timestamp.

    ![Endpoint Terminal History](../../images/diggy-diggy-soc/fortunate-vpn/006.png){: .popup-img }

- **Browser History:** The visited URLs are benign and do not represent an anomalous behavior. However, if the user credentials were compromised, the source cannot be determined, as the user's browser history database does not retain incognito session activity, which could have been used for accessing a phishing website.

    One thing to note is the first timestamp on `02-13-2024 07:45:12 [UTC]`, which in a normal business environment coincides with the start of working hours. This leads to a scenario where the previous telemetry could correspond to expected automated system actions, for example in a Cloud PC, where the user could be disconnected, but the machine is still up and running.
    
    ![Endpoint Browser History](../../images/diggy-diggy-soc/fortunate-vpn/007.png){: .popup-img }

Going forward in the playbook, it suggests to verify the provided insights by **Tier 1**. But, there are not notes, so a deeper analysis should be carried on to give a verdict.

![Playbook Step 02](../../images/diggy-diggy-soc/fortunate-vpn/008.png){: .popup-img }

The source IP `113[.]161[.]158[.]12` reputation can be retrieved in the Let's Defend Threat Intelligence feed:

![Threat Intel](../../images/diggy-diggy-soc/fortunate-vpn/009.png){: .popup-img }

As shown in the results, the IP is flagged as `Brute Force` from the `AbuseCH` data source, a platform that tracks cyber threat signals.

Also, in `VirusTotal` the IP is reported as `Malicious` and `Phishing` by `9/94` data sources.

![VirusTotal IP Lookup](../../images/diggy-diggy-soc/fortunate-vpn/010.png){: .popup-img }

When looking in `AbuseIPDB` the IP was reported `4,656` times, it is a `Fixed Line ISP` from the provider `Vietnam Posts and Telecommunications Group`

![AbuseIPDB IP Lookup](../../images/diggy-diggy-soc/fortunate-vpn/011.png){: .popup-img }

In Talos Intelligence, the web reputation is `Unstrusted` and the status of the block lists is `EXPIRED`, which means that in the past the IP was flagged as malicious, but currently it is not. 

This aligns with the recent `Confidense of Abuse` score of `0%` from AbuseIPDB, as the massive reports happened in a time were the IP was performing malicious actions.

![Talos Intelligence IP Lookup](../../images/diggy-diggy-soc/fortunate-vpn/012.png){: .popup-img }

In `IP2Location` the Proxy Data suggests that the IP is `not an Anonymous Proxy`, which means that currently the IP is `not a VPN`

Finally, the location is `Hanoi, Vietnam`, then a question arises: **Is Monica actually trying to access her account from Vietnam?**

![IP2Location IP Lookup](../../images/diggy-diggy-soc/fortunate-vpn/013.png){: .popup-img }

### Containment, Eradication & Recovery

### Post-Incident Activity

## Ticket Documentation

`Case:` SOC257

`What:` VPN Connection Detected from Unauthorized Country

`When:` 02-13-2024 02:04:00 [UTC]

`Who:` monica@letsdefend[.]io

`Why:` Because...

`Additional Notes:`

- bullet 1
- bullet 2

`Actions taken:`

- bullet 3
- bullet 4

`Verdict:` True Positive

## Lessons Learned