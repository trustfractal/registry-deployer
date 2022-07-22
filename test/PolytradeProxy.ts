import { ethers } from "hardhat";
import { expect } from "chai";

import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";

import { bytes32 } from "./helper";

const KYC_LIST = "plus";

describe("PolytradeProxy", () => {
  let subject: any;

  let root: SignerWithAddress;

  let user1: SignerWithAddress; // no KYC
  let user2: SignerWithAddress; // KYC but not in plus list
  let user3: SignerWithAddress; // KYC plus


  beforeEach(async () => {
    [root, user1, user2, user3] = await ethers.getSigners();

    const FractalRegistry = await ethers.getContractFactory("FractalRegistry");
    const registry = await FractalRegistry.deploy(root.address);

    const PolytradeProxy = await ethers.getContractFactory("PolytradeProxy");
    subject = await PolytradeProxy.deploy(registry.address, KYC_LIST);

    await registry.addUserAddress(user2.address, bytes32("abc"));
    await registry.addUserToList(bytes32("abc"), "basic");
    await registry.addUserAddress(user3.address, bytes32("def"));
    await registry.addUserToList(bytes32("def"), KYC_LIST);
  });

  describe("hasPassedKYC", () => {
    it("is false with no KYC", async () => {
      expect(await subject.hasPassedKYC(user1.address)).to.equal(false);
    });

    it(`is false with no KYC ${KYC_LIST}`, async () => {
      expect(await subject.hasPassedKYC(user2.address)).to.equal(false);
    });

    it(`is true with KYC ${KYC_LIST}`, async () => {
      expect(await subject.hasPassedKYC(user3.address)).to.equal(true);
    });
  });
});
