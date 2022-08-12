import { ethers } from "hardhat";
import { expect } from "chai";

import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";

const bytes32 = ethers.utils.formatBytes32String;

const KYC_LIST = "plus";

describe("PolytradeProxy", () => {
  let subject: any;

  let root: SignerWithAddress;

  let userNoKyc: SignerWithAddress; // no KYC
  let userBasic: SignerWithAddress; // KYC but not in plus list
  let userPlus: SignerWithAddress; // KYC plus

  beforeEach(async () => {
    [root, userNoKyc, userBasic, userPlus] = await ethers.getSigners();

    const FractalRegistry = await ethers.getContractFactory("FractalRegistry");
    const registry = await FractalRegistry.deploy(root.address);

    const PolytradeProxy = await ethers.getContractFactory("PolytradeProxy");
    subject = await PolytradeProxy.deploy(registry.address, KYC_LIST);

    await registry.addUserAddress(userBasic.address, bytes32("abc"));
    await registry.addUserToList(bytes32("abc"), "basic");
    await registry.addUserAddress(userPlus.address, bytes32("def"));
    await registry.addUserToList(bytes32("def"), KYC_LIST);
  });

  describe("hasPassedKYC", () => {
    it("is false with no KYC", async () => {
      expect(await subject.hasPassedKYC(userNoKyc.address)).to.equal(false);
    });

    it(`is false with no KYC ${KYC_LIST}`, async () => {
      expect(await subject.hasPassedKYC(userBasic.address)).to.equal(false);
    });

    it(`is true with KYC ${KYC_LIST}`, async () => {
      expect(await subject.hasPassedKYC(userPlus.address)).to.equal(true);
    });
  });
});
