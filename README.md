# Multi-Signature Wallet Lite

A minimalist yet high-security Multi-Signature (Multi-Sig) wallet implementation in Solidity. This contract is designed for teams or individuals who want to distribute control over their crypto assets across multiple private keys.

### Key Features
* **M-of-N Security:** Define $N$ owners and require $M$ approvals to execute any transaction.
* **Transaction Queue:** Propose, view, and confirm transactions in an organized lifecycle.
* **Non-Reentrant:** Built with security guards to prevent common EVM attack vectors.
* **Event Logging:** Full transparency with on-chain events for every proposal and confirmation.

### Workflow
1. **Submit:** Any owner submits a transaction proposal.
2. **Confirm:** Other owners call `confirmTransaction`.
3. **Execute:** Once the threshold is met, anyone can trigger `executeTransaction`.

### Security
This contract uses a "Pull" over "Push" payment pattern and strict access controls to ensure funds cannot be moved without valid consensus.
