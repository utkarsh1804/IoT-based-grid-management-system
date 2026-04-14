# Lightweight Blockchain Framework for IoT Data Management

## 1. Abstract
The "IoT-Ledger" framework addresses the security gap in centralized IoT systems. By leveraging a Hybrid IoT architecture (Off-chain Data + On-chain Hashes), the system ensures high performance for high-frequency IoT data without sacrificing data integrity or decentralized trust.

## 2. Architecture Overview
The system consists of four layers:
1.  **Sensing Layer (Simulated):** A Node.js script that streams real-world appliance energy data from a CSV dataset.
2.  **Middleware (Secure API):** An Express.js server that validates incoming IoT packets, generates a unique SHA-256 hash for each payload, and anchors that hash to the blockchain.
3.  **Persistence Layer (Blockchain + NoSQL):**
    -   **Ethereum (Smart Contracts):** Stores device registrations and immutable data hashes.
    -   **MongoDB:** Stores the raw telemetry data referenced by the blockchain hash.
4.  **Application Layer (Premium Dashboard):** A high-performance React dashboard providing real-time data visualization and cryptographic verification status.

## 3. Security Analysis
-   **Tamper Evidence:** Any modification to the data in MongoDB will invalidate the hash stored on the Ethereum blockchain.
-   **Device Identity:** Only registered `deviceId`s can log data on-chain.
-   **Scalability:** By only storing 32-byte hashes on-chain, gas usage is minimized, and throughput remains high.

## 4. Implementation Details
-   **Solidity:** Using `bytes32` for hashing and `mapping` for efficient device lookup.
-   **API:** REST endpoints for `register` and `log`.
-   **Hashing:** HMAC/SHA256 for integrity verification.

## 5. Preliminary Performance Results
-   **Latency:** Average on-chain transaction confirmation (simulated local) < 100ms.
-   **Throughput:** Capable of handling hundreds of simulated devices simultaneously in parallel.
-   **Scalability:** Linear growth in blockchain storage (32 bytes per hash), significantly reducing costs compared to full-data storage.
