import { ethers } from "hardhat";
import { expect } from "chai";

import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
import { FractalRegistry, SelfServeRegistryOperator } from "../typechain-types";

const LIST = "plus";
const FRACTAL_ID = "0x0123456789abcdef0123456789abcdef0123456789abcdef0123456789abcdef";
const CALL_ADD_SELF_FIRST = "Sender's address must already be in the registry. Call addSelf first.";
const BYTES_32_ZERO = "0x0000000000000000000000000000000000000000000000000000000000000000";

describe("SelfServeRegistryOperator", () => {
  let subject: SelfServeRegistryOperator;
  let registry: FractalRegistry;

  let root: SignerWithAddress;
  let user: SignerWithAddress;

  beforeEach(async () => {
    [root, user] = await ethers.getSigners();

    const FractalRegistry = await ethers.getContractFactory("FractalRegistry");
    const registryRoot = await FractalRegistry.deploy(root.address);

    const SelfServeRegistryOperator = await ethers.getContractFactory("SelfServeRegistryOperator");
    subject = (await SelfServeRegistryOperator.deploy(registryRoot.address)).connect(user);

    await registryRoot.addDelegate(subject.address);
    registry = registryRoot.connect(user);
  });

  it("doesn't allow addSelfToList", () => {
    expect(subject.addSelfToList(LIST)).to.be.revertedWith(CALL_ADD_SELF_FIRST);
  });

  it("doesn't allow removeSelfFromList", () => {
    expect(subject.removeSelfFromList(LIST)).to.be.revertedWith(CALL_ADD_SELF_FIRST);
  });

  describe("addSelf", () => {
    beforeEach(async () => {
      await subject.addSelf(FRACTAL_ID);
    });

    it("adds the sender's fractalID to the registry", async () => {
      expect(await registry.getFractalId(user.address)).to.equal(FRACTAL_ID);
    });

    it("allows removeSelf", async () => {
      await subject.removeSelf();

      expect(await registry.getFractalId(user.address)).to.equal(BYTES_32_ZERO);
    });
  });

  describe("addSelfToList", () => {
    beforeEach(async () => {
      await subject.addSelf(FRACTAL_ID);
      await subject.addSelfToList(LIST);
    });

    it("adds the sender's fractalID to the list", async () => {
      expect(await registry.isUserInList(FRACTAL_ID, LIST)).to.equal(true);
    });

    it("don't add the user to other lists", async () => {
      expect(await registry.isUserInList(FRACTAL_ID, "some other list")).to.equal(false);
    });
  });

  describe("removeSelfFromList", () => {
    beforeEach(async () => {
      await subject.addSelf(FRACTAL_ID);
      await subject.addSelfToList(LIST);
      await subject.removeSelfFromList(LIST);
    });

    it("removes the sender's fractalID from the list", async () => {
      expect(await registry.isUserInList(FRACTAL_ID, LIST)).to.equal(false);
    });
  });
});
