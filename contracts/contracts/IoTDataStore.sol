// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

/**
 * @title IoTDataStore
 * @dev A lightweight smart contract for IoT Data Integrity.
 * Storing only hashes and metadata to reduce gas and maximize scalability.
 */
contract IoTDataStore {
    address public owner;

    struct Device {
        string deviceId;
        string deviceType;
        bool registered;
        uint256 createdAt;
    }

    struct DataRecord {
        bytes32 dataHash; // SHA256 of the data object
        uint256 timestamp;
        string deviceId;
    }

    mapping(string => Device) public devices;
    string[] public registeredDeviceIds;
    DataRecord[] public dataRecords;

    event DeviceRegistered(string indexed deviceId, string deviceType);
    event DataLogged(string indexed deviceId, bytes32 dataHash, uint256 timestamp);

    modifier onlyOwner() {
        require(msg.sender == owner, "Only owner can perform this action");
        _;
    }

    constructor() {
        owner = msg.sender;
    }

    function registerDevice(string memory _deviceId, string memory _deviceType) public onlyOwner {
        require(!devices[_deviceId].registered, "Device already registered");
        
        devices[_deviceId] = Device({
            deviceId: _deviceId,
            deviceType: _deviceType,
            registered: true,
            createdAt: block.timestamp
        });
        
        registeredDeviceIds.push(_deviceId);
        emit DeviceRegistered(_deviceId, _deviceType);
    }

    function logData(string memory _deviceId, bytes32 _dataHash) public onlyOwner {
        require(devices[_deviceId].registered, "Device not registered");
        
        DataRecord memory newRecord = DataRecord({
            dataHash: _dataHash,
            timestamp: block.timestamp,
            deviceId: _deviceId
        });
        
        dataRecords.push(newRecord);
        emit DataLogged(_deviceId, _dataHash, block.timestamp);
    }

    function getDeviceCount() public view returns (uint256) {
        return registeredDeviceIds.length;
    }

    function getRecordCount() public view returns (uint256) {
        return dataRecords.length;
    }

    function getLatestRecord() public view returns (bytes32 hash, uint256 time, string memory devId) {
        require(dataRecords.length > 0, "No records found");
        DataRecord storage record = dataRecords[dataRecords.length - 1];
        return (record.dataHash, record.timestamp, record.deviceId);
    }
}
